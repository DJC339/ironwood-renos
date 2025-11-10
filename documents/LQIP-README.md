# LQIP (Low‑Quality Image Placeholder) for Ironwood Renos

This documents the successful LQIP setup used to avoid the white flash before the hero image loads, plus copy‑paste commands to generate and embed a tiny blurred preview.

## Final Implementation

- CSS variable: `--hero-lqip` in `css/style.css` holds a tiny inline image (data URI).
- Instant paint: `.hero-wrap` uses `background: var(--hero-lqip) center/cover no-repeat;` so the hero area shows immediately.
- Real image: The hero `<img>` still loads eagerly with `fetchpriority="high"`, responsive `srcset/sizes`, and overlays the LQIP.
- Smooth reveal: A light JS enhancement adds `is-loaded` to the hero image to fade opacity from 0 → 1 when ready.
- Stylesheet loading (stable): We use a safe warm‑cache pattern:
  - `<link rel="preload" as="style" href="css/style.css">` followed by
  - `<link rel="stylesheet" href="css/style.css">`
  This avoids the onload‑swap flicker while still warming the cache.

Files involved
- `css/style.css`: Defines `--hero-lqip` and the `.js .hero-img` fade‑in rules.
- `index.html`: Adds the `.hero-img` class to the hero `<img>`, sets the `.js` class on `<html>`, and includes the safe preload + normal stylesheet links.
- `js/main.js`: Adds `is-loaded` when the image is decoded (and fail‑open on error).

## Generate a Real LQIP (WebP) with sharp‑cli

Run in PowerShell at the project root:

1. Create a temp folder
```
New-Item -ItemType Directory -Path tmp -Force | Out-Null
```

2. Generate tiny blurred WebP into `tmp/`
```
npx --yes sharp-cli -i "images/ironwood-renos-banner.webp" -o "tmp" -f webp -q 35 -- resize 80 blur 2
```

3. Rename output to a predictable name
```
Move-Item -Force "tmp/ironwood-renos-banner.webp" "tmp/lqip.webp"
```

4. Convert to Base64 and inject into CSS
```
$bytes = [IO.File]::ReadAllBytes("tmp/lqip.webp")
$dataUri = "data:image/webp;base64," + [Convert]::ToBase64String($bytes)
$cssPath = "css/style.css"
$css = Get-Content -Raw $cssPath
$pattern = '(--hero-lqip:\s*url\(")(.+?)("\);)'
$replacement = '${1}' + $dataUri + '${3}'
$css2 = [regex]::Replace($css, $pattern, $replacement, [System.Text.RegularExpressions.RegexOptions]::Singleline)
Set-Content -Path $cssPath -Value $css2
```

Optional: copy to clipboard
```
$dataUri | Set-Clipboard
```

5. Verify & test
- Confirm `--hero-lqip` now contains a long `data:image/webp;base64,...` in `css/style.css`.
- Hard refresh (or private window): immediate blurred preview → smooth fade into full banner.

## Notes & Troubleshooting

- Target size: 1–3 KB. If larger, try `-q 25` or `resize 60`.
- sharp vs sharp‑cli: if `npx sharp --help` fails, use `sharp-cli` and put pipeline commands after `--` as shown above.
- Quotes: Use straight quotes ("), not curly quotes.
- Dev server flicker: Live Server + disabled cache can exaggerate flashes. The safe preload + normal link pattern prevents FOUC on normal loads.
- Cleanup: You can delete `tmp/` after verifying.

## Rollback

To restore the original gradient placeholder, replace the `--hero-lqip` variable in `css/style.css` with the SVG value previously used and save.

## Project-Specific Commands (Working Set)

These are the exact commands that worked for this project:

```
npx --yes sharp-cli -i "images/ironwood-renos-banner.webp" -o "tmp" -f webp -q 35 -- resize 80
Move-Item -Force "tmp/ironwood-renos-banner.webp" "tmp/lqip.webp"
$bytes = [IO.File]::ReadAllBytes("tmp/lqip.webp")
$dataUri = "data:image/webp;base64," + [Convert]::ToBase64String($bytes)
$cssPath = "css/style.css"
$css = Get-Content -Raw $cssPath
$pattern = '(--hero-lqip:\s*url\(")(.+?)("\);)'
$replacement = '${1}' + $dataUri + '${3}'
$css2 = [regex]::Replace($css, $pattern, $replacement, [System.Text.RegularExpressions.RegexOptions]::Singleline)
Set-Content -Path $cssPath -Value $css2
```

Note: We omitted `blur 2` because the 80px resize at quality 35 produced a suitably soft placeholder by itself. Add `blur 2` after `resize 80` if you prefer a more diffused look.

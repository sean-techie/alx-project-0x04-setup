if (Test-Path components/layouts/Layout.tsx) {
    if ((Get-Item components/layouts/Layout.tsx).Length -gt 0) {
        "Layout.tsx exists and is not empty"
    } else {
        "Layout.tsx exists but is empty"
    }
} else {
    "Layout.tsx does not exist"
}

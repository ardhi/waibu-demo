async function waibuMpaThemefterInjectCss ({ items, req }) {
  const base = req.darkMode ? 'github-dark' : 'github'
  items.push(`waibuExtra.virtual:/highlightjs/styles/${base}.min.css`)
}

export default waibuMpaThemefterInjectCss

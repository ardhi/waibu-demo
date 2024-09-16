async function waibuMpaThemefterInjectCss ({ items, reply }) {
  const base = reply.request.darkMode ? 'github-dark' : 'github'
  items.push(`waibuExtra.virtual:/highlightjs/styles/${base}.min.css`)
}

export default waibuMpaThemefterInjectCss

async function waibuMpaThemefterInjectCss ({ items, reply }) {
  const { routePath } = this.app.waibu
  const base = reply.request.darkMode ? 'github-dark' : 'github'
  items.push(routePath(`waibuExtra.virtual:/highlightjs/styles/${base}.min.css`))
}

export default waibuMpaThemefterInjectCss

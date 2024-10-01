async function waibuMpaThemefterInjectCss ({ items, req }) {
  const { get } = this.app.bajo.lib._
  const reqNs = get(req, 'routeOptions.config.ns')
  if (reqNs === 'waibuDemo') {
    const base = req.darkMode ? 'github-dark' : 'github'
    items.push(`waibuExtra.virtual:/highlightjs/styles/${base}.min.css`)
  }
}

export default waibuMpaThemefterInjectCss

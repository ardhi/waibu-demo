async function waibuMpaThemefterInjectScripts ({ items }) {
  const { routePath } = this.app.waibu
  const { map } = this.app.bajo.lib._
  items.push(...map([
    'waibuExtra.virtual:/holderjs/holder.min.js',
    'waibuExtra.virtual:/highlightjs/highlight.min.js',
    'waibuExtra.virtual:/alpinejs/cdn.min.js'
  ], item => routePath(item)))
}

export default waibuMpaThemefterInjectScripts

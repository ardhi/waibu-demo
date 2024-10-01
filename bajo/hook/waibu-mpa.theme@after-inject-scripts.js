async function waibuMpaThemefterInjectScripts ({ items }) {
  items.push(
    'waibuExtra.virtual:/holderjs/holder.min.js',
    'waibuExtra.virtual:/highlightjs/highlight.min.js',
    'waibuExtra.virtual:/masonry/masonry.pkgd.min.js'
  )
}

export default waibuMpaThemefterInjectScripts

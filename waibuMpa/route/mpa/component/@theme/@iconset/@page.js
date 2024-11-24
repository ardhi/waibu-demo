import path from 'path'

const page = {
  method: 'GET',
  handler: async function (req, reply) {
    const { importPkg } = this.app.bajo
    const { fs } = this.app.bajo.lib
    const { escape } = this.app.waibu
    const { map, pick } = this.app.bajo.lib._
    const { themes: allThemes, iconsets: allIconsets, iconsetMappings } = this.app.waibuMpa
    const fastGlob = await importPkg('fast-glob')
    req.theme = req.params.theme
    req.iconset = req.params.iconset
    const themes = map(allThemes, t => pick(t, ['name', 'framework']))
    const iconsets = map(allIconsets, t => pick(t, ['name']))
    const pattern = `${this.dir.pkg}/waibuMpa/template/mpa/component/*.html`
    const files = fastGlob.globSync(pattern)
    const pages = map(files, f => path.basename(f, '.html')).sort()
    let source = ''
    const srcFile = pattern.replace('*', req.params.page)
    if (fs.existsSync(srcFile)) source = escape(fs.readFileSync(srcFile, 'utf8'))
    const icons = map(iconsetMappings, 'name').sort()
    const page = { layout: 'waibuDemo.layout:/component.html' }
    const params = { themes, iconsets, icons, pages, source, page }
    return await reply.view(`waibuDemo.template:/mpa/component/${req.params.page}.html`, params)
  }
}

export default page

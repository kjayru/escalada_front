/**
 * Nitro server plugin: inyecta el loader estático en cada respuesta HTML
 * antes de que Vue hidrate la página. Aparece INMEDIATAMENTE al cargar
 * cualquier URL, sin esperar JavaScript.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    const loaderHtml = `<div id="__page-loader-static" style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;overflow:hidden;">` +
      `<div id="__pls-top" style="position:absolute;top:0;left:0;right:0;height:50%;background:#ffffff;"></div>` +
      `<div id="__pls-bot" style="position:absolute;bottom:0;left:0;right:0;height:50%;background:#ffffff;"></div>` +
      `<div id="__pls-logo" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1;">` +
        `<img src="/images/preloader2.svg" alt="" aria-hidden="true" style="width:300px;max-width:75vw;height:auto;display:block;" />` +
      `</div>` +
    `</div>`

    if (Array.isArray(html.body)) {
      html.body.unshift(loaderHtml)
    } else if (typeof html.body === 'string') {
      html.body = loaderHtml + html.body
    }
  })
})

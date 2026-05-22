// Se ejecuta solo en el cliente (.client.ts)
// El body es el contenedor real del scroll (html+body tienen h-full + overflow-x:hidden)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  })
})

export default defineNuxtPlugin((nuxtApp) => {
  const { lockCount, show, hide } = usePageLoader()
  let isFirstLoad = true

  const maybeHide = () => {
    if (lockCount.value === 0) hide()
  }

  nuxtApp.hook('app:suspense:resolve', () => {
    setTimeout(maybeHide, 350)
  })

  nuxtApp.hook('page:start', () => {
    show()
    if (!isFirstLoad) {
      document.body.classList.remove('loader-revealed')
    }
  })

  nuxtApp.hook('page:finish', () => {
    setTimeout(maybeHide, 350)
    if (isFirstLoad) {
      isFirstLoad = false
    } else {
      // Re-trigger hero animation after the SPA overlay fades out
      // overlay: 350ms delay + 500ms fade = 850ms total
      setTimeout(() => {
        document.body.classList.add('loader-revealed')
      }, 700)
    }
  })
})

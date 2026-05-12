export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const path = event.context.params?.path || ''
  
  // Construir la URL completa al storage del API
  const apiUrl = `${config.public.apiBase}/storage/${path}`
  
  try {
    // Hacer fetch al API backend
    const response = await $fetch(apiUrl, {
      method: 'GET',
      // @ts-ignore
      responseType: 'arrayBuffer',
    })
    
    // Determinar content-type basado en la extensión
    const ext = path.split('.').pop()?.toLowerCase()
    const contentTypes: Record<string, string> = {
      'mp4': 'video/mp4',
      'webm': 'video/webm',
      'mov': 'video/quicktime',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'webp': 'image/webp',
    }
    
    const contentType = contentTypes[ext || ''] || 'application/octet-stream'
    
    // Configurar headers de respuesta
    setResponseHeaders(event, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000',
    })
    
    return response
  } catch (error) {
    console.error('Error proxying storage file:', error)
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }
})

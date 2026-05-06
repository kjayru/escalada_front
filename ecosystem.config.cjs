module.exports = {
  apps: [
    {
      name: 'escalada-nuxt',
      port: 3000,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env_production: {
        NODE_ENV: 'production',
        NUXT_PUBLIC_API_BASE: 'https://admin.cobosdev.com',
        NITRO_PORT: 3000,
        NITRO_HOST: '0.0.0.0'
      },
      env_development: {
        NODE_ENV: 'development',
        NUXT_PUBLIC_API_BASE: 'https://escaladapro-api.test',
        NITRO_PORT: 3000,
        NITRO_HOST: '127.0.0.1'
      }
    }
  ]
}

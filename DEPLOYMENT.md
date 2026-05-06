# Deployment con PM2

## Configuración del servidor

### 1. Build del proyecto
```bash
npm run build
```

### 2. Deployment con PM2

#### Iniciar/Reiniciar en producción
```bash
pm2 start ecosystem.config.cjs --env production
# o para actualizar
pm2 reload ecosystem.config.cjs --env production
```

#### Verificar variables de entorno
```bash
pm2 show escalada-nuxt
pm2 env 1
```

#### Comandos útiles
```bash
# Ver logs
pm2 logs escalada-nuxt

# Ver status
pm2 status

# Reiniciar
pm2 restart escalada-nuxt

# Detener
pm2 stop escalada-nuxt

# Eliminar
pm2 delete escalada-nuxt

# Guardar configuración para auto-inicio
pm2 save
pm2 startup
```

## Variables de entorno

El archivo `ecosystem.config.cjs` define las siguientes variables:

### Producción
- `NUXT_PUBLIC_API_BASE`: https://admin.cobosdev.com
- `NODE_ENV`: production
- `NITRO_PORT`: 3000
- `NITRO_HOST`: 0.0.0.0

### Desarrollo
- `NUXT_PUBLIC_API_BASE`: https://escaladapro-api.test
- `NODE_ENV`: development
- `NITRO_PORT`: 3000
- `NITRO_HOST`: 127.0.0.1

## Nginx Configuration

```nginx
server {
    listen 80;
    server_name escaladalibre.org www.escaladalibre.org;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Troubleshooting

### Las imágenes no cargan
Verificar que `NUXT_PUBLIC_API_BASE` apunta a la URL correcta de la API:
```bash
pm2 env 1 | grep NUXT_PUBLIC_API_BASE
```

### Cambiar variables en caliente
Si necesitas cambiar una variable sin recrear el archivo ecosystem:
```bash
pm2 restart escalada-nuxt --update-env
```

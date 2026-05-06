#!/bin/bash

# Script de deployment para Nuxt + PM2
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando deployment de EscaladaPro Frontend..."

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json${NC}"
    echo "Ejecuta este script desde el directorio raíz del proyecto"
    exit 1
fi

# 2. Actualizar código desde Git (opcional, comentado por defecto)
# echo -e "${BLUE}📦 Actualizando código desde Git...${NC}"
# git pull origin main

# 3. Instalar dependencias
echo -e "${BLUE}📦 Instalando dependencias...${NC}"
npm install --production=false

# 4. Build del proyecto
echo -e "${BLUE}🔨 Compilando proyecto...${NC}"
npm run build

# 5. Verificar que el build fue exitoso
if [ ! -d ".output" ]; then
    echo -e "${RED}❌ Error: El build falló, no se encontró el directorio .output${NC}"
    exit 1
fi

# 6. Detener PM2 si está corriendo
echo -e "${BLUE}🛑 Deteniendo aplicación anterior...${NC}"
pm2 delete escalada-nuxt 2>/dev/null || true

# 7. Iniciar con PM2
echo -e "${BLUE}🚀 Iniciando aplicación con PM2...${NC}"
pm2 start ecosystem.config.cjs --env production

# 8. Guardar configuración de PM2
echo -e "${BLUE}💾 Guardando configuración de PM2...${NC}"
pm2 save

# 9. Verificar status
echo -e "${BLUE}✅ Verificando status...${NC}"
pm2 status

# 10. Mostrar logs
echo -e "${GREEN}✨ Deployment completado!${NC}"
echo -e "${BLUE}📝 Últimas líneas del log:${NC}"
pm2 logs escalada-nuxt --lines 20 --nostream

echo ""
echo -e "${GREEN}🎉 Deployment exitoso!${NC}"
echo -e "${BLUE}Comandos útiles:${NC}"
echo "  - Ver logs: pm2 logs escalada-nuxt"
echo "  - Ver status: pm2 status"
echo "  - Reiniciar: pm2 restart escalada-nuxt"
echo "  - Ver env: pm2 env 1 | grep NUXT"

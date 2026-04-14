# Configuración de Google Analytics

## Paso 1: Crear cuenta de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Comenzar a medir" o "Admin"
4. Crea una nueva propiedad:
   - Nombre: "KOSTUME Website"
   - Zona horaria: Argentina
   - Moneda: ARS o USD
5. Selecciona "Web" como plataforma
6. Introduce la URL: `https://kostumeweb.net`
7. Copia el **ID de medición** (formato: G-XXXXXXXXXX)

## Paso 2: Configurar la variable de entorno

### Para desarrollo local:
Crea un archivo `.env.local` en la raíz del proyecto:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Para producción (cPanel):
Durante el build, asegúrate de que la variable esté disponible:

```bash
export NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
npm run build
```

O crea un archivo `.env.production` antes de hacer el build:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Paso 3: Build y deploy

```bash
npm run build
```

Esto generará la carpeta `out/` que subirás a tu cPanel.

## ¿Qué se rastrea automáticamente?

- **Visitas a páginas**: Cada vez que alguien entra a tu sitio
- **Sesiones**: Cuánto tiempo permanece cada usuario
- **Dispositivos**: Desktop, móvil, tablet
- **Ubicación geográfica**: País, ciudad
- **Fuentes de tráfico**: Google, directo, redes sociales, etc.

## Rastrear clics específicos

Para rastrear clics en botones o elementos específicos, importa las funciones de analytics:

```tsx
import { trackClick, trackExternalLink, trackProductClick } from '@/app/lib/analytics'

// En un botón
<button onClick={() => trackClick('Shop Now Button', 'button')}>
  Shop Now
</button>

// En un link a producto
<a
  href="/product/123"
  onClick={() => trackProductClick('123', 'Nombre del Producto')}
>
  Ver Producto
</a>

// En un link externo
<a
  href="https://instagram.com/kostume"
  onClick={() => trackExternalLink('https://instagram.com/kostume', 'Instagram')}
>
  Instagram
</a>
```

## Ver estadísticas

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad "KOSTUME Website"
3. En el menú lateral verás:
   - **Informes > Tiempo real**: Visitantes en este momento
   - **Informes > Adquisición**: De dónde vienen los usuarios
   - **Informes > Interacción**: Qué páginas visitan
   - **Informes > Eventos**: Clics y acciones específicas

## Notas importantes

- Los datos pueden tardar 24-48 horas en aparecer completamente
- El modo "Tiempo real" muestra datos inmediatos
- Google Analytics es completamente gratuito
- Cumple con GDPR y regulaciones de privacidad

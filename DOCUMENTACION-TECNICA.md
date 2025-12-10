# Documentación Técnica - Sitio Web KOSTÜME

## Índice
1. [Visión General](#visión-general)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Componentes Principales](#componentes-principales)
4. [Sistema de Datos](#sistema-de-datos)
5. [Gestión de Estado](#gestión-de-estado)
6. [Flujo de Navegación](#flujo-de-navegación)
7. [Configuración y Deployment](#configuración-y-deployment)
8. [Optimizaciones de Performance](#optimizaciones-de-performance)

---

## Visión General

**KOSTÜME** es una marca de moda argentina que vende ropa ready-to-wear y accesorios. Este sitio web funciona como su página de destino principal con experiencias de compra específicas por región para clientes de Argentina y todo el mundo.

### Características Principales
- **Experiencia regional**: Contenido específico para Argentina y Worldwide
- **Diseño responsivo**: Optimizado para móvil y desktop
- **Multilingüe**: Soporte para español e inglés
- **Exportación estática**: Sin características del lado del servidor
- **Animaciones fluidas**: Implementadas con Framer Motion

---

## Arquitectura del Proyecto

### Stack Tecnológico
- **Framework**: Next.js 13.4.7 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: React Icons
- **Deployment**: Exportación estática

### Estructura de Directorios
```
app/
├── components/          # Componentes reutilizables
├── context/            # Context API para estado global
├── data/               # Archivos de datos estáticos
├── home/               # Página principal
├── globals.css         # Estilos globales
├── layout.tsx          # Layout raíz
├── page.tsx            # Página de selección de región
└── providers.tsx      # Proveedores de contexto

public/
├── img/                # Imágenes optimizadas
├── fonts/              # Fuentes personalizadas
├── locales/            # Archivos de traducción
└── video/              # Videos
```

---

## Componentes Principales

### 1. **Página de Selección de Región** (`app/page.tsx`)
**Propósito**: Primera pantalla que permite al usuario elegir entre Argentina o Worldwide.

**Funcionalidad**:
- Detección de visitas previas usando localStorage
- Redirección automática después de 5 visitas
- Animaciones de entrada con Framer Motion
- Almacenamiento de preferencia regional

**Estados**:
- `visitCount`: Contador de visitas
- `region`: Región seleccionada

### 2. **Página Principal** (`app/home/page.tsx`)
**Propósito**: Landing page principal con toda la experiencia de la marca.

**Componentes Integrados**:
- `Marquee`: Banner de promociones
- `Header`: Navegación principal
- `Banner`: Imagen hero principal
- `Gallery`: Galería de productos
- `Footer`: Información de contacto
- `PopupModal`: Modal de registro

**Funcionalidad**:
- Detección automática de tipo de dispositivo
- Modal de registro con delay de 2 segundos
- Datos estructurados JSON-LD para SEO
- Animaciones de página completa

### 3. **Header** (`app/components/Header.tsx`)
**Propósito**: Navegación principal con menús desplegables.

**Características**:
- **Responsive**: Layout diferente para móvil y desktop
- **Menú hamburguesa**: Para dispositivos móviles
- **Dropdowns**: Menús desplegables con hover/click
- **Toggle de región**: Cambio entre Argentina/Worldwide
- **Animaciones**: Transiciones suaves entre estados

**Estados**:
- `nav`: Estado del menú móvil
- `activeMenu`: Menú activo en desktop
- `submenuVisible`: Visibilidad del submenú
- `clickedOnce`: Control de doble click en móvil

### 4. **Gallery** (`app/components/Gallery.tsx`)
**Propósito**: Galería de productos con diferentes layouts según dispositivo.

**Funcionalidad**:
- **Layout adaptativo**: 2 cards grandes + 3 pequeñas en desktop, 1 columna en móvil
- **Imágenes optimizadas**: Diferentes sets para desktop/móvil
- **Enlaces dinámicos**: URLs construidas según región
- **Animaciones**: Staggered animations para entrada
- **Lazy loading**: Carga diferida de imágenes

**Props**:
- `link`: URL base del e-commerce
- `location`: Región ('ar' | 'us')

### 5. **Banner** (`app/components/Banner.tsx`)
**Propósito**: Banner principal con imagen hero.

**Características**:
- **Responsive**: Imágenes diferentes para desktop/móvil
- **Enlaces externos**: Redirección al e-commerce
- **Animaciones**: Hover effects y transiciones
- **Aspect ratios**: Optimizado para diferentes dispositivos

### 6. **Footer** (`app/components/Footer.tsx`)
**Propósito**: Información de contacto y enlaces importantes.

**Secciones**:
- **Contact**: Email y WhatsApp
- **Info**: About Us y FAQ
- **Social Media**: Instagram y TikTok
- **Store**: Dirección física y teléfono
- **Newsletter**: Suscripción por email

**Layout**:
- **Desktop**: Grid de 8 columnas + newsletter
- **Mobile**: Accordion expandible

### 7. **PopupModal** (`app/components/PopupModal.tsx`)
**Propósito**: Modal de registro con oferta de descuento.

**Funcionalidad**:
- **Multilingüe**: Contenido en español e inglés
- **Enlaces dinámicos**: URLs según región
- **Animaciones**: Entrada/salida con spring physics
- **Overlay**: Click fuera para cerrar

### 8. **Newsletter** (`app/components/Newsletter.tsx`)
**Propósito**: Suscripción al newsletter.

**Características**:
- **Integración Tienda Nube**: URLs específicas por región
- **Validación**: Email requerido
- **Estados**: Loading y mensajes de confirmación
- **Redirección**: A página de registro del e-commerce

---

## Sistema de Datos

### 1. **Galería de Imágenes** (`app/data/gallery.tsx`)
**Estructura**:
```typescript
interface ImageProps {
  src: string;
  title: string;
  link: string;
  type: "image" | "video";
  width: number;
  height: number;
  aspectRatio: string;
}
```

**Sets de Imágenes**:
- **Desktop**: 12 productos con aspect ratio 4:5
- **Mobile**: 12 productos optimizados para móvil

**Productos Incluidos**:
- Rain Capsule, Denim, Eyewear
- Smooth Boots, Insomniak Jacket
- Reckoner Dress, Objects Sweatshirt
- Outro Mask, Hasenkamp Pants, Zars Sunglasses

### 2. **Banners** (`app/data/banner.tsx`)
**Colecciones**:
- **Hero**: Imagen principal de la página
- **Collection1**: Rain Capsule banner
- **Collection2**: Swimwear banner

**Especificaciones**:
- **Desktop**: 1800×900px (16:9)
- **Mobile**: 800×600px (4:3)

### 3. **Menús** (`app/data/es-menu.tsx`, `app/data/en-menu.tsx`)
**Estructura**:
```typescript
interface MenuItemProps {
  href: string;
  label: string;
  subcategories: string[];
  links: string[];
}
```

**Categorías Principales**:
- #49AW25, #50SS26
- DENIM, RAIN CAPSULE
- VER TODO / VIEW ALL (con subcategorías)

### 4. **Footer** (`app/data/footer.tsx`)
**Secciones**:
- Contact, Info, Social Media, Store
- Enlaces a redes sociales y contacto

---

## Gestión de Estado

### **LocationContext** (`app/context/LocationContext.tsx`)
**Propósito**: Gestión global del estado de región e idioma.

**Estado**:
```typescript
interface LocationContextProps {
  region: Region;           // "Argentina" | "Worldwide"
  language: Language;      // "es" | "en"
  setRegion: (region: Region) => void;
}
```

**Funcionalidad**:
- **Persistencia**: Almacenamiento en localStorage
- **Sincronización**: Entre pestañas del navegador
- **Auto-sync**: Idioma cambia automáticamente con región
- **Inicialización**: Carga desde localStorage al montar

**Hooks**:
- `useLocation()`: Acceso al contexto
- `useEffect`: Sincronización con localStorage

---

## Flujo de Navegación

### 1. **Primera Visita**
```
Usuario → Página de Selección → Selecciona Región → 
localStorage.setItem('region') → Redirección a /home/
```

### 2. **Visitas Subsecuentes**
```
Usuario → Página de Selección → Detecta región en localStorage → 
Incrementa visitCount → Redirección automática a /home/
```

### 3. **Página Principal**
```
/home/ → Carga componentes → Detecta región → 
Carga contenido específico → Muestra modal después de 2s
```

### 4. **Navegación del Header**
```
Click en menú → Construye URL → Redirección externa a e-commerce
```

### 5. **Galería de Productos**
```
Click en producto → Construye URL según región → 
Redirección a producto específico en e-commerce
```

---

## Configuración y Deployment

### **Next.js Config** (`next.config.js`)
```javascript
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  output: 'export',           // Exportación estática
  trailingSlash: true,       // URLs con trailing slash
  images: { unoptimized: true } // Imágenes sin optimización
};
```

### **Tailwind Config** (`tailwind.config.js`)
**Extensiones**:
- `extraxs`: Tamaño de fuente personalizado (10px)
- `maxHeight`: Utilidades de altura máxima
- `colors`: Color negro personalizado (#070707)

### **TypeScript Config** (`tsconfig.json`)
**Configuración**:
- Target: ES5
- Module: ESNext
- JSX: Preserve
- Paths: `@/*` → `./*`

### **SEO y Metadata** (`app/layout.tsx`)
**Implementación**:
- Open Graph completo
- Twitter Cards
- Meta tags estructurados
- JSON-LD schema
- Sitemap y robots.txt

---

## Optimizaciones de Performance

### **Imágenes**
- **Aspect ratios**: Optimizados para cada dispositivo
- **Lazy loading**: Carga diferida para imágenes below-the-fold
- **Sizes**: Atributos responsive para diferentes viewports
- **Quality**: 85% para balance calidad/tamaño

### **Animaciones**
- **Framer Motion**: Optimizado con `AnimatePresence`
- **Staggered animations**: Entrada escalonada de elementos
- **Hardware acceleration**: Transform y opacity para mejor performance
- **Reduced motion**: Respeto a preferencias de accesibilidad

### **Código**
- **Code splitting**: Automático con Next.js
- **Tree shaking**: Eliminación de código no utilizado
- **Static export**: Sin JavaScript del lado del servidor
- **Preconnect**: Conexiones anticipadas a dominios externos

### **Caching**
- **localStorage**: Persistencia de preferencias
- **Static assets**: Servidos desde CDN
- **Browser caching**: Headers optimizados

---

## Consideraciones de Accesibilidad

### **Semántica HTML**
- Estructura semántica correcta
- Roles ARIA apropiados
- Navegación por teclado
- Contraste de colores adecuado

### **SEO**
- Meta tags completos
- Estructura de headings correcta
- Alt text en imágenes
- Schema.org markup

### **Performance**
- Core Web Vitals optimizados
- Lazy loading implementado
- Imágenes responsive
- Animaciones optimizadas

---

## Estructura de URLs Externas

### **E-commerce Integration**
- **Argentina**: `https://eshop.kostumeweb.net/ar/`
- **Worldwide**: `https://eshop.kostumeweb.net/us/`

### **Productos Específicos**
- Rain Capsule: `/rain-capsule/`
- Denim: `/denim/`
- Eyewear: `/ver-todo/gafas1/` (ES) / `/eyewear/` (EN)
- Special: `/50ss26` (con prefijo regional)

### **Redes Sociales**
- Instagram: `@kostumeba`
- TikTok: `@kostumeba`
- WhatsApp: `+54 9 11 5350 5298`

---

Esta documentación proporciona una visión completa de la arquitectura, componentes y funcionalidad del sitio web KOSTÜME, facilitando el mantenimiento y futuras mejoras del proyecto.

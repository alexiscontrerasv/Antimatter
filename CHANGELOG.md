# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [0.5.0] - 2025-12-07

### ✨ Añadido

- **Página Single de Blog Post (`blog-post.html`)**
  - Template completo para artículos individuales del blog
  - Breadcrumb navigation para mejor UX
  - Header del artículo con categoría, fecha y título destacado
  - Contenido estructurado con títulos, párrafos y listas
  - Botones de compartir en redes sociales (Twitter, LinkedIn, Facebook)
  - Sección de artículos relacionados
  - Meta tags Open Graph para compartir en redes sociales
  - Estructura semántica HTML5 para SEO

- **Página 404 (`404.html`)**
  - Página de error personalizada y amigable
  - Diseño consistente con el resto del sitio
  - Código de error 404 destacado visualmente
  - Enlaces útiles para navegación
  - Botones de acción para volver al inicio o ir al blog
  - Mensaje claro y profesional

- **Página Acerca de (`acerca-de.html`)**
  - Historia de la empresa y misión
  - Visión y valores corporativos
  - Grid de valores con iconos SVG
  - Información sobre el ecosistema Prende Tu Web
  - CTA para comenzar a usar el servicio
  - Diseño profesional y estructurado

- **Estilos CSS para nuevas páginas**
  - `.breadcrumb` y `.breadcrumb-section` para navegación de migas
  - `.blog-post-header`, `.blog-post-content`, `.blog-post-text` para single post
  - `.share-buttons` y `.share-button` para botones de compartir
  - `.related-grid` y `.related-card` para artículos relacionados
  - `.error-section`, `.error-code`, `.error-content` para página 404
  - `.about-content`, `.about-section`, `.values-grid`, `.value-card` para página acerca de
  - Responsive design completo para todas las nuevas páginas

### 🔄 Cambiado

- **Enlaces en `blog.html`**
  - Actualizado enlace del primer artículo para apuntar a `blog-post.html`
  - Preparado para futuros artículos individuales

### 📱 Páginas Implementadas

- ✅ `index.html` - Página principal (completa)
- ✅ `planes.html` - Página de planes y precios
- ✅ `contacto.html` - Página de contacto
- ✅ `blog.html` - Página de blog (lista de artículos)
- ✅ `blog-post.html` - Single post del blog (nueva)
- ✅ `terminos.html` - Términos de servicio
- ✅ `privacidad.html` - Política de privacidad
- ✅ `404.html` - Página de error (nueva)
- ✅ `acerca-de.html` - Página acerca de (nueva)

### 🎨 Características de Diseño

- **Consistencia visual**: Todas las nuevas páginas mantienen el mismo estilo y efectos
- **Breadcrumb navigation**: Mejora la navegación y UX en single posts
- **Social sharing**: Botones de compartir integrados en artículos del blog
- **Artículos relacionados**: Sistema de recomendación de contenido relacionado
- **Error handling**: Página 404 profesional y útil
- **Brand storytelling**: Página acerca de con valores y misión claros

---

## [0.4.0] - 2025-12-07

### ✨ Añadido

- **Página de Planes (`planes.html`)**
  - Página dedicada con detalles completos de los tres planes
  - Información explícita de características por plan
  - Diseño consistente con la página principal
  - CTA para contacto desde cada plan
  
- **Página de Contacto (`contacto.html`)**
  - Formulario de contacto funcional con validación HTML5
  - Información de contacto (email, teléfono, oficina)
  - Diseño responsive con grid de dos columnas
  - Iconos SVG para métodos de contacto
  
- **Página de Blog (`blog.html`)**
  - Estructura básica de blog con grid de artículos
  - 6 artículos de ejemplo con categorías y fechas
  - Diseño de tarjetas con efectos hover
  - Sistema de categorías y fechas de publicación
  
- **Página de Términos de Servicio (`terminos.html`)**
  - Términos completos y legales del servicio
  - Estructura semántica con secciones numeradas
  - Contenido legal básico para SaaS
  - Enlaces internos a otras páginas
  
- **Página de Política de Privacidad (`privacidad.html`)**
  - Política de privacidad completa y detallada
  - Información sobre recopilación y uso de datos
  - Derechos del usuario y contacto
  - Cumplimiento con estándares de privacidad

- **Estilos CSS para páginas secundarias**
  - `.page-hero` para hero sections de páginas secundarias
  - `.contact-grid`, `.contact-form`, `.contact-info` para página de contacto
  - `.blog-grid`, `.blog-card` para página de blog
  - `.legal-content`, `.legal-section` para páginas legales
  - Responsive design para todas las nuevas páginas

### 🔄 Cambiado

- **Enlaces del footer en `index.html`**
  - Actualizados enlaces de "Recursos" y "Legal" para apuntar a las nuevas páginas
  - Enlaces funcionales a blog, contacto, términos y privacidad
  - Consistencia en la navegación del sitio

- **Navegación del navbar**
  - Enlaces actualizados en todas las páginas secundarias
  - Navegación consistente entre páginas
  - Logo del navbar enlaza correctamente a `index.html`

### 📱 Páginas Implementadas

- ✅ `index.html` - Página principal (completa)
- ✅ `planes.html` - Página de planes y precios (nueva)
- ✅ `contacto.html` - Página de contacto (nueva)
- ✅ `blog.html` - Página de blog (nueva)
- ✅ `terminos.html` - Términos de servicio (nueva)
- ✅ `privacidad.html` - Política de privacidad (nueva)

### 🎨 Características de Diseño

- **Consistencia visual**: Todas las páginas secundarias mantienen el mismo estilo y estructura
- **Hero sections**: Hero unificado para páginas secundarias con título y descripción
- **Efectos de burbujas**: Efecto de burbujas interactivas en todas las páginas
- **Responsive**: Diseño completamente responsive para móviles, tablets y desktop

---

## [0.3.0] - 2025-12-07

### ✨ Añadido

- **Efecto de burbujas extendido a todas las secciones**
  - Burbujas interactivas en secciones oscuras (mismo estilo que hero)
  - Burbujas con contraste adaptado en secciones claras
  - Colores diferenciados según el fondo de cada sección
  - Sistema JavaScript que detecta automáticamente el tipo de sección
  - Efectos de glow y sombras adaptados al contexto visual
  
- **Favicon**
  - Favicon agregado usando la misma imagen del logo (VoidOwl-logo.png)
  - Apple Touch Icon para dispositivos iOS
  - Consistencia de marca en todas las plataformas

- **Mejoras en sección de Planes**
  - Lista detallada de características por plan
  - Iconos SVG para cada característica
  - Información explícita sobre límites y funcionalidades
  - Comparación clara entre planes
  - Estilos mejorados con bordes y separadores

### 🔄 Cambiado

- **Logo en header y hero**
  - Logo del header actualizado para usar la misma imagen que el hero
  - Tamaño del logo aumentado en header (de 32px a 42px)
  - Tamaño del logo aumentado en hero (de 72px a 150px)
  - Efectos de glow mejorados para mayor visibilidad
  - Responsive mejorado para todos los tamaños de pantalla

- **Sección de Planes**
  - Contenido más explícito y detallado
  - Características específicas visibles para cada plan
  - Mejor organización visual con listas de características

---

## [0.2.0] - 2025-12-07

### ✨ Añadido

#### Nuevas Secciones Completas
- **Sección "Cómo funciona"**
  - 4 pasos ilustrados con iconos SVG
  - Tarjetas interactivas con efectos hover
  - Diseño en fondo claro para contraste visual
  
- **Sección "Características clave"**
  - Grid de 6 características principales
  - Monitoreo de uptime 24/7
  - Alertas instantáneas
  - Estado WordPress especializado
  - Historial completo
  - Multi-sitio para agencias
  - Informes detallados
  
- **Sección "Para quién es"**
  - 3 audiencias objetivo: PYMEs, e-commerce, agencias
  - Beneficios específicos por audiencia
  - Diseño en fondo claro con tarjetas destacadas
  
- **Sección "Planes"**
  - 3 planes: Void, Sentinel (destacado), OwlCore
  - Tarjetas con diseño cyberpunk
  - Botones de acción para ver detalles
  
- **Sección "FAQ"**
  - 6 preguntas frecuentes con acordeón funcional
  - Animaciones suaves de apertura/cierre
  - Diseño accesible con ARIA labels
  
- **CTA Final**
  - Sección de llamada a la acción destacada
  - Fondo con efectos visuales
  - Botón principal grande

#### Mejoras en Footer
- Estructura mejorada con columnas organizadas
- Navegación, recursos y legal separados
- Año dinámico generado con JavaScript
- Diseño más profesional y organizado

#### Estilos y Diseño
- **Sistema de alternancia de fondos**
  - Secciones claras (Moonlight White) para descanso visual
  - Secciones oscuras (Void Black) para efecto cyberpunk
  - Transiciones suaves entre secciones
  
- **Paleta de colores completa de marca**
  - Void Black (#0A0A0D)
  - Shadow Grey (#1B1B22)
  - Neon Cyan (#00FFF0)
  - Electric Blue (#3B82F6)
  - Void Purple (#7C3AED)
  - Moonlight White (#F3F4F6)
  
- **Efectos visuales mejorados**
  - Tarjetas con bordes y glow en hover
  - Animaciones fade-up para todas las secciones
  - Patrones de fondo sutiles en secciones oscuras
  - Efectos de profundidad con múltiples capas

#### Funcionalidad JavaScript
- **Sistema de FAQ acordeón**
  - Apertura/cierre suave de preguntas
  - Solo una pregunta abierta a la vez
  - Atributos ARIA para accesibilidad
  
- **Año dinámico en footer**
  - Generación automática del año actual
  
- **IntersectionObserver mejorado**
  - Observa todas las secciones con clase fade-up
  - Animaciones escalonadas al hacer scroll

### 🔄 Cambiado

- Actualización de variables CSS con colores oficiales de marca
- Mejora en la estructura del footer (de simple a multi-columna)
- Optimización de animaciones para mejor rendimiento

### 📱 Secciones Implementadas

- ✅ Navbar completo y funcional
- ✅ Hero section con efectos avanzados
- ✅ **Cómo funciona** (completo)
- ✅ **Características clave** (completo)
- ✅ **Para quién es** (completo)
- ✅ **Planes** (completo)
- ✅ **FAQ** (completo)
- ✅ **CTA Final** (completo)
- ✅ Footer mejorado y completo

### 🎨 Características de Diseño

- **Estilo**: Cyberpunk, moderno, con alternancia de fondos claros/oscuros
- **Efectos visuales**: 
  - Gradientes animados
  - Efectos de glow en hover
  - Patrones geométricos sutiles
  - Burbujas interactivas en hero
  - Transiciones suaves

---

## [0.1.0] - 2025-12-07

### 🚧 Versión Inicial de Desarrollo

Primera versión del sitio web de marketing de VoidOwl en fase de desarrollo.

### ✨ Añadido

#### Estructura Base
- Página principal (`index.html`) con estructura semántica completa
- Sistema de estilos CSS con variables y organización modular
- JavaScript vanilla para interactividad
- Estructura de directorios organizada

#### Diseño y UI
- **Navbar fijo** con navegación responsive
  - Menú hamburguesa para dispositivos móviles
  - Smooth scroll entre secciones
  - Efectos hover en enlaces
  
- **Hero Section** con diseño minimalista y moderno
  - Logo VoidOwl con efectos de brillo
  - Título principal con gradientes animados
  - Descripción con línea decorativa animada
  - Botones CTA (Call to Action)
  
- **Efectos de fondo avanzados**
  - 5 orbes de gradiente animados con diferentes velocidades
  - Patrón de cuadrícula animado
  - 3 círculos de acento con animaciones de pulso
  - Efectos de profundidad con múltiples capas

#### Interactividad
- **Sistema de burbujas interactivas**
  - Burbujas que aparecen al mover el mouse
  - Diferentes tamaños (pequeñas, medianas, grandes)
  - Animaciones de expansión suaves
  - Bordes definidos con efectos de glow
  
- **Gradiente que sigue el mouse**
  - Efecto sutil que acompaña al cursor
  - Combinación con sistema de burbujas
  
- **Interacción con orbes de fondo**
  - Los orbes reaccionan al movimiento del mouse
  - Efectos de alejamiento y acercamiento
  - Escalado dinámico del orb central

#### Responsive Design
- Diseño mobile-first
- Breakpoints optimizados para tablet y desktop
- Menú móvil funcional con animaciones
- Ajustes de tipografía y espaciado por dispositivo

#### SEO y Accesibilidad
- Meta tags optimizados para SEO
- Open Graph tags para redes sociales
- Estructura HTML semántica
- Atributos ARIA donde corresponde
- Descripción y títulos optimizados

#### Tipografía
- Google Fonts: Orbitron (títulos) y Michroma (texto)
- Tamaños responsivos con `clamp()`
- Efectos de texto con gradientes animados

#### Paleta de Colores
- Sistema de variables CSS para colores
- Paleta oscura con acentos azul/cyan
- Efectos de glow y sombras consistentes

### 🎨 Características de Diseño

- **Estilo**: Minimalista, moderno, formal y dinámico
- **Fondo**: Oscuro con gradientes suaves y efectos de profundidad
- **Efectos visuales**: 
  - Texturas de ruido sutiles (placeholder)
  - Gradientes radiales animados
  - Patrones geométricos
  - Efectos de burbujas interactivas

### 📱 Secciones Implementadas

- ✅ Navbar completo y funcional
- ✅ Hero section con efectos avanzados
- ✅ Footer básico
- ⏳ Secciones placeholder: Cómo funciona, Características, Planes, FAQ

### 🔧 Archivos Principales

- `index.html`: Estructura HTML completa
- `assets/css/styles.css`: Estilos con variables CSS y animaciones
- `assets/js/main.js`: JavaScript para interactividad y efectos
- `assets/img/`: Recursos gráficos (logo, placeholders)

### 📝 Notas Técnicas

- Sin dependencias externas (JavaScript vanilla)
- CSS puro con variables y animaciones avanzadas
- HTML semántico y limpio para futura migración a WordPress
- Optimizado para rendimiento
- Código organizado y comentado

### 🐛 Correcciones

- Corrección de errores de sintaxis JavaScript
- Optimización de animaciones para mejor rendimiento
- Ajustes de visibilidad de efectos de fondo
- Mejoras en la interacción del mouse

### 🔄 Mejoras Iterativas

- Evolución del diseño del hero (de 2 columnas a diseño centrado)
- Refinamiento de efectos de fondo (de abstracto a más definido)
- Implementación de sistema de burbujas interactivas
- Optimización de efectos de texto con gradientes animados

---

## [Unreleased] - Próximas Versiones

### 🎯 Versión 0.4.0 (Planificado)
- Optimización de imágenes
- Minificación de assets para producción
- Mejoras de rendimiento
- Testing cross-browser

### 🎯 Versión 1.0.0 (Lanzamiento)
- Versión estable para producción
- Documentación completa
- Integración con WordPress (futuro)
- Deploy a producción

---

## Tipos de Cambios

- **✨ Añadido**: Para nuevas características
- **🔄 Cambiado**: Para cambios en funcionalidades existentes
- **🗑️ Deprecado**: Para características que serán eliminadas
- **❌ Eliminado**: Para características eliminadas
- **🐛 Corregido**: Para corrección de bugs
- **🔒 Seguridad**: Para vulnerabilidades

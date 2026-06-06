# Place Coffee

Sitio web de una cafetería de especialidad. Landing page estática orientada a mobile, construida con HTML, CSS y JavaScript vanilla — sin frameworks, sin dependencias.

**[Ver demo en vivo →](https://place-coffee.vercel.app/)**

![Preview del sitio](./assets/img/hero.jpg)

---

## Sobre el proyecto

Place Coffee es una cafetería ficticia en Acarigua, Venezuela. El sitio nació de una necesidad real que tienen muchas cafeterías pequeñas: **no tienen presencia web** y sus clientes no pueden ver el menú, el horario ni la ubicación antes de visitar el local.

El diseño está pensado para un público joven (25–35 años) que busca un lugar tranquilo para trabajar, leer o conversar, y que llega al sitio principalmente desde el móvil.

---

## Características

- **Menú visual** con dos layouts: cuadrícula en desktop, lista compacta en mobile.
- **Galería de experiencias** que muestra las actividades disponibles en el local: leer, trabajar, jugar, pintar.
- **Contacto directo** vía WhatsApp con un solo toque.
- **Horarios y ubicación** centralizados en el footer.
- **Navbar con scroll dinámico** usando `IntersectionObserver`.
- **Menú hamburguesa accesible** con gestión de `aria-expanded` / `aria-hidden`.
- **Página 404 personalizada**, autocontenida y en tono con la marca.
- **SEO básico** con meta description y Open Graph.
- Tipografía fluida con `clamp()` — sin media queries para los tamaños de texto.

---

## Stack

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 — BEM, variables CSS, `clamp()` |
| Lógica | JavaScript ES6 vanilla |
| Tipografía | Fraunces (serif variable) + Satoshi (sans-serif variable) |
| Deploy | Archivos estáticos — compatible con GitHub Pages, Netlify, Vercel |

Sin `npm install`. Sin bundler. Sin frameworks. Abre `index.html` y funciona.

---

## Decisiones de diseño

**Mobile-first real.** El menú tiene dos vistas en el mismo HTML: `.menu__view--gallery` (cuadrícula de 3 columnas, visible en desktop) y `.menu__view--carta` (lista compacta con precios, visible en mobile). La galería también cambia de layout entre viewports. Cada vista está optimizada para su contexto de uso.

**IntersectionObserver en vez de scroll listener.** La navbar detecta cuándo el usuario ha bajado del hero usando un sentinel invisible, no un event listener en `scroll`. Más eficiente y sin jank en mobile.

**404 autocontenida.** La página de error tiene el CSS inlined para evitar que rutas rotas impidan cargar los estilos. Misma paleta y tipografía que el sitio principal, sin archivo CSS externo.

**Tipografía fluida.** Los tamaños de texto de `--text-md` a `--text-display` escalan proporcionalmente entre el ancho mínimo y máximo con `clamp()`, sin saltos bruscos en breakpoints.

---

## Estructura

```
PlaceCoffee/
├── index.html
├── 404.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── img/
    │   ├── hero.jpg
    │   ├── logo.png
    │   ├── gallery/
    │   └── menu/
    └── fonts/
        ├── Fraunces/
        └── Satoshi_Complete/
```

---

## Correr localmente

```bash
# Clonar
git clone https://github.com/tu-usuario/PlaceCoffee.git
cd PlaceCoffee

# Abrir con cualquier servidor estático
python3 -m http.server 8080
# o
npx serve .
```

Luego entrar a `http://localhost:8080`.

---

## Roadmap

- [ ] Página de menú completo con todos los platos y precios.
- [ ] Integración de Google Maps en el footer.
- [ ] Optimización de imágenes (WebP + `srcset`).
- [ ] Animaciones de entrada en scroll (`IntersectionObserver`).

---

## Aviso

Proyecto ficticio con fines educativos y de portafolio. Las imágenes utilizadas pertenecen a sus respectivos dueños — no son de uso comercial.

---

*Diseñado y desarrollado por [Manuel](https://github.com/JManuel198).*

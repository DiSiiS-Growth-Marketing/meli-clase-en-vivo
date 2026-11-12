# Clase en Vivo — Meli

Landing page de captación para la clase en vivo gratuita de Meli (jueves 26 de noviembre, 7:00 PM hora Colombia).

Sitio estático: `index.html`, `styles.css`, `script.js`, `assets/`.

## Editar

- **Bio de Meli**: busca el placeholder `[PLACEHOLDER: ...]` en `index.html`, dentro de la sección "¿Quién es Meli?".
- **Foto**: reemplaza `assets/meli-hero.png`.
- **Fecha/hora de la clase**: variable `TARGET_DATE` en `script.js` (formato `YYYY-MM-DDTHH:mm:ss-05:00`).
- **Link de WhatsApp**: busca y reemplaza la URL `https://chat.whatsapp.com/JxA8DHtUCj11N8PipcfjtS` en `index.html` (sección "about" y "final-cta") y en `gracias.html`.
- **Formulario de registro (Systeme.io)**: vive dentro del hero de `index.html` (`#hero-signup`). En móvil se ve inline, sin necesidad de scroll; en escritorio el botón "QUIERO RESERVAR MI CUPO" lo abre como popup (lógica en `script.js`).
- **Página de gracias**: `gracias.html`, pensada como página de redirección de Systeme.io tras enviar el formulario (último paso: unirse al grupo de WhatsApp). Se publica en `/gracias` gracias a `cleanUrls` en `vercel.json`.

## Deploy en Vercel

1. Importa este repositorio en [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Other** (sitio estático, sin build command).
3. Deploy.
4. En Systeme.io, configura la redirección post-registro del formulario hacia `https://meli-clase-en-vivo.vercel.app/gracias`.

// ── DATA ──
const obras = [
  {
    id: 1,
    title: 'Cómo diseñar tu sala',
    excerpt: 'Un recorrido por los principios fundamentales del diseño de interiores para crear espacios cálidos y funcionales.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    heroImg: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
      'https://images.unsplash.com/photo-1558882224-dda166733046?w=600&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80',
    ],
    meta: { tecnica: 'Fotografía editorial', dimensiones: '120 × 90 cm', tiraje: '5/10', precio: '980 €' },
    content: [
      { type: 'text', text: 'El diseño de una sala de estar es mucho más que elegir muebles bonitos. Es la búsqueda de un equilibrio entre funcionalidad y emoción, entre lo que necesitamos y lo que nos hace sentir en casa.' },
      { type: 'subhead', text: 'El punto de partida: definir el propósito del espacio' },
      { type: 'text', text: 'Antes de comprar un solo objeto, conviene preguntarse: ¿Para qué usamos realmente este espacio? ¿Es un lugar de reunión familiar, de trabajo, de lectura tranquila? La respuesta determinará cada decisión posterior, desde la disposición de los muebles hasta la temperatura de la luz.' },
      { type: 'text', text: 'Los grandes maestros del interiorismo coinciden en que el error más común es empezar por la estética y terminar construyendo un espacio hermoso pero incómodo. La belleza durable nace siempre de la coherencia entre forma y función.' },
      { type: 'gallery' },
      { type: 'subhead', text: 'Color, luz y textura: la trinidad del diseño' },
      { type: 'text', text: 'Una paleta de tres tonos —base, complementario y acento— es suficiente para crear armonía. La luz natural debe guiar la elección: los tonos fríos amplifican la claridad, los cálidos crean intimidad. Las texturas (lino, madera, barro) añaden esa dimensión táctil que hace un espacio verdaderamente habitable.' },
    ]
  },
  {
    id: 2,
    title: 'Los mejores 5 colores para el interior de tu hogar',
    excerpt: 'Porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipiscing elit.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    heroImg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      'https://images.unsplash.com/photo-1518053082890-e42c5dae1e21?w=600&q=80',
    ],
    meta: { tecnica: 'Acrílico sobre lienzo', dimensiones: '100 × 80 cm', tiraje: 'Obra única', precio: '1.450 €' },
    content: [
      { type: 'text', text: 'El color es el elemento más transformador de cualquier interior. Con un solo cambio cromático podemos hacer que una habitación parezca más grande, más acogedora, más luminosa o más íntima.' },
      { type: 'subhead', text: '1. Blanco roto: la base de todo' },
      { type: 'text', text: 'No el blanco puro, que puede resultar clínico y frío, sino el blanco con matices cálidos —hueso, nata, crema— que actúa como lienzo sobre el que cualquier otro color brilla. Es el tono que más luz refleja y que mejor convive con texturas naturales.' },
      { type: 'gallery' },
      { type: 'subhead', text: '2. Verde salvia: la naturaleza dentro de casa' },
      { type: 'text', text: 'Los tonos verde grisáceo, inspirados en la vegetación mediterránea, aportan calma y conexión con el entorno natural. Funcionan especialmente bien en salones orientados al norte y en dormitorios donde buscamos descanso profundo.' },
      { type: 'text', text: 'Los otros tres colores de la lista —terracota, azul pizarra y ocre dorado— completan una paleta que responde a la tendencia dominante de los próximos años: la vuelta a los pigmentos minerales y a la tierra como referencia cromática.' },
    ]
  },
  {
    id: 3,
    title: 'La magia de los sillones',
    excerpt: 'Aquí comienza tu texto. Puedes hacer clic en este punto y empezar a escribir sobre el poder de un buen sillón.',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80',
    heroImg: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80',
      'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=600&q=80',
      'https://images.unsplash.com/photo-1586187652920-b6d2acda7d62?w=600&q=80',
    ],
    meta: { tecnica: 'Fotografía de producto', dimensiones: '90 × 120 cm', tiraje: '3/8', precio: '780 €' },
    content: [
      { type: 'text', text: 'Si hay un mueble que define el carácter de una sala, ese es el sillón. No el sofá, que suele ser el mueble principal y muchas veces el más neutro, sino ese sillón secundario que revela quién eres realmente.' },
      { type: 'subhead', text: 'El sillón como declaración de intenciones' },
      { type: 'text', text: 'Un sillón de terciopelo en verde botella junto a una lámpara de pie de latón dice algo completamente diferente a un sillón de ratán natural en un rincón soleado. Ambos son válidos; ambos son hermosos. Lo que importa es que sean una elección consciente.' },
      { type: 'gallery' },
      { type: 'text', text: 'Los sillones más memorables que he fotografiado en los últimos años tienen algo en común: no intentan pasar desapercibidos. Son piezas que invitan a ser usadas, que tienen historia, que generan conversación. Esa es la magia real del buen diseño.' },
    ]
  },
  {
    id: 4,
    title: 'Usa la luz para un hogar cálido',
    excerpt: 'La iluminación es el elemento más infravalorado del interiorismo. Aprende a usarla a tu favor.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
      'https://images.unsplash.com/photo-1522444195799-478538b28823?w=600&q=80',
    ],
    meta: { tecnica: 'Instalación lumínica', dimensiones: 'Variable', tiraje: 'Edición única', precio: 'Consultar' },
    content: [
      { type: 'text', text: 'Puedes tener los mejores muebles, los colores más cuidados y los materiales más nobles, pero si la iluminación es plana y fría, el espacio nunca se sentirá como un hogar. La luz es el alma invisible de cualquier interior.' },
      { type: 'subhead', text: 'Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est.' },
      { type: 'text', text: 'Adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.' },
      { type: 'text', text: 'Eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' },
      { type: 'gallery' },
      { type: 'subhead', text: 'Capas de luz: la técnica profesional' },
      { type: 'text', text: 'Los interioristas hablan de "capas" de luz: la ambiental (general), la focal (sobre puntos concretos) y la decorativa (la que crea atmósfera). Combinar las tres, y poder regularlas por separado, es el secreto de los espacios que no queremos abandonar nunca.' },
    ]
  },
  {
    id: 5,
    title: 'Arte textil para paredes',
    excerpt: 'Los tapices y piezas de arte textil vuelven con fuerza. Una tendencia con siglos de historia y todo el futuro por delante.',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    heroImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=600&q=80',
      'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=600&q=80',
      'https://images.unsplash.com/photo-1591040092219-08030bb5d476?w=600&q=80',
    ],
    meta: { tecnica: 'Tapiz tejido a mano', dimensiones: '150 × 200 cm', tiraje: 'Obra única', precio: '2.200 €' },
    content: [
      { type: 'text', text: 'El arte textil fue durante siglos la forma más sofisticada de decorar un espacio. Los grandes tapices flamencos, las kilims persas, los quipus andinos: la humanidad lleva milenios tejiendo belleza para sus paredes.' },
      { type: 'subhead', text: 'El renacimiento del tapiz contemporáneo' },
      { type: 'text', text: 'La generación de artistas textiles actuales ha reinterpretado esa tradición con lenguaje contemporáneo: fibras naturales sin teñir, nudos macramé de escala monumental, tejidos que incorporan materiales inesperados como el papel o el metal.' },
      { type: 'gallery' },
      { type: 'text', text: 'Una pieza textil bien elegida aporta al espacio algo que ningún cuadro puede dar: textura táctil, absorción acústica y una calidez visual que transforma incluso los interiores más fríos. Es el arte que se puede casi tocar.' },
    ]
  },
  {
    id: 6,
    title: 'Plantas y arte: la simbiosis perfecta',
    excerpt: 'Cómo integrar elementos vegetales con obras de arte para crear interiores vivos y en constante transformación.',
    img: 'https://images.unsplash.com/photo-1545165375-568928071c24?w=600&q=80',
    heroImg: 'https://images.unsplash.com/photo-1545165375-568928071c24?w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    ],
    meta: { tecnica: 'Instalación mixta', dimensiones: 'Variable', tiraje: 'Edición única', precio: 'Consultar' },
    content: [
      { type: 'text', text: 'La biofilia, ese impulso innato del ser humano por conectar con la naturaleza, ha encontrado en el diseño de interiores su expresión más sofisticada. Arte y plantas, cuando conviven con intención, se potencian mutuamente.' },
      { type: 'subhead', text: 'El fondo vivo: cómo una planta cambia una obra' },
      { type: 'text', text: 'Una pintura abstracta en tonos terracota junto a un ficus lyrata crea un diálogo visual que ninguno de los dos elementos puede generar en soledad. La planta aporta movimiento y vida; la obra, permanencia y emoción contenida.' },
      { type: 'gallery' },
      { type: 'text', text: 'La clave es pensar en el conjunto antes de colocar ninguna pieza. ¿Qué colores tienen las hojas en otoño? ¿Cómo crecerá la planta en seis meses? El espacio vivo es un espacio que cambia, y el arte que lo habita debe ser lo suficientemente generoso como para aceptar esa transformación.' },
    ]
  },
];

// ── RENDER CARDS ──
function renderCards() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = obras.map(o => `
    <div class="card fade-in" onclick="openDetail(${o.id})" style="animation-delay:${(o.id-1)*.08}s">
      <div class="card-img-wrap">
        <img src="${o.img}" alt="${o.title}" loading="lazy"/>
        
      </div>
      <div class="card-body">
        <h3 class="card-title">${o.title}</h3>
        <p class="card-excerpt">${o.excerpt}</p>
        <p class="card-cta">Leer más →</p>
      </div>
    </div>
  `).join('');
}

// ── OPEN DETAIL ──
function openDetail(id) {
  const o = obras.find(x => x.id === id);
  if (!o) return;

  document.getElementById('detail-date').textContent = `${o.date.day}.${o.date.mon === 'Oct' ? '10' : '09'}.2024`;
  document.getElementById('detail-title').textContent = o.title;
  document.getElementById('detail-hero-img').src = o.heroImg;
  document.getElementById('detail-hero-img').alt = o.title;

  let html = '';
  o.content.forEach(block => {
    if (block.type === 'text')    html += `<p class="detail-text">${block.text}</p>`;
    if (block.type === 'subhead') html += `<h2 class="detail-subhead">${block.text}</h2>`;
    if (block.type === 'gallery') {
      html += `<div class="detail-gallery">
        ${o.gallery.map(src => `<img src="${src}" alt="" loading="lazy"/>`).join('')}
      </div>`;
    }
  });

  html += `<div class="detail-meta">
    <strong>Información de la obra</strong>
    Técnica: ${o.meta.tecnica} &nbsp;·&nbsp; Dimensiones: ${o.meta.dimensiones}
    &nbsp;·&nbsp; Tiraje: ${o.meta.tiraje} &nbsp;·&nbsp; Precio: ${o.meta.precio}
  </div>`;

  document.getElementById('detail-content').innerHTML = html;
  showPage('detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── PAGE NAVIGATION ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + (name === 'detail' ? 'home' : name));
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

// ── HAMBURGER ──
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 40);
});

// ── CONTACT FORM ──
function submitForm(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').classList.add('visible');
}

// ── INIT ──
renderCards();
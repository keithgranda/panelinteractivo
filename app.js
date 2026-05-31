/* ================================================
   PLANETA LIMPIO — Lógica e interactividad
   Archivo: app.js
   ================================================ */

/* ============ DATOS ============ */

const bins = [
  {
    id: 'organico', name: 'Orgánico', emoji: '🍃', color: '#2e7d32', bg: '#e8f5e9', text: '#1b5e20',
    colorName: 'Tacho VERDE',
    desc: 'Son los restos de comida y de plantas que vienen de la naturaleza. ¡La buena noticia es que pueden convertirse en abono para las plantas!',
    fact: '🌱 ¿Sabías que los residuos orgánicos pueden convertirse en abono (compost) en solo 3 meses? Ese abono nutre la tierra y ayuda a que crezcan plantas más sanas.',
    accept: [
      'Cáscaras de frutas y verduras',
      'Restos de comida (arroz, fideos, legumbres)',
      'Posos de café y bolsas de té',
      'Cáscaras de huevo',
      'Flores y plantas secas',
      'Restos de pan o galletas',
      'Servilletas de papel usadas (sin plástico)',
    ],
    reject: [
      'Aceites o grasas de cocina',
      'Carne o pescado en mal estado',
      'Bolsas de plástico',
      'Platos y vasos desechables',
      'Medicamentos',
      'Ropa o telas',
    ]
  },
  {
    id: 'papel', name: 'Papel y Cartón', emoji: '📄', color: '#1565c0', bg: '#e3f2fd', text: '#0d47a1',
    colorName: 'Tacho AZUL',
    desc: 'El papel y el cartón pueden reciclarse para hacer papel nuevo. ¡Si lo separamos correctamente, salvamos muchos árboles!',
    fact: '🌳 Reciclar una tonelada de papel salva 17 árboles, 26,000 litros de agua y suficiente energía para calentar una casa por 6 meses.',
    accept: [
      'Periódicos y revistas',
      'Cajas de cartón (aplastadas)',
      'Papel de cuadernos y oficina',
      'Bolsas de papel',
      'Libros viejos',
      'Cajas de cereales y productos',
      'Tubos de papel higiénico',
    ],
    reject: [
      'Papel mojado o muy sucio con comida',
      'Papel plastificado o encerado',
      'Tetrapak (leche, jugos) — va aparte',
      'Servilletas sucias (van a orgánico)',
      'Papel carbón o metalizado',
      'Papel con pintura o pegamento',
    ]
  },
  {
    id: 'plastico', name: 'Plástico', emoji: '♻️', color: '#f57f17', bg: '#fffde7', text: '#e65100',
    colorName: 'Tacho AMARILLO',
    desc: 'El plástico es uno de los materiales más difíciles de eliminar, ¡pero también se puede reciclar! La clave es enjuagarlo bien antes.',
    fact: '😱 Una botella de plástico PET tarda entre 400 y 1000 años en degradarse. Si la reciclamos, esa misma botella puede convertirse en una nueva, ¡o incluso en ropa!',
    accept: [
      'Botellas de bebidas (agua, gaseosa)',
      'Envases de limpieza bien enjuagados',
      'Bolsas y fundas plásticas',
      'Tapas y tapones de plástico',
      'Envases de yogur y lácteos',
      'Bandejas de plástico limpias',
      'Botellas de shampoo',
    ],
    reject: [
      'Envases sucios con restos de comida',
      'Unicel o poliestireno expandido',
      'Jeringas y guantes médicos',
      'Juguetes rotos con partes metálicas',
      'Plásticos con residuos peligrosos',
      'Envoltorios de golosinas muy sucios',
    ]
  },
  {
    id: 'vidrio', name: 'Vidrio', emoji: '🍾', color: '#00695c', bg: '#e0f2f1', text: '#004d40',
    colorName: 'Tacho VERDE OSCURO',
    desc: '¡El vidrio es increíble porque puede reciclarse infinitas veces sin perder calidad! Pero debemos manejarlo con cuidado porque puede cortar.',
    fact: '♾️ El vidrio es uno de los pocos materiales que se puede reciclar infinitamente sin perder ninguna de sus propiedades. ¡Una botella de vidrio puede renacer como botella una y otra vez!',
    accept: [
      'Botellas de agua, refresco, vino',
      'Frascos de conservas y mermeladas',
      'Tarros de vidrio de cualquier tipo',
      'Botellas de medicamentos vacías',
      'Frascos de cosméticos de vidrio',
    ],
    reject: [
      'Espejos y cristales de ventana (¡diferente composición!)',
      'Vidrio roto sin envolver — es peligroso',
      'Bombillas o focos',
      'Vajilla, tazas y platos de cerámica',
      'Pantallas de televisores o monitores',
      'Vidrio con plomo (lentes, cristalería decorativa)',
    ]
  },
  {
    id: 'metal', name: 'Metal', emoji: '🥫', color: '#bf360c', bg: '#fbe9e7', text: '#870000',
    colorName: 'Tacho NARANJA',
    desc: 'Las latas y otros metales son muy valiosos para el reciclaje. ¡Reciclar aluminio ahorra casi toda la energía necesaria para fabricar uno nuevo!',
    fact: '⚡ Fabricar aluminio nuevo gasta 95% más energía que reciclarlo. ¡Con la energía ahorrada al reciclar una sola lata se puede encender una TV por 3 horas!',
    accept: [
      'Latas de refresco y bebidas',
      'Latas de conservas (atún, tomates)',
      'Papel aluminio de cocina limpio',
      'Tapas metálicas de botellas',
      'Aerosoles completamente vacíos',
      'Utensilios de cocina metálicos',
    ],
    reject: [
      'Latas con restos de comida (debes enjuagarlas)',
      'Aerosoles con producto (¡son peligrosos!)',
      'Cables eléctricos',
      'Baterías y pilas (son peligrosas, van aparte)',
      'Pinturas metálicas',
      'Medicamentos con envase metálico',
    ]
  },
  {
    id: 'peligroso', name: 'Residuos Peligrosos', emoji: '⚠️', color: '#c62828', bg: '#ffebee', text: '#7f0000',
    colorName: 'Tacho ROJO',
    desc: 'Estos residuos contienen sustancias que pueden dañar la salud o el ambiente. ¡Nunca los mezcles con otros residuos y llévalos a puntos de acopio especiales!',
    fact: '🔋 Una sola pila contaminada puede contaminar hasta 1 millón de litros de agua. Por eso es muy importante no tirarlas a la basura común.',
    accept: [
      'Pilas y baterías (de todos los tipos)',
      'Medicamentos vencidos o sobrantes',
      'Pinturas, solventes y barnices',
      'Pesticidas e insecticidas',
      'Aceite de cocina usado (en botella cerrada)',
      'Termómetros con mercurio',
      'Productos de limpieza muy agresivos',
    ],
    reject: [
      'Residuos orgánicos',
      'Plásticos comunes',
      'Papel y cartón',
      'Vidrio ordinario',
      'Latas de alimentos',
      'Cualquier residuo no peligroso',
    ]
  },
  {
    id: 'electronico', name: 'Electrónicos (E-Waste)', emoji: '💻', color: '#4a148c', bg: '#f3e5f5', text: '#38006b',
    colorName: 'Tacho MORADO',
    desc: 'Los aparatos electrónicos viejos contienen metales valiosos y también sustancias tóxicas. ¡No los tires a la basura común! Llévalos a tiendas o puntos de acopio.',
    fact: '📱 Dentro de 1 tonelada de teléfonos viejos hay más oro que en 1 tonelada de mineral de mina. Reciclar electrónicos recupera materiales muy valiosos.',
    accept: [
      'Teléfonos y tablets viejos',
      'Computadoras y laptops',
      'Cables y cargadores',
      'Electrodomésticos pequeños (plancha, secadora)',
      'Impresoras y escáneres',
      'Cámaras fotográficas',
      'Videojuegos y controles',
    ],
    reject: [
      'Baterías separadas (son residuos peligrosos)',
      'Papel o plástico común',
      'Ropa u objetos textiles',
      'Muebles',
      'Vidrio o cerámica',
    ]
  },
  {
    id: 'sanitario', name: 'Sanitario', emoji: '🚫', color: '#37474f', bg: '#eceff1', text: '#263238',
    colorName: 'Tacho NEGRO',
    desc: 'Estos residuos no pueden reciclarse y pueden transmitir enfermedades. Siempre deben ir en bolsas bien cerradas y separados del reciclaje.',
    fact: '🦠 Los residuos sanitarios pueden contener bacterias y virus. Por eso deben ir siempre bien cerrados en bolsas separadas para proteger a los recolectores y evitar contagios.',
    accept: [
      'Pañales desechables',
      'Toallas sanitarias y apósitos',
      'Mascarillas y guantes usados',
      'Papel higiénico usado',
      'Algodones y curitas usadas',
      'Hisopados nasales',
    ],
    reject: [
      'Medicamentos (van a puntos de acopio peligroso)',
      'Jeringas y agujas (son residuos hospitalarios)',
      'Plásticos limpios',
      'Papel limpio',
      'Residuos orgánicos de comida',
    ]
  }
];

const journey = [
  { emoji: '🏠', title: 'En tu casa',          desc: 'Tú separas la basura en los tachos correctos según el tipo de residuo. ¡Este es el paso más importante! Si aquí te equivocas, todo lo demás falla.' },
  { emoji: '🚛', title: 'El camión recolector', desc: 'El camión de basura recoge los residuos de tu barrio. En muchas ciudades hay camiones diferentes para residuos orgánicos, reciclables y no reciclables.' },
  { emoji: '🏭', title: 'Planta de selección',  desc: 'Los residuos llegan a una planta donde trabajadores y máquinas los separan mejor: papel con papel, plástico con plástico, vidrio con vidrio.' },
  { emoji: '⚙️', title: 'El proceso de reciclaje', desc: 'Cada material se procesa de forma diferente. El papel se tritura y pulpa. El plástico se derrite y moldea. El vidrio se funde. El metal se refunde.' },
  { emoji: '✨', title: '¡Nuevo producto!',      desc: 'Los materiales reciclados se convierten en productos nuevos: botellas, papel, ropa, envases y más. ¡La botella que tiraste hoy puede ser una chaqueta mañana!' },
  { emoji: '🌿', title: 'Compost del orgánico', desc: 'Los residuos orgánicos se compostan (se fermentan naturalmente) y se convierten en abono rico en nutrientes que hace crecer plantas y cultivos más sanos.' },
  { emoji: '🔒', title: 'Relleno sanitario',    desc: 'Lo que no puede reciclarse va al relleno sanitario, que es diferente a un basurero. Se construye para evitar que los líquidos contaminen el suelo y el agua subterránea.' },
];

const stats = [
  { icon: '🗑️', num: '2.01', unit: 'mil millones', label: 'Toneladas de basura se generan en el mundo cada año' },
  { icon: '♻️', num: '9%',   unit: '',              label: 'Solo el 9% del plástico producido ha sido reciclado alguna vez' },
  { icon: '🌊', num: '8M',   unit: 'toneladas',     label: 'De plástico llegan a los océanos cada año' },
  { icon: '🌳', num: '17',   unit: 'árboles',       label: 'Se salvan por cada tonelada de papel que se recicla' },
  { icon: '⚡', num: '95%',  unit: 'menos energía', label: 'Usa reciclar aluminio vs fabricarlo desde cero' },
  { icon: '🔋', num: '1M',   unit: 'litros de agua',label: 'Puede contaminar una sola pila botón si no se desecha bien' },
  { icon: '📱', num: '53.6M',unit: 'toneladas',     label: 'De residuos electrónicos se generan anualmente a nivel mundial' },
  { icon: '⏳', num: '450',  unit: 'años',          label: 'Tarda en degradarse una botella de plástico en el ambiente' },
];

const tips = [
  { accent: '#2e7d32', title: 'Arma tu estación de reciclaje',   text: 'Coloca 3 o 4 tachos pequeños en la cocina: uno para orgánico, uno para reciclables (papel, plástico, metal, vidrio) y uno para no reciclables. ¡Ponles etiquetas de colores!' },
  { accent: '#1565c0', title: 'Lava los envases antes de reciclar', text: 'Una botella sucia con restos de comida contamina toda la bolsa de reciclaje. Basta con enjuagarla con un poco de agua para que quede lista.' },
  { accent: '#f57f17', title: 'Aplasta y compacta',               text: 'Aplasta las botellas, latas y cajas antes de tirarlas. Ocuparán menos espacio y el camión podrá llevar más reciclaje en cada viaje.' },
  { accent: '#00695c', title: 'Di no al plástico de un solo uso', text: 'Los sorbetes, vasos y bolsas plásticas se usan solo minutos pero duran siglos. Usa bolsas de tela, botellas reutilizables y cubiertos propios.' },
  { accent: '#4a148c', title: 'Conoce los puntos de acopio',      text: 'Muchas ciudades tienen puntos especiales para baterías, electrónicos y medicamentos. Búscalos en la municipalidad o en tiendas de electrónica.' },
  { accent: '#c62828', title: 'Compostar en casa es posible',     text: 'Con un balde, tierra y restos de fruta o verdura puedes hacer tu propio abono en casa. Es fácil, no huele mal si se hace bien y tus plantas lo adorarán.' },
  { accent: '#bf360c', title: 'Lee las etiquetas de los envases', text: 'Muchos envases tienen el símbolo del reciclaje con un número. Ese número indica el tipo de plástico y si es reciclable en tu ciudad.' },
  { accent: '#2e7d32', title: 'Organiza el día de reciclaje',     text: 'Averigua qué día pasa el camión de reciclaje por tu barrio. Prepara las bolsas la noche anterior para no olvidarte.' },
  { accent: '#1565c0', title: 'Reduce antes de reciclar',         text: 'La mejor basura es la que no se genera. Compra productos con menos empaques, elige tamaños familiares y evita compras impulsivas.' },
  { accent: '#00695c', title: 'Enseña a toda la familia',         text: '¡Este conocimiento vale para todos! Comparte lo que aprendiste con hermanos, padres y abuelos. Una casa que recicla junta multiplica el impacto.' },
];

const mistakes = [
  { wrongIcon: '😬', wrongTitle: 'Reciclar sin lavar',             wrong: 'Muchos ponen botellas o envases con restos de comida directo al reciclaje.',                                               rightIcon: '😊', rightTitle: '¡Enjuaga primero!',          right: 'Basta un rápido enjuague con agua para que el envase quede apto para reciclar.' },
  { wrongIcon: '😬', wrongTitle: 'Bolsa de plástico llena de reciclaje', wrong: 'Meter todo el reciclaje dentro de una bolsa de plástico hace que sea difícil separarlo en la planta.',             rightIcon: '😊', rightTitle: 'Suelta o en bolsa de malla',  right: 'Es mejor poner los reciclables sueltos o en bolsas de malla/tela para facilitar su selección.' },
  { wrongIcon: '😬', wrongTitle: 'Pilas en la basura común',        wrong: 'Tirar pilas y baterías con la basura diaria es muy peligroso: contaminan suelos y agua.',                                rightIcon: '😊', rightTitle: 'Puntos de acopio especiales', right: 'Las pilas van a contenedores especiales de tiendas, colegios o municipalidades.' },
  { wrongIcon: '😬', wrongTitle: 'Pizza con caja de cartón',        wrong: 'Las cajas de pizza con mucha grasa no son reciclables: la grasa arruina el proceso de reciclaje del papel.',             rightIcon: '😊', rightTitle: 'Separa la parte limpia',     right: 'Si la tapa está limpia y sin grasa, recíclala. La base con grasa va a la basura común.' },
  { wrongIcon: '😬', wrongTitle: 'Medicamentos al inodoro',         wrong: 'Tirar pastillas por el desagüe contamina el agua y afecta ecosistemas acuáticos.',                                       rightIcon: '😊', rightTitle: 'Puntos de acopio farmacéutico', right: 'Lleva los medicamentos vencidos a farmacias o centros de salud con programa de acopio.' },
  { wrongIcon: '😬', wrongTitle: 'Vidrio roto sin envolver',        wrong: 'Dejar vidrios rotos sin proteger puede herir a los recolectores de basura.',                                              rightIcon: '😊', rightTitle: 'Envuelve en papel periódico', right: 'Siempre envuelve los vidrios rotos en papel periódico o cartón y señaliza la bolsa.' },
];

const activities = [
  { icon: '🌱', title: 'Crea tu compostero casero',    desc: 'Usa un balde con agujeros, capas de tierra y restos de frutas o verduras. En 2-3 meses tendrás abono para tus plantas. ¡Es magia verde!',                                     difficulty: 'easy',   diff: 'Fácil',      color: '#e8f5e9' },
  { icon: '🎨', title: 'Manualidades con reciclaje',   desc: 'Con cajas de cartón, botellas plásticas y latas puedes crear lapiceros, macetas, instrumentos musicales y mucho más. ¡Tu imaginación es el límite!',                         difficulty: 'easy',   diff: 'Fácil',      color: '#fff3e0' },
  { icon: '🗓️', title: 'Calendario de reciclaje',     desc: 'Haz un tablero en casa anotando cada día si toda la familia separó bien la basura. ¡Ponle stickers de estrella cuando todos cumplen!',                                        difficulty: 'easy',   diff: 'Fácil',      color: '#e3f2fd' },
  { icon: '🔍', title: 'Auditoría de basura',          desc: 'Durante una semana, registra cuánta basura genera tu familia por tipo. ¡Verás exactamente dónde puedes mejorar y reducir!',                                                   difficulty: 'medium', diff: 'Intermedio', color: '#fce4ec' },
  { icon: '🌻', title: 'Huerto con botellas recicladas', desc: 'Corta botellas de plástico a la mitad, llénanas con tierra y siembra hierbas o flores. ¡Un huerto vertical que recicla y decora!',                                         difficulty: 'medium', diff: 'Intermedio', color: '#f3e5f5' },
  { icon: '📢', title: 'Campaña en el colegio',        desc: 'Prepara un afiche o presentación para enseñarle a tus compañeros todo lo que sabes sobre segregación. ¡Conviértete en un embajador del planeta!',                            difficulty: 'hard',   diff: 'Avanzado',   color: '#e0f2f1' },
];

const quizData = [
  { q: '¿Dónde van las cáscaras de plátano y naranja?',             opts: ['Tacho orgánico 🍃', 'Tacho de plástico ♻️', 'Tacho peligroso ⚠️', 'Tacho sanitario 🚫'], c: 0, exp: '¡Correcto! Las cáscaras de frutas son residuos orgánicos y van al tacho verde. Pueden convertirse en abono.' },
  { q: '¿En qué tacho van las pilas y baterías usadas?',             opts: ['Tacho de metal 🥫', 'Tacho de plástico ♻️', 'Tacho peligroso ⚠️', 'Basura común 🗑️'],   c: 2, exp: 'Las baterías contienen metales pesados tóxicos y van a puntos de acopio especiales para residuos peligrosos.' },
  { q: 'Una botella de agua plástica vacía y enjuagada va en:',      opts: ['Tacho orgánico 🍃', 'Tacho de plástico ♻️', 'Tacho sanitario 🚫', 'Tacho peligroso ⚠️'], c: 1, exp: 'Las botellas PET limpias son reciclables. El truco es enjuagarlas antes para no contaminar otros reciclables.' },
  { q: '¿Cuántos años tarda una botella de plástico en degradarse?', opts: ['10 años', '50 años', '100 años', '450 años'],                                             c: 3, exp: '¡Una botella de plástico puede tardar entre 400 y 1000 años en degradarse! Por eso es tan importante reciclarla.' },
  { q: '¿Qué debes hacer antes de reciclar un frasco de vidrio?',   opts: ['Romperlo en pedazos', 'Retirar la tapa metálica y limpiarlo', 'Dejarlo con el contenido adentro', 'Pintarlo de otro color'], c: 1, exp: 'Hay que retirar la tapa metálica (que va aparte) y asegurarse de que esté limpio para que sea reciclable.' },
  { q: 'El papel muy mojado o con grasa...',                         opts: ['Es reciclable igual', 'Contamina el reciclaje de papel', 'Va al tacho de vidrio', 'Es un residuo peligroso'], c: 1, exp: 'El papel mojado o muy grasoso no puede reciclarse y además arruina el papel limpio que está junto a él.' },
  { q: '¿Dónde debes llevar los medicamentos vencidos?',            opts: ['Al desagüe del baño', 'A la basura común', 'A farmacias o centros de salud', 'Al tacho de plástico'], c: 2, exp: 'Los medicamentos deben ir a puntos de acopio en farmacias o centros de salud para un manejo seguro.' },
  { q: '¿Cuánta energía se ahorra al reciclar aluminio vs fabricarlo nuevo?', opts: ['10%', '40%', '70%', '95%'],                                                      c: 3, exp: '¡Reciclar aluminio ahorra un increíble 95% de energía! Por eso las latas son uno de los materiales más valiosos.' },
  { q: 'Los pañales usados van en:',                                 opts: ['Tacho orgánico', 'Tacho de plástico', 'Tacho sanitario (no reciclable)', 'Tacho de papel'], c: 2, exp: 'Los pañales son residuos sanitarios no reciclables. Van en bolsa bien cerrada en el tacho negro de basura general.' },
  { q: '¿Qué significa el triángulo de flechas en los envases de plástico?', opts: ['Que se puede tirar en cualquier tacho', 'Indica el tipo de plástico y su reciclabilidad', 'Que el producto es peligroso', 'Que fue fabricado en el extranjero'], c: 1, exp: 'El número dentro del triángulo indica el tipo de plástico. Esto ayuda a clasificarlo correctamente en la planta de reciclaje.' },
];

/* ============ RENDER: TACHOS ============ */

const binsNav     = document.getElementById('binsNav');
const binsContent = document.getElementById('binsContent');

bins.forEach((b, i) => {
  /* --- botón de navegación --- */
  const btn = document.createElement('button');
  btn.className = 'bin-nav-btn' + (i === 0 ? ' active' : '');
  btn.style.cssText = `border-color:${b.color};color:${i === 0 ? '#fff' : b.color};background:${i === 0 ? b.color : '#fff'}`;
  btn.innerHTML = `${b.emoji} ${b.name}`;

  btn.addEventListener('click', () => {
    /* resetear todos los botones */
    document.querySelectorAll('.bin-nav-btn').forEach((x, j) => {
      x.style.cssText = `border-color:${bins[j].color};color:${bins[j].color};background:#fff`;
      x.classList.remove('active');
    });
    /* activar el botón pulsado */
    btn.style.cssText = `border-color:${b.color};color:#fff;background:${b.color}`;
    btn.classList.add('active');
    /* mostrar el panel correspondiente */
    document.querySelectorAll('.bin-display').forEach(x => x.classList.remove('active'));
    document.getElementById('bin-' + b.id).classList.add('active');
  });

  binsNav.appendChild(btn);

  /* --- panel de detalle --- */
  const div = document.createElement('div');
  div.className = 'bin-display' + (i === 0 ? ' active' : '');
  div.id = 'bin-' + b.id;
  div.innerHTML = `
    <div class="bin-hero" style="background:${b.bg};color:${b.text}">
      <div class="bin-big-icon">${b.emoji}</div>
      <div>
        <div class="bin-color-badge">${b.colorName}</div>
        <h2>${b.name}</h2>
        <p>${b.desc}</p>
      </div>
    </div>
    <div class="bin-cards-row">
      <div class="bin-info-card">
        <h4 style="color:${b.color}">✅ ¿Qué va aquí?</h4>
        <ul>
          ${b.accept.map(a => `<li><span class="li-ok">✓</span>${a}</li>`).join('')}
        </ul>
      </div>
      <div class="bin-info-card">
        <h4 style="color:#c62828">❌ ¿Qué NO va aquí?</h4>
        <ul>
          ${b.reject.map(r => `<li><span class="li-no">✗</span>${r}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="bin-fact" style="border-color:${b.color}">
      <strong>💡 Dato curioso</strong>${b.fact}
    </div>`;

  binsContent.appendChild(div);
});

/* ============ RENDER: VIAJE DEL RESIDUO ============ */

const journeyEl = document.getElementById('journeySteps');

journey.forEach((s, i) => {
  const step = document.createElement('div');
  step.className = 'journey-step reveal';
  step.innerHTML = `
    <div class="step-dot">${i + 1}</div>
    <div class="step-content">
      <h3><span class="step-emoji">${s.emoji}</span>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`;
  journeyEl.appendChild(step);
});

/* ============ RENDER: ESTADÍSTICAS ============ */

const statsEl = document.getElementById('statsGrid');

stats.forEach(s => {
  const card = document.createElement('div');
  card.className = 'stat-card reveal';
  card.innerHTML = `
    <div class="stat-icon">${s.icon}</div>
    <div class="stat-num">${s.num} <span class="stat-unit">${s.unit}</span></div>
    <div class="stat-label">${s.label}</div>`;
  statsEl.appendChild(card);
});

/* ============ RENDER: CONSEJOS ============ */

const tipsEl = document.getElementById('tipsGrid');

tips.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'tip-card reveal';
  card.style.setProperty('--accent', t.accent);
  card.innerHTML = `
    <div class="tip-num">0${i + 1}</div>
    <div class="tip-body">
      <h4>${t.title}</h4>
      <p>${t.text}</p>
    </div>`;
  tipsEl.appendChild(card);
});

/* ============ RENDER: ERRORES COMUNES ============ */

const mistakesEl = document.getElementById('mistakesGrid');

mistakes.forEach(m => {
  const card = document.createElement('div');
  card.className = 'mistake-card reveal';
  card.innerHTML = `
    <div class="mistake-wrong">
      <div class="mc-icon">${m.wrongIcon}</div>
      <div class="mc-body">
        <span class="wrong-label">❌ Error común</span>
        <strong>${m.wrongTitle}</strong>
        ${m.wrong}
      </div>
    </div>
    <div class="mistake-right">
      <div class="mc-icon">${m.rightIcon}</div>
      <div class="mc-body">
        <span class="right-label">✅ Lo correcto</span>
        <strong>${m.rightTitle}</strong>
        ${m.right}
      </div>
    </div>`;
  mistakesEl.appendChild(card);
});

/* ============ RENDER: ACTIVIDADES ============ */

const activitiesEl = document.getElementById('activitiesGrid');

activities.forEach(a => {
  const card = document.createElement('div');
  card.className = 'activity-card reveal';
  card.innerHTML = `
    <div class="activity-top" style="background:${a.color}">
      <div class="activity-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </div>
    <div class="activity-bottom">
      <span class="difficulty ${a.difficulty}">${a.diff}</span>
    </div>`;
  activitiesEl.appendChild(card);
});

/* ============ QUIZ ============ */

let qIdx     = 0;
let score    = 0;
let lives    = 3;
let answered = false;

const shuffled = [...quizData].sort(() => Math.random() - 0.5);

function buildQuiz() {
  const w = document.getElementById('quizWrapper');
  w.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" id="qpf"></div>
      </div>
      <div class="quiz-score-badge" id="qsb">⭐ 0 pts</div>
    </div>
    <div class="quiz-q-num" id="qqn">Pregunta 1 de ${shuffled.length}</div>
    <div class="quiz-question" id="qq"></div>
    <div class="quiz-opts" id="qo"></div>
    <div class="quiz-feedback" id="qf"></div>
    <div class="quiz-bottom">
      <div class="quiz-lives" id="ql">❤️❤️❤️</div>
      <button class="quiz-next-btn" id="qnb" onclick="nextQ()" disabled>Siguiente →</button>
    </div>`;
  renderQ();
}

function renderQ() {
  const q    = shuffled[qIdx];
  const fill = (qIdx / shuffled.length) * 100;

  document.getElementById('qpf').style.width = fill + '%';
  document.getElementById('qqn').textContent  = `Pregunta ${qIdx + 1} de ${shuffled.length}`;
  document.getElementById('qq').textContent   = q.q;
  document.getElementById('qf').className     = 'quiz-feedback';
  document.getElementById('qnb').disabled     = true;
  answered = false;

  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('qo').innerHTML = q.opts.map((o, i) => `
    <div class="quiz-opt" onclick="answerQ(${i})">
      <div class="quiz-opt-letter">${letters[i]}</div>${o}
    </div>`).join('');

  updateLives();
}

function answerQ(idx) {
  if (answered) return;
  answered = true;

  const q         = shuffled[qIdx];
  const opts      = document.querySelectorAll('.quiz-opt');
  const isCorrect = idx === q.c;

  opts.forEach(x => x.classList.add('disabled'));
  opts[idx].classList.add(isCorrect ? 'correct' : 'wrong');

  if (!isCorrect) {
    opts[q.c].classList.add('correct');
    lives = Math.max(0, lives - 1);
  } else {
    score += 10;
  }

  updateLives();
  document.getElementById('qsb').textContent = `⭐ ${score} pts`;

  const fb = document.getElementById('qf');
  fb.className = 'quiz-feedback show ' + (isCorrect ? 'ok' : 'fail');
  fb.innerHTML = `<strong>${isCorrect ? '¡Correcto! 🎉' : 'No era esa... 😅'}</strong>${q.exp}`;

  document.getElementById('qnb').disabled = false;
  if (qIdx === shuffled.length - 1) {
    document.getElementById('qnb').textContent = '🏁 Ver resultado';
  }
}

function updateLives() {
  const icons = Array(3).fill('❤️');
  for (let i = 0; i < 3 - lives; i++) icons[i] = '🖤';
  document.getElementById('ql').textContent = icons.join('');
}

function nextQ() {
  qIdx++;
  if (qIdx >= shuffled.length) {
    showResult();
    return;
  }
  renderQ();
}

function showResult() {
  const pct   = Math.round((score / (shuffled.length * 10)) * 100);
  const medal = pct >= 90 ? '🏆' : pct >= 70 ? '🥇' : pct >= 50 ? '🥈' : '📚';
  const msg   = pct >= 90 ? '¡Eres un experto en reciclaje! El planeta te necesita.'
              : pct >= 70 ? '¡Muy bien! Ya sabes bastante, sigue aprendiendo.'
              : pct >= 50 ? '¡Vas bien! Repasa las tarjetas y vuelve a intentarlo.'
              : 'Aún hay mucho por aprender. ¡Lee bien las secciones y vuelve!';

  document.getElementById('quizWrapper').innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:5rem;margin-bottom:16px">${medal}</div>
      <div style="font-family:'Baloo 2',cursive;font-size:2.5rem;font-weight:800;color:var(--green)">${score} puntos</div>
      <div style="font-size:1rem;color:var(--muted);margin:10px 0 4px">${score / 10} de ${shuffled.length} respuestas correctas (${pct}%)</div>
      <div style="font-size:1.05rem;font-weight:600;margin:16px 0 28px">${msg}</div>
      <button class="quiz-next-btn" onclick="restartQuiz()" style="font-size:1.1rem;padding:14px 32px">🔄 ¡Jugar de nuevo!</button>
    </div>`;
}

function restartQuiz() {
  qIdx  = 0;
  score = 0;
  lives = 3;
  shuffled.sort(() => Math.random() - 0.5);
  buildQuiz();
}

buildQuiz();

/* ============ PROMESA ECOLÓGICA ============ */

function signPledge() {
  document.querySelector('.pledge-btn').style.display = 'none';
  const done = document.getElementById('pledgeDone');
  done.style.display    = 'block';
  done.style.animation  = 'popIn 0.5s ease';
}

/* ============ SCROLL REVEAL ============ */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

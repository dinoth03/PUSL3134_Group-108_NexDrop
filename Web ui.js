/* ============================================
   NEXDROP WEB APP — app.js
   Full e-commerce logic: routing, cart, modal, wishlist
============================================ */

/* ===== PRODUCT DATA ===== */
const PRODUCTS = {
  phones: [
    { id:'p1', brand:'Apple', name:'iPhone 16 Pro Max', price:1199, oldPrice:1399, rating:'★★★★★ 4.9 (2.4k)', img:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop', deal:'-14%', specs:{Display:'6.9" OLED',Chip:'A18 Pro',Camera:'48MP',Battery:'4685mAh'}, colors:['#1c1c1e','#f5f5f0','#6e4e37','#4a6741'], desc:'The most powerful iPhone ever. Titanium design with A18 Pro chip. ProMotion 120Hz Always-On display.' },
    { id:'p2', brand:'Samsung', name:'Galaxy S25 Ultra', price:1099, oldPrice:1299, rating:'★★★★★ 4.8 (1.9k)', img:'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop', deal:'-15%', specs:{Display:'6.9" Dynamic AMOLED',Chip:'Snapdragon 8 Elite',Camera:'200MP',Battery:'5000mAh'}, colors:['#2c2c2c','#f0ebe3','#6b7f9e','#4a3728'], desc:'Galaxy AI built-in. Titanium frame, embedded S Pen, and the most advanced mobile camera system.' },
    { id:'p3', brand:'OnePlus', name:'OnePlus 13', price:799, oldPrice:999, rating:'★★★★☆ 4.6 (987)', img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop', deal:'-20%', specs:{Display:'6.82" AMOLED',Chip:'Snapdragon 8 Gen 4',Camera:'50MP Hasselblad',Battery:'6000mAh'}, colors:['#2a2a2a','#1a3a2a','#3a2040'], desc:'Hasselblad optics, 100W SUPERVOOC charging, and Snapdragon 8 Gen 4 in a premium package.' },
    { id:'p4', brand:'Google', name:'Pixel 9 Pro XL', price:1099, oldPrice:1199, rating:'★★★★★ 4.7 (1.2k)', img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop', deal:'-8%', specs:{Display:'6.8" LTPO OLED',Chip:'Tensor G4',Camera:'50MP',Battery:'5060mAh'}, colors:['#2c2c2c','#f0e6d2','#c4b89a','#4a5568'], desc:'Smartest Pixel ever. Gemini AI built-in, 7 years of OS updates, best computational photography.' },
    { id:'p5', brand:'Xiaomi', name:'Xiaomi 15 Pro', price:899, oldPrice:1099, rating:'★★★★☆ 4.5 (756)', img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop', deal:'-18%', specs:{Display:'6.73" AMOLED',Chip:'Snapdragon 8 Elite',Camera:'50MP Leica',Battery:'5200mAh'}, colors:['#1a1a2e','#f8f8f8','#2d4a3e'], desc:'Leica optics meet bleeding-edge silicon. 90W HyperCharge and Leica-tuned camera system.' },
    { id:'p6', brand:'Sony', name:'Xperia 1 VI', price:1299, oldPrice:1499, rating:'★★★★☆ 4.4 (412)', img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop', deal:'-13%', specs:{Display:'6.5" 4K OLED',Chip:'Snapdragon 8 Gen 3',Camera:'52MP',Battery:'5000mAh'}, colors:['#1a1a1a','#f5f5f5','#0d2137'], desc:'Creative professional phone. 4K OLED, real-time eye-tracking AF, dedicated shutter button.' },
  ],
  tabs: [
    { id:'t1', brand:'Apple', name:'iPad Pro M4 13"', price:1299, oldPrice:1499, rating:'★★★★★ 4.9 (3.1k)', img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop', deal:'-13%', specs:{Display:'13" Ultra Retina XDR',Chip:'M4',Storage:'256GB',Battery:'40.88Wh'}, colors:['#e0e0e0','#1c1c1e'], desc:'Impossibly thin at 5.1mm. The iPad Pro with M4 chip is the most powerful iPad ever made.' },
    { id:'t2', brand:'Samsung', name:'Galaxy Tab S10 Ultra', price:1099, oldPrice:1349, rating:'★★★★★ 4.8 (2.2k)', img:'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop', deal:'-19%', specs:{Display:'14.6" Dynamic AMOLED',Chip:'Snapdragon 8 Gen 3',Storage:'256GB',Battery:'11200mAh'}, colors:['#2c2c2c','#e8e8e8'], desc:'14.6-inch Galaxy AI powerhouse. Dual front cameras, S Pen included, 11200mAh battery.' },
    { id:'t3', brand:'Apple', name:'iPad Air 11" M2', price:799, oldPrice:899, rating:'★★★★☆ 4.7 (1.8k)', img:'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=600&h=600&fit=crop', deal:'-11%', specs:{Display:'11" Liquid Retina',Chip:'M2',Storage:'128GB',Battery:'28.93Wh'}, colors:['#6b9dad','#f5e6c8','#1c1c1e','#d4c4b0','#e8c0c8'], desc:'Supercharged by M2 chip. Available in gorgeous new colors, tackles demanding creative tasks.' },
    { id:'t4', brand:'Lenovo', name:'Tab P12 Pro', price:649, oldPrice:799, rating:'★★★★☆ 4.4 (678)', img:'https://images.unsplash.com/photo-1527698952439-a3a32af46c97?w=600&h=600&fit=crop', deal:'-19%', specs:{Display:'12.6" AMOLED',Chip:'Snapdragon 870',Storage:'256GB',Battery:'10200mAh'}, colors:['#2a2a2a','#e0e0e0'], desc:'Premium AMOLED for entertainment and productivity. JBL quad speakers, 10200mAh battery.' },
    { id:'t5', brand:'Samsung', name:'Galaxy Tab S10 FE', price:499, oldPrice:649, rating:'★★★★☆ 4.5 (934)', img:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop', deal:'-23%', specs:{Display:'10.9" LCD',Chip:'Snapdragon 7 Gen 3',Storage:'128GB',Battery:'8000mAh'}, colors:['#4a6a8a','#2c2c2c','#e8e8e8','#5a7a4a'], desc:'Fan Edition Tab S10. S Pen support, 8000mAh battery, Galaxy AI at a friendly price.' },
    { id:'t6', brand:'Google', name:'Pixel Tablet 2', price:599, oldPrice:699, rating:'★★★★☆ 4.3 (521)', img:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop', deal:'-14%', specs:{Display:'11" LCD',Chip:'Tensor G3',Storage:'256GB',Battery:'7020mAh'}, colors:['#c4a882','#2c2c2c','#4a6b5a'], desc:'Intelligent tablet with Gemini AI. Doubles as smart home hub with charging speaker dock.' },
  ],
  accessories: [
    { id:'a1', brand:'Apple', name:'AirPods Pro 3', price:249, oldPrice:299, rating:'★★★★★ 4.9 (8.9k)', img:'https://images.unsplash.com/photo-1588423771073-b8903fead714?w=600&h=600&fit=crop', deal:'-17%', specs:{Type:'TWS Earbuds',ANC:'Adaptive',Battery:'30h total',Connect:'Bluetooth 5.4'}, colors:['#f0f0f0','#1c1c1e'], desc:'World\'s most popular earbuds. H2 chip delivers best-in-class ANC and Transparency mode.' },
    { id:'a2', brand:'Sony', name:'WH-1000XM6', price:349, oldPrice:399, rating:'★★★★★ 4.9 (6.1k)', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop', deal:'-13%', specs:{Type:'Over-Ear',ANC:'Industry Best',Battery:'30h',Connect:'Bluetooth 5.3'}, colors:['#1a1a1a','#d4c4b0','#2d4a7a'], desc:'Industry-leading noise canceling. Auto NC Optimizer, 30-hour battery, Precise Voice Pickup.' },
    { id:'a3', brand:'Apple', name:'Apple Watch Ultra 3', price:799, oldPrice:899, rating:'★★★★★ 4.8 (3.4k)', img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop', deal:'-11%', specs:{Display:'49mm LTPO OLED',Chip:'S10',GPS:'Dual-Freq L1+L5',Battery:'72h'}, colors:['#d4d0c8','#e8e0d0'], desc:'Most capable Apple Watch. Titanium case, dual-frequency GPS, 72 hours battery for athletes.' },
    { id:'a4', brand:'Anker', name:'Nano 140W GaN Charger', price:79, oldPrice:99, rating:'★★★★☆ 4.6 (2.1k)', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop', deal:'-20%', specs:{Power:'140W',Ports:'USB-C × 3',Tech:'GaN III',Size:'Compact'}, colors:['#1a1a1a','#ffffff'], desc:'Charge three devices at 140W total. GaN III technology, cool and compact like a deck of cards.' },
    { id:'a5', brand:'Casetify', name:'Ultra Impact Case', price:65, oldPrice:85, rating:'★★★★☆ 4.5 (4.7k)', img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop', deal:'-24%', specs:{Drop:'12ft Protection',Material:'TPU + PC',MagSafe:'Compatible',Style:'Clear'}, colors:['#ff3d71','#7c3aed','#00d4aa','#1a1a1a','#f5f5f5'], desc:'Military-grade protection. MagSafe compatible, withstands drops up to 12 feet in style.' },
    { id:'a6', brand:'Samsung', name:'Galaxy Buds3 Pro', price:249, oldPrice:299, rating:'★★★★☆ 4.7 (1.8k)', img:'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop', deal:'-17%', specs:{Type:'TWS In-Ear',ANC:'Blade Fit ANC',Battery:'30h total',Connect:'Bluetooth 5.4'}, colors:['#f0f0f0','#1c1c1e'], desc:'Galaxy AI earbuds with real-time translation, Blade Fit design, intelligent adaptive ANC.' },
  ]
};

const ALL_PRODUCTS = [...PRODUCTS.phones, ...PRODUCTS.tabs, ...PRODUCTS.accessories];
const DEALS_PRODUCTS = ALL_PRODUCTS.slice(0, 12);
const FLASH_PRODUCTS = [PRODUCTS.phones[2], PRODUCTS.tabs[2], PRODUCTS.accessories[3], PRODUCTS.accessories[0], PRODUCTS.phones[4]];
const TRENDING_PRODUCTS = [PRODUCTS.phones[0], PRODUCTS.phones[1], PRODUCTS.tabs[0], PRODUCTS.accessories[1], PRODUCTS.phones[3], PRODUCTS.accessories[2], PRODUCTS.tabs[1], PRODUCTS.accessories[5]];

/* ===== STATE ===== */
let cart = [];
let wishlist = new Set();
let currentHeroSlide = 0;
let currentPage = 'home';

/* ===== PAGE ROUTING ===== */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + name);
  if (el) { el.classList.add('active'); currentPage = name; }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // show footer only on content pages
  document.querySelector('.site-footer').style.display =
    ['home','phones','tabs','accessories','deals','wishlist','profile'].includes(name) ? '' : '';
}

function setActiveNav(el) {
  if (!el) return;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

/* ===== HERO SLIDER ===== */
function setHeroSlide(idx) {
  document.querySelectorAll('.hero-slide').forEach((s,i) => s.classList.toggle('hs-active', i === idx));
  document.querySelectorAll('.hdot').forEach((d,i) => d.classList.toggle('active', i === idx));
  currentHeroSlide = idx;
}
function changeHeroSlide(dir) {
  setHeroSlide((currentHeroSlide + dir + 3) % 3);
}
setInterval(() => changeHeroSlide(1), 4000);

/* ===== CARD BUILDERS ===== */
function buildCardH(p) {
  const div = document.createElement('div');
  div.className = 'prod-card-h';
  div.innerHTML = `
    ${p.deal ? `<span class="deal-tag">${p.deal}</span>` : ''}
    <button class="wish-btn${wishlist.has(p.id) ? ' wishlisted' : ''}" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlist('${p.id}',this)">
      <i class="${wishlist.has(p.id) ? 'fas' : 'far'} fa-heart"></i>
    </button>
    <img class="thumb" src="${p.img}" alt="${p.name}" loading="lazy" />
    <div class="info">
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-price-row">
        <div><span class="prod-price">$${p.price}</span><span class="prod-old">$${p.oldPrice}</span></div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart('${p.id}')" title="Add to Cart"><i class="fas fa-plus"></i></button>
      </div>
    </div>`;
  div.addEventListener('click', () => openModal(p));
  return div;
}

function buildCard(p) {
  const div = document.createElement('div');
  div.className = 'prod-card';
  div.innerHTML = `
    ${p.deal ? `<span class="deal-tag">${p.deal}</span>` : ''}
    <button class="wish-btn${wishlist.has(p.id) ? ' wishlisted' : ''}" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlist('${p.id}',this)">
      <i class="${wishlist.has(p.id) ? 'fas' : 'far'} fa-heart"></i>
    </button>
    <img class="thumb" src="${p.img}" alt="${p.name}" loading="lazy" />
    <div class="info">
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-rating">${p.rating}</div>
      <div class="prod-price-row">
        <div><span class="prod-price">$${p.price}</span><span class="prod-old">$${p.oldPrice}</span></div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart('${p.id}')" title="Add to Cart"><i class="fas fa-plus"></i></button>
      </div>
    </div>`;
  div.addEventListener('click', () => openModal(p));
  return div;
}

function renderGrid(products, containerId, type = 'grid') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  if (products.length === 0) {
    el.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No products found</h3><p>Try a different filter</p></div>';
    return;
  }
  products.forEach(p => el.appendChild(type === 'h' ? buildCardH(p) : buildCard(p)));
}

/* ===== POPULATE ===== */
function populate() {
  renderGrid(FLASH_PRODUCTS, 'web-flash-products', 'h');
  renderGrid(TRENDING_PRODUCTS, 'web-trending');
  renderGrid(ALL_PRODUCTS, 'web-all-products');
  renderGrid(PRODUCTS.phones, 'phones-grid');
  renderGrid(PRODUCTS.tabs, 'tabs-grid');
  renderGrid(PRODUCTS.accessories, 'accessories-grid');
  renderGrid(DEALS_PRODUCTS, 'deals-grid');
  renderOrders();
}

/* ===== FILTER & SORT ===== */
function filterProducts(category, brand, btn) {
  btn.closest('.chips-wrap,div').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const source = PRODUCTS[category];
  const filtered = brand === 'All' ? source : source.filter(p => p.brand === brand);
  renderGrid(filtered, category + '-grid');
}

function sortProducts(category, mode) {
  const source = [...PRODUCTS[category]];
  if (mode === 'price-asc')  source.sort((a,b) => a.price - b.price);
  if (mode === 'price-desc') source.sort((a,b) => b.price - a.price);
  renderGrid(source, category + '-grid');
}

/* ===== SEARCH ===== */
let searchTimeout;
function handleSearch(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const results = ALL_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      Object.values(p.specs || {}).join(' ').toLowerCase().includes(q)
    );
    document.getElementById('search-result-count').textContent =
      `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`;
    renderGrid(results, 'search-grid');
    showPage('search');
  }, 350);
}

/* ===== MODAL ===== */
function openModal(p) {
  const content = document.getElementById('modal-content');
  const specsHtml = Object.entries(p.specs || {}).map(([k,v]) =>
    `<div class="ms-item"><div class="ms-key">${k}</div><div class="ms-val">${v}</div></div>`).join('');
  const colorsHtml = (p.colors || []).map((c,i) =>
    `<div class="modal-color-dot${i===0?' sel':''}" style="background:${c}" onclick="selectModalColor(this)"></div>`).join('');

  content.innerHTML = `
    <div class="modal-img-col">
      <button class="modal-close" onclick="closeModal()"><i class="fas fa-times"></i></button>
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="modal-info-col">
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-rating">${p.rating}</div>
      <div class="modal-price">$${p.price} ${p.oldPrice ? `<span class="modal-old">$${p.oldPrice}</span>` : ''}</div>
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-spec-title">Specifications</div>
      <div class="modal-specs">${specsHtml}</div>
      ${colorsHtml ? `<div class="modal-spec-title">Colors</div><div class="modal-colors">${colorsHtml}</div>` : ''}
      <button class="modal-add-btn" onclick="addToCart('${p.id}');closeModal()">
        <i class="fas fa-shopping-bag"></i> Add to Cart — $${p.price}
      </button>
    </div>`;

  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function openDetailById(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (p) openModal(p);
}

function selectModalColor(el) {
  el.closest('.modal-colors').querySelectorAll('.modal-color-dot').forEach(d => d.classList.remove('sel'));
  el.classList.add('sel');
}

/* ===== CART ===== */
function addToCart(id) {
  const product = ALL_PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  renderCartDrawer();
  updateBadges();
  showToast('🛍️ Added to cart!');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCartDrawer();
  updateBadges();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCartDrawer();
  updateBadges();
}

function renderCartDrawer() {
  const itemsEl = document.getElementById('cart-drawer-items');
  const footerEl = document.getElementById('cart-drawer-footer');
  const countEl = document.getElementById('cart-count-label');
  const total = cart.reduce((s,i) => s + i.qty, 0);
  countEl.textContent = total;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty-d"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p><p style="font-size:12px;margin-top:8px;color:var(--text-muted)">Add some amazing gadgets!</p></div>`;
    footerEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item-d">
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-d-info">
        <div class="dn">${item.name}</div>
        <div class="dp">$${(item.price * item.qty).toLocaleString()}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.id}')"><i class="fas fa-times"></i></button>
    </div>`).join('');

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 9.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const grandTotal = +(subtotal + shipping + tax).toFixed(2);

  footerEl.innerHTML = `
    <div class="cart-summary-row"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
    <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--accent)">FREE</span>' : '$' + shipping}</span></div>
    <div class="cart-summary-row"><span>Tax (8%)</span><span>$${tax}</span></div>
    <div class="cart-summary-total"><span>Total</span><span>$${grandTotal.toLocaleString()}</span></div>
    <button class="checkout-btn-d" onclick="showToast('🎉 Order placed successfully! Thank you!');closeCart()">
      <i class="fas fa-lock"></i> Checkout Securely
    </button>`;
}

function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== WISHLIST ===== */
function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('wishlisted');
    btn.querySelector('i').className = 'far fa-heart';
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.add(id);
    btn.classList.add('wishlisted');
    btn.querySelector('i').className = 'fas fa-heart';
    showToast('❤️ Saved to wishlist!');
  }
  updateBadges();
  renderWishlist();
  // update all other buttons for same product
  document.querySelectorAll(`.wish-btn[data-id="${id}"]`).forEach(b => {
    b.classList.toggle('wishlisted', wishlist.has(id));
    b.querySelector('i').className = wishlist.has(id) ? 'fas fa-heart' : 'far fa-heart';
  });
}

function renderWishlist() {
  const grid = document.getElementById('wishlist-grid');
  const sub = document.getElementById('wishlist-subtitle');
  if (!grid) return;
  const items = ALL_PRODUCTS.filter(p => wishlist.has(p.id));
  if (sub) sub.textContent = items.length ? `${items.length} item${items.length !== 1 ? 's' : ''} saved` : 'Items saved for later';
  grid.innerHTML = '';
  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it here</p><button class="btn-primary" onclick="showPage('home');setActiveNav(document.querySelector('[data-page=home]'))">Start Shopping</button></div>`;
  } else {
    items.forEach(p => grid.appendChild(buildCard(p)));
  }
}

/* ===== BADGES ===== */
function updateBadges() {
  const cartTotal = cart.reduce((s,i) => s + i.qty, 0);
  const cartBadge = document.getElementById('cart-badge');
  const wishBadge = document.getElementById('wish-badge');
  cartBadge.textContent = cartTotal;
  cartBadge.style.display = cartTotal > 0 ? 'flex' : 'none';
  wishBadge.textContent = wishlist.size;
  wishBadge.style.display = wishlist.size > 0 ? 'flex' : 'none';
}

/* ===== TIMER ===== */
function startTimers() {
  let h = 2, m = 47, s = 13;
  setInterval(() => {
    s--;
    if (s < 0) { s = 59; m--; }
    if (m < 0) { m = 59; h--; }
    if (h < 0) { h = 2; m = 59; s = 59; }
    const hh = String(h).padStart(2,'0');
    const mm = String(m).padStart(2,'0');
    const ss = String(s).padStart(2,'0');
    const pill = document.getElementById('web-timer');
    if (pill) pill.textContent = `${hh}:${mm}:${ss}`;
    const bth = document.getElementById('bt-h');
    const btm = document.getElementById('bt-m');
    const bts = document.getElementById('bt-s');
    if (bth) bth.textContent = hh;
    if (btm) btm.textContent = mm;
    if (bts) bts.textContent = ss;
  }, 1000);
}

/* ===== PROFILE ===== */
function switchProfileTab(btn, tabId) {
  document.querySelectorAll('.psnav').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function renderOrders() {
  const el = document.getElementById('orders-list');
  if (!el) return;
  const orders = [
    { ...PRODUCTS.phones[0], orderId:'#ND-8821', date:'Mar 15, 2026', status:'delivered' },
    { ...PRODUCTS.accessories[0], orderId:'#ND-8810', date:'Mar 10, 2026', status:'shipped' },
    { ...PRODUCTS.tabs[0], orderId:'#ND-8793', date:'Mar 2, 2026', status:'delivered' },
    { ...PRODUCTS.phones[3], orderId:'#ND-8754', date:'Feb 22, 2026', status:'processing' },
  ];
  el.innerHTML = orders.map(o => `
    <div class="order-row">
      <img class="order-img" src="${o.img}" alt="${o.name}" />
      <div class="order-info">
        <strong>${o.name}</strong>
        <span>${o.orderId} · ${o.date}</span>
      </div>
      <span class="order-status status-${o.status}">${o.status.charAt(0).toUpperCase()+o.status.slice(1)}</span>
      <span class="order-price">$${o.price.toLocaleString()}</span>
    </div>`).join('');
}

/* ===== MOBILE MENU ===== */
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ===== SCROLL TOPNAV SHADOW ===== */
window.addEventListener('scroll', () => {
  document.getElementById('topnav').style.boxShadow =
    window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.4)' : '';
});

/* ===== TOAST ===== */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  populate();
  startTimers();
  renderCartDrawer();

  // Close mobile menu on outside click
  document.addEventListener('click', e => {
    const menu = document.getElementById('mobile-menu');
    const ham = document.getElementById('hamburger');
    if (menu.classList.contains('open') && !menu.contains(e.target) && !ham.contains(e.target)) {
      closeMobileMenu();
    }
  });
});
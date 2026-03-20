/* ============================================
   NEXDROP — App Logic (app.js)
   E-Commerce Mobile UI
============================================ */

/* ===== PRODUCT DATA ===== */
const PRODUCTS = {
  phones: [
    {
      id: 'p1', brand: 'Apple', name: 'iPhone 16 Pro Max',
      price: 1199, oldPrice: 1399, rating: '★★★★★ 4.9 (2.4k)',
      img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop',
      deal: '-14%',
      specs: { Display: '6.9" OLED', Chip: 'A18 Pro', Camera: '48MP', Battery: '4685mAh' },
      colors: ['#1c1c1e','#f5f5f0','#6e4e37','#4a6741'],
      desc: 'The most powerful iPhone ever. Titanium design with the all-new A18 Pro chip. ProMotion display at 120Hz with Always-On.'
    },
    {
      id: 'p2', brand: 'Samsung', name: 'Galaxy S25 Ultra',
      price: 1099, oldPrice: 1299, rating: '★★★★★ 4.8 (1.9k)',
      img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop',
      deal: '-15%',
      specs: { Display: '6.9" Dynamic', Chip: 'Snapdragon 8 Elite', Camera: '200MP', Battery: '5000mAh' },
      colors: ['#2c2c2c','#f0ebe3','#6b7f9e','#4a3728'],
      desc: 'Galaxy AI is here. The S25 Ultra features a titanium frame, embedded S Pen, and the most advanced mobile camera system.'
    },
    {
      id: 'p3', brand: 'OnePlus', name: 'OnePlus 13',
      price: 799, oldPrice: 999, rating: '★★★★☆ 4.6 (987)',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      deal: '-20%',
      specs: { Display: '6.82" AMOLED', Chip: 'Snapdragon 8 Gen 4', Camera: '50MP', Battery: '6000mAh' },
      colors: ['#2a2a2a','#1a3a2a','#3a2040'],
      desc: 'Hasselblad camera, 100W SUPERVOOC charging, and Snapdragon 8 Gen 4 deliver a flagship experience at a mid-range price.'
    },
    {
      id: 'p4', brand: 'Google', name: 'Pixel 9 Pro XL',
      price: 1099, oldPrice: 1199, rating: '★★★★★ 4.7 (1.2k)',
      img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
      deal: '-8%',
      specs: { Display: '6.8" LTPO OLED', Chip: 'Tensor G4', Camera: '50MP', Battery: '5060mAh' },
      colors: ['#2c2c2c','#f0e6d2','#c4b89a','#4a5568'],
      desc: 'The smartest Pixel ever. Google Gemini AI built-in, 7 years of OS updates, and the best computational photography on Android.'
    },
    {
      id: 'p5', brand: 'Xiaomi', name: 'Xiaomi 15 Pro',
      price: 899, oldPrice: 1099, rating: '★★★★☆ 4.5 (756)',
      img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop',
      deal: '-18%',
      specs: { Display: '6.73" AMOLED', Chip: 'Snapdragon 8 Elite', Camera: '50MP Leica', Battery: '5200mAh' },
      colors: ['#1a1a2e','#f8f8f8','#2d4a3e'],
      desc: 'Leica optics meet bleeding-edge silicon. The Xiaomi 15 Pro delivers 90W HyperCharge and a stunning Leica-tuned camera system.'
    },
    {
      id: 'p6', brand: 'Sony', name: 'Xperia 1 VI',
      price: 1299, oldPrice: 1499, rating: '★★★★☆ 4.4 (412)',
      img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
      deal: '-13%',
      specs: { Display: '6.5" 4K OLED', Chip: 'Snapdragon 8 Gen 3', Camera: '52MP', Battery: '5000mAh' },
      colors: ['#1a1a1a','#f5f5f5','#0d2137'],
      desc: 'The creative professional\'s phone. 4K OLED display, real-time eye-tracking AF, and a dedicated shutter button for pro photography.'
    }
  ],
  tabs: [
    {
      id: 't1', brand: 'Apple', name: 'iPad Pro M4 13"',
      price: 1299, oldPrice: 1499, rating: '★★★★★ 4.9 (3.1k)',
      img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      deal: '-13%',
      specs: { Display: '13" Ultra Retina XDR', Chip: 'M4', Storage: '256GB', Battery: '40.88Wh' },
      colors: ['#e0e0e0','#1c1c1e'],
      desc: 'Impossibly thin. Astoundingly powerful. The iPad Pro with M4 chip is the ultimate iPad. Thinner than ever at 5.1mm.'
    },
    {
      id: 't2', brand: 'Samsung', name: 'Galaxy Tab S10 Ultra',
      price: 1099, oldPrice: 1349, rating: '★★★★★ 4.8 (2.2k)',
      img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
      deal: '-19%',
      specs: { Display: '14.6" Dynamic AMOLED', Chip: 'Snapdragon 8 Gen 3', Storage: '256GB', Battery: '11200mAh' },
      colors: ['#2c2c2c','#e8e8e8'],
      desc: 'Massive 14.6-inch display with Galaxy AI. The Tab S10 Ultra features a dual front-camera and S Pen included in the box.'
    },
    {
      id: 't3', brand: 'Apple', name: 'iPad Air 11" M2',
      price: 799, oldPrice: 899, rating: '★★★★☆ 4.7 (1.8k)',
      img: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=400&h=400&fit=crop',
      deal: '-11%',
      specs: { Display: '11" Liquid Retina', Chip: 'M2', Storage: '128GB', Battery: '28.93Wh' },
      colors: ['#6b9dad','#f5e6c8','#1c1c1e','#d4c4b0','#e8c0c8'],
      desc: 'Supercharged by the M2 chip. Available in gorgeous new colors with the power to tackle your most demanding creative tasks.'
    },
    {
      id: 't4', brand: 'Lenovo', name: 'Tab P12 Pro',
      price: 649, oldPrice: 799, rating: '★★★★☆ 4.4 (678)',
      img: 'https://images.unsplash.com/photo-1527698952439-a3a32af46c97?w=400&h=400&fit=crop',
      deal: '-19%',
      specs: { Display: '12.6" AMOLED', Chip: 'Snapdragon 870', Storage: '256GB', Battery: '10200mAh' },
      colors: ['#2a2a2a','#e0e0e0'],
      desc: 'Premium AMOLED tablet for entertainment and productivity. JBL quad speakers and up to 10200mAh battery for all-day use.'
    },
    {
      id: 't5', brand: 'Samsung', name: 'Galaxy Tab S10 FE',
      price: 499, oldPrice: 649, rating: '★★★★☆ 4.5 (934)',
      img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop',
      deal: '-23%',
      specs: { Display: '10.9" TFT LCD', Chip: 'Snapdragon 7 Gen 3', Storage: '128GB', Battery: '8000mAh' },
      colors: ['#4a6a8a','#2c2c2c','#e8e8e8','#5a7a4a'],
      desc: 'Fan Edition of the flagship Tab S10. Includes S Pen support, 8000mAh battery, and Galaxy AI features at a wallet-friendly price.'
    },
    {
      id: 't6', brand: 'Google', name: 'Pixel Tablet 2',
      price: 599, oldPrice: 699, rating: '★★★★☆ 4.3 (521)',
      img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      deal: '-14%',
      specs: { Display: '11" LCD', Chip: 'Tensor G3', Storage: '256GB', Battery: '7020mAh' },
      colors: ['#c4a882','#2c2c2c','#4a6b5a'],
      desc: 'The intelligent tablet with Gemini AI built-in. Doubles as a smart home hub with the included charging speaker dock.'
    }
  ],
  accessories: [
    {
      id: 'a1', brand: 'Apple', name: 'AirPods Pro 3',
      price: 249, oldPrice: 299, rating: '★★★★★ 4.9 (8.9k)',
      img: 'https://images.unsplash.com/photo-1588423771073-b8903fead714?w=400&h=400&fit=crop',
      deal: '-17%',
      specs: { Type: 'TWS Earbuds', ANC: 'Adaptive', Battery: '30h total', Connect: 'Bluetooth 5.4' },
      colors: ['#f0f0f0','#1c1c1e'],
      desc: 'The world\'s most popular earbuds just got better. H2 chip delivers best-in-class Active Noise Cancellation and Transparency mode.'
    },
    {
      id: 'a2', brand: 'Sony', name: 'WH-1000XM6',
      price: 349, oldPrice: 399, rating: '★★★★★ 4.9 (6.1k)',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      deal: '-13%',
      specs: { Type: 'Over-Ear', ANC: 'Industry Best', Battery: '30h', Connect: 'Bluetooth 5.3' },
      colors: ['#1a1a1a','#d4c4b0','#2d4a7a'],
      desc: 'Industry-leading noise canceling with the new Auto NC Optimizer. 30-hour battery and crystal-clear Precise Voice Pickup technology.'
    },
    {
      id: 'a3', brand: 'Apple', name: 'Apple Watch Ultra 3',
      price: 799, oldPrice: 899, rating: '★★★★★ 4.8 (3.4k)',
      img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
      deal: '-11%',
      specs: { Display: '49mm LTPO OLED', Chip: 'S10', GPS: 'Dual-Freq L1+L5', Battery: '72h' },
      colors: ['#d4d0c8','#e8e0d0'],
      desc: 'The most capable Apple Watch. Titanium case, dual-frequency GPS, and up to 72 hours of battery life for extreme athletes.'
    },
    {
      id: 'a4', brand: 'Anker', name: 'Nano 140W GaN Charger',
      price: 79, oldPrice: 99, rating: '★★★★☆ 4.6 (2.1k)',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      deal: '-20%',
      specs: { Power: '140W', Ports: 'USB-C x3', Tech: 'GaN III', Size: 'Compact' },
      colors: ['#1a1a1a','#ffffff'],
      desc: 'Charge three devices at 140W total output. GaN III technology keeps it cool and compact — smaller than a deck of cards.'
    },
    {
      id: 'a5', brand: 'Casetify', name: 'Ultra Impact Case',
      price: 65, oldPrice: 85, rating: '★★★★☆ 4.5 (4.7k)',
      img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
      deal: '-24%',
      specs: { Drop: '12ft Protection', Material: 'TPU + PC', MagSafe: 'Compatible', Style: 'Clear' },
      colors: ['#ff3d71','#7c3aed','#00d4aa','#1a1a1a','#f5f5f5'],
      desc: 'Military-grade protection in an eye-catching design. MagSafe compatible and built to withstand drops up to 12 feet.'
    },
    {
      id: 'a6', brand: 'Samsung', name: 'Galaxy Buds3 Pro',
      price: 249, oldPrice: 299, rating: '★★★★☆ 4.7 (1.8k)',
      img: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop',
      deal: '-17%',
      specs: { Type: 'TWS In-Ear', ANC: 'Blade Fit ANC', Battery: '30h total', Connect: 'Bluetooth 5.4' },
      colors: ['#f0f0f0','#1c1c1e'],
      desc: 'Galaxy AI-powered earbuds with real-time translation, Blade Fit design, and intelligent ANC that adapts to your ear shape.'
    }
  ]
};

// Build deals from all products
const DEALS = [
  ...PRODUCTS.phones.slice(0, 2),
  ...PRODUCTS.tabs.slice(0, 2),
  ...PRODUCTS.accessories.slice(0, 2)
].map(p => ({ ...p, deal: '-' + (Math.floor(Math.random() * 20) + 15) + '%' }));

const FLASH = [PRODUCTS.phones[2], PRODUCTS.tabs[2], PRODUCTS.accessories[3], PRODUCTS.accessories[0]];

/* ===== STATE ===== */
let cart = [];
let currentScreen = 'screen-splash';
let history = ['screen-splash'];
let currentSlide = 0;
let detailProduct = null;

/* ===== NAVIGATION ===== */
function goTo(screenId) {
  const from = document.getElementById(currentScreen);
  const to = document.getElementById(screenId);
  if (!to || screenId === currentScreen) return;

  from.classList.add('slide-out');
  from.classList.remove('active');
  setTimeout(() => from.classList.remove('slide-out'), 400);

  to.classList.add('active');

  history.push(screenId);
  currentScreen = screenId;

  const nav = document.getElementById('bottom-nav');
  const splash = ['screen-splash'];
  nav.style.display = splash.includes(screenId) ? 'none' : 'flex';

  // Scroll to top
  to.scrollTop = 0;
}

function goBack() {
  if (history.length < 2) return;
  history.pop();
  const prev = history[history.length - 1];
  const from = document.getElementById(currentScreen);
  const to = document.getElementById(prev);

  from.classList.remove('active');
  to.classList.add('active');
  currentScreen = prev;
  to.scrollTop = 0;
}

function setNav(btn) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ===== RENDER HELPERS ===== */
function createCardH(p) {
  const div = document.createElement('div');
  div.className = 'product-card-h';
  div.innerHTML = `
    ${p.deal ? `<span class="deal-tag">${p.deal}</span>` : ''}
    <button class="wishlist-btn" onclick="event.stopPropagation();toggleWish(this)"><i class="far fa-heart"></i></button>
    <img class="thumb" src="${p.img}" alt="${p.name}" loading="lazy" />
    <div class="info">
      <div class="pname">${p.name}</div>
      <div>
        <span class="pprice">$${p.price}</span>
        ${p.oldPrice ? `<span class="pold">$${p.oldPrice}</span>` : ''}
      </div>
    </div>
  `;
  div.addEventListener('click', () => openDetail(p));
  return div;
}

function createCardV(p) {
  const div = document.createElement('div');
  div.className = 'product-card-v';
  div.innerHTML = `
    ${p.deal ? `<span class="deal-tag">${p.deal}</span>` : ''}
    <button class="wishlist-btn" onclick="event.stopPropagation();toggleWish(this)"><i class="far fa-heart"></i></button>
    <img class="thumb" src="${p.img}" alt="${p.name}" loading="lazy" />
    <div class="info">
      <div class="brand-label">${p.brand}</div>
      <div class="pname">${p.name}</div>
      <div class="prating">${p.rating.substring(0,12)}</div>
      <div class="price-row">
        <span class="pprice">$${p.price}</span>
        <button class="add-btn" onclick="event.stopPropagation();addToCart(${JSON.stringify(p).replace(/"/g,'&quot;')})">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
  div.addEventListener('click', () => openDetail(p));
  return div;
}

/* ===== POPULATE SCREENS ===== */
function populate() {
  // Flash deals
  const flashEl = document.getElementById('flash-products');
  FLASH.forEach(p => flashEl.appendChild(createCardH(p)));

  // Trending (mix)
  const trending = [PRODUCTS.phones[0], PRODUCTS.phones[1], PRODUCTS.tabs[0], PRODUCTS.accessories[1]];
  const trendEl = document.getElementById('trending-products');
  trending.forEach(p => trendEl.appendChild(createCardV(p)));

  // Phones
  const phonesEl = document.getElementById('phones-products');
  PRODUCTS.phones.forEach(p => phonesEl.appendChild(createCardV(p)));

  // Tabs
  const tabsEl = document.getElementById('tabs-products');
  PRODUCTS.tabs.forEach(p => tabsEl.appendChild(createCardV(p)));

  // Accessories
  const accEl = document.getElementById('accessories-products');
  PRODUCTS.accessories.forEach(p => accEl.appendChild(createCardV(p)));

  // Deals
  const dealsEl = document.getElementById('deals-products');
  DEALS.forEach(p => dealsEl.appendChild(createCardV(p)));
}

/* ===== PRODUCT DETAIL ===== */
function openDetail(p) {
  detailProduct = p;
  const container = document.getElementById('detail-content');

  const colorDots = (p.colors || []).map((c, i) =>
    `<div class="color-dot ${i === 0 ? 'selected' : ''}" style="background:${c}" onclick="selectColor(this)"></div>`
  ).join('');

  const specItems = Object.entries(p.specs || {}).map(([k, v]) =>
    `<div class="spec-item"><div class="spec-key">${k}</div><div class="spec-val">${v}</div></div>`
  ).join('');

  container.innerHTML = `
    <div class="detail-img-wrap">
      <button class="detail-back" onclick="goBack()"><i class="fas fa-chevron-left"></i></button>
      <button class="detail-wish" onclick="toggleWish(this)"><i class="far fa-heart"></i></button>
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="detail-body">
      <div class="detail-brand">${p.brand}</div>
      <div class="detail-name">${p.name}</div>
      <div class="detail-rating">${p.rating}</div>
      <div class="detail-price">
        $${p.price}
        ${p.oldPrice ? `<span>$${p.oldPrice}</span>` : ''}
      </div>
      <div class="detail-section">Specifications</div>
      <div class="spec-grid">${specItems}</div>
      ${colorDots ? `<div class="detail-section">Colors</div><div class="color-options">${colorDots}</div>` : ''}
      <div class="detail-section">Description</div>
      <div class="detail-desc">${p.desc}</div>
      <button class="detail-add-btn" onclick="addToCart(${JSON.stringify(p).replace(/"/g,'&quot;')})">
        <i class="fas fa-shopping-bag"></i> Add to Cart
      </button>
    </div>
  `;
  goTo('screen-detail');
}

function selectColor(el) {
  el.closest('.color-options').querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
}

/* ===== CART ===== */
function addToCart(product) {
  // product might be a stringified object passed from onclick
  if (typeof product === 'string') product = JSON.parse(product);

  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  showToast('🛍️ Added to cart!');
  updateCartBadge();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  updateCartBadge();
}

function clearCart() {
  cart = [];
  renderCart();
  updateCartBadge();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.querySelector('.notif-btn .badge');
  if (badge) badge.textContent = total || '0';
}

function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const summaryEl = document.getElementById('cart-summary');

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <p style="font-size:12px;margin-top:8px;color:var(--text-muted)">Add some amazing gadgets!</p>
      </div>`;
    summaryEl.innerHTML = '';
    return;
  }

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="pname">${item.name}</div>
        <div class="pprice">$${(item.price * item.qty).toLocaleString()}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.id}')"><i class="fas fa-times"></i></button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 9.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  summaryEl.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--accent)">FREE</span>' : '$' + shipping}</span></div>
    <div class="summary-row"><span>Tax (8%)</span><span>$${tax}</span></div>
    <div class="summary-row total"><span>Total</span><span>$${total.toLocaleString()}</span></div>
    <button class="checkout-btn" onclick="showToast('🎉 Order placed successfully!')">
      <i class="fas fa-lock"></i> Checkout
    </button>
  `;
}

/* ===== HERO SLIDER ===== */
function setSlide(idx) {
  document.querySelectorAll('.hero-slide').forEach((s, i) => {
    s.classList.toggle('active-slide', i === idx);
  });
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

function autoSlide() {
  const next = (currentSlide + 1) % 3;
  setSlide(next);
}
setInterval(autoSlide, 3500);

/* ===== FLASH TIMER ===== */
function startTimer() {
  let h = 2, m = 47, s = 13;
  const el = document.getElementById('flash-timer');
  setInterval(() => {
    s--;
    if (s < 0) { s = 59; m--; }
    if (m < 0) { m = 59; h--; }
    if (h < 0) { h = 2; m = 59; s = 59; }
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }, 1000);
}

/* ===== WISHLIST ===== */
function toggleWish(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  icon.className = btn.classList.contains('active') ? 'fas fa-heart' : 'far fa-heart';
  if (btn.classList.contains('active')) showToast('❤️ Saved to wishlist!');
}

/* ===== TOAST ===== */
let toastTimeout;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

/* ===== FILTER CHIPS ===== */
document.querySelectorAll('.filter-chips').forEach(wrap => {
  wrap.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      wrap.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
});

/* ===== INIT ===== */
window.addEventListener('DOMContentLoaded', () => {
  populate();
  startTimer();
  renderCart();
  // Auto-proceed from splash
  setTimeout(() => {
    goTo('screen-home');
  }, 2800);
});
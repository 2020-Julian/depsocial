/* ============================================================
   HUNKY DUNKY — App JS
   Carrito, productos, filtros, checkout, validaciones
   ============================================================ */

'use strict';

// ─── DATOS DE PRODUCTOS ──────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: 'Cookies x4',
    category: 'cookies',
    isStarProduct: true,
    price: 39561.67,
    priceDisplay: '$39.562',
    description: 'Nuestra caja insignia. Cuatro sabores artesanales en una caja que se siente como un regalo: chocolate con almendra, chocochip, cookies and cream y arequipe.',
    badge: '⭐ Estrella',
    svgColor: '#D8A15B',
    svg: `<svg viewBox="0 0 100 100" fill="none" width="80" height="80">
      <rect x="15" y="38" width="70" height="50" rx="8" fill="#5A3520"/>
      <rect x="12" y="28" width="76" height="18" rx="7" fill="#7A4A2C"/>
      <rect x="46" y="28" width="8" height="60" rx="3" fill="#F2C078" opacity="0.5"/>
      <rect x="15" y="43" width="70" height="5" rx="2" fill="#F2C078" opacity="0.4"/>
      <path d="M38 28 Q34 18 29 21 Q25 24 33 28" fill="#F2C078"/>
      <path d="M62 28 Q66 18 71 21 Q75 24 67 28" fill="#F2C078"/>
      <circle cx="50" cy="28" r="6" fill="#F2C078"/>
      <circle cx="32" cy="65" r="11" fill="url(#p1g)"/>
      <circle cx="50" cy="65" r="11" fill="url(#p2g)"/>
      <circle cx="68" cy="65" r="11" fill="url(#p3g)"/>
      <text x="50" y="43" text-anchor="middle" fill="#FFF8F0" font-size="5" font-weight="700" letter-spacing="1.5" font-family="sans-serif">HUNKY DUNKY</text>
      <defs>
        <radialGradient id="p1g" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#E8A060"/><stop offset="100%" stop-color="#8A5028"/></radialGradient>
        <radialGradient id="p2g" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#CCC5BE"/><stop offset="100%" stop-color="#5A5450"/></radialGradient>
        <radialGradient id="p3g" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#B8743C"/><stop offset="100%" stop-color="#6A3A10"/></radialGradient>
      </defs>
    </svg>`
  },
  {
    id: 2,
    name: 'Chocochip Cookie',
    category: 'cookies',
    isStarProduct: false,
    price: 10731.20,
    priceDisplay: '$10.731',
    description: 'La clásica reinventada. Chips de chocolate belga distribuidos con precisión artesanal. Crujiente por fuera, perfecta por dentro.',
    badge: 'Cookie',
    svgColor: '#B8743C',
    svg: `<svg viewBox="0 0 100 100" fill="none" width="80" height="80">
      <circle cx="50" cy="50" r="38" fill="url(#ccGrad)"/>
      <circle cx="35" cy="38" r="6.5" fill="#5A2E0E" opacity="0.9"/>
      <circle cx="54" cy="35" r="5.5" fill="#5A2E0E" opacity="0.85"/>
      <circle cx="66" cy="47" r="6" fill="#5A2E0E" opacity="0.8"/>
      <circle cx="58" cy="62" r="5.5" fill="#5A2E0E" opacity="0.85"/>
      <circle cx="38" cy="63" r="5" fill="#5A2E0E" opacity="0.8"/>
      <circle cx="28" cy="53" r="4.5" fill="#5A2E0E" opacity="0.75"/>
      <circle cx="48" cy="50" r="4" fill="#5A2E0E" opacity="0.7"/>
      <defs>
        <radialGradient id="ccGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#F0B060"/>
          <stop offset="55%" stop-color="#C87840"/>
          <stop offset="100%" stop-color="#8A4820"/>
        </radialGradient>
      </defs>
    </svg>`
  },
  {
    id: 3,
    name: 'Brownie Oreo',
    category: 'brownies',
    isStarProduct: false,
    price: 24612.72,
    priceDisplay: '$24.613',
    description: 'Brownie intenso, húmedo y profundo. Con trozos de Oreo que aportan textura y contraste. La versión oscura y poderosa de la felicidad.',
    badge: 'Brownie',
    svgColor: '#4A2A22',
    svg: `<svg viewBox="0 0 100 100" fill="none" width="80" height="80">
      <rect x="15" y="25" width="70" height="55" rx="10" fill="url(#brGrad)"/>
      <rect x="15" y="25" width="70" height="10" rx="10" fill="url(#brTop)"/>
      <rect x="15" y="30" width="70" height="5" fill="url(#brTop)"/>
      <!-- Oreo pieces -->
      <circle cx="32" cy="52" r="9" fill="#1A1A1A" stroke="#2E2E2E" stroke-width="1"/>
      <circle cx="32" cy="52" r="6" fill="#0A0A0A"/>
      <circle cx="32" cy="52" r="3" fill="#EFE7DD" opacity="0.8"/>
      <circle cx="55" cy="48" r="8" fill="#1A1A1A" stroke="#2E2E2E" stroke-width="1"/>
      <circle cx="55" cy="48" r="5.5" fill="#0A0A0A"/>
      <circle cx="55" cy="48" r="2.5" fill="#EFE7DD" opacity="0.8"/>
      <circle cx="68" cy="62" r="6" fill="#1A1A1A" stroke="#2E2E2E" stroke-width="1"/>
      <circle cx="68" cy="62" r="4" fill="#0A0A0A"/>
      <circle cx="68" cy="62" r="2" fill="#EFE7DD" opacity="0.7"/>
      <!-- Gloss on top -->
      <ellipse cx="38" cy="30" rx="20" ry="4" fill="rgba(255,255,255,0.06)"/>
      <defs>
        <linearGradient id="brGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5A2E18"/>
          <stop offset="100%" stop-color="#2E150A"/>
        </linearGradient>
        <linearGradient id="brTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7A4028"/>
          <stop offset="100%" stop-color="#5A2E18"/>
        </linearGradient>
      </defs>
    </svg>`
  }
];

// ─── ESTADO DE LA APP ──────────────────────────────────────── 
const state = {
  cart: [],
  activeFilter: 'all',
  cartOpen: false,
  checkoutOpen: false,
  confirmOpen: false,
  lastOrderName: ''
};

const SHIPPING_COST = 5000;

// ─── UTILIDADES ────────────────────────────────────────────── 
const fmt = (n) => '$' + Math.round(n).toLocaleString('es-CO');
const qs  = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);

// ─── CARRITO ──────────────────────────────────────────────── 
function getCartTotal() {
  return state.cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function getCartCount() {
  return state.cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartUI() {
  const count    = getCartCount();
  const subtotal = getCartTotal();
  const total    = subtotal + (count > 0 ? SHIPPING_COST : 0);

  // Count badge
  const badge = qs('#cartCount');
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);

  // Summary
  qs('#cartSubtotal').textContent = fmt(subtotal);
  qs('#cartShipping').textContent = count > 0 ? fmt(SHIPPING_COST) : '$0';
  qs('#cartTotal').textContent    = fmt(total);

  // Toggle empty state
  const hasItems = state.cart.length > 0;
  qs('#cartEmpty').style.display   = hasItems ? 'none' : 'flex';
  qs('#cartFooter').style.display  = hasItems ? 'block' : 'none';

  // Render items
  renderCartItems();

  // Checkout summary
  renderCheckoutSummary();
  const ctd = qs('#checkoutTotalDisplay');
  if (ctd) ctd.textContent = fmt(total);
}

function renderCartItems() {
  const container = qs('#cartItems');
  container.innerHTML = '';

  state.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;

    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.id = item.id;
    el.innerHTML = `
      <div class="cart-item__img">
        ${product.svg}
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${product.name}</div>
        <div class="cart-item__price">${product.priceDisplay} c/u</div>
      </div>
      <div class="cart-item__qty">
        <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Reducir cantidad">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
      </div>
      <button class="cart-item__remove" data-id="${item.id}" aria-label="Eliminar producto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
        </svg>
      </button>
    `;
    container.appendChild(el);
  });
}

function renderCheckoutSummary() {
  const container = qs('#checkoutSummary');
  if (!container) return;

  const subtotal = getCartTotal();
  const total    = subtotal + (state.cart.length > 0 ? SHIPPING_COST : 0);

  container.innerHTML = state.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="checkout-summary-item">
        <span>${product.name} × ${item.qty}</span>
        <span>${fmt(product.price * item.qty)}</span>
      </div>
    `;
  }).join('') + `
    <div class="checkout-summary-item" style="border-top:1px solid rgba(242,192,120,0.1);padding-top:0.75rem;margin-top:0.25rem;">
      <span>Envío</span><span>${fmt(SHIPPING_COST)}</span>
    </div>
  `;
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ id: productId, qty: 1, price: product.price });
  }

  updateCartUI();
  showToast(`${product.name} agregado al carrito 🍪`);
  animateCartBounce();
}

function changeQty(productId, delta) {
  const existing = state.cart.find(i => i.id === productId);
  if (!existing) return;

  existing.qty += delta;
  if (existing.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  updateCartUI();
}

function animateCartBounce() {
  const trigger = qs('#cartTrigger');
  trigger.classList.add('bounce');
  setTimeout(() => trigger.classList.remove('bounce'), 500);
}

// ─── CART DRAWER OPEN/CLOSE ───────────────────────────────── 
function openCart() {
  state.cartOpen = true;
  qs('#cartDrawer').classList.add('open');
  qs('#cartDrawer').setAttribute('aria-hidden', 'false');
  qs('#cartOverlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  state.cartOpen = false;
  qs('#cartDrawer').classList.remove('open');
  qs('#cartDrawer').setAttribute('aria-hidden', 'true');
  qs('#cartOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

// ─── CHECKOUT ─────────────────────────────────────────────── 
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Agrega productos primero');
    return;
  }
  closeCart();
  renderCheckoutSummary();
  updateCartUI();
  state.checkoutOpen = true;
  qs('#checkoutOverlay').classList.add('modal-overlay--visible');
  qs('#checkoutOverlay').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  state.checkoutOpen = false;
  qs('#checkoutOverlay').classList.remove('modal-overlay--visible');
  qs('#checkoutOverlay').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ─── CONFIRMACIÓN ─────────────────────────────────────────── 
function openConfirmation() {
  renderConfirmSummary();
  state.confirmOpen = true;
  qs('#confirmOverlay').classList.add('modal-overlay--visible');
  qs('#confirmOverlay').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeConfirmation() {
  state.confirmOpen = false;
  qs('#confirmOverlay').classList.remove('modal-overlay--visible');
  qs('#confirmOverlay').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderConfirmSummary() {
  const container = qs('#confirmOrderSummary');
  if (!container) return;
  const subtotal = getCartTotal();
  const total    = subtotal + SHIPPING_COST;

  container.innerHTML = `
    <div style="font-size:var(--text-xs);font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-faint);margin-bottom:0.75rem;">
      Resumen del pedido
    </div>
    ${state.cart.map(item => {
      const p = PRODUCTS.find(p => p.id === item.id);
      if (!p) return '';
      return `
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:var(--text-sm);color:var(--text-muted);padding:0.375rem 0;">
          <span>${p.name} × ${item.qty}</span>
          <span style="font-weight:700;color:var(--white-warm);">${fmt(p.price * item.qty)}</span>
        </div>
      `;
    }).join('')}
    <div style="display:flex;justify-content:space-between;align-items:center;font-size:var(--text-base);font-weight:700;color:var(--white-warm);padding-top:0.75rem;border-top:1px solid var(--border-subtle);margin-top:0.5rem;">
      <span>Total</span>
      <span style="background:linear-gradient(135deg,var(--gold),var(--caramel));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:var(--font-display);font-size:var(--text-lg);">${fmt(total)}</span>
    </div>
  `;
}

function resetAndClose() {
  state.cart = [];
  updateCartUI();
  closeConfirmation();
  // Reset form
  const form = qs('#checkoutForm');
  if (form) form.reset();
  showToast('¡Gracias! Haz tu siguiente pedido cuando quieras.');
}

// ─── VALIDACIÓN DEL FORMULARIO ────────────────────────────── 
function validateField(id, errorId, validator, message) {
  const input = qs(`#${id}`);
  const error = qs(`#${errorId}`);
  if (!input || !error) return true;
  const valid = validator(input.value.trim());
  error.textContent = valid ? '' : message;
  input.classList.toggle('error', !valid);
  return valid;
}

function validateForm() {
  const nameValid  = validateField('f-name',    'err-name',    v => v.length >= 2,                          'Ingresa tu nombre completo');
  const phoneValid = validateField('f-phone',   'err-phone',   v => /^[\d\s\+\-\(\)]{7,18}$/.test(v),       'Número de teléfono inválido');
  const addrValid  = validateField('f-address', 'err-address', v => v.length >= 5,                          'Ingresa una dirección válida');
  return nameValid && phoneValid && addrValid;
}

// ─── FILTROS ──────────────────────────────────────────────── 
function applyFilter(filter) {
  state.activeFilter = filter;

  qsa('.filter-btn').forEach(btn => {
    btn.classList.toggle('filter-btn--active', btn.dataset.filter === filter);
    btn.setAttribute('aria-selected', btn.dataset.filter === filter ? 'true' : 'false');
  });

  qsa('.product-card').forEach(card => {
    const cat = card.dataset.category;
    const isStar = card.dataset.star === 'true';
    let visible = false;
    if (filter === 'all') visible = true;
    else if (filter === 'cookies') visible = cat === 'cookies';
    else if (filter === 'brownies') visible = cat === 'brownies';
    else if (filter === 'estrella') visible = isStar;
    card.classList.toggle('hidden', !visible);
  });
}

// ─── RENDER PRODUCTS ──────────────────────────────────────── 
function renderProducts() {
  const grid = qs('#productsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  PRODUCTS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = `product-card ${p.isStarProduct ? 'product-card--star' : ''} reveal-up`;
    card.style.transitionDelay = `${i * 80}ms`;
    card.dataset.category = p.category;
    card.dataset.star = p.isStarProduct;
    card.setAttribute('role', 'listitem');

    card.innerHTML = `
      <div class="product-card__img">
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
        ${p.svg}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${p.priceDisplay} <small style="font-size:var(--text-xs);opacity:0.7;">COP</small></span>
          <button class="product-card__add add-to-cart-btn" data-product-id="${p.id}" aria-label="Agregar ${p.name} al carrito">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Trigger reveal for newly rendered cards
  setTimeout(() => {
    grid.querySelectorAll('.product-card').forEach(el => observer.observe(el));
  }, 50);
}

// ─── INTERSECTION OBSERVER (REVEAL) ──────────────────────── 
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

function initRevealObserver() {
  qsa('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// ─── TOAST ────────────────────────────────────────────────── 
let toastTimer;
function showToast(msg) {
  const t = qs('#toast');
  t.textContent = msg;
  t.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('visible'), 2800);
}

// ─── HEADER SCROLL ────────────────────────────────────────── 
function initHeaderScroll() {
  const header = qs('#site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── MOBILE MENU ─────────────────────────────────────────── 
function closeMobileMenu() {
  qs('#mobileNav').classList.remove('open');
}

// ─── DELIVERY OPTIONS ─────────────────────────────────────── 
function initDeliveryOptions() {
  qsa('.delivery-option').forEach(opt => {
    opt.addEventListener('click', () => {
      qsa('.delivery-option').forEach(o => o.classList.remove('delivery-option--active'));
      opt.classList.add('delivery-option--active');
    });
  });
}

// ─── FORM REAL-TIME VALIDATION ────────────────────────────── 
function initFormValidation() {
  const fields = [
    { id: 'f-name',    errorId: 'err-name',    validator: v => v.length >= 2,           msg: 'Ingresa tu nombre completo' },
    { id: 'f-phone',   errorId: 'err-phone',   validator: v => /^[\d\s\+\-\(\)]{7,18}$/.test(v), msg: 'Número inválido' },
    { id: 'f-address', errorId: 'err-address', validator: v => v.length >= 5,           msg: 'Dirección muy corta' }
  ];

  fields.forEach(({ id, errorId, validator, msg }) => {
    const input = qs(`#${id}`);
    const error = qs(`#${errorId}`);
    if (!input || !error) return;
    input.addEventListener('blur', () => {
      const valid = validator(input.value.trim());
      error.textContent = valid ? '' : msg;
      input.classList.toggle('error', !valid);
    });
    input.addEventListener('input', () => {
      if (input.classList.contains('error') && validator(input.value.trim())) {
        input.classList.remove('error');
        error.textContent = '';
      }
    });
  });
}

// ─── CART BOUNCE KEYFRAMES (CSS injection) ───────────────── 
function injectBounceStyle() {
  const style = document.createElement('style');
  style.textContent = `
    #cartTrigger.bounce {
      animation: cartBounce 0.45s var(--ease-spring);
    }
    @keyframes cartBounce {
      0%  { transform: scale(1); }
      35% { transform: scale(1.25) rotate(-8deg); }
      65% { transform: scale(0.92); }
      100%{ transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}

// ─── EVENT LISTENERS ──────────────────────────────────────── 
function initEventListeners() {
  // Cart open/close
  qs('#cartTrigger').addEventListener('click', openCart);
  qs('#cartClose').addEventListener('click', closeCart);
  qs('#cartOverlay').addEventListener('click', closeCart);

  // Checkout
  qs('#checkoutBtn').addEventListener('click', openCheckout);
  qs('#checkoutClose').addEventListener('click', closeCheckout);
  qs('#checkoutOverlay').addEventListener('click', (e) => {
    if (e.target === qs('#checkoutOverlay')) closeCheckout();
  });

  // Confirm close
  qs('#confirmOverlay').addEventListener('click', (e) => {
    if (e.target === qs('#confirmOverlay')) closeConfirmation();
  });

  // Add to cart (delegated — handles dynamically rendered cards too)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (btn) {
      const id = parseInt(btn.dataset.productId, 10);
      addToCart(id);
    }
  });

  // Cart item controls (delegated)
  qs('#cartItems').addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('.qty-btn');
    const removeBtn = e.target.closest('.cart-item__remove');

    if (qtyBtn) {
      const id = parseInt(qtyBtn.dataset.id, 10);
      const delta = qtyBtn.dataset.action === 'inc' ? 1 : -1;
      changeQty(id, delta);
    }
    if (removeBtn) {
      const id = parseInt(removeBtn.dataset.id, 10);
      removeFromCart(id);
    }
  });

  // Filters
  qsa('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // Mobile menu
  qs('#mobileMenuBtn').addEventListener('click', () => {
    qs('#mobileNav').classList.toggle('open');
  });

  // Checkout form submit
  qs('#checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const nameVal = qs('#f-name').value.trim();
    state.lastOrderName = nameVal;
    closeCheckout();
    setTimeout(() => {
      openConfirmation();
      showToast(`¡Pedido confirmado, ${nameVal.split(' ')[0]}! 🎉`);
    }, 300);
  });

  // Delivery option click
  initDeliveryOptions();

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.confirmOpen)  closeConfirmation();
      else if (state.checkoutOpen) closeCheckout();
      else if (state.cartOpen)     closeCart();
    }
  });
}

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────── 
function initSmoothScroll() {
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = qs(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ─── INIT ─────────────────────────────────────────────────── 
function init() {
  injectBounceStyle();
  renderProducts();
  updateCartUI();
  initHeaderScroll();
  initRevealObserver();
  initEventListeners();
  initFormValidation();
  initSmoothScroll();

  // Trigger reveal on page load for above-fold elements
  setTimeout(() => {
    qsa('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('revealed');
      }
    });
  }, 80);
}

document.addEventListener('DOMContentLoaded', init);

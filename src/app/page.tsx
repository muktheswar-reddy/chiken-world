'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, X, Minus, Plus, ChevronRight, Menu, ShoppingCart } from 'lucide-react';

/* ============================================================
   DATA
============================================================ */
const WHATSAPP = '919611419108';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'broiler', label: 'Broiler Chicken' },
  { id: 'boneless', label: 'Boneless' },
  { id: 'special', label: 'Special Cuts' },
  { id: 'giblets', label: 'Giblets' },
  { id: 'country', label: 'Country Chicken' },
  { id: 'eggs', label: 'Eggs' },
];

const products = [
  {
    id: 1,
    name: 'Broiler Chicken',
    nameKn: 'ಬ್ರಾಯ್ಲರ್ ಕೋಳಿ',
    desc: 'Freshly slaughtered broiler chicken, cleaned and ready to cook.',
    image: '/images/chicken-curry-cut.png',
    price: 220,
    priceUnit: '/ kg',
    pieces: '8–10 pieces',
    serves: 'Serves 3–4',
    weights: ['500g', '1 kg', '2 kg'],
    badge: null,
    badgeFresh: true,
    category: 'broiler',
  },
  {
    id: 2,
    name: 'Skinless Chicken',
    nameKn: 'ಚರ್ಮರಹಿತ ಚಿಕನ್',
    desc: 'Broiler chicken with skin removed — leaner and healthier choice.',
    image: '/images/skinless-chicken.png',
    price: 240,
    priceUnit: '/ kg',
    pieces: '8–10 pieces',
    serves: 'Serves 3–4',
    weights: ['500g', '1 kg'],
    badge: null,
    badgeFresh: true,
    category: 'broiler',
  },
  {
    id: 3,
    name: 'Boneless Chicken',
    nameKn: 'ಎಲುಬಿಲ್ಲದ ಚಿಕನ್',
    desc: 'Tender boneless pieces, perfect for stir-fries, grills and curries.',
    image: '/images/boneless-chicken.png',
    price: 380,
    priceUnit: '/ kg',
    pieces: '16–20 pieces',
    serves: 'Serves 2–3',
    weights: ['500g', '1 kg'],
    badge: 'Popular',
    badgeFresh: true,
    category: 'boneless',
  },
  {
    id: 4,
    name: 'Chicken Breast',
    nameKn: 'ಚಿಕನ್ ಬ್ರೆಸ್ಟ್',
    desc: 'Lean, high-protein chicken breast. Ideal for grilling and healthy meals.',
    image: '/images/chicken-breast.png',
    price: 400,
    priceUnit: '/ kg',
    pieces: '2 pieces',
    serves: 'Serves 2',
    weights: ['500g', '1 kg'],
    badge: null,
    badgeFresh: true,
    category: 'boneless',
  },
  {
    id: 5,
    name: 'Chicken Mince',
    nameKn: 'ಚಿಕನ್ ಕೀಮಾ',
    desc: 'Freshly minced chicken, perfect for keema curry, momos and kebabs.',
    image: '/images/chicken-keema.png',
    price: 340,
    priceUnit: '/ kg',
    pieces: 'Minced',
    serves: 'Serves 2–3',
    weights: ['500g', '1 kg'],
    badge: null,
    badgeFresh: true,
    category: 'boneless',
  },
  {
    id: 6,
    name: 'Chicken Wings',
    nameKn: 'ಚಿಕನ್ ವಿಂಗ್ಸ್',
    desc: 'Crispy, juicy chicken wings — perfect for frying and BBQ.',
    image: '/images/chicken-wings.png',
    price: 260,
    priceUnit: '/ kg',
    pieces: '10–12 pieces',
    serves: 'Serves 2–3',
    weights: ['500g', '1 kg'],
    badge: null,
    badgeFresh: true,
    category: 'special',
  },
  {
    id: 7,
    name: 'Chicken Drumsticks',
    nameKn: 'ಚಿಕನ್ ಡ್ರಮ್ಸ್ಟಿಕ್ಸ್',
    desc: 'Meaty, flavourful drumsticks — great for roasting and frying.',
    image: '/images/chicken-leg.png',
    price: 290,
    priceUnit: '/ kg',
    pieces: '6–8 pieces',
    serves: 'Serves 2–3',
    weights: ['500g', '1 kg'],
    badge: null,
    badgeFresh: true,
    category: 'special',
  },
  {
    id: 8,
    name: 'Chicken Leg Pieces',
    nameKn: 'ಚಿಕನ್ ಲೆಗ್ ಪೀಸ್',
    desc: 'Juicy full leg pieces with thigh — a family favourite for curries.',
    image: '/images/chicken-leg.png',
    price: 280,
    priceUnit: '/ kg',
    pieces: '4–6 pieces',
    serves: 'Serves 2–3',
    weights: ['500g', '1 kg'],
    badge: null,
    badgeFresh: true,
    category: 'special',
  },
  {
    id: 9,
    name: 'Chicken Curry Cut',
    nameKn: 'ಚಿಕನ್ ಕರ್ರಿ ಕಟ್',
    desc: 'Classic curry cut, bone-in pieces perfect for daily cooking.',
    image: '/images/chicken-curry-cut.png',
    price: 240,
    priceUnit: '/ kg',
    pieces: '12–16 pieces',
    serves: 'Serves 3–4',
    weights: ['500g', '1 kg', '2 kg'],
    badge: null,
    badgeFresh: true,
    category: 'broiler',
  },
  {
    id: 10,
    name: 'Chicken Biryani Cut',
    nameKn: 'ಚಿಕನ್ ಬಿರಿಯಾನಿ ಕಟ್',
    desc: 'Medium-sized bone-in pieces, cut perfectly for dum biryani and pulao.',
    image: '/images/chicken-biryani-cut.png',
    price: 250,
    priceUnit: '/ kg',
    pieces: '8–10 pieces',
    serves: 'Serves 2–3',
    weights: ['500g', '1 kg'],
    badge: 'Popular',
    badgeFresh: true,
    category: 'broiler',
  },
  {
    id: 11,
    name: 'Chicken Liver',
    nameKn: 'ಚಿಕನ್ ಲಿವರ್',
    desc: 'Fresh, rich chicken liver. Excellent for fry, stew and pâté.',
    image: '/images/chicken-liver.png',
    price: 180,
    priceUnit: '/ kg',
    pieces: 'Cleaned & ready',
    serves: 'Serves 2–3',
    weights: ['250g', '500g'],
    badge: null,
    badgeFresh: true,
    category: 'giblets',
  },
  {
    id: 12,
    name: 'Chicken Gizzard',
    nameKn: 'ಚಿಕನ್ ಗಿಜಾರ್ಡ್',
    desc: 'Cleaned chicken gizzards — tender and flavourful when slow-cooked.',
    image: '/images/chicken-gizzard.png',
    price: 180,
    priceUnit: '/ kg',
    pieces: 'Cleaned & ready',
    serves: 'Serves 2–3',
    weights: ['250g', '500g'],
    badge: null,
    badgeFresh: true,
    category: 'giblets',
  },
  {
    id: 13,
    name: 'Country Chicken',
    nameKn: 'ನಾಟಿ ಕೋಳಿ',
    desc: 'Authentic farm-raised desi chicken — superior taste and nutrition.',
    image: '/images/country-chicken-whole.png',
    price: 520,
    priceUnit: '/ kg',
    priceMax: 650,
    pieces: '8–12 pieces',
    serves: 'Serves 3–4',
    weights: ['500g', '1 kg', '1.5 kg'],
    badge: 'Country',
    badgeFresh: true,
    category: 'country',
  },
  {
    id: 14,
    name: 'Farm Fresh Eggs',
    nameKn: 'ತಾಜಾ ಮೊಟ್ಟೆಗಳು',
    desc: 'Farm fresh eggs, rich in nutrients. Available in packs and trays.',
    image: '/images/farm-fresh-eggs.png',
    price: 8,
    priceUnit: '/ egg',
    priceMax: 10,
    pieces: 'Per egg',
    serves: 'Available in packs',
    weights: ['6 pcs', '12 pcs', '30 pcs'],
    badge: null,
    badgeFresh: true,
    category: 'eggs',
  },
];

const whyUs = [
  { icon: '🌿', title: 'Never Frozen', desc: 'Fresh kill daily. Zero cold-chain. Always the freshest.' },
  { icon: '🧼', title: 'Hygienically Clean', desc: 'FSSAI-compliant facility. Gloves, aprons, sanitised daily.' },
  { icon: '🐓', title: 'Farm Sourced', desc: 'Directly sourced from trusted local farms every day.' },
  { icon: '⚡', title: 'Ready When You Are', desc: 'Order on WhatsApp and collect in minutes.' },
  { icon: '⚖️', title: 'Exact Weight', desc: 'Precision-weighed cuts. You get what you pay for.' },
  { icon: '💬', title: 'WhatsApp Orders', desc: 'Book your order anytime — we confirm instantly.' },
];

const storeHours = [
  { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '5:30 AM – 9:30 PM' },
  { day: 'Sunday', time: '5:30 AM – 10:00 PM' },
];

/* ============================================================
   HELPERS & TYPES
============================================================ */

export type Product = typeof products[0];

export interface CartItem {
  id: string; // unique id for cart entry
  product: Product;
  weight: string;
  qty: number;
  computedPrice: number;
}

function getPriceForWeight(product: Product, weight: string) {
  if (product.category === 'eggs') {
    const pcs = parseInt(weight);
    return product.price * (isNaN(pcs) ? 1 : pcs);
  } else {
    let multiplier = 1;
    if (weight === '250g') multiplier = 0.25;
    else if (weight === '500g') multiplier = 0.5;
    else if (weight === '1 kg') multiplier = 1;
    else if (weight === '1.5 kg') multiplier = 1.5;
    else if (weight === '2 kg') multiplier = 2;
    return product.price * multiplier;
  }
}

function buildWAMessage(cart: CartItem[], name: string, phone: string, total: number) {
  let itemsText = cart.map((item, index) => {
    return `${index + 1}. ${item.product.name}\n   Weight: ${item.weight}\n   Quantity: ${item.qty}\n   Price: ₹${item.computedPrice * item.qty}`;
  }).join('\n\n');

  return encodeURIComponent(
    `🐓 *CHIKEN WORLD – New Order*\n\n` +
    `*Customer Details:*\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n\n` +
    `*Order Summary:*\n` +
    `${itemsText}\n\n` +
    `*Total Estimated Amount: ₹${total}*\n\n` +
    `_I want to collect this as takeaway from the store._`
  );
}

function openWA(msg: string) {
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

/* ============================================================
   WHATSAPP ICON SVG
============================================================ */
function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ============================================================
   PRODUCT CARD
============================================================ */
function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (item: CartItem) => void }) {
  const [activeWeight, setActiveWeight] = useState(product.weights[0]);
  const [qty, setQty] = useState(1);
  const currentPrice = getPriceForWeight(product, activeWeight);

  const handleAdd = () => {
    onAddToCart({
      id: Math.random().toString(36).substr(2, 9),
      product,
      weight: activeWeight,
      qty,
      computedPrice: currentPrice
    });
    // Reset qty after adding
    setQty(1);
  };

  return (
    <div className="product-card">
      <div className="product-card-img">
        <Image src={product.image} alt={product.name} width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        {product.badgeFresh && <span className="product-badge-fresh">✓ Fresh</span>}
      </div>
      <div className="product-card-body">
        <div className="product-name">{product.name}</div>
        <div className="product-name-kn">{product.nameKn}</div>
        <div className="product-meta">
          <span>{product.pieces}</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span>{product.serves}</span>
        </div>
        <div className="product-weight-chips">
          {product.weights.map(w => (
            <button key={w} className={`weight-chip ${activeWeight === w ? 'active' : ''}`} onClick={() => setActiveWeight(w)}>
              {w}
            </button>
          ))}
        </div>
        <div className="product-price-row" style={{ alignItems: 'center' }}>
          <div className="product-price">
            ₹{currentPrice}<span>/ {activeWeight}</span>
          </div>
          <div className="qty-stepper" style={{ transform: 'scale(0.9)', transformOrigin: 'right' }}>
            <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}><Minus size={14} /></button>
            <span className="qty-val">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(q => q + 1)}><Plus size={14} /></button>
          </div>
        </div>
        <button className="btn-whatsapp-card" onClick={handleAdd}>
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   CART MODAL
============================================================ */
function CartModal({
  cart,
  onClose,
  onRemove,
  onUpdateQty,
  total
}: {
  cart: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, newQty: number) => void;
  total: number;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = () => {
    if (cart.length === 0) return setError('Cart is empty.');
    if (!name.trim()) return setError('Please enter your name.');
    if (!/^[6-9]\d{9}$/.test(phone.trim())) return setError('Enter a valid 10-digit Indian mobile number.');
    const msg = buildWAMessage(cart, name.trim(), phone.trim(), total);
    openWA(msg);
    onClose();
  };

  return (
    <div className={`modal-overlay open`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div className="modal-handle" />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem' }}>Your Cart</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#888' }}>
            <X size={22} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>
            <ShoppingCart size={40} style={{ opacity: 0.2, margin: '0 auto 10px' }} />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div style={{ maxHeight: '40vh', overflowY: 'auto', marginBottom: 16 }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: 12, borderBottom: '1px solid #eee', paddingBottom: 12, marginBottom: 12 }}>
                <Image src={item.product.image} alt={item.product.name} width={50} height={50} style={{ borderRadius: 8, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.product.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.weight} • ₹{item.computedPrice} each</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <div className="qty-stepper" style={{ padding: '2px 4px' }}>
                      <button className="qty-btn" style={{ width: 24, height: 24 }} onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}><Minus size={12} /></button>
                      <span className="qty-val" style={{ fontSize: '0.85rem' }}>{item.qty}</span>
                      <button className="qty-btn" style={{ width: 24, height: 24 }} onClick={() => onUpdateQty(item.id, item.qty + 1)}><Plus size={12} /></button>
                    </div>
                    <button onClick={() => onRemove(item.id)} style={{ color: '#C8102E', fontSize: '0.75rem', border: 'none', background: 'none', cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16 }}>
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            {/* Name */}
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" placeholder="e.g. Ramesh" value={name} onChange={e => { setName(e.target.value); setError(''); }} />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Mobile Number</label>
              <input className="form-input" placeholder="10-digit number" type="tel" maxLength={10} value={phone} onChange={e => { setPhone(e.target.value.replace(/\D/, '')); setError(''); }} />
            </div>

            {error && <p style={{ color: '#C8102E', fontSize: '0.82rem', marginBottom: 12 }}>{error}</p>}

            <button className="btn-whatsapp-big" style={{ width: '100%', marginTop: 4 }} onClick={handleSubmit}>
              <WaIcon size={18} />
              Checkout on WhatsApp
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#aaa', marginTop: 10 }}>
              Takeaway only — collect from our store
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */
export default function ChikenWorldPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
  
  const cartTotal = cart.reduce((sum, item) => sum + (item.computedPrice * item.qty), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.qty, 0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleAddToCart = (item: CartItem) => {
    setCart(prev => {
      // Check if same product and weight exists
      const existing = prev.find(i => i.product.id === item.product.id && i.weight === item.weight);
      if (existing) {
        return prev.map(i => i.id === existing.id ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...prev, item];
    });
  };

  const updateCartQty = (id: string, qty: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const removeCartItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      {/* ——————— NAVBAR ——————— */}
      <header className="navbar">
        <nav className="navbar-inner">
          {/* Brand */}
          <div>
            <div className="brand-name">CHIKEN WORLD</div>
            <div className="brand-tag">PREMIUM FRESH CHICKEN & EGGS</div>
          </div>

          {/* Desktop nav */}
          <div className="nav-links">
            {[
              { label: 'Products', id: 'products' },
              { label: 'Offers', id: 'offers' },
              { label: 'Store', id: 'store' },
              { label: 'About', id: 'about' },
            ].map(n => (
              <button key={n.id} className="nav-link" onClick={() => scrollToSection(n.id)}>{n.label}</button>
            ))}
          </div>

          {/* Phone */}
          <a href="tel:+919611419108" className="nav-phone" style={{ marginLeft: 'auto' }}>
            <Phone size={15} />
            <span>+91 9611419108</span>
          </a>

          {/* Cart Icon in Nav */}
          <button className="nav-cta" onClick={() => setIsCartOpen(true)} style={{ background: '#f8f9fa', color: '#333', border: '1px solid #eaeaea' }}>
            <ShoppingCart size={17} />
            <span>Cart ({cartItemCount})</span>
          </button>

          {/* Mobile menu btn */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(v => !v)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #eee', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              { label: 'Products', id: 'products' },
              { label: 'Offers', id: 'offers' },
              { label: 'Store Info', id: 'store' },
              { label: 'About Us', id: 'about' },
            ].map(n => (
              <button key={n.id} style={{ textAlign: 'left', background: 'none', border: 'none', padding: '10px 0', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', color: '#333', borderBottom: '1px solid #f0f0f0' }} onClick={() => scrollToSection(n.id)}>
                {n.label} <ChevronRight size={14} style={{ float: 'right', marginTop: 2 }} />
              </button>
            ))}
            <a href="tel:+919611419108" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0', fontSize: '0.95rem', fontWeight: 700, color: '#C8102E' }}>
              <Phone size={15} /> +91 9611419108
            </a>
          </div>
        )}
      </header>

      {/* ——————— HERO ——————— */}
      <motion.section 
        className="hero" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-inner">
          {/* Left copy */}
          <div>
            <div className="hero-badge">
              <span>🐓</span> Bengaluru&apos;s Premium Chicken Store
            </div>
            <h1 className="hero-title">
              Fresh Chicken,<br />
              <em>Everyday.</em><br />
              Only Takeaway.
            </h1>
            <p className="hero-desc">
              Book on WhatsApp, collect from our store. No waiting, no frozen products — 
              just the freshest country & broiler chicken, cut exactly how you want it.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => scrollToSection('products')}>
                Shop Products
              </button>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I want to order chicken from CHIKEN WORLD.')}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-big">
                <WaIcon size={18} />
                Order on WhatsApp
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <span className="hero-stat-val">100%</span>
                <span className="hero-stat-lbl">Fresh Daily</span>
              </div>
              <div>
                <span className="hero-stat-val">25+</span>
                <span className="hero-stat-lbl">Products</span>
              </div>
              <div>
                <span className="hero-stat-val">1000+</span>
                <span className="hero-stat-lbl">Happy Customers</span>
              </div>
              <div>
                <span className="hero-stat-val">5★</span>
                <span className="hero-stat-lbl">Rated on Google</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hero-img-wrap">
            <Image src="/images/hero-banner.png" alt="Fresh chicken and spices at CHIKEN WORLD" width={640} height={440} priority style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="hero-img-tag">
              <span style={{ fontSize: '1.4rem' }}>🐓</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Fresh Today</div>
                <div style={{ fontSize: '0.7rem', color: '#888' }}>Slaughtered & processed fresh</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ——————— PRODUCTS ——————— */}
      <motion.section 
        className="section" 
        id="products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-inner">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-label">Our Menu</span>
              <h2 className="section-title">Fresh Chicken Cuts</h2>
              <p className="section-subtitle">All products are freshly prepared daily. Reserve on WhatsApp & collect.</p>
            </div>
          </div>

          {/* Category pills */}
          <div className="category-pills">
            {categories.map(c => (
              <button key={c.id} className={`category-pill ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ——————— WHY CHOOSE US ——————— */}
      <motion.section 
        className="section" 
        style={{ background: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">The Difference</span>
            <h2 className="section-title">Why CHIKEN WORLD?</h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ——————— OFFERS ——————— */}
      <motion.section 
        className="section" 
        id="offers"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Deals & Offers</span>
            <h2 className="section-title">Special Discounts</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div className="offer-card" style={{ background: 'linear-gradient(135deg, #C8102E 0%, #8A0B20 100%)', color: 'white' }}>
              <div className="offer-tag">Weekend Special</div>
              <h3 className="offer-title">10% OFF on Sunday Takeaways</h3>
              <p className="offer-desc">Order above ₹1000 on Sundays and get 10% flat discount on your bill.</p>
              <button className="btn-secondary" style={{ marginTop: 20, width: 'max-content' }} onClick={() => scrollToSection('products')}>View Menu</button>
            </div>
            <div className="offer-card" style={{ background: '#fff', border: '1px solid #eee' }}>
              <div className="offer-tag" style={{ background: '#f5f5f5', color: '#333' }}>Bulk Orders</div>
              <h3 className="offer-title">Party Orders</h3>
              <p className="offer-desc">Planning a party or function? Get wholesale rates on orders above 10kg.</p>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I want to enquire about bulk/party orders.')}`} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ marginTop: 20, width: 'max-content', display: 'inline-flex' }}>Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ——————— VISIT STORE ——————— */}
      <motion.section 
        className="section" 
        id="store" 
        style={{ background: '#fafafa', borderTop: '1px solid #f0f0f0' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Locate Us</span>
            <h2 className="section-title">Visit Our Store</h2>
            <p className="section-subtitle">We are open 7 days a week. Drop by for the freshest cuts.</p>
          </div>
          <div className="store-grid">
            <div style={{ background: '#fff', borderRadius: 16, padding: 30, border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={20} color="#C8102E" /> Store Timings
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {storeHours.map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid #f5f5f5' }}>
                    <span style={{ fontWeight: 600, color: '#333' }}>{s.day}</span>
                    <span style={{ color: '#666' }}>{s.time}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 30 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={20} color="#C8102E" /> Address
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  CHIKEN WORLD<br />
                  No 2, gagana nilaya, lakshminarayana temple road,<br />
                  Laxminarayana Layout, munnekolala, Marathahalli,<br />
                  Bengaluru, Karnataka 560037
                </p>
                <a href="https://www.google.com/maps/place/Chicken+world/@12.9471997,77.7041933,17z/data=!4m21!1m14!4m13!1m4!2m2!1d77.7105133!2d12.9511667!4e1!1m6!1m2!1s0x3bae138126b31887:0xd5327267b9c402ed!2sChicken+world,+No+2,+gagana+nilaya,+lakshminarayana+temple+road,+Laxminarayana+Layout,+munnekolala,+Marathahalli,+Bengaluru,+Karnataka+560037!2m2!1d77.7089566!2d12.947201!3e0!3m5!1s0x3bae138126b31887:0xd5327267b9c402ed!8m2!3d12.947201!4d77.7089566!16s%2Fg%2F11r9f797hl" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ marginTop: 16, width: '100%', display: 'flex', justifyContent: 'center' }}>Get Directions</a>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 400, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <iframe 
                src="https://maps.google.com/maps?q=Chicken%20world,%20No%202,%20gagana%20nilaya,%20lakshminarayana%20temple%20road,%20Laxminarayana%20Layout,%20munnekolala,%20Marathahalli,%20Bengaluru,%20Karnataka%20560037&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ——————— FOOTER ——————— */}
      <motion.footer 
        className="footer" 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="brand-name" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: 4 }}>CHIKEN WORLD</div>
              <div style={{ color: '#ffb3c1', fontSize: '0.8rem', letterSpacing: 1, fontWeight: 700, marginBottom: 20 }}>PREMIUM FRESH CHICKEN & EGGS</div>
              <p style={{ color: '#ffb3c1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Bengaluru&apos;s most trusted fresh chicken shop. We pride ourselves on hygiene, exact weighing, and farm-fresh quality. Never frozen, always fresh.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: 20 }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Products', 'Offers', 'Store Info', 'About Us'].map(l => (
                  <a key={l} href={`#${l.toLowerCase().split(' ')[0]}`} style={{ color: '#ffb3c1', textDecoration: 'none', fontSize: '0.95rem' }}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: 20 }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <a href="tel:+919611419108" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#ffb3c1', textDecoration: 'none' }}>
                  <Phone size={18} style={{ marginTop: 2 }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600 }}>Call Us</div>
                    <div style={{ fontSize: '0.9rem' }}>+91 9611419108</div>
                  </div>
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#ffb3c1' }}>
                  <MapPin size={18} style={{ marginTop: 2 }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600 }}>Store Address</div>
                    <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>No 2, gagana nilaya, lakshminarayana temple road,<br/>Laxminarayana Layout, munnekolala,<br/>Marathahalli, Bengaluru 560037</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, color: '#ffb3c1', fontSize: '0.85rem' }}>
            <div>&copy; {new Date().getFullYear()} CHIKEN WORLD. All rights reserved.</div>
            <div>Designed with premium quality.</div>
          </div>
        </div>
      </motion.footer>

      {/* Floating Cart Button (shows only when cart has items) */}
      {cartItemCount > 0 && !isCartOpen && (
        <button 
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: '#C8102E',
            color: 'white',
            border: 'none',
            borderRadius: 50,
            padding: '14px 24px',
            fontSize: '1rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxShadow: '0 10px 25px rgba(200, 16, 46, 0.4)',
            cursor: 'pointer',
            zIndex: 90
          }}
        >
          <ShoppingCart size={20} />
          <span>View Cart • {cartItemCount} item(s)</span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: 20 }}>₹{cartTotal}</span>
        </button>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal 
          cart={cart}
          total={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeCartItem}
          onUpdateQty={updateCartQty}
        />
      )}
    </>
  );
}

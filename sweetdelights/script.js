
var products = [

  /* ── SRI LANKAN SAVOURIES ── */
  { id:1,  cat:"sl-savoury", name:"Isso Wade",           emoji:"🦐", image:null, price:1.50, badge:"Local Fave",  desc:"Crispy lentil patties topped with a whole prawn — a Colombo street food classic." },
  { id:2,  cat:"sl-savoury", name:"Fish Cutlets",        emoji:"🐟", image:null, price:1.20, badge:null,          desc:"Spiced tuna and potato croquettes, golden-fried with a crispy crumb coating." },
  { id:3,  cat:"sl-savoury", name:"Vegetable Rotis",     emoji:"🫓", image:null, price:1.00, badge:null,          desc:"Soft flatbread filled with leek, carrot and egg — a Sri Lankan lunchtime staple." },
  { id:4,  cat:"sl-savoury", name:"Egg Bun",             emoji:"🥚", image:null, price:1.80, badge:"Bestseller",  desc:"Fluffy bun stuffed with a curried boiled egg, onions and green chilli." },
  { id:5,  cat:"sl-savoury", name:"Pol Paan",            emoji:"🥥", image:null, price:1.40, badge:null,          desc:"Traditional Sri Lankan coconut bread, slightly sweet and perfectly soft inside." },
  { id:6,  cat:"sl-savoury", name:"Patties",             emoji:"🥧", image:null, price:1.60, badge:"Bestseller",  desc:"Flaky puff pastry filled with spiced chicken, leek and potato." },

  /* ── SRI LANKAN SWEETS & PASTRIES ── */
  { id:7,  cat:"sl-sweet", name:"Kavum",                 emoji:"🌸", image:null, price:2.00, badge:"Traditional", desc:"Deep-fried rice flour and treacle rosettes — a festive Sri Lankan treat." },
  { id:8,  cat:"sl-sweet", name:"Kokis",                 emoji:"❄️", image:null, price:1.80, badge:"Traditional", desc:"Crispy lacy rice flour cookies made with coconut milk, fried to golden perfection." },
  { id:9,  cat:"sl-sweet", name:"Dodol",                 emoji:"🍮", image:null, price:2.50, badge:null,          desc:"Rich, chewy kithul treacle toffee — dark, sticky and deeply caramelised." },
  { id:10, cat:"sl-sweet", name:"Watalappan",            emoji:"🍮", image:null, price:3.50, badge:"Signature",   desc:"Silky steamed coconut custard with jaggery and warm spices. Pure Sri Lankan comfort." },
  { id:11, cat:"sl-sweet", name:"Aluwa",                 emoji:"🍬", image:null, price:1.50, badge:null,          desc:"Melt-in-your-mouth rice flour fudge squares with cashews and cardamom." },
  { id:12, cat:"sl-sweet", name:"Puhul Dosi",            emoji:"🎑", image:null, price:2.20, badge:null,          desc:"Candied ash pumpkin preserve — sweet, fragrant and beautifully translucent." },

  /* ── CAKES ── */
  { id:13, cat:"cake", name:"Black Forest Cake",         emoji:"🍒", image:null, price:28.00, badge:"Popular",   desc:"Layers of dark chocolate sponge, whipped cream and cherries." },
  { id:14, cat:"cake", name:"Sri Lankan Love Cake",      emoji:"💛", image:null, price:30.00, badge:"Signature", desc:"A treasured Burgher recipe — semolina, cashews, pumpkin preserve and rose water." },
  { id:15, cat:"cake", name:"Mango Mousse Cake",         emoji:"🥭", image:null, price:26.00, badge:null,        desc:"Light chiffon base with fresh Alphonso mango mousse and mirror glaze." },
  { id:16, cat:"cake", name:"Red Velvet Cake",           emoji:"❤️", image:null, price:27.00, badge:null,        desc:"Classic red velvet layers with tangy cream cheese frosting." },
  { id:17, cat:"cake", name:"Custom Order Cake",         emoji:"🎂", image:null, price:35.00, badge:"Custom",    desc:"Design your dream cake — tier, flavour and decoration all personalised for you." },

  /* ── SPECIALS ── */
  { id:18, cat:"special", name:"French Macarons (6)",    emoji:"🍬", image:null, price:12.00, badge:"Special",   desc:"Delicate almond shells in seasonal flavours — rose, pistachio, salted caramel." },
  { id:19, cat:"special", name:"Belgian Waffles",        emoji:"🧇", image:null, price:5.50,  badge:"Special",   desc:"Deep-pocketed crispy waffles dusted with icing sugar and fresh berries." },
  { id:20, cat:"special", name:"Japanese Mochi (4)",     emoji:"🍡", image:null, price:8.00,  badge:"Special",   desc:"Soft glutinous rice cakes filled with red bean, matcha or strawberry cream." },
  { id:21, cat:"special", name:"Turkish Baklava",        emoji:"🍯", image:null, price:9.00,  badge:"Popular",   desc:"Layers of golden filo pastry, crushed pistachios and orange blossom syrup." },
  { id:22, cat:"special", name:"Italian Tiramisu",       emoji:"☕", image:null, price:6.50,  badge:"Special",   desc:"Espresso-soaked ladyfingers layered with mascarpone cream and cocoa." },
  { id:23, cat:"special", name:"Portuguese Custard Tart",emoji:"🥧", image:null, price:3.80,  badge:"Special",   desc:"Flaky pastry shells filled with silky egg custard, caramelised on top." }
];

var badgeClass = {
  "Bestseller" :"b-bestseller",
  "Local Fave" :"b-localfave",
  "Traditional":"b-traditional",
  "Signature"  :"b-signature",
  "Popular"    :"b-popular",
  "Custom"     :"b-custom",
  "Special"    :"b-special"
};

/* ── CART ── */
var cart = [];

/* ── RENDER PRODUCTS ── */
function renderProducts(filter) {
  var grid = document.getElementById("products-grid");
  if (!grid) return;

  var list = (filter && filter !== "all")
    ? products.filter(function(p){ return p.cat === filter; })
    : products;

  var html = "";
  for (var i = 0; i < list.length; i++) {
    var p = list[i];

    /* image area */
    var imgHtml;
    if (p.image) {
      imgHtml = '<img src="' + p.image + '" alt="' + p.name + '" '
              + 'onerror="this.style.display=\'none\';'
              + 'this.parentNode.querySelector(\'.emoji-fallback\').style.display=\'flex\'">'
              + '<span class="emoji-fallback" style="display:none;font-size:4rem;'
              + 'width:100%;height:100%;align-items:center;justify-content:center">'
              + p.emoji + '</span>';
    } else {
      imgHtml = '<span class="emoji-fallback" style="font-size:4rem;'
              + 'width:100%;height:100%;display:flex;align-items:center;justify-content:center">'
              + p.emoji + '</span>';
    }

    /* badge */
    var badgeHtml = p.badge
      ? '<span class="badge ' + (badgeClass[p.badge] || "") + '">' + p.badge + '</span>'
      : "";

    html += '<div class="product-card" style="animation-delay:' + (i * 0.06) + 's">'
          +   '<div class="product-img">' + imgHtml + '</div>'
          +   '<div class="product-body">'
          +     badgeHtml
          +     '<h3>' + p.name + '</h3>'
          +     '<p class="product-desc">' + p.desc + '</p>'
          +     '<div class="product-footer">'
          +       '<span class="product-price">$' + p.price.toFixed(2) + '</span>'
          +       '<button class="add-btn" onclick="addToCart(' + p.id + ')">Add to Cart</button>'
          +     '</div>'
          +   '</div>'
          + '</div>';
  }
  grid.innerHTML = html;
}

/* ── FILTER ── */
function setupTabs() {
  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      var all = document.querySelectorAll(".tab");
      for (var j = 0; j < all.length; j++) all[j].classList.remove("active");
      this.classList.add("active");
      renderProducts(this.getAttribute("data-filter"));
    });
  }
}

/* ── ADD TO CART ── */
function addToCart(id) {
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) { p = products[i]; break; }
  }
  if (!p) return;

  var found = false;
  for (var j = 0; j < cart.length; j++) {
    if (cart[j].id === id) { cart[j].qty++; found = true; break; }
  }
  if (!found) cart.push({ id:p.id, name:p.name, emoji:p.emoji, price:p.price, qty:1 });

  refreshCart();
  openCart();
}

/* ── CHANGE QTY ── */
function changeQty(id, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) cart.splice(i, 1);
      break;
    }
  }
  refreshCart();
}

/* ── REFRESH CART UI ── */
function refreshCart() {
  /* count */
  var total = 0, count = 0;
  for (var i = 0; i < cart.length; i++) count += cart[i].qty;
  document.getElementById("cart-count").textContent = count;

  var body = document.getElementById("cart-body");
  var foot = document.getElementById("cart-foot");

  if (cart.length === 0) {
    body.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    foot.style.display = "none";
    return;
  }

  var html = "";
  for (var j = 0; j < cart.length; j++) {
    var item = cart[j];
    var sub = (item.price * item.qty).toFixed(2);
    total += item.price * item.qty;
    html += '<div class="cart-item">'
          +   '<div>'
          +     '<div class="ci-name">' + item.emoji + ' ' + item.name + '</div>'
          +     '<div class="ci-price">$' + sub + '</div>'
          +   '</div>'
          +   '<div class="ci-qty">'
          +     '<button class="qbtn" onclick="changeQty(' + item.id + ',-1)">−</button>'
          +     '<span>' + item.qty + '</span>'
          +     '<button class="qbtn" onclick="changeQty(' + item.id + ',1)">+</button>'
          +   '</div>'
          + '</div>';
  }
  body.innerHTML = html;
  document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
  foot.style.display = "block";
}

/* ── CART OPEN / CLOSE ── */
function openCart() {
  document.getElementById("cart-sidebar").classList.add("show");
  document.getElementById("cart-overlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("show");
  document.getElementById("cart-overlay").classList.remove("show");
}

/* ── WHATSAPP ORDER ── */
function sendWhatsAppOrder() {
  if (cart.length === 0) return;
  var lines = "", total = 0;
  for (var i = 0; i < cart.length; i++) {
    var it = cart[i];
    lines += "• " + it.qty + "x " + it.name + " ($" + (it.price * it.qty).toFixed(2) + ")\n";
    total += it.price * it.qty;
  }
  var msg = "Hello Sweet Delights! 🍮\n\nI'd like to place an order:\n\n"
          + lines + "\nTotal: $" + total.toFixed(2)
          + "\n\nPlease confirm availability. Thank you!";
  cart = [];
  refreshCart();
  closeCart();
  window.open("https://wa.me/94774567890?text=" + encodeURIComponent(msg), "_blank");
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

/* ── CONTACT FORM → WhatsApp ── */
function setupContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var name    = document.getElementById("form-name").value;
    var number  = document.getElementById("form-number").value;
    var message = document.getElementById("form-message").value;
    var text = "Hi, I'm " + name + " (" + number + ").\n\n" + message;
    window.open("https://wa.me/94774567890?text=" + encodeURIComponent(text), "_blank");
    var ok = document.getElementById("form-success");
    ok.style.display = "block";
    form.reset();
    setTimeout(function(){ ok.style.display = "none"; }, 4000);
  });
}

/* ── NAVBAR SCROLL ── */
function setupNavScroll() {
  window.addEventListener("scroll", function() {
    var nav = document.getElementById("navbar");
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  renderProducts("all");
  setupTabs();
  setupContactForm();
  setupNavScroll();

  /* cart toggle button */
  document.getElementById("cart-toggle").addEventListener("click", function() {
    if (document.getElementById("cart-sidebar").classList.contains("show")) closeCart();
    else openCart();
  });
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("whatsapp-order").addEventListener("click", sendWhatsAppOrder);
});
/* =====================================================================
   CONFIGURAÇÃO DA LOJA - edite aqui
   whatsapp: número só com dígitos, com DDI 55. Ex.: "5599988887777"
   Deixe vazio ("") e os botões apontam para o Direct do Instagram.
   ===================================================================== */
var CONFIG = {
  whatsapp: "556699309063",  // (66) 9930-9063
  instagram: "https://www.instagram.com/verdeesal",
  instagramDm: "https://ig.me/m/verdeesal"
};

function ctaLink(msg){
  var texto = msg || "Olá, Verde & Sal! Vim pelo site e quero saber mais sobre as peças disponíveis.";
  if (CONFIG.whatsapp) {
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(texto);
  }
  return CONFIG.instagramDm;
}

// --- Aplica o link em todos os botões de CTA ---
document.querySelectorAll("[data-cta]").forEach(function(el){
  el.addEventListener("click", function(e){
    e.preventDefault();
    var msg = el.getAttribute("data-cta-msg") || null;
    window.open(ctaLink(msg), "_blank", "noopener,noreferrer");
  });
});
document.querySelectorAll("[data-cta-msg]").forEach(function(el){
  if (el.hasAttribute("data-cta")) return;
  el.addEventListener("click", function(e){
    e.preventDefault();
    window.open(ctaLink(el.getAttribute("data-cta-msg")), "_blank", "noopener,noreferrer");
  });
});

// --- Ano do rodapé ---
document.getElementById("ano").textContent = new Date().getFullYear();

// --- Header com fundo ao rolar ---
var header = document.getElementById("header");
function onScroll(){
  header.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", onScroll, {passive:true});
onScroll();

// --- Menu mobile ---
var burger = document.getElementById("burger");
var menu = document.getElementById("mobileMenu");
function closeMenu(){ burger.classList.remove("open"); menu.classList.remove("open"); burger.setAttribute("aria-expanded","false"); }
burger.addEventListener("click", function(){
  var open = menu.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
menu.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", closeMenu); });

// --- FAQ (accordion) ---
document.querySelectorAll(".faq-q").forEach(function(btn){
  btn.addEventListener("click", function(){
    var item = btn.parentElement;
    var isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach(function(o){
      o.classList.remove("open");
      o.querySelector(".faq-q").setAttribute("aria-expanded","false");
      var oa = o.querySelector(".faq-a");
      oa.style.maxHeight = null;
      oa.hidden = true;
    });
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded","true");
      var a = item.querySelector(".faq-a");
      a.hidden = false;
      a.style.maxHeight = "0px";
      void a.offsetHeight;
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});

// --- Marquee (duplica conteúdo para loop contínuo) ---
var track = document.getElementById("marqueeTrack");
track.innerHTML = track.innerHTML + track.innerHTML;

// --- Reveal com IntersectionObserver ---
var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced) {
  document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
} else if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, {threshold: 0.12, rootMargin: "0px 0px -40px 0px"});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
}

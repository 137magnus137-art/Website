// mc-nav.js - provides the navigation mount and simple active-link behavior
(function(){
  function mountNav(){
    const el = document.getElementById('mc-nav-mount');
    if(!el) return;
    el.innerHTML = `
      <nav class="mc-nav">
        <a href="index.html">Home</a>
        <a href="chronicle.html">Chronicle</a>
        <a href="covenant.html">Covenant</a>
        <a href="library.html">Library</a>
        <a href="myth.html">Myth</a>
      </nav>`;
    const links = el.querySelectorAll('a');
    links.forEach(a=>{
      if(location.pathname.endsWith(a.getAttribute('href'))){
        a.classList.add('is-active');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', mountNav);
})();

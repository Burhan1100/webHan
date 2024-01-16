// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navmenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//navbar fixx
window.onscroll = function(){
     const header = document.querySelector('header');
     const toTop = document.querySelector('#to-top');
     const navfixed = header.offsetTop;

     if(window.scrollY > navfixed){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
     } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
     }
}

//klik diluar menu
window,addEventListener('click', function (e){
   if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
   }
});

//dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function (){
   if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
   } else {
      html.classList.remove('dark');
      localStorage.theme = 'light'
   }
});

//pindah posisi togle sesui mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   darkToggle.checked = true;
 } else {
   darkToggle.checked = false;
 }

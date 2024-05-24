<script>
    import { onMount } from 'svelte';
    let menuOpen = false;
    let mybutton;
  
    function toggleMenu() {
      menuOpen = !menuOpen;
    }
  
    function scrollFunction() {
      if (window.pageYOffset > 20) {
        mybutton.classList.remove('hidden');
      } else {
        mybutton.classList.add('hidden');
      }
    }
  
    function topFunction() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    onMount(() => {
      mybutton = document.getElementById("myBtn");
      window.addEventListener('scroll', scrollFunction);
  
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    });
  </script>
  
  <header class="border-b text-gray-800 p-4 md:p-4">
    <nav class="container mx-auto flex items-center justify-between">
      <div>
        <img class="w-1/3 mb-4 sm:mb-0" aria-hidden="true" src="media/images/SvelteLogo.png" alt="">
      </div>
      <div class={menuOpen ? 'block' : 'hidden md:flex'} id="menu">
        <a href="#about" class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
            aria-label="About">About</a>
        <a href="#contact" class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
            aria-label="Contact">Contact</a>
        <a href="#news" class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
            aria-label="News">News</a>
        <a href="#portfolio" class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
            aria-label="Portfolio">Portfolio</a>
        <a href="#resume" class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
            aria-label="Resume">Resume</a>
        <a href="#fun" class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
            aria-label="Fun">FUN?</a>
      </div>
      <button class="md:hidden" on:click={toggleMenu}>
        <svg class={menuOpen ? 'hidden' : 'w-6 h-6'} stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg class={menuOpen ? 'w-6 h-6' : 'hidden'} stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </nav>
  </header>

  <button on:click={topFunction} id="myBtn" title="Go to top" class="hidden fixed bottom-8 right-8 z-50 cursor-pointer p-3 rounded-full text-lg">
    <img src="media/images/icons8-arrow-up-90.png" alt="Go Up" width="40" height="40">
  </button>

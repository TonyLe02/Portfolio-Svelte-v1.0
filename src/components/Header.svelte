<script>
  import { onMount } from "svelte";
  let menuOpen = false;
  let mybutton;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function scrollFunction() {
    if (window.pageYOffset > 20) {
      mybutton.classList.remove("hidden");
    } else {
      mybutton.classList.add("hidden");
    }
  }

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  onMount(() => {
    mybutton = document.getElementById("myBtn");
    window.addEventListener("scroll", scrollFunction);

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });
</script>

<section>
  <nav class="p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img
          src="/media/images/powered-madewithsvelte-dark.png"
          alt="Svlete Logo"
          class="w-32"
        />
      </div>
      <div class="hidden md:flex space-x-6">
        <a
          href="#about"
          class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
          >About</a
        >
        <a
          href="#contact"
          class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
          >Contact</a
        >
        <a
          href="#news"
          class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
          >News</a
        >
        <a
          href="#portfolio"
          class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
          >Portfolio</a
        >
        <a
          href="#resume"
          class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
          >Resume</a
        >
        <a
          href="#fun"
          class="px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
          >FUN?</a
        >
      </div>
      <div class="md:hidden">
        <button
          id="menu-button"
          class="focus:outline-none"
          on:click={toggleMenu}
        >
          {#if menuOpen}
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          {:else}
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          {/if}
        </button>
      </div>
    </div>
    <div
      id="menu"
      class={`md:hidden mt-2 dropdown-transition ${menuOpen ? "open" : ""}`}
    >
      <a
        href="#about"
        class="block px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
        >About</a
      >
      <a
        href="#contact"
        class="block px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
        >Contact</a
      >
      <a
        href="#news"
        class="block px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
        >News</a
      >
      <a
        href="#portfolio"
        class="block px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
        >Portfolio</a
      >
      <a
        href="#resume"
        class="block px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
        >Resume</a
      >
      <a
        href="#fun"
        class="block px-4 py-2 hover:text-yellow-500 transition duration-300 ease-in-out"
        >FUN?</a
      >
    </div>
  </nav>
</section>

<button
  on:click={topFunction}
  id="myBtn"
  title="Go to top"
  class="hidden fixed bottom-8 right-8 z-50 cursor-pointer p-3 rounded-full text-lg"
>
  <img
    src="/media/images/icons8-arrow-up-90.png"
    alt="Go Up"
    width="40"
    height="40"
  />
</button>

<style>
  .dropdown-transition {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
    max-height: 0;
  }

  .dropdown-transition.open {
    max-height: 500px;
  }
</style>

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

<!-- Flowbite Navbar -->
<nav class="bg-white shadow border-gray-200 dark:bg-gray-900">
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="./index.html" class="flex items-center">
      <img
        src="static/assets/favicon.png"
        alt="LeWorks Logo"
        class="h-6 mr-2 sm:h-9"
      />
      <span
        class="self-center text-2xl text-gray-800 font-semibold whitespace-nowrap dark:text-white"
      >
        LeWorks
      </span>
    </a>
    <div class="flex md:order-2">
      <button
        id="theme-toggle"
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      >
        <svg
          id="theme-toggle-dark-icon"
          class="hidden w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
        <svg
          id="theme-toggle-light-icon"
          class="hidden w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="#about"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-svelte md:p-0 dark:text-white md:dark:hover:text-svelte dark:hover:bg-gray-700 dark:hover:text-svelte md:dark:hover:bg-transparent"
            >About</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-svelte md:p-0 dark:text-white md:dark:hover:text-svelte dark:hover:bg-gray-700 dark:hover:text-svelte md:dark:hover:bg-transparent"
            >Contact</a
          >
        </li>
        <li>
          <a
            href="#internship"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-svelte md:p-0 dark:text-white md:dark:hover:text-svelte dark:hover:bg-gray-700 dark:hover:text-svelte md:dark:hover:bg-transparent"
            >Internship</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-svelte md:p-0 dark:text-white md:dark:hover:text-svelte dark:hover:bg-gray-700 dark:hover:text-svelte md:dark:hover:bg-transparent"
            >Projects</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Back to top button -->
<button
  on:click={topFunction}
  id="myBtn"
  title="Go to top"
  class="hidden fixed bottom-8 right-8 z-50 cursor-pointer p-3 rounded-full text-lg"
>
  <img
    src="/media/images/arrow-up-icon.png"
    alt="Go Up"
    width="40"
    height="40"
  />
</button>

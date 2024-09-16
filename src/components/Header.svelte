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
  <!-- Navigation Bar -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://svelte.dev/"
        target="_blank"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/media/images/made-with-svelte-dark-icon.png"
          class="h-8"
          alt="Svelte Icon"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Svelte</span
        >
      </a>
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
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
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
</section>

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

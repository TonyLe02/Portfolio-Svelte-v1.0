<script>
  import { particlesConfig } from "../../particles-config.js";
  import { onMount } from "svelte";

  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  // This function will be called when the window is loaded
  window.onload = function () {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    }
  };

  onMount(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    }
  });
</script>

<section id="about" class="bg-gray-800 p-10 text-center">
  <div id="particles-js"></div>
  <img
    src="media/images/profile-picture.jpg"
    alt="Profile Picture"
    class="rounded-full w-32 h-32 mx-auto mb-4"
    aria-hidden="true"
  />
  <h1
    class="block bg-clip-text text-transparent font-extrabold text-4xl py-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-2"
  >
    My name is Tony Nguyen Le
  </h1>
  <p
    class="text-xl bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-8"
  >
    I'm an aspiring developer with a passion for data technology.
  </p>

  <p class="text-2xl mb-8 text-white">
    Currently in my 3rd year of IT & Information Systems at the University of
    Agder.
  </p>

  <p class="text-2xl mb-8 text-white">
    I enjoy building applications and am constantly learning new things to
    improve my skills.
  </p>

  <p class="text-2xl mb-8 text-white">
    I hope you enjoy scrolling through and learning more about me!
  </p>
  <a
    href="https://www.linkedin.com/in/tonynl02"
    target="_blank"
    class="flex justify-center bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white font-bold py-2 px-4 hover:bg-gradient-to-r hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 rounded transition duration-300 ease-in-out"
  >
    Want to learn more about me?
  </a>
</section>

<style>
  #particles-js {
    position: absolute;
    top: 0; /* Align to the top of the parent element */
    left: 0; /* Align to the left of the parent element */
    width: 100%; /* Take the full width of the parent element */
    height: 100%; /* Take the full height of the parent element */
    background-color: #1f2937; /* Adjust the color as needed */
    z-index: -1; /* Ensure particles are behind the content */
  }

  #about {
    position: relative; /* Establish a stacking context */
    z-index: 1; /* Ensure this section is above the particles */
    /* Rest of your styles */
  }
</style>

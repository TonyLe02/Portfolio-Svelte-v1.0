<script>
  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<section id="contact" class="bg-nero text-white text-center p-8">
  <div class="container mx-auto">
    <h2
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-red-500 mb-4"
    >
      Contact Information
    </h2>
    <p class="text-xl mb-4">
      I'm always open to new opportunities and collaborations.
    </p>
    <p class="text-xl mb-4">
      Feel free to get in touch with me through the following channels:
    </p>
    <ul>
      <li>
        <a href="mailto:lee.tony2002@gmail.com" target="_blank">
          <img
            src="/media/images/email-icon.png"
            alt="Email"
            width="30"
            height="30"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tonynl02" target="_blank">
          <img
            src="/media/images/linkedin-icon.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/TonyLe02" target="_blank">
          <img
            src="/media/images/github-icon.png"
            alt="GitHub"
            width="30"
            height="30"
          />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/tonyle02" target="_blank">
          <img
            src="/media/images/instagram-icon.png"
            alt="Instagram"
            width="30"
            height="30"
          />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/tonyle300602" target="_blank">
          <img
            src="/media/images/facebook-icon.png"
            alt="Facebook"
            width="30"
            height="30"
          />
        </a>
      </li>
    </ul>
  </div>
</section>

<style>
  #contact ul {
    display: flex;
    justify-content: center; /* Centers items horizontally */
    padding: 0; /* Removes default padding */
    margin: 0; /* Removes default margin */
    list-style-type: none; /* Removes bullet points */
  }

  #contact li {
    margin: 0 10px; /* Adds spacing between icons */
  }

  #contact a {
    display: flex;
    align-items: center; /* Centers icons vertically if needed */
  }
</style>

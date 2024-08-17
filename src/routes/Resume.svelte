<script>
  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<section id="experience " class="bg-black text-white p-8">
  <div class="container mx-auto">
    <h2 class="text-5xl mb-4">Experience </h2>
    <p class="text-xl mb-8">Learn more about my experience and skills:</p>
    <h2
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4"
    >
      My Role in NITO Studentene
    </h2>
    <h2
      class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4"
    >
      (Mar 2022 - 2025)
    </h2>
    <p class="text-xl mb-4">
      As the Chairperson for NITO Studentene at Kristiansand, I've led a team to
      organize courses and events, gaining valuable experience in team
      leadership, project management, and event organization.
    </p>
    <p class="mb-4">
      This role has not only strengthened my leadership skills, but also my
      ability to work effectively in a team and manage complex projects.
    </p>
    <div class="flex flex-wrap justify-center items-center mt-4">
      <img
        src="/media/images/nito-landsmøte.jpg"
        alt="NITO Landsmøte"
        class="w-1/2 mb-4 sm:mb-0"
        aria-hidden="true"
      />
      <img
        src="/media/images/nito-stand.jpg"
        alt="NITO Stand"
        class="w-1/2 mb-4 sm:mb-0"
        aria-hidden="true"
      />
    </div>
    <p class="text-3xl text-green-500 font-bold mt-4">Skills Learned:</p>
    <ul class="text-lg list-disc list-inside">
      <li>Leadership</li>
      <li>Teamwork</li>
      <li>Project Management</li>
      <li>Event Organization</li>
      <li>Communication</li>
    </ul>
  </div>
</section>

<style>
  ul {
    list-style-type: none;
  }
  li::before {
    content: "✓";
    padding-right: 10px;
    color: rgb(34, 197, 94);
  }
</style>

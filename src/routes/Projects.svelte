<script>
  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<section id="projects" class="bg-nero text-white p-8">
  <div class="container mx-auto">
    <h2
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4"
    >
      Programming Project - 3rd Semester
    </h2>
    <h2
      class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4"
    >
      (Aug 2023 - 2024)
    </h2>
    <p class="text-xl mb-4">
      During my third semester at the University of Agder, I participated in a
      challenging programming project from Nøsted &. Our task was to create an
      information system for the maintenance of winches. We designed a model for
      filling out service forms that employees or mechanics could complete, as
      well as checklists that needed to be ticked off.
    </p>
    <p class="mb-4">
      All the form information was stored in a database using MariaDB. With this
      data, we were able to set up a service order overview. This allowed us to
      go back to the order, view the information added, and make changes as
      needed.
    </p>
    <p class="mb-4">
      The project was developed using .NET & C#, which required us to become
      familiar with these technologies. This provided us with valuable
      experience in using powerful tools for web development.
    </p>
    <p class="mb-4">
      I'm also happy to share that I got an A during this project. The images
      below provide a glimpse into the user interface of our application. They
      showcase the service form and checklist features, as well as the service
      order overview. Our goal was to create a user-friendly interface that made
      the maintenance process more efficient and manageable.
    </p>
<div class="container mx-auto py-8">
  <div class="flex justify-center mb-4">
    <img
      src="/media/images/grade-result.png"
      alt="Grade Result"
      class="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
      aria-hidden="true"
    />
  </div>
</div>

<!-- Image Section -->
<div class="container mx-auto py-8">
  <div class="flex flex-wrap justify-center gap-6">
    <div class="w-full sm:w-1/2 md:w-1/1 lg:w-full px-2 mb-4">
      <img
        src="/media/images/nøsted-app-1.png"
        alt="Project Image 1"
        class="w-full h-auto object-cover rounded-lg shadow-md"
        aria-hidden="true"
      />
    </div>
    <div class="w-full sm:w-1/2 md:w-1/1 lg:w-full px-2 mb-4">
      <img
        src="/media/images/nøsted-app-2.png"
        alt="Project Image 2"
        class="w-full h-auto object-cover rounded-lg shadow-md"
        aria-hidden="true"
      />
    </div>
  </div>
</div>


    <p class="text-3xl text-green-500 font-bold mt-4">Skills Learned:</p>
    <ul class="text-lg list-disc list-inside">
      <li>System Analysis</li>
      <li>Database Management with MariaDB</li>
      <li>Web Development with .NET & C#</li>
      <li>User Interface Design</li>
      <li>Project Management</li>
    </ul>
  </div>
</section>
<hr />

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

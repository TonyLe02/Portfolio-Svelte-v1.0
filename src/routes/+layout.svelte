<!-- +layout.svelte -->
<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import About from "../components/About.svelte";
  import History from "../routes/History.svelte";
  import Contact from "../routes/Contact.svelte";
  import Internship from "../routes/Internship.svelte";
  import Projects from "./Projects.svelte";
  import Resume from "../routes/Resume.svelte";
  import Academic from "../routes/Academic.svelte";
</script>

<Header />

<main>
  <About />
  <Contact />
  <History />
  <Internship />
  <Projects />
  <Resume />
  <Academic />
</main>

<Footer />

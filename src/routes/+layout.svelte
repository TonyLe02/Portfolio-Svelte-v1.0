<!-- +layout.svelte -->
<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import About from "../components/About.svelte";
  import History from "../routes/History.svelte";
  import Contact from "../routes/Contact.svelte";
  import Internship from "../routes/Internship.svelte";
  import Portfolio from "../routes/Portfolio.svelte";
  import Resume from "../routes/Resume.svelte";
  import Academic from "../routes/Academic.svelte";
</script>

<Header />

<main>
  <About />
  <History />
  <Contact />
  <Internship />
  <Portfolio />
  <Resume />
  <Academic />
</main>

<Footer />

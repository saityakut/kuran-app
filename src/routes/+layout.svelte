<script lang="ts">
	import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";
    
</script>


<Navbar />

<main>
    <slot />
</main>

<Footer />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

  :global(*) {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: var(--light);
  }

  /* color variables*/

  :global(:root) {
    --primary: #887fff;
    --secondary: #f3a712;
    --dark: #12192C;
    --light: #ebebeb;
  }

  :global(body) {
    background-color: #1e232b;
    max-width: 100%;
    overflow-x: hidden;
    height: 100%;
  }

  :global(html) {
    max-width: 100%;
    overflow-x: hidden;
    height: 100%;
  }
</style>
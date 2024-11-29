<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
  <Header />
  <main class="flex-1 max-w-screen-xl justify-center">
    <slot />
  </main>
  <Footer />
</div>

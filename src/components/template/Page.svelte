<script>
  import Aside from "./Aside.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<div class="flex flex-col gap-5 min-h-screen bg-black text-white">
  <Header />
  <div class="flex-1 flex max-w-7xl mx-auto w-full gap-5">
    <main class="flex-1">
      <slot />
    </main>
    <Aside />
  </div>
  <Footer />
</div>

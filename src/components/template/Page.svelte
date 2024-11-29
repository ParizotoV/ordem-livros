<script>
  import Header from "./Header.svelte";
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
  <Header />
  <main>
    <slot />
  </main>
</div>

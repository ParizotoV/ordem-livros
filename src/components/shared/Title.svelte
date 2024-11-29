<script lang="ts">
  let { main, secondary }: { main: string; secondary: string } = $props();
</script>

<div class="flex flex-col">
  <h1 class="text-3xl font-black">{main}</h1>
  <p class="text-sm text-zinc-400">{secondary}</p>
</div>

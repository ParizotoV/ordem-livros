<script lang="ts">
  import type { Serie } from "../../entities/Series";

  let { serie }: { serie: Serie } = $props();
</script>

{#if serie}
  <a
    href="/series/{serie.id}"
    class="flex flex-col rounded-md overflow-hidden border border-zinc-800 relative"
  >
    <img src={serie.image} alt="Imagem da Serie" class="h-96 object-cover" />
    <div class="flex flex-col gap-2 p-5">
      <span class="text-2xl font-black">{serie.title}</span>
      <span class="text-sm text-zinc-400 text-justify">{serie.description}</span>
      <button class="button blue self-end">
        Leia mais
      </button>
    </div>
  </a>
{/if}

<script lang="ts">
  import type { Author } from "../../entities/Authors";

  let { author }: { author: Author } = $props();
</script>

{#if author}
  <div class="">
    <a
      href="/autores/{author.id}"
      class="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"
    >
      <img src={author.image} alt="Foto do Autor" class="h-96 object-cover" />
      <div class="absolute bottom-0 w-full justify-end flex px-6 py-4 bg-black/50">
        <span class="text-2xl font-bold">{author.name}</span>
      </div>
    </a>
  </div>
{/if}

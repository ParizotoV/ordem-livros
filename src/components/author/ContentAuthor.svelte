<script lang="ts">
  import { marked } from "marked";
  import type { Author } from "../../entities/Authors";
  let { author }: { author: Author } = $props();
</script>

{#if author}
  <div class="flex flex-col gap-5">
    <img
      src={author.image}
      alt="Foto do Autor"
      class="h-96 object-cover rounded-md"
    />
    <article class="prose lg:prose-xl prose-invert">
      {@html marked.parse(author.biography)}
    </article>
  </div>
{/if}

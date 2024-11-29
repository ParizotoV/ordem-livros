<script lang="ts">
  import { IconBrandAmazon } from "@tabler/icons-svelte";
  import type { Book } from "../../entities/Book";

  let { book }: { book: Book } = $props();
</script>

{#if book}{/if}
<a
  href={book.link}
  target="_blank"
  class="flex flex-col rounded-md overflow-hidden bg-zinc-800"
>
  <img src={book.image} alt="Imagem do Livro" class="h-96" />
  <div class="flex-1 flex flex-col p-5 gap-2">
    <span class="flex-1 font-bold text-center">{book.title}</span>
    <button class="button blue">
      <IconBrandAmazon size={25} />
      <span>Link do Livro</span>
    </button>
  </div>
</a>

<script>
  import ItemAuthor from "../../components/author/ItemAuthor.svelte";
  import Title from "../../components/shared/Title.svelte";
  import authors from "../../constants/authors";
</script>

<div class="flex flex-col gap-10">
  <Title
    main="Autores"
    secondary="Conheça os autores que escrevem as histórias que você ama!"
  />
  <div class="grid grid-cols-2 gap-5">
    {#each authors as author}
      <ItemAuthor {author} />
    {/each}
  </div>
</div>

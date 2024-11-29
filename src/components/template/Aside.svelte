<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="
  flex flex-col self-start border border-zinc-800
  p-5max-w-7xl gap-10 w-72 rounded-md p-5
  "
>
  <Menu title="Navegação">
    <MenuItem text="Início" href="/" />
    <MenuItem text="Personagens" href="/" />
    <MenuItem text="Autores" href="/autores" />
    <MenuItem text="Séries" href="/" />
  </Menu>
  <Menu title="Principais autores">
    <MenuItem text="J.K. Rowling" href="/autores/j-k-rowling" />
    <MenuItem text="J.R.R. Tolkien" href="/autores/j-r-r-tolkien" />
    <MenuItem text="George R.R. Martin" href="/autores/george-r-r-martin" />
  </Menu>
  <Menu title="Outras categorias">
    <MenuItem text="Últimas Notícias" href="/" />
    <MenuItem text="Séries Populares" href="/" />
    <MenuItem text="Facebook" href="/" />
    <MenuItem text="Instagram" href="/" />
    <MenuItem text="Youtube" href="/" />
  </Menu>
</aside>

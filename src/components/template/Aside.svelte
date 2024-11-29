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
    <MenuItem text="J.K. Rowling" href="/" />
    <MenuItem text="J.R.R. Tolkien" href="/" />
    <MenuItem text="George R.R. Martin" href="/autores/george-martin" />
  </Menu>
  <Menu title="Outras categorias">
    <MenuItem text="Últimas Notícias" href="/autores/george-martin" />
    <MenuItem text="Séries Populares" href="/autores/george-martin" />
    <MenuItem text="Facebook" href="/autores/george-martin" />
    <MenuItem text="Instagram" href="/autores/george-martin" />
    <MenuItem text="Youtube" href="/autores/george-martin" />
  </Menu>
</aside>

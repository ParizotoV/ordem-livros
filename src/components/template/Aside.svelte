<script>
  import {
    IconBook,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
    IconFriends,
    IconHome,
    IconRss,
    IconSquare1,
    IconSquare2,
    IconSquare3,
    IconUser,
  } from "@tabler/icons-svelte";
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
    <MenuItem text="Início" href="/">
      <IconHome size={20} />
    </MenuItem>
    <MenuItem text="Personagens" href="/">
      <IconFriends size={20} />
    </MenuItem>
    <MenuItem text="Autores" href="/autores">
      <IconUser size={20} />
    </MenuItem>
    <MenuItem text="Séries" href="/">
      <IconBook size={20} />
    </MenuItem>
  </Menu>
  <Menu title="Principais autores">
    <MenuItem text="J.K. Rowling" href="/autores/j-k-rowling">
      <IconSquare1 size={20} />
    </MenuItem>
    <MenuItem text="J.R.R. Tolkien" href="/autores/j-r-r-tolkien">
      <IconSquare2 size={20} />
    </MenuItem>
    <MenuItem text="George R.R. Martin" href="/autores/george-r-r-martin">
      <IconSquare3 size={20} />
    </MenuItem>
  </Menu>
  <Menu title="Outras categorias">
    <MenuItem text="Últimas Notícias" href="/">
      <IconRss size={20} />
    </MenuItem>
    <MenuItem text="Séries Populares" href="/">
      <IconBook size={20} />
    </MenuItem>
    <MenuItem text="Facebook" href="/">
      <IconBrandFacebook size={20} />
    </MenuItem>
    <MenuItem text="Instagram" href="/">
      <IconBrandInstagram size={20} />
    </MenuItem>
    <MenuItem text="Youtube" href="/">
      <IconBrandYoutube size={20} />
    </MenuItem>
  </Menu>
</aside>

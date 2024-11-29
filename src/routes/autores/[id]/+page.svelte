<script lang="ts">
  import { page } from "$app/stores";
  import ContentAuthor from "../../../components/author/ContentAuthor.svelte";
  import type { Author } from "../../../entities/Authors";
</script>

<ContentAuthor author={$page.data as Author} />

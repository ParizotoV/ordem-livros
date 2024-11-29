<script lang="ts">
  import { page } from "$app/stores";
  import ContentSerie from "../../../components/serie/ContentSerie.svelte";
  import type { Serie } from "../../../entities/Series";
</script>

<ContentSerie serie={$page.data as Serie} />

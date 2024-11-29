<script>
  import { onMount } from "svelte";

  onMount(() => {
    const caixa = document.querySelector(".caixa");

    // @ts-ignore
    caixa.addEventListener("click", () => {
      // @ts-ignore
      caixa.style.backgroundColor = "blue";
    });
  });
</script>

<div class="caixa"></div>

<style>
  .caixa {
    width: 100px;
    height: 100px;
    background-color: crimson;
    border: 2px solid white;
  }
</style>

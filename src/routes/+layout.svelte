<script lang="ts">
  import "../app.scss";
  import favicon from "$lib/assets/favicon.svg";
  import categories from "$lib/data/categories.json";
  import { getCategoryId } from "$lib";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>BZFlag Server Plugins</title>
</svelte:head>

<header>
  <h1>BZFlag Server Plugins</h1>
  <nav>
    {#each categories as category, i (category.name)}
      <a href="#{getCategoryId(category.name)}">{category.name}</a>
      {#if i < categories.length}
        •
      {/if}
    {/each}
  </nav>
</header>

{@render children()}

<footer>
  <div>
    <a href="https://www.bzflag.org" target="_blank" rel="noopener noreferrer">BZFlag</a> •
    <a href="https://github.com/The-Noah/bzfs-plugins" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
  <div>
    Copyright &copy; {new Date().getFullYear()} <a href="https://noahdunbar.com" target="_blank">Noah Dunbar</a>
  </div>
</footer>

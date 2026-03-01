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

<style lang="scss">
  header {
    width: 100%;
    height: 200px;
    background:
      linear-gradient(#0008, #000d),
      url("cover.jpg") no-repeat center fixed;
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @include mobile {
      justify-content: flex-start;
    }

    & > * {
      padding: 1rem;
    }

    * {
      color: #fff;
      text-shadow: 0 1px 8px #0007;
    }

    nav {
      position: absolute;
      bottom: 0;
    }
  }

  footer {
    width: 100%;
    padding: 1rem 0;
    background-color: #141b22;
    font-size: 0.9rem;
    text-align: center;
    display: flex;

    @include mobile {
      flex-direction: column;
    }

    * {
      color: #f0f0f0;
    }

    & > div {
      padding: 0.5rem 1rem;
      flex: 1;
    }
  }
</style>

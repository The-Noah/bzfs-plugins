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
    {/each}
  </nav>
</header>

{@render children()}

<footer>
  <div>
    <a href="https://www.bzflag.org" target="_blank" rel="noopener noreferrer">BZFlag</a> ·
    <a href="https://github.com/The-Noah/bzfs-plugins" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
  <div>
    &copy; {new Date().getFullYear()} <a href="https://noahdunbar.com" target="_blank">Noah Dunbar</a>
  </div>
</footer>

<style lang="scss">
  @use "sass:math";

  header {
    width: 100%;
    padding: 2rem 1rem;
    background:
      linear-gradient(#000a, #000e),
      url("cover.jpg") no-repeat center fixed;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @include mobile {
      justify-content: flex-start;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      @include mobile {
        gap: 0.25rem;
      }

      a {
        padding: 0.5rem 1rem;
        border-radius: math.div($border-radius, 2);
        transition:
          background-color $tt $ease,
          backdrop-filter $tt $ease;

        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(0.5rem);
          text-decoration: none;
        }
      }
    }
  }

  footer {
    width: 100%;
    padding: 2rem;
    background-color: #000;
    color: #999;
    font-size: 0.9rem;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
</style>

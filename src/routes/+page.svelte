<script lang="ts">
  import { getCategoryId } from "$lib";
  import authors from "$lib/data/authors.json";
  import categories from "$lib/data/categories.json";
  import plugins from "$lib/data/plugins.json";
</script>

<div class="container">
  {#each categories as category (category.name)}
    <div id={getCategoryId(category.name)}>
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      <div class="cards">
        {#each plugins
          .filter((plugin) => plugin.category === category.name)
          .sort((a, b) => (a.name > b.name ? 1 : -1)) as plugin (plugin.name + plugin.author)}
          <div>
            <h3>
              <a
                href={plugin.github
                  ? `https://github.com/${authors[plugin.author].github}/${plugin.github}`
                  : plugin.bitbucket
                    ? `https://bitbucket.org/${authors[plugin.author].bitbucket}/${plugin.bitbucket}`
                    : `https://forums.bzflag.org/viewtopic.php?t=${plugin.forum}`}
                target="_blank"
                rel="noopener noreferrer">{plugin.name}</a
              >
            </h3>
            <p>{plugin.description}</p>
            <small>
              By <a
                href="https://forums.bzflag.org/memberlist.php?mode=viewprofile&u={authors[plugin.author].bzid}"
                target="_blank"
                rel="noopener noreferrer">{plugin.author}</a
              >
              {#if authors[plugin.author].github}
                • <a href="https://github.com/{authors[plugin.author].github}" target="_blank" rel="noopener noreferrer"
                  >GitHub</a
                >
              {/if}
              {#if authors[plugin.author].bitbucket}
                • <a
                  href="https://bitbucket.org/{authors[plugin.author].bitbucket}"
                  target="_blank"
                  rel="noopener noreferrer">BitBucket</a
                >
              {/if}
            </small>
          </div>
        {/each}
      </div>
    </div>
  {/each}
  <div id="submit">
    <h2>Submit a Plugin</h2>
    <p>
      Want to submit a plugin to this list? Either create an <a
        href="https://github.com/The-Noah/bzfs-plugins/issues/new"
        target="_blank"
        rel="noopener noreferrer">issue</a
      >
      or
      <a href="https://github.com/The-Noah/bzfs-plugins/compare" target="_blank" rel="noopener noreferrer"
        >pull request</a
      >
      on <a href="https://github.com/The-Noah/bzfs-plugins" target="_blank" rel="noopener noreferrer">GitHub</a>.
    </p>
    <p>Note that built-in/offical plugins are not (currently) covered.</p>
  </div>
</div>

<style lang="scss">
  .container {
    width: 80%;
    flex: 1;

    @include mobile {
      width: 90%;
    }

    & > div {
      margin: 4rem 0;

      @include mobile {
        margin: 2rem 0;
      }
    }
  }

  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;

    @include mobile {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }

    & > div {
      padding: 1rem;
      background-color: var(--color-bg-light);
      display: flex;
      flex-direction: column;
      box-shadow: 0 2px 1rem #0002;
      border-radius: $border-radius;

      p {
        margin: 1rem 0;
        flex: 1;
      }
    }
  }
</style>

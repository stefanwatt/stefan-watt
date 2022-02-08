<script>
  import interests from './interests';
</script>

  <svelte:head>
  <script defer src="https://scripts.sirv.com/sirv.nospin.js"></script>
</svelte:head>
  <h1 class="text-3xl font-bold md:text-6xl text-center">Interests ❤️</h1>
  <h2 class="md:text-2xl mb-8 text-center">Things I love doing for fun </h2>
{#each interests as interest (interest.id)}
  <div class="card bg-neutral text-neutral-content">
    <svelte:component this={interest.component} />
  </div>
  <div class="divider" />
{/each}

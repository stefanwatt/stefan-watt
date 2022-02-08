<script>
  import sections from './sections';
  import Divider from './divider.svelte';
  import { RGBToHex } from 'src/lib/utils';
  import { onMount } from 'svelte';
const primary="#4C556A",secondary='#3B4252'

</script>

{#each sections as section, i}
  {#if i % 2 === 0}
    <div id={section.id} class="font-mono bg-primary-focus text-primary-content py-8">
      <svelte:component this={section.component} />
    </div>
  <Divider topColor={primary} bottomColor={secondary} />
  {:else}
    <div id={section.id} class="font-mono bg-neutral text-neutral-content py-8">
      <svelte:component this={section.component} />
    </div>
  <Divider topColor={secondary} bottomColor={primary} />
  {/if}
{/each}

<script>
  import { showMenu, toggleMenu } from "./store";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
</script>

<button
  aria-label="openDrawer"
  on:click={toggleMenu}
  class="border-2 border-primary-content z-10 md:hidden drop-shadow-lg fixed flex justify-center items-center w-9 h-11 top-1/2 -left-4 text-neutral rounded-full
  bg-primary">
  <span class="mx-2" />
  {#if $showMenu}
    <ChevronLeftIcon size="20" />
  {:else}
    <ChevronRightIcon size="20" />
  {/if}
</button>

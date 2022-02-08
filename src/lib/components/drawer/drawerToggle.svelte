<script>
  import { showMenu, toggleMenu } from "./store";
</script>

<button
  aria-label="openDrawer"
  on:click={toggleMenu}
  class="border-2 border-neutral z-10 drop-shadow-lg fixed flex justify-center items-center w-9 h-11 top-1/2 -left-4 text-neutral rounded-full
  bg-primary-content">
  <span class="mx-2" />
  {#if $showMenu}
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>
  {:else}
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>
  {/if}
</button>

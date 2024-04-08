<script>
  import { showMenu, toggleMenu } from './store';
</script>

<button
  aria-label="openDrawer"
  on:click={toggleMenu}
  class="border-2 border-neutral z-10 drop-shadow-lg fixed flex justify-center items-center w-9 h-11 top-1/2 -left-4 text-neutral rounded-full
  bg-primary-content"
>
  <span class="mx-2" />
  <svg class:flipped={$showMenu} style="width:24px;height:24px" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
    />
  </svg>
</button>

<style>
  svg.flipped{
    transform: rotateY(180deg);
    transition: all 1.5s cubic-bezier(0.7, -.5, 0.3, 1.8);
    transform-style: preserve-3d;
  }
</style>

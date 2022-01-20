<script>
  import DrawerToggle from "./drawerToggle.svelte";
  import DrawerItem from "./drawerItem.svelte";
  import navItems from "$lib/components/drawer/navItems";
  import { showMenu } from "./store";
</script>

<ul
  class:is-active={$showMenu}   
  class="z-10 text-2xl bg-neutral-transparent drop-shadow-lg fixed w-0 p-0 menu overflow-y-auto transition-all h-screen flex justify-center ">
  {#each navItems as drawerItem}
    <DrawerItem {drawerItem} />
  {/each}
</ul>
<DrawerToggle />

<style>
  ul.menu.is-active {
    @apply p-6 w-2/3;
  }
  .bg-neutral-transparent {
    background-color: rgb(74 78 105 / 95%);
  }
</style>

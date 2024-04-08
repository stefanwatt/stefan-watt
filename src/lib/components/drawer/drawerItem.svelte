<script>
import { showMenu } from "./store";


  export let drawerItem;
  const scrollTo = (url) => {
    document.querySelector(url).scrollIntoView({
      behavior: "smooth",
    });
    $showMenu=false
  };
</script>
<li class="my-1 bg-neutral text-neutral-content  p-2 rounded-md cursor-pointer">
  <div
    on:click={() => {
      scrollTo(drawerItem.url);
    }}>
    <span class="mr-4">{drawerItem.icon}</span>
    <span>{drawerItem.text} </span>
  </div>
</li>

<style>
  ul.menu.is-active {
    @apply p-4 w-2/3;
  }
  .bg-neutral-transparent {
    background-color: rgb(74 78 105 / 95%);
  }
</style>

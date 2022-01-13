<script>
  export let level;
  const a = [1, 2, 3, 4, 5];
  let value = 3;
</script>

<div class="flex items-center" >
  {#each a as item}
    <div 
    class:bg-yellow-300={item<=level}
    class:bg-gray-500={item>level}
    class="md:w-8 md:h-8 w-4 h-4 mask mask-star" />
  {/each}
</div>
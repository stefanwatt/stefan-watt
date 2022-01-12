<script>
  export let level;
  const a = [1, 2, 3, 4, 5];
  let value = 3;
</script>

<div class="rating rating-xs">
  {#each a as item}
    <div 
    class:bg-yellow-300={item<=level}
    class:bg-gray-500={item>level}
    class="w-2 h-2 mask mask-star" />
  {/each}
</div>

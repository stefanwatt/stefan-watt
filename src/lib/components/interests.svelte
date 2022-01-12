<script>
import Bjj from "./interests/bjj.svelte";

import Guitar from "./interests/guitar.svelte";
import Keyboards from "./interests/keyboards.svelte";
</script>

<div id="interests" class="text-primary-content w-full bg-error p-8">
  <h1 class="text-6xl">Interests</h1>
  <h2 class="text-2xl mb-8">Some stuff I like to do for fun...</h2>
  <div class="divider"></div> 
  <Keyboards/>  
  <div class="divider"></div> 
  <Guitar/>  
  <div class="divider"></div> 
  <Bjj/>  
  <div class="divider"></div> 
</div>

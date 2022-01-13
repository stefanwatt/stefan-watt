<script>
import { onMount } from "svelte";

import Bjj from "./interests/bjj.svelte";
import Guitar from "./interests/guitar.svelte";
import Keyboards from "./interests/keyboards.svelte";
onMount(()=>{
  addEventListener('scroll',event=>{
  })
})
</script>

<div id="interests" class="text-primary-content w-full bg-primary p-8">
  <h1 class="text-3xl font-bold md:text-6xl text-center">Interests ❤️</h1>
  <h2 class="md:text-2xl mb-8 text-center">Things I love doing for fun </h2>
  <div class="divider"></div> 
  <Keyboards/>  
  <div class="divider"></div> 
  <Guitar/>  
  <div class="divider"></div> 
  <Bjj/>  
  <div class="divider"></div> 
</div>

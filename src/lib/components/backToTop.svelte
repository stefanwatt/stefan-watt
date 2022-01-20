<script>
  import ProgressBar from "@okrad/svelte-progressbar";
  import { onMount } from "svelte";
  import { fade} from 'svelte/transition';
  let value= 0
  $: visible = value>15;
  $: series = [value]
  const getScrollPercent =()=> {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return Math.round ((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}
const scrollToTop=()=>{
  window.scrollTo(0,0)
}
  onMount(() => {
    document.addEventListener("scroll",()=>{
      value = getScrollPercent()
    })
  });
  const colors = [
		'#40ad1f',
		'#4CAF50',
		'#03A9F4'
	]
</script>

{#if visible}
<button transition:fade on:click={scrollToTop} class="transition-all duration-300 rounded-full fixed bottom-2 right-2">
  <ProgressBar cls="transition-all duration-200" bgFillColor="#F2E9E4" bgColor="#F2E9E4" {colors} textSize="0" thickness="10"  width="2.5rem" style="radial" bind:series>
  <svg style="width:24px;height:24px;" viewBox="0 0 24 24">
 <path
    fill="currentColor"
    d="M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z" />
  </svg>
    </ProgressBar>
  </button>
  {/if}

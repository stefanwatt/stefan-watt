<script>
  export let title = "svelte",size='24';
  import simpleIcons from "simple-icons";
  let {path,hex} = simpleIcons?.Get(title)||{path:'foo',hex:'bar'}
  if (title==='linux') hex='#111'
</script>
<div class="p-4 bg-white mask mask-hexagon">

  <svg class="w-8 h-8 md:w-16 md:h-16" viewBox="0 0 {size} {size}">
    <path fill="#{hex}" d="{path}" />
  </svg>
</div>
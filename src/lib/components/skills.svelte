<script lang="ts">
  import Rating from "./rating.svelte";
import skills from "./skills";
</script>

<div id="skills" class="w-full bg-stone-800 p-8">
  <h1 class="text-4xl">Professional Skills</h1>
  <h2 class="text-xl">a.k.a. stuff I'm good at</h2>
  <div class="divider" />
  <div class="grid gap-2 grid-cols-3 text-primary-content">
    {#each skills as skill}
      <div class="card text-center bg-primary p-2">
        <span>{skill.title}</span>
        <div class="flex justify-center">
             <Rating level={skill.level} />
        </div>
      </div>
    {/each}
  </div>
  <div class="p-4 mt-4 card bg-primary text-primary-content">
    <div class="flex justify-between">
      <div>
              <Rating level=1/>
      <span class="text-xs"> = Beginner</span>
      </div>
      <span>|</span>
      <div>
        <Rating level=5/>
      <span class="text-xs"> = Expert</span>
      </div>
    </div>
  </div>
</div>

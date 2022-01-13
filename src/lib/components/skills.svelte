<script lang="ts">
  import Rating from "./rating.svelte";
import SimpleIcon from "./simpleIcon.svelte";
import skills from "./skills";
</script>

<div id="skills" class="w-full bg-stone-800 p-8">
  <h1 class="md:text-6xl font-bold text-3xl text-center">Skills 💪</h1>
  <h2 class="md:text-2xl text-center">a.k.a. stuff I'm good at 🤓</h2>
  <div class="divider" />
  <div class="flex justify-center">
    <div class="grid gap-2 grid-cols-3 lg:grid-cols-5 text-primary-content">
      {#each skills as skill}
      <div class="card text-center bg-primary p-2">
        <div class="flex justify-center">
          <SimpleIcon title={skill.icon} />
        </div>
        
        <span class="mt-1 text-sm md:text-lg">{skill.title}</span>
        <div class="flex justify-center">
          <Rating level={skill.level} />
        </div>
      </div>
      {/each}
    </div>
  </div>
  <div class="p-4 mt-4 card bg-primary text-primary-content">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
              <Rating level=1/>
      <span class="ml-1 text-xs lg:text-lg"> Beginner</span>
      </div>
      <span class="mx-2" >|</span>
      <div class="flex items-center">
        <Rating level=5/>
      <span class="ml-1 text-xs lg:text-lg"> Expert</span>
      </div>
    </div>
  </div>
</div>

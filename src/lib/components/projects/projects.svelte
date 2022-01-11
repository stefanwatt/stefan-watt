<script>
  import ProjectCard from "./projectCard.svelte";
  import projects from "./projects";
</script>

<div id="projects" class="w-full min-h-screen bg-secondary lg:p-8">
  <h1
    class="p-2 pt-6 mb-10 font-mono text-neutral-focus text-xl lg:text-4xl text-center">
    Here's some of my projects:
  </h1>
  <div class="flex flex-wrap justify-center">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>

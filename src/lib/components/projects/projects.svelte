<script>
  import ProjectCard from "./projectCard.svelte";
  import projects from "./projects";
</script>

  <h1
    class="font-bold p-2 pt-6 mb-10 font-mono text-3xl md:text-6xl text-center">
    Some of my projects 🛠️
  </h1>
  <div class="flex justify-center">

    <div class="md:grid md:grid-cols-2 flex flex-wrap justify-center gap-2">
      {#each projects as project}
      <ProjectCard {project} />
      {/each}
    </div>
  </div>

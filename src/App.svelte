<script>
  import Interests from "$lib/components/interests.svelte";
  import Projects from "$lib/components/projects/projects.svelte";
  import Skills from "$lib/components/skills.svelte";
  import Drawer from "$lib/components/drawer/drawer.svelte";
  import AboutMe from "$lib/components/aboutMe.svelte";
</script>

<svelte:head>
  <script src="https://scripts.sirv.com/sirv.nospin.js"></script>
</svelte:head>
<main class="dark">
  <div class="h-screen dark:bg-neutral text-primary">
    <div class="md:flex">
      <Drawer />
      <div class="md:max-h-screen md:overflow-y-scroll md:w-full">
        <AboutMe />
        <Projects />
        <Skills />
        <Interests />
      </div>
    </div>
  </div>
</main>

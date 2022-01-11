<script>
  import { GithubIcon } from "svelte-feather-icons";
  export let project;
</script>

<div class="card m-2 max-w-sm">
  <figure>
    <img alt="project.png" src={project.img} />
  </figure>
  <div class="card-body bg-neutral-focus">
    <h2 class="card-title">
      {project.title}
      <div class="badge mx-2 {project.status.class}">{project.status.text}</div>
    </h2>
    <p>
      Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
      necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.
    </p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary rounded-full p-3 cursor-pointer">
        <GithubIcon />
      </button>
    </div>
  </div>
</div>

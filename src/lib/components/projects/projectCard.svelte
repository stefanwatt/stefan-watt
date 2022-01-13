<script>
  import { GithubIcon } from "svelte-feather-icons";
  export let project;
</script>

<div class="w-full card m-2 max-w-sm">
  <div class="card-body bg-neutral-focus">
    <h2 class="card-title">
      {project.emoji} {project.title}
      <div class="badge mx-2 {project.status.class}">{project.status.text}</div>
    </h2>
    <p>
      {project.description}
    </p>
    <div class="justify-end card-actions">
      <a target="_blank" rel="noopener noreferrer" href='{project.gitUrl}' aria-label="github" class="btn btn-primary rounded-full p-3 cursor-pointer">
        <GithubIcon />
      </a>
    </div>
  </div>
</div>

<script>
  import {
    CodeIcon,
    MailIcon,
    MapPinIcon,
    UserIcon,
  } from "svelte-feather-icons";
</script>

<div class="font-mono bg-primary-content py-8">
  <div class="p-4 lg:px-32 md:px-12">
    <div class="flex justify-between">
      <div>
        <h1 class="text-3xl lg:text-7xl">
          Hi 👋
          <p>I'm Stefan</p>
        </h1>
        <p class="text-sm lg:text-2xl">I'm a Web-Developer</p>
      </div>
      <div class="avatar ml-1">
        <div class="w-36 h-36 lg:w-48 lg:h-48 rounded-box">
          <img
            class="Sirv"
            alt="avatar"
            data-src="https://comentic.sirv.com/Images/muetze.jpg" />
        </div>
      </div>
    </div>
  </div>
  <div class="text-2xs md:xs flex justify-center mt-4 p-4">
    <div class="flex mr-4">
      <MapPinIcon size="16" />
      <span class="px-2">Cologne, Germany</span>
    </div>
    <div class="flex mr-4">
      <UserIcon size="16" />
      <span class="px-2">26 years</span>
    </div>
    <div class="flex">
      <MailIcon size="16" />
      <span class="px-2">stefan.watt@gmail.com</span>
    </div>
  </div>
  <div class="p-8">
    <p>
      I'm young developer that is passionate about the <a class="link"  target="_blank" rel="noopener noreferrer" href="https://svelte.dev/"> <i>Svelte</i></a> Ecosystem and modern web dev technology in general.
    </p>
    <p class="mt-2">
      I really like to customize my tooling such as my OS, IDE and keyboard to my personal preference. That's
      why I only use <i>Linux (Arch)</i> and a custom keyboard these days. I'm also starting to get into <i>VSCode</i> Extension 
      development and simultaneously checking out <i> NeoVim </i> and <i>Emacs Doom</i>.
    </p>
    <p class="mt-2">
      Hopefully this website will give you a better impression of me as a professional and also as a person. 
    </p>
  </div>
</div>

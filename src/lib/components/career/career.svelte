<script>
  import { slide, quintOut } from 'svelte/transition';
  let readMoreDedalus = false,
    readMoreMednet = false;
</script>

<main class="md:px-8 py-2 ">
  <!-- <ol class="relative border-l border-gray-200 dark:border-gray-500"> -->
  <!--   <li class="mb-10 ml-4"> -->
  <!--     {#each steps as step} -->
  <!--       <Step {...step} /> -->
  <!--     {/each} -->
  <!--   </li> -->
  <!-- </ol> -->
  <!---->
  <h1 class="font-bold p-2 pt-6 font-mono text-3xl md:text-6xl text-center">Career 💼</h1>
  <h2 class="text-center mb-10 ">A list of jobs that I've worked</h2>

  <div class="md:card md:shadow-xl">
    <figure
      class="flex justify-center bg-primary-content p-4 mb-4 md:mb-0 mx-8 md:mx-0 rounded-md md:rounded-none"
    >
      <img
        class="Sirv"
        data-options="fit:cover"
        alt="mednet"
        data-src="https://comentic.sirv.com/Images/MEDNET-logo-King.png"
      />
    </figure>
    <div class="card-body md:bg-secondary">
      <h2 class="card-title text-center">MEDNET Service für Ärzte AG</h2>
      <p>
        This is was my first job as a developer and also the company where I completed my
        apprenticeship. It's a very small company providing software services in the
        healthcare sector and I was the only web-developer.
      </p>

      {#if readMoreMednet}
        <p>
          I worked as a full-stack developer using a typescript only stack with
          Svelte(Kit) as a frontend framework.
        </p>
        <p>
          I completed several small projects while working here but the most noteworthy
          one was an appointment-booking platform used mainly for Covid-19 vaccines and
          rapid tests. During the height of the pandemic over 40.000 users have booked
          their vaccinations with several large medical facilities using the service for
          their patients. I am very proud of my contribution to combat a global crisis.
        </p>
        <p>
          This is the biggest project that I've completed as a sole developer to this day.
        </p>
        <a class="link text-primary-content mt-2" href="https://termine.mednet.de/"
          >Visit the website</a
        >
      {/if}
    </div>
  </div>

  <div class="md:card md:shadow-xl mt-4">
    <div
      class="bg-primary-content flex justify-center mx-8 md:mx-0  rounded-md md:rounded-none mb-4 md:mb-0"
    >
      <figure class="flex justify-center bg-primary-content p-4 max-w-xs">
        <img
          class="Sirv"
          data-options="fit:cover"
          alt="mednet"
          data-src="https://comentic.sirv.com/Images/800px-Logo-Dedalus.png"
        />
      </figure>
    </div>
    <div class="card-body md:bg-secondary">
      <h2 class="card-title text-center">Dedalus Healthcare</h2>
      <p>
        My current place of employment. It's one of the leading enterprises or hospital
        information systems. I've been working as a full-stack developer in a team of ~10
        people focusing on medication/administration of drugs.
      </p>
      <!-- <button -->
      <!--   on:click={() => { -->
      <!--     readMoreDedalus = !readMoreDedalus; -->
      <!--   }} -->
      <!--   class="flex justify-end w-full items-center underline">Read more</button -->
      <!-- > -->
      <!-- {#if readMoreDedalus} -->
      <!--   <div> -->
      <!--     <p> -->
      <!--       I was forced to leave my comfort zone of Svelte+NodeJS as we use Java+Angular -->
      <!--       here. It was a big jump in company size and consequently I'm sharing a code -->
      <!--       base with many devs. I can confidently say that I lived up to the challenges -->
      <!--       and adapted to the new situation very quickly. -->
      <!--     </p> -->
      <!--     <p> -->
      <!--       Making the move to this company was a very important decision in my life and -->
      <!--       also my professional development. -->
      <!--     </p> -->
      <!--   </div> -->
      <!-- {/if} -->
    </div>
  </div>
</main>

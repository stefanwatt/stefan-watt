<script lang="ts">
  const getAge = (birthDate: Date): number => {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const ageInYears = getAge(new Date('1995-07-13'));
</script>

<svelte:head>
  <script defer src="https://scripts.sirv.com/sirv.nospin.js"></script>
</svelte:head>
<div class="px-4">
  <div class="flex flex-wrap justify-between items-center">
    <div class="text-2xl pb-4">
      <p>Hi 👋</p>
      <p>I'm Stefan</p>
    </div>
    <div
      class="avatar object-cover flex flex-col justify-center w-40 h-40 md:w-56 md:h-56 mb-4 md:mb-0"
    >
      <img
        class="Sirv rounded-full"
        data-options="fit:cover"
        alt="avatar"
        data-src="https://comentic.sirv.com/Images/muetze.jpg"
      />
    </div>
  </div>

  <div class="text-2xs md:text-sm md:xs flex justify-center md:justify-start mt-6">
    <div class="flex items-center">
      <svg class="w-3 h-3 md:w-8 md:h-8" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
        />
      </svg>
      <span class="px-2">stefan.watt@gmail.com</span>
    </div>
    <div class="flex items-center">
      <svg class="w-3 h-3 md:w-8 md:h-8" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
        />
      </svg>
      <span class="px-2">Trier, Germany</span>
    </div>
    <div class="flex items-center">
      <svg class="w-3 h-3 md:w-8 md:h-8" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z"
        />
      </svg>
      <span class="px-2">{ageInYears} years</span>
    </div>
  </div>
</div>

<script>
  import dayjs from 'dayjs';
  export let date, title, imageUrl, url, shortDescription, longDescription;
</script>

<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
  >{dayjs(date).format('MMM YYYY')}</time
>

<div class="avatar ">
  <div
    class="w-36 rounded-full ring ring-primary rng-offset-base-100 ring-offset-2 p-8 bg-primary-content"
  >
    <img src={imageUrl} alt="brandLogo" />
  </div>
</div>

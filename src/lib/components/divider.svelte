<script>
  export let topColor = '#9a8c98',
    bottomColor = '#9a8c98';
</script>

<div class="layered-waves ">
  <svg
    class="w-full"
    id="visual"
    viewBox="0 0 900 250"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    ><rect x="0" y="0" width="900" height="250" fill={topColor} /><path
      d="M0 164L30 161.2C60 158.3 120 152.7 180 139.3C240 126 300 105 360 94.7C420 84.3 480 84.7 540 91.2C600 97.7 660 110.3 720 124.3C780 138.3 840 153.7 870 161.3L900 169L900 251L870 251C840 251 780 251 720 251C660 251 600 251 540 251C480 251 420 251 360 251C300 251 240 251 180 251C120 251 60 251 30 251L0 251Z"
      fill={bottomColor}
      stroke-linecap="round"
      stroke-linejoin="miter"
    /></svg
  >
</div>

<style>
  .layered-waves {
    aspect-ratio: 900 / 250;
  }
</style>

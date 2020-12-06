<template>
  <footer>
      <p>© {{ new Date().getFullYear() }} - SmileyDoodle</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>

footer {
    height: 50px;
}
footer p {
    font-size: 12px;
}

</style>
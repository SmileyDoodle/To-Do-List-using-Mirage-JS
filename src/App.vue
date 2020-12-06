<template>
  <div id="app" class="has-background-light">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  min-height: 93vh;
  grid-template-rows: auto 1fr auto;
}

@media only screen and (min-width: 1024px) {
#app {
  min-height: 100vh;
}
}
</style>

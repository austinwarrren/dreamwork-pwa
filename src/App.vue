<template>
  <div id="app">
      <Navbar />
      <!-- <router-link to="/">Home</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
    name: 'App',
    components: {
      Navbar
    }
};
</script>

<style>
</style>

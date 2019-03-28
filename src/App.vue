<template>
  <v-app>
    <Navbar />
      <!-- <router-link to="/">Home</router-link> -->
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
    name: 'App',
    components: {
      Navbar
    }
};
</script>

<style>
</style>

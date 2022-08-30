<template>
  <myNavBar/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    myNavBar
  }
});
</script>

<style>

</style>

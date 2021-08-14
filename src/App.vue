<template>
  <app-header />
  <router-view> </router-view>
  <player />
  <auth />
</template>

<script>
import AppHeader from './components/Header.vue';
import Auth from './components/Auth.vue';
import Player from './components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    Player,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

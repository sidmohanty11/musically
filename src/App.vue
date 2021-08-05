<template>
  <app-header />
  <app-introduction />
  <app-main />
  <player />
  <auth />
</template>

<script>
import AppHeader from './components/Header.vue';
import AppIntroduction from './components/Introduction.vue';
import Auth from './components/Auth.vue';
import AppMain from './components/Main.vue';
import Player from './components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppIntroduction,
    Auth,
    AppMain,
    Player,
  },
};
</script>

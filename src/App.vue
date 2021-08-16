<template>
  <app-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>

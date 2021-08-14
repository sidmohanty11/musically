<template>
  <app-introduction />
  <app-main />
</template>

<script>
import AppIntroduction from '../components/Introduction.vue';
import AppMain from '../components/Main.vue';

export default {
  components: {
    AppIntroduction,
    AppMain,
  },
};
</script>

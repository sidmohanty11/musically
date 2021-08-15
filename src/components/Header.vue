<template>
  <!-- Header -->
  <header id="header" class="bg-purple-900">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Musically<i class="fas fa-compact-disc"></i
      ></router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userLoggedIn">
            <router-link
              class="px-2 text-white"
              @click.prevent="toggleModalShow"
              :to="{ name: 'home' }"
              exact-active-class="no-active"
              >Login / Register</router-link
            >
          </li>
          <template v-else>
            <li>
              <router-link
                class="px-2 text-white"
                :to="{ name: 'home' }"
                @click.prevent="signout"
                >Logout</router-link
              >
            </li>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }"
                >Manage</router-link
              >
            </li>
          </template>
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }"
              >About Us</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['toggleModalShow']),
    signout() {
      this.$store.dispatch('signout');
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' });
      }
    },
  },
  computed: {
    ...mapState(['userLoggedIn']),
  },
};

</script>

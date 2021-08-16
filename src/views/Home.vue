<template>
  <main>
    <app-introduction />
    <!-- Main Content -->
    <section class="container mx-auto">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <i
            class="fa fa-headphones-alt float-right text-green-400 text-xl"
          ></i>
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <app-main v-for="song in songs" :key="song.docId" :song="song" />
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>

<script>
import { songsCollection } from '@/includes/firebase';
import AppIntroduction from '../components/Introduction.vue';
import AppMain from '../components/Main.vue';

export default {
  name: 'Home',
  components: {
    AppIntroduction,
    AppMain,
  },
  data() {
    return {
      songs: [],
      maxPerPage: 3,
      pendingReq: false,
    };
  },
  created() {
    this.getSongs();

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

      if (bottomOfWindow) {
        this.getSongs();
      }
    },
    async getSongs() {
      if (this.pendingReq) {
        return;
      }

      this.pendingReq = true;
      let snapshots;
      if (this.songs.length) {
        const lastDoc = await songsCollection
          .doc(this.songs[this.songs.length - 1].docId)
          .get();

        snapshots = await songsCollection
          .orderBy('modified_name')
          .startAfter(lastDoc)
          .limit(this.maxPerPage)
          .get();
      } else {
        snapshots = await songsCollection
          .orderBy('modified_name')
          .limit(this.maxPerPage)
          .get();
      }

      snapshots.forEach((doc) => {
        this.songs.push({
          docId: doc.id,
          ...doc.data(),
        });
      });

      this.pendingReq = false;
    },
  },
};
</script>

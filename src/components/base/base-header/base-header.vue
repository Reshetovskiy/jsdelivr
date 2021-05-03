<template>
  <div class="base-header">
    <v-text-field
      @input="search($event)"
      @click:clear="listPackages()"
      clear-icon="mdi-close-circle"
      clearable
      single-line
      label="Search"
      type="text"

    ></v-text-field>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'base-header',
  data: () => ({
    timer: null,
  }),
  methods: {
    ...mapActions(['searchPackage', 'listPackages']),
    search(val) {
      if (this.timer) clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        if (val && val.length >= 3) this.searchPackage(val);
      }, 500);
    },
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
};
</script>

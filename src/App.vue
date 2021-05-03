<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <base-header />
      </div>
    </v-app-bar>

    <v-main>
      <packages />
    </v-main>
    <v-footer
      app
      color="primary"
      dark>
      <base-footer />
    </v-footer>
  </v-app>
</template>

<script>

import baseHeader from './components/base/base-header';
import packages from './views/packages';
import BaseFooter from './components/base/base-footer';

export default {
  name: 'App',
  components: { BaseFooter, packages, baseHeader },
};
</script>

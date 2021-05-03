<template>
  <v-dialog
    v-model="value"
    scrollable
    persistent
    max-width="700px"
  >
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <pre>{{ packageInfo }}</pre>
<!--              <p v-for="(tag, i) in package" :key="i">{{ tag }}</p>-->
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('input', false)"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'packages-dialog',
  computed: { ...mapGetters({ packageInfo: 'getDetailInfoPackage' }) },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

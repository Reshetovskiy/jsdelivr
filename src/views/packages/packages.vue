<template>
  <v-container>
      <packages-dialog v-model="dialog" />
      <v-data-table
        :headers="headers"
        :items="packages"
        hide-default-footer
        :page.sync="page"
        :items-per-page="limit"
        sort-by="calories"
        @click:row="openDetailInfo($event)"
        class="elevation-1 mb-5"
      >
      </v-data-table>
    <v-pagination
      v-model="page"
      :length="pageCount"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import packagesDialog from './components/packages-dialog';

export default {
  components: { packagesDialog },
  name: 'packages',
  data: () => ({
    dialog: undefined,
    page: 1,
    limit: 10,
    headers: [
      {
        text: 'Package name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'type', value: 'type', sortable: false },
      { text: 'hits', value: 'hits', sortable: false },
    ],
  }),

  computed: {
    ...mapGetters({ packages: 'getListPackage', total: 'total' }),

    pageCount: ({ total, limit }) => (total ? Math.ceil(total / limit) : 100),
  },
  watch: {
    async page(page) {
      await this.listPackages(page);
    },
  },
  methods: {
    ...mapActions(['listPackages', 'detailPackage', 'searchPackage']),

    openDetailInfo({ name }) {
      this.dialog = true;
      this.detailPackage(name);
    },
  },
  async mounted() {
    await this.listPackages();
  },
};
</script>

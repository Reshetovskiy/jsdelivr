import { API, search } from '../plugins/axios';

export default {
  async listPackages({ commit }, page) {
    try {
      const { data: value = [] } = await API.get(`/stats/packages?page=${page}&limit=10`);

      commit('SET', { type: 'packages', value });
      commit('SET', { type: 'total', value: null });
    } catch (e) {
      console.log(e, 'error');
    }
  },

  async detailPackage({ commit }, name) {
    try {
      const { data: value = [] } = await API.get(`/package/npm/${name}`);

      commit('SET', { type: 'detailInfoPackage', value });
    } catch (e) {
      console.log(e, 'error');
    }
  },

  async searchPackage({ commit }, name) {
    try {
      const { data: { objects = [], total } } = await search.get(`/search?text=${name}`);

      commit('SET', { type: 'packages', value: objects.map(({ package: item }) => ({ name: item.name })) });
      commit('SET', { type: 'total', value: total });
    } catch (e) {
      console.log(e, 'error');
    }
  },
};

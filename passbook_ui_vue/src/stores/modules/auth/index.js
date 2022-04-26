import mutations from './mutation';
import actions from './action';
import getters from './getter';

export default {
    namespaced: true,
    state() {
        return {
            token: null,
            tokenExpire: null,
            name: null
        };
    },
    mutations,
    actions,
    getters
};
export default {
    setToken(state, payload) {
        state.token = payload.token;
        state.tokenExpire = payload.tokenExpire;
        state.name = payload.name;
    }
};
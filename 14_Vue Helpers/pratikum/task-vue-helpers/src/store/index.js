import Vue from "vue";
import Vuex from "vuex";
import CreatePersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedState = CreatePersistedState({
	state: [
		"listTodo",
		// "baruTodo",
		// "baruDesc"
	],
});

export default new Vuex.Store({
	plugins: [persistedState],
	state: {
		listTodo: [],
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    },
	mutation: {},
	actions: {
		// addTodo(store, submitTodo) {
		// 	store.commit("addTodo", submitTodo);
		// },
		// deleteTodo(store, index) {
		// 	store.commit("deleteTodo", index);
		// },
		// editTodo(store, index) {
		// store.commit("editTodo", index);
		// },
	},
	modules: {},
});
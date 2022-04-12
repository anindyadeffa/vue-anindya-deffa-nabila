import axios from "axios";
const state = {
  lists: [],
  error: "",
  totalResults: 0,
};

const mutations = {
  setNews(state, param) {
    state.lists = param.articles;
    state.totalResults = param.totalResults;
  },
  setError(state, param) {
    state.error = param;
  },
};

const actions = {
  fetchListNews(store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=c47208e37dc0497a98950af0b017de2b`
      )
      .then((response) => {
        console.log("fetchListNews set global state");
        store.commit("setNews", response.data);
      })
      .catch((error) => {
        console.log("fetchListNews set global state error", error.message);
        console.log("error status: ", error.response.status);
        store.commit("setError", error.msg);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};

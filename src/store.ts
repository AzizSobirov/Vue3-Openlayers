import { createStore } from "vuex";
import type { User } from "./types/index";

interface State {
  users: User[];
}

const state: State = {
  users: [],
};

export default createStore<State>({
  state,
  mutations: {
    addUser(state: State, user: User) {
      user.id = state.users.length + 1;
      state.users.push(user);
    },
    deleteUser(state: State, id: number) {
      let updatedUsers: User[] = state.users.filter(
        (user: User) => user.id !== id
      );
      state.users = updatedUsers;
    },
  },
  actions: {},
  modules: {},
});

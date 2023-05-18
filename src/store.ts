import { createStore } from "vuex";
import type { User } from "./types/index";

interface State {
  users: User[];
}

const state: State = {
  users: [
    {
      id: 0,
      name: "Иванов Иван Иванович",
      prioritet: "Высокий",
      tip: "Авария",
      address: "г. Москва, ул. Ленина, д. 1",
      phone: "8 (800) 000-00-00",
      lat: 47.2357137,
      lng: 39.701505,
    },
    {
      id: 1,
      name: "Петров Петр Петрович",
      prioritet: "Средний",
      tip: "Заявка",
      address: "г. Санкт-Петербург, ул. Невская, д. 10",
      phone: "8 (800) 111-11-11",
      lat: 47.1357137,
      lng: 39.701505,
    },
    {
      id: 2,
      name: "Сидоров Сидор Сидорович",
      prioritet: "Низкий",
      tip: "Заявка",
      address: "г. Екатеринбург, ул. Ленина, д. 20",
      phone: "8 (800) 222-22-22",
      lat: 47.2357137,
      lng: 39.601505,
    },
    {
      id: 3,
      name: "Иванов Иван Иванович",
      prioritet: "Высокий",
      tip: "Авария",
      address: "г. Москва, ул. Ленина, д. 1",
      phone: "8 (800) 000-00-00",
      lat: 47.2357137,
      lng: 39.701505,
    },
    {
      id: 4,
      name: "Петров Петр Петрович",
      prioritet: "Средний",
      tip: "Заявка",
      address: "г. Санкт-Петербург, ул. Невская, д. 10",
      phone: "8 (800) 111-11-11",
      lat: 47.2357137,
      lng: 39.601505,
    },
    {
      id: 5,
      name: "Сидоров Сидор Сидорович",
      prioritet: "Низкий",
      tip: "Заявка",
      address: "г. Екатеринбург, ул. Ленина, д. 20",
      phone: "8 (800) 222-22-22",
      lat: 56.83,
      lng: 60.6,
    },

    {
      id: 6,
      name: "Иванов Иван Иванович",
      prioritet: "Высокий",
      tip: "Авария",
      address: "г. Москва, ул. Ленина, д. 1",
      phone: "8 (800) 000-00-00",
      lat: 55.75,
      lng: 37.6,
    },
    {
      id: 7,
      name: "Петров Петр Петрович",
      prioritet: "Средний",
      tip: "Заявка",
      address: "г. Санкт-Петербург, ул. Невская, д. 10",
      phone: "8 (800) 111-11-11",
      lat: 59.93,
      lng: 30.33,
    },
    {
      id: 8,
      name: "Сидоров Сидор Сидорович",
      prioritet: "Низкий",
      tip: "Заявка",
      address: "г. Екатеринбург, ул. Ленина, д. 20",
      phone: "8 (800) 222-22-22",
      lat: 56.83,
      lng: 60.6,
    },
  ],
};

export default createStore<State>({
  state,
  mutations: {
    // addUser(state, user: User) {
    //   state.users.push(user);
    // },
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

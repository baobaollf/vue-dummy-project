import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

export default new Vuex.Store({

    state: {
        items: [
            {Number: 10, Regenerate: "Regenerate", Delete: "Delete"},
            {Number: 20, Regenerate: "Regenerate", Delete: "Delete"},
            {Number: 30, Regenerate: "Regenerate", Delete: "Delete"}
        ],
    },
    mutations: {
        // CRUD operations
        changeNumber(state, index) {
            let num = getRandomNumber();
            state.items.splice(index, 1, {Number: num, Regenerate: "Regenerate", Delete: "Delete"});
        },
        deleteNumber(state, index) {
            state.items.splice(index, 1);
        },
        addNumber(state) {
            let num = getRandomNumber();
            state.items.push({Number: num, Regenerate: "Regenerate", Delete: "Delete"});
        }
    },
    getters: {
        getItems: (state) => state.items,
    },

    actions: {
        deleteNumber(context, index) {
            context.commit('deleteNumber', index);
        },
        changeNumber(context, index) {
            context.commit('changeNumber', index);
        },
        addNumber(context) {
            context.commit('addNumber');
        }
    }
})
import { defineStore } from 'pinia';
import { md5 } from 'js-md5';
export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: md5('Hello') }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
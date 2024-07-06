import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        showPopup: false,
    }),
    actions: {
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
    },
});

import { defineStore } from 'pinia';

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        menuVisible: false,
    }),
    actions: {
        toggleMenu() {
            console.log('Toggling menu');
            this.menuVisible = !this.menuVisible;
            console.log('menuVisible:', this.menuVisible);
        },
        setMenu(value: boolean) {
            this.menuVisible = value;
        },
    },
});

import { defineStore } from 'pinia';

export const useOpplyStore = defineStore('opply', {
    state: () => ({
        isAuthorized: false
    })
});
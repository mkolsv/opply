import { defineStore } from 'pinia';
import { opplyService } from '../services';
import { Supplier } from '../types';

export const useOpplyStore = defineStore('opply', {
    state: () => ({
        suppliers: [] as Supplier[]
    }),

    actions: {
        async signUp(userData: Object) {
            await opplyService.signUp(userData);
        },

        async signIn(userData: Object) {
            await opplyService.signIn(userData);
        },

        async fetchSuppliers(page: number) {
            const response = await opplyService.fetchSuppliers(page);

            console.log(response.results)

            this.suppliers.push(...response.results);
        }
    }
});
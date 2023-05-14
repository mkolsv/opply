import { defineStore } from 'pinia';
import { opplyService } from '../services';
import { Supplier } from '../types';

export const useOpplyStore = defineStore('opply', {
    state: () => ({
        suppliers: [] as Supplier[],
        supplier: {},
        quotes: []
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

            this.suppliers.push(...response.results);
        },

        async fetchSupplier(id: number) {
            this.supplier = await opplyService.fetchSupplier(id);
        },

        async fetchQuotes(page: number) {
            const response = await opplyService.fetchQuotes(page);

            this.quotes.push(...response.results);
        }
    }
});
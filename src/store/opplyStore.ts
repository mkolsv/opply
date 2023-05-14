import { defineStore } from 'pinia';
import { opplyService } from '../services';
import { Quote, Supplier } from '../types';

export const useOpplyStore = defineStore('opply', {
    state: () => ({
        suppliers: {
            count: 0,
            list: [] as Supplier[]
        },
        supplier: {} as Supplier,
        quotes: {
            count: 0,
            list: [] as Quote[]
        },
        isAuthorized: !!localStorage.getItem('token')
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

            this.suppliers.list.push(...response.results);

            if (!this.suppliers.count) this.suppliers.count = response.count;
        },

        async fetchSupplier(id: number) {
            this.supplier = await opplyService.fetchSupplier(id);
        },

        async fetchQuotes(page: number) {
            const response = await opplyService.fetchQuotes(page);

            this.quotes.list.push(...response.results);

            if (!this.quotes.count) this.quotes.count = response.count;
        }
    }
});
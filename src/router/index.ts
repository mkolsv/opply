import { createRouter, createWebHashHistory } from 'vue-router';
import { SuppliersPage, AuthPage, SupplierPage, QuotesPage } from '../pages';

const routes  = [
    {
        path: '/',
        component: SuppliersPage
    },

    {
        path: '/auth',
        component: AuthPage
    },

    {
        path: '/quotes',
        component: QuotesPage
    },

    {
        path: '/supplier/:id',
        component: SupplierPage
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach(async (to) => {
    if (!localStorage.getItem('token') && to.path !== '/auth') {
        return { path: '/auth' };
    }

    if (localStorage.getItem('token') && to.path === '/auth') {
        return { path: '/' };
    }
});
import { createRouter, createWebHashHistory } from 'vue-router';

const routes  = [
    {
        path: '/',
        component: loadComponent('SuppliersPage')
    },

    {
        path: '/auth',
        component: loadComponent('AuthPage')
    },

    {
        path: '/quotes',
        component: loadComponent('QuotesPage')
    },

    {
        path: '/supplier/:id',
        component: loadComponent('SupplierPage')
    }
];

function loadComponent(component: string) {
    return () => import(`../pages/${component}.vue`);
}

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
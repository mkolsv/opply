import { createRouter, createWebHashHistory } from 'vue-router';
import { HomePage, AuthPage } from '../pages';
import { computed } from 'vue';

const routes  = [
    {
        path: '/',
        component: HomePage
    },

    {
        path: '/auth',
        component: AuthPage
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const isAuthorized = computed(() => {
    return !!localStorage.getItem('token');
});

router.beforeEach(async (to) => {
    if (!isAuthorized.value && to.path !== '/auth') {
        return { path: '/auth' };
    }
});
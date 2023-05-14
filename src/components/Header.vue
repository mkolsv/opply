<template>
    <header class="header">
        <h1 class="header__title">Opply</h1>

        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link to="/">
                        Supplier
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/quotes">
                        Quotes
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    background-color: var(--background-color-secondary);
    padding: 24px;
}

.header__title {
    font-size: 16px;
    color: var(--text-color-secondary);
}

.nav__list {
    display: flex;
    gap: 24px;
    padding-left: 0;
}
</style>
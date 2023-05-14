<template>
    <div class="tabs__wrapper">
        <ul class="tabs">
            <li
                class="tabs__item"
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
            >
                <button
                    class="tabs__item-button"
                    :class="{ 'tabs__item-button--selected': selectedTitle === title}"
                >
                    {{ title }}
                </button>
            </li>
        </ul>

        <slot />
    </div>
</template>

<script setup lang="ts">
import { useSlots, ref , provide } from 'vue';

const slots = useSlots();
const defaultSlot = slots.default?.() ?? [];
const tabTitles = ref(defaultSlot ? defaultSlot.map(tab => tab.props?.title) : []);
const selectedTitle = ref(tabTitles.value[0]);

provide('selectedTitle', selectedTitle);
</script>

<style scoped>
.tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    list-style: none;
}

.tabs__item-button--selected {
    background-color: var(--background-color-secondary);
    color: var(--text-color-secondary);
}
</style>
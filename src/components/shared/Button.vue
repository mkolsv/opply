<template>
    <button
            class="button"
            :class="buttonClasses"
            :type="props.type"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    skin: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: false,
        default: 'button'
    }
});

const buttonClasses = computed(() => `button--${props.skin}`);
</script>

<style scoped>
.button--primary {
    background-color: var(--button-color-primary);
    color: var(--text-color-secondary);
}

.button--secondary {
    background-color: var(--button-color-secondary);
    color: var(--text-color-primary);
}
</style>
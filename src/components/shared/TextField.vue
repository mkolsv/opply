<template>
    <div class="form__field">
        <label class="form__label">{{ label }}</label>
        <input
            class="form__input"
            :value="value"
            :type="type"
            :maxlength="maxlength"
            :name="label"
            :placeholder="placeholder"
            @input="$emit('update', $event.target.value)"
        >
        <span v-if="showError" class="form__input-error">
            {{ errors[0] }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    value: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: false,
        default: 'text'
    },

    label: {
        type: String,
        required: true
    },

    placeholder: {
        type: String,
        required: false,
        default: ''
    },

    maxlength: {
        type: Number,
        required: false,
        default: 150
    },

    errors: {
        type: Array,
        required: false,
        default: []
    }
});

const showError = computed(() => !!props.errors?.length);
</script>

<style scoped>
.form__field {
    display: flex;
    flex-direction: column;
    padding: 8px;
}

.form__label {
    padding-bottom: 8px;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
}

.form__input {
    padding: 8px;
    outline: none;
}

.form__input-error {
    font-size: 12px;
    color: var(--text-color-error);
}
</style>
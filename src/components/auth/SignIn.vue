<template>
    <div class="form__wrapper">
        <form class="form__auth" @submit="submit">
            <TextField
                label="Username*"
                placeholder="Username"
                :value="formData.username"
                :errors="errors.username"
                @update="(value) => onChange(value, 'username')"
            />

            <TextField
                label="Password*"
                placeholder="Password"
                type="password"
                :value="formData.password"
                :errors="errors.password"
                @update="(value) => onChange(value, 'password')"
            />
            <Button
                class="button__submit"
                skin="primary"
                type="submit"
            >
                Sign In
            </Button>

            <span class="form__error">
                {{ errors.non_field_errors[0] }}
            </span>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useOpplyStore } from '../../store';
import { Button, TextField } from '../shared';

const store = useOpplyStore();

const formData = ref({
    username: '',
    password: ''
});

const errors = ref({
    username: [],
    password: [],
    non_field_errors: []
});

const onChange = (value, key) => {
    errors.value[key] = [];
    formData.value[key] = value;
}

const onError = (error) => {
    errors.value = { ...errors.value, ...error };
};

const submit = (event) => {
    errors.value.non_field_errors = [];
    event.preventDefault();
    store.signIn(formData.value).catch(onError);
};
</script>

<style scoped>
.button__submit {
    margin-top: 8px;
}
</style>
<template>
    <div class="form__wrapper">
        <form class="form__auth" @submit.prevent.stop="submit">
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

            <TextField
                label="First Name"
                placeholder="First Name"
                :value="formData.firstName"
                :errors="errors.firstName"
                @update="(value) => onChange(value, 'firstName')"
            />

            <TextField
                label="Last Name"
                placeholder="Last Name"
                :value="formData.lastName"
                :errors="errors.lastName"
                @update="(value) => onChange(value, 'lastName')"
            />

            <TextField
                label="E-mail"
                placeholder="E-mail"
                :value="formData.email"
                :errors="errors.email"
                @update="(value) => onChange(value, 'email')"
            />

            <Button
                class="button__submit"
                skin="primary"
                type="submit"
            >
                Sign Up
            </Button>

            <span class="form__error">
                {{ errors.non_field_errors[0] }}
            </span>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button, TextField } from '@/components/shared';
import { useOpplyStore } from '@/store';

const store = useOpplyStore();
const router = useRouter();

const formData = ref({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
});

const errors = ref({
    username: [],
    password: [],
    firstName: [],
    lastName: [],
    email: [],
    non_field_errors: []
});

const onChange = (value: any, key: keyof typeof formData.value) => {
    errors.value[key] = [];
    formData.value[key] = value;
}

const onError = (error: object) => {
    errors.value = { ...errors.value, ...error };
};

const submit = () => {
    errors.value.non_field_errors = [];
    store.signUp(formData.value).then(() => router.push('/')).catch(onError);
};
</script>

<style scoped>
.button__submit {
    margin-top: 8px;
}
</style>
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
import { useRouter } from 'vue-router';
import { useOpplyStore } from '@/store';
import { Button, TextField } from '@/components/shared';

const store = useOpplyStore();
const router = useRouter();

const formData = ref({
    username: '',
    password: ''
});

const errors = ref({
    username: [],
    password: [],
    non_field_errors: []
});

const onChange = (value: any, key: keyof typeof formData.value) => {
    errors.value[key] = [];
    formData.value[key] = value;
}

const onError = (error: object) => {
    errors.value = { ...errors.value, ...error };
};

const submit = async () => {
    errors.value.non_field_errors = [];
    await store.signIn(formData.value).then(() => router.push('/')).catch(onError);
};
</script>

<style scoped>
.button__submit {
    margin-top: 8px;
}
</style>
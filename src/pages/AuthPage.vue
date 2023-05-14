<template>
    <section>
        <Tabs>
            <Tab title="Sign In">
                <SignIn />
            </Tab>
            <Tab title="Sign Up">
                <SignUp />
            </Tab>
        </Tabs>
    </section>
</template>

<script setup lang="ts">
import { Tab, Tabs } from '@/components/shared';
import { SignIn, SignUp } from '@/components/auth';
</script>
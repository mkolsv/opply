<template>
    <section>
        <Tabs>
            <Tab title="Sign In">
                <SignIn />
            </Tab>
            <Tab title="Registration">
                <Registration />
            </Tab>
        </Tabs>
    </section>
</template>

<script setup lang="ts">
import Tabs from '../shared/tabs/Tabs.vue';
import Tab from '../shared/tabs/Tab.vue';
import SignIn from './signIn/SignIn.vue';
import Registration from './registration/Registration.vue';
</script>
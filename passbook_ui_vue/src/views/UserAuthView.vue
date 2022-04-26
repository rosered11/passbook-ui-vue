<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">Username</label>
            <input type="text" id="usename" v-model="username" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="usename" v-model="password" />
        </div>
        <button>Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    created() {
        this.submitForm();
    },
    methods: {
        async submitForm() {
            console.log(this.$route.query.code);
            const response = await this.$store.dispatch('auth/login', {
                code: this.$route.query.code
            });
            console.log(response);
        }
    }
};
</script>

<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script>
export default {
    data() {},
    created() {
        if (!(typeof(this.$store.getters['auth/auth']) === 'undefined')) {
          debugger;
          this.submitForm();
        }
        console.log(this.$store.getters['auth/auth']);
        console.log(this.$store.getters);
        debugger;
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
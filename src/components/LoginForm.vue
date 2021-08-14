<template>
  <div
    class="text-white text-center font-bold pb-5 mb-4"
    v-if="log_show_alert"
    :class="log_alert_variant"
  >
    {{ log_alert_msg }}
  </div>
  <!-- Login Form -->
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none
          focus:border-black
          rounded
        "
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none
          focus:border-black
          rounded
        "
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      :disabled="log_in_sub"
      type="submit"
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:8|max:100',
      },
      log_in_sub: false,
      log_show_alert: false,
      log_alert_variant: 'bg-blue-500',
      log_alert_msg: 'Please wait, logging in...',
    };
  },
  methods: {
    async login(values) {
      this.log_show_alert = true;
      this.log_in_sub = true;
      this.log_alert_variant = 'bg-blue-500';
      this.log_alert_msg = 'Please wait, logging in...';

      try {
        await this.$store.dispatch('login', values);
      } catch (e) {
        this.reg_in_sub = false;
        this.reg_alert_variant = 'bg-red-500';
        this.reg_alert_msg = 'Invalid login credentials.';
        return;
      }

      this.log_alert_variant = 'bg-green-500';
      this.log_alert_msg = 'Success!';
      window.location.reload();
    },
  },
};
</script>

<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.email}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user[0];
    }
  },
  mounted() {
    if (!this.currentUser) {
      const self = this;
      self.$router.push('/login');
    }
  }
};
</script>
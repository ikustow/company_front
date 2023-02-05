<template>
  <div class="profile-container">
    <div class="profile-header">
      <h2 class="profile-name">{{ 'Welcome ' + currentUser.details.name + " " +  currentUser.details.surname}}</h2>
    </div>
    <p class="profile-bio">{{}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
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
<style>
.profile-container {
  background-color: #f7f9fc;
  width: 40%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.profile-name {
  margin-left: 1rem;
  font-weight: bold;
  color: #333;
}

.profile-bio {
  font-size: 0.875rem;
  color: #777;
}
</style>
<template>
  <div class="profile">
    <h1 class="profile-name">{{ profile.name }}</h1>
    <p class="profile-bio">{{ profile.bio }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: {
        name: "John Doe",
        bio: "I'm a web developer and love creating with Vue.js!"
      }
    };
  }
};
</script>

<style>
.profile {
  text-align: center;
}

.profile-name {
  font-size: 24px;
  margin-top: 20px;
}

.profile-bio {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
</style>
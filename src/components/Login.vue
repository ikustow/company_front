<template>
  <div class="login-form">

    <h1>Login</h1>
    <form @submit="submitForm">
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="form.email" />
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="form.password" />
      <button type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "login_form",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      const self = this;
      console.log(this.form.email)

      if (this.form.email === "user@example.com" && this.form.password === "password") {
        self.$router.push({path: '/userboard'});
      }
    }
  }
};
</script>

<style>
.login-form {
  text-align: center;
  margin-top: 50px;
}

form {
  display: inline-block;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

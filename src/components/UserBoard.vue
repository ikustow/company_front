<template>
  <div class="users-table">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
    <!-- 4 more tables with the same structure -->
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserBoard',
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'johndoe@email.com', password: 'password' },
        { id: 2, name: 'Jane Doe', email: 'janedoe@email.com', password: 'password' },
        // more users
      ]
    }
  }
}
</script>

<style>
.users-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

table {
  width: 40%;
  padding: 24px;
}

th, td {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #333;
  padding: 2px;
}

td {
  background-color: #f2f2f2;
  font-weight: normal;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}



th {
  background-color: #a5cee7;
  font-weight: bold;
}


</style>

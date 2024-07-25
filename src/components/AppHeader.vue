<!-- src/components/AppHeader.vue -->
<template>
  <header>
    <h1>Header</h1>
    <nav>
      <router-link to="/">Home </router-link>
      <router-link to="/UserProfile">Profile </router-link>
      <router-link to="/CategoryAd">Category </router-link>
      <!-- Добавьте дополнительные ссылки здесь -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background-color: #42b983;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
  color: white;
}

</style>

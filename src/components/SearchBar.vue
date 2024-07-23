<script>
export default {
  name: 'SearchBar'
}
</script>

<template>
  <div class="searchbar">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Search..."
    />
  </div>
</template>

<style scoped>
.searchbar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

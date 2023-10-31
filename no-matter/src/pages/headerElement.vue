<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <h1>No Matter</h1>
      </div>
      <h1 class="header__underlogo">You Shit Posts</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerElement'
}
</script>

<style scoped>
.header {
  padding: 20px 40px;
  color: #ffffff;
}
.header__content {
  display: flex;
  justify-content: space-between;
}
.header__content .header__logo h1 {
  font-size: 39px;
  font-weight: 700;
}
.header__underlogo {
  font-size: 37px;
  text-decoration: underline;
  cursor: pointer;
  transition: 1s ease-in;
}
.header__underlogo:hover {
  text-decoration: none;
  color: #a2a2a2;
}
</style>
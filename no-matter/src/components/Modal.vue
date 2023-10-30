<template>
  <div class="dialog">
    <h1>HELLO</h1>
    <h1>{{ nickname }}</h1>
    <h1>{{ title }}</h1>
    <h1>{{ description }}</h1>
    <input type="text" v-model.trim="nickname">
    <input type="text" v-model.trim="description">
    <input type="text" v-model.trim="title">
    <button @click="sendValue">Send</button>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      title: '',
      description: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    sendValue() {
      this.$emit('send', [this.nickname, this.title, this.description])
    }
  }
}
</script>

<style>

</style>
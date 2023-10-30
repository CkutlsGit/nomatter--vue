<template>
  <div class="dialog">
    <h1>HELLO</h1>
    <h1>{{ title }}</h1>
    <input type="text" v-model.trim="title">
    <button @click="sendValue">Send</button>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    sendValue() {
      this.$emit('send', this.title)
    }
  }
}
</script>

<style>

</style>
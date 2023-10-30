<template>
  <div class="dialog">
    <div class="dialog__content">
      <h1 class="dialog__content--title">Напишите пост</h1>
      <div class="dialog__inputs">
        <input type="text" v-model.trim="nickname">
        <input type="text" v-model.trim="description">
        <input type="text" v-model.trim="title">
      </div>
      <div class="dialog__btns">
        <button @click="sendValue">Send</button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
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
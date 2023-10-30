<template>
  <div class="dialog">
    <h1>HELLO</h1>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
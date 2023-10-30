<template>
  <div class="dialog">
    <dialog>
      <h1>HELLO</h1>
      <button @click="closeModal">Close</button>
    </dialog>
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
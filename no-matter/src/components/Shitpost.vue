<template>
  <header-element></header-element>
  <section class="write">
    <div class="write__content">
      <button @click="isOpen = true">Написать</button>
      <modal
          v-if="isOpen"
          @close="isOpen = false"
      >
      </modal>
    </div>
  </section>
</template>

<script>
import headerElement from "@/pages/headerElement.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: 'ShitPostComponent',
  components: { headerElement, Modal },

  data() {
    return {
      isOpen: false
    }
  },
}

</script>
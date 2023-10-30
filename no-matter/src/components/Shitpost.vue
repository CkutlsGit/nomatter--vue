<template>
  <header-element></header-element>
  <section class="write">
    <div class="write__content">
      <button @click="openModal">Написать</button>
      <modal
          v-if="isOpen"
          @close="isOpen = false"
          @send="acceptSendValuefromModal"
      >
      </modal>
    </div>
  </section>
  <section class="content">
    <div class="content__container">
      <h1>{{ title }}</h1>
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
      isOpen: false,
      title: '',
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    acceptSendValuefromModal(value) {
      this.title = value
      this.isOpen = false
    }
  }
}

</script>
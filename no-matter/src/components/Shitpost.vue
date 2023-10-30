<template>
  <header-element></header-element>
  <section class="write">
    <div class="write__content">
      <button @click="openModal">Написать</button>
      <modal
          v-if="isOpen"
          @close="isOpen = false"
          @send="acceptSendArrayfromModal"
      >
      </modal>
    </div>
  </section>
  <section class="content">
    <div class="content__container">
      <h1>{{ nickname }}</h1>
      <h1>{{ title }}</h1>
      <h1>{{ description }}</h1>
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
      id: 0,
      posts: [],
      // nickname: '',
      // title: '',
      // description: ''
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    acceptSendArrayfromModal(Array) {
      const post = {
        id: this.id + 1,
        nickname: Array[0],
        description: Array[1],
        title: Array[2]
      }
      this.posts.push(post)
      this.isOpen = false
    }
  }
}

</script>
<template>
  <div class="shitpost">
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
        <ul>
          <li
              v-for="(post, index) in posts"
              :key="index"
          >
            <div class="block">
              <div class="block__content">
                <h1 class="block__name">{{ post.nickname }}</h1>
                <h1 class="block__title">{{ post.title }}</h1>
                <p class="block__description">{{ post.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
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
        title: Array[1],
        description: Array[2],
      }
      this.posts.push(post)
      this.isOpen = false
    }
  }
}

</script>

<style scoped>
.write__content button {
  margin: 40px 40px;
  padding: 5px 15px;
  border: none;
  font-size: 24px;
  background: #807752;
  color: #fff;
  font-weight: 600;
  opacity: .8;
  cursor: pointer;
  transition: .2s ease;
}
.write__content button:hover {
  opacity: 1;
}
</style>
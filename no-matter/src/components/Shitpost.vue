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
                <h1 class="block__name"><span><img src="../../public/favicon-32x32.png" style="width: 15px; height: 15px; margin-right: 5px"></span>{{ post.nickname }}</h1>
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

      if (this.posts.length > 5) {
        this.posts.shift()
      }
      this.isOpen = false
    }
  }
}

</script>

<style scoped>
.block__content {
  background: #fff;
  border-radius: 20px;
  width: 400px;
  height: 120px;
  margin: 20px 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
}
.block__name {
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0 5px 15px;
}
.block__title {
  font-size: 24px;
  margin: 0 0 4px 10px;
}
.block__description {
  font-size: 18px;
  font-weight: 500;
}
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
<template>
  <div class="mainpage">
    <header-element></header-element>
    <h1
        style="
        font-size: 40px;
        letter-spacing: 4px;
        display: flex;
        justify-content: center;
        text-align: center
        "
        v-if="!openedWindow"
    >
      Not today!
    </h1>
    <section class="start-work">
      <div class="start-work__content" :class="openedWindow ? 'true' : 'hidden'">
        <button class="close__btn" @click="reloadPage">❌</button>
        <h2>Do you want to share your opinion with someone?</h2>
        <h2>Here you go! Go to the shit post`s page!</h2>
        <div class="start__work__btn">
          <a href='#' @click="$router.push({ name: 'Post' })">Write?</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headerElement from "@/pages/headerElement.vue";
export default {
  name: 'MainPage',
  components: { headerElement },
  data() {
    return {
      openedWindow: true
    }
  },
  methods: {
    reloadPage() {
      this.openedWindow = false
      setTimeout(() => {
        location.reload()
      }, 500)
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
.close__btn {
  position: absolute;
  margin: 0px 0px 0px 368px;
  font-size: 24px;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.5s ease;
}
.close__btn:hover {
  background: #ab2e2e;
}
.start-work {
  display: flex;
  justify-content: center;
  text-align: center;
}
.start-work__content {
  margin-top: 150px;
  border-radius: 5px;
  width: 800px;
  height: 400px;
  background: #fff;
}
.start-work__content h2 {
  font-size: 20px;
  padding: 60px 20px;
}
.start__work__btn a {
  text-decoration: none;
  color: #fff;
  background: #439a2f;
  padding: 15px 40px;
  font-weight: 700;
  font-size: 29px;
  transition: .7s ease;
}
.start__work__btn a:hover {
  background: #d5d1b9;
  color: #000000;
}
</style>
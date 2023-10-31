<template>
  <div class="mainpage">
    <header-element></header-element>
    <section class="start-work">
      <div class="start-work__content">
        <h2>Хочешь поделиться со своим никому не нужным мнением?</h2>
        <h2>Тебе сюда! Переходи на страницу shit post`ов</h2>
        <div class="start__work__btn">
          <a href='#' @click="$router.push({ name: 'Post' })">Написать?</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headerElement from "@/pages/headerElement.vue";
export default {
  name: 'MainPage',
  components: { headerElement }
}
</script>

<style scoped>
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
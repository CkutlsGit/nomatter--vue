<template>
  <div class="mainpage">
    <header-element></header-element>
    <section class="start-work">
      <div class="start-work__content">
        <h2>Хочешь поделиться со своим никому не нужным мнением?</h2>
        <h2>Тебе сюда! Переходи на страницу shit post`ов</h2>
        <div class="start__work__btn">
          <a href="#">Написать?</a>
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

<style>

</style>
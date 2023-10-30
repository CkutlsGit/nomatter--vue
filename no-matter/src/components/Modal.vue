<template>
  <div class="dialog">
    <div class="dialog__content">
      <h1 class="dialog__content--title">Напишите пост</h1>
      <button class="modal__btn--close" @click="closeModal">❌</button>
      <div class="dialog__inputs">
        <div class="dialog__block--input">
          <input type="text" v-model.trim="nickname" placeholder="Nickname">
        </div>
        <div class="dialog__block--input">
          <input type="text" v-model.trim="title" placeholder="Title for post">
        </div>
        <div class="dialog__block--input">
          <input type="text" v-model.trim="description" placeholder="What are you want say?">
        </div>
      </div>
      <div class="dialog__btns">
        <button @click="sendValue" :disabled="checkAgreeforClick">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      title: '',
      description: '',
      canClick: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    sendValue() {
      this.$emit('send', [this.nickname, this.title, this.description])
    },
    checkAgreeforClick() {
      if (this.nickname !== '' && this.title !== '' && this.description !== '') {
        return this.canClick = true
      }
    }
  }
}
</script>

<style>
.dialog {
  position: absolute;
  top: 30%;
  left: 39%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.dialog__content {
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 7px;
}
.dialog__content--title {
  padding-top: 40px;
  font-size: 34px;
  margin-bottom: 20px;
}
.dialog__inputs input {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.modal__btn--close {
  position: absolute;
  margin: -98px 0px 0px 167px;
  font-size: 24px;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.5s ease;
}
.modal__btn--close:hover {
  background: #ab2e2e;
}
.dialog__block--input label {
  width: 20px;
}
.dialog__block--input input {
  width: 200px;
  margin-bottom: 20px
}
.dialog__block--input {
  display: flex;
}
.dialog__btns button {
  margin-top: 40px;
  font-size: 18px;
  padding: 5px 40px;
  background: #439a2f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: .5s ease-in;
}
.dialog__btns button:hover {
  opacity: 0.7;
}
.dialog__btns button:disabled {
  background: #b02626;
  opacity: .5;
  cursor: not-allowed;
}
</style>
<template>
  <section class="page_Login Login">
    <div class="Login__box">
      <h1 class="Login__title">Вход</h1>

      <form class="Login__form" @submit.prevent="log">
        <div class="form__item form__item_one">
          <label for="inpGroupOne" class="form__label">Почта: </label>
          <input type="email" id="inpGroupOne" class="form__input" v-model="formLog.email">
        </div>

        <div class="form__item form__item_two">
          <label for="inpGroupOne" class="form__label">Пароль: </label>
          <input type="password" id="inpGroupOne" class="form__input" v-model="formLog.password">
        </div>

        <a href="#" class="form__link"><span class="span span_yellow">Забыли пароль?</span></a>
        <button class="form__btn" type="submit">Войти</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      formLog: {
        email: null,
        password: null
      }
    }
  },

  methods:{
    ...mapMutations([
      'login',
      'nextPages'
    ]),

    log(){
      this.login(this.formLog)
      this.nextPages({item: 'Главная', index: 0})
    }
  }
}
</script>

<style>
@import url('../assets/style/pageLogin.css');

</style>
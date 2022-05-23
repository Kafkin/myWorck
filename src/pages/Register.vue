<template>
  <section class="page_Reg Reg">
    <div class="Login__box Reg__box">
      <h1 class="Login__title">Регистрация</h1>

      <form class="Login__form" @submit.prevent="reg">
        <div class="form__item form__item_one">
          <label for="inpGroupOne" class="form__label">Имя: </label>
          <input type="text" maxlength="8" id="inpGroupOne" class="form__input" v-model="formReg.name" placeholder="elina">
        </div>

        <div class="form__item form__item_one">
          <label for="inpGroupOne" class="form__label">Почта: </label>
          <input type="email" id="inpGroupOne" class="form__input" v-model="formReg.email" placeholder="eline@gmail.com">
        </div>

        <div class="form__item form__item_two">
          <label for="inpGroupOne" class="form__label">Пароль: </label>
          <input type="password" maxlength="12" id="inpGroupOne" class="form__input" v-model="formReg.password" placeholder="YS0S782CM">
        </div>

        <div class="form__item form__item_two">
          <label for="inpGroupOne" class="form__label">Повторите пароль: </label>
          <input type="password" maxlength="12" id="inpGroupOne" class="form__input" v-model="formReg.subPassword" placeholder="YS0S782CM">
        </div>

        <div class="form__item form__item_two">
          <label for="inpGroupOne" class="form__label">Соглашение на обработку личных данных </label>
          <input type="checkbox" id="inpGroupOne" class="form__input_checkbox" v-model="formReg.agreement">
        </div>

        <a href="#" class="form__link"><span class="span span_yellow">Забыли пароль?</span></a>
        <button type="submit" class="form__btn">Войти</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      formReg: {
        name: null,
        email: null,
        password: null,
        subPassword: null,
        agreement: false,
      }
    }
  },

  methods: {
    ...mapMutations([
      'register',
      'nextPages'
    ]),

    reg(){
      this.register(this.formReg)
      this.nextPages({item: 'Главная', index: 0})
    }
  }
}
</script>

<style>
@import url('../assets/style/pageRegister.css');

</style>
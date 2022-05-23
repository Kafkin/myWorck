<template>
  <div class="burger">
    <label for="check" :class="{ 'burger_hidde': windowWidth >= 576 }">
      <input type="checkbox" v-model="burgerShow" class="burger__input" id="check"/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div class="burger__mainBox" v-if="burgerShow" @click="burgerShow = !burgerShow">
    <p class="nav__title" @click="nextPages({item: 'Главная', index: 0})" :class="{ 'nav__title_active': currentPageIndex === 0 }" >Главная</p>
    <p class="nav__title" @click="nextPages({item: 'О компании', index: 1})" :class="{ 'nav__title_active': currentPageIndex === 1 }" >О компании</p>
    <p class="nav__title" @click="nextPages({item: 'Новости', index: 2})" :class="{ 'nav__title_active': currentPageIndex === 2 }">Новости</p>
    <p class="nav__title" @click="nextPages({item: 'Услуги', index: 3})" :class="{ 'nav__title_active': currentPageIndex === 3 }" v-show="isAuth">Услуги</p>
    <p class="nav__title" @click="nextPages({item: 'Админка', index: 10})" :class="{ 'nav__title_active': currentPageIndex === 10 }" v-show="isAdmin">Панель Администрации</p>
    <p class="nav__title" @click="nextPages({item: 'Вход', index: 4})" :class="{ 'nav__title_active': currentPageIndex === 4 }">Вход</p>
    <p class="nav__title" @click="nextPages({item: 'Регистрация', index: 5})" :class="{ 'nav__title_active': currentPageIndex === 5 }">Регистрация</p>
  </div>

  <nav class="nav" :class="{ 'nav_hidde': windowWidth <= 576, 'nav_login': currentPageTitle === 'Вход' || currentPageTitle === 'Регистрация', 'nav_reg': currentPageTitle === 'Регистрация', 'nav_news': currentPageTitle === 'Новости', 'nav_shop': currentPageTitle === 'Услуги', 'nav_сart': currentPageTitle === 'Корзина',  'nav_company': currentPageIndex === 1 }">
    <div class="main__title">
      <!-- <p class="nav__title"
      v-for="(item, index) in arrayTitlePages" :key="index" 
      @click="nextPages({item: item, index: index})" 
      :class="{ 'nav__title_active': currentPageIndex === index }" v-show="isAuth && index >= 2 && index < 3 && index < 4" >{{ item }}</p> -->
      <p class="nav__title" @click="myMegaFunctionUltraNasralBliat({item: 'Главная', index: 0})" :class="{ 'nav__title_active': currentPageIndex === 0 }" >Главная</p>
      <p class="nav__title" @click="myMegaFunctionUltraNasralBliat({item: 'О компании', index: 1})" :class="{ 'nav__title_active': currentPageIndex === 1 }" >О компании</p>
      <p class="nav__title" @click="myMegaFunctionUltraNasralBliat({item: 'Новости', index: 2})" :class="{ 'nav__title_active': currentPageIndex === 2 }">Новости</p>
      <p class="nav__title" @click="myMegaFunctionUltraNasralBliat({item: 'Услуги', index: 3})" :class="{ 'nav__title_active': currentPageIndex === 3 }" v-show="isAuth">Услуги</p>
      <p class="nav__title" @click="myMegaFunctionUltraNasralBliat({item: 'Админка', index: 10})" :class="{ 'nav__title_active': currentPageIndex === 10 }" v-show="isAdmin">Панель Администрации</p>
    </div>

    <div class="sub__title">
      <p class="nav__title"
      v-for="(item, index) in arrayTitlePages" :key="index" 
      @click="nextPages({item: item, index: index})" 
      :class="{ 'nav__title_active': currentPageIndex === index }" v-show="index >= 4 && !isAuth && currentPageIndex === 0">{{ item }}</p>
      <p v-show="!isAuth && currentPageIndex === 0">/</p>
      <p class="nav__title nav__title_exit" v-show="isAuth && currentPageIndex === 0" @click="exit">Выход</p>
      <img src="./assets/icon/car.svg" alt="car" class="nav__car" @click="nextPages({item: 'Корзина', index: 50})" v-show="currentPageIndex === 3">
      <p class="nav__logo_text nav__title" style="order: -1;" v-if="currentPageIndex !== 0 && currentPageTitle !== 'Вход' && currentPageTitle !== 'Регистрация' && currentPageTitle !== 'Корзина'"><span class="span span_logo span_yellow">timurovcy</span></p>
    </div>
  </nav>

  <pHome class="page page_Home" v-if="currentPageTitle === 'Главная'"></pHome>
  <pLogin class="page page_Login" v-if="currentPageTitle === 'Вход'"></pLogin>
  <pRegister class="page page_Register" v-if="currentPageTitle === 'Регистрация'"></pRegister>
  <pNews class="page page_News" v-if="currentPageTitle === 'Новости'"></pNews>
  <pShop class="page page_Shop" v-if="currentPageTitle === 'Услуги'"></pShop>
  <pShopCart class="page page_ShopCart" v-if="currentPageTitle === 'Корзина'"></pShopCart>
  <pCompany class="page page_pCompany" v-if="currentPageTitle === 'О компании'"></pCompany>
</template>

<script>
// pages
import pHome from './pages/Home.vue'
import pLogin from './pages/Login.vue'
import pRegister from './pages/Register.vue' 
import pNews from './pages/News.vue'
import pShop from './pages/Shop.vue'
import pShopCart from './pages/ShopCart.vue'
import pCompany from './pages/Company.vue'

import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',

  data(){
    return{
      arrayTitlePages: ['Главная', 'О компании', 'Новости', 'Услуги', 'Вход', 'Регистрация'],
      windowWidth: 0,

      burgerShow: false
    }
  },

  methods:{
    ...mapMutations([
      'nextPages',
      'saveUser',
      'emptyUser',
      'saveArrayUser'
    ]),

    updateWidth() {
      this.windowWidth = window.innerWidth;
      // console.log(this.windowWidth);
    },

    exit(){
      this.emptyUser()
      this.nextPages({item: 'Главная', index: 0})
    },

    myMegaFunctionUltraNasralBliat(pages){
      this.nextPages(pages)
    }
  },

  computed:{
    ...mapGetters([
      'isAuth',
      'currentPageTitle',
      'currentPageIndex',
      'isAdmin',
    ]),
  },

  components: {
    pHome,
    pLogin,
    pRegister,
    pNews,
    pShop,
    pShopCart,
    pCompany
  },

  created(){
    window.addEventListener('resize', this.updateWidth);
    this.windowWidth = window.innerWidth;
  },

  mounted(){
    const currentUser = localStorage.getItem('currentUser')
    !!currentUser ? (() => {
      this.saveUser(JSON.parse(currentUser))
    })() : console.log('currentUser не найден')

    // ------------------------------------------------------

    const currentArrayUser = localStorage.getItem('userArray')
    !!currentArrayUser ? (() => {
      this.saveArrayUser(currentArrayUser)
    })() : console.log('currentArrayUser не найден')
  }
}
</script>

<style>
@import url('./assets/style/index.css');

</style>

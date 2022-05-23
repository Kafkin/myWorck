<template>
  <section class="page_ShopCart ShopCart">
    
    <div class="ShopCart__empty" v-if="addShoppingCart.length === 0">
      <div class="ShopCart__empty_message">
        <h1 class="ShopCart__empty_title">УПС! КОРЗИНА ПУСТА</h1>
        <p class="ShopCart__empty_subtitle">Для совершения заказа добавьте в корзину нужные вам услуги через каталог.</p>
      </div>

      <div class="ShopCart__empty_box">
        <button class="ShopCart__empty_btn" @click="nextPages({item: 'Услуги', index: 3})">Услуги</button>
        <img src="../assets/icon/empty.jpg" alt="empty">
      </div>
    </div>

    <div class="ShopCart__shopBox" v-if="addShoppingCart.length !== 0"> 
      <div v-for="(item, index) in addShoppingCart" :key="index">
        <div class="vShop__boxImg">
          <img :src="require(`../assets/img/pageShopSet/${item.img}.jpg`)" alt="">
        </div>

        <div class="vShop__div">
          <div class="vShop__div_two">
            <h2 class="vShop__title">{{ item.title }}</h2>
            <p class="vShop__price">От {{ item.price }}руб</p>
          </div>
          <p class="vShop__body">{{ item.body }}</p>
          <button class="vShop__btn" @click="deleteShoppingCart(item)">Удалить</button>
        </div>
      </div>
    </div>

    <button class="vShop__btn vShop__mainBtn" @click="buyAll" v-if="addShoppingCart.length !== 0">Оформить тимуровца</button>
    
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data(){
    return{

    }
  },

  methods:{
    ...mapMutations([
      'nextPages',
      'deleteShoppingCart',
      'deleteAllShoppingCart'
    ]),

    buyAll(){
      this.nextPages({item: 'Главная', index: 0})
      this.deleteAllShoppingCart()
    }
  },

  computed:{
    ...mapGetters([
      'addShoppingCart'
    ])
  }
}
</script>

<style>
@import url('../assets/style/pageShopCart.css');

</style>
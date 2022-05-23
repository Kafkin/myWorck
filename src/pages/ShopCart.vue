<template>
  <section class="page_ShopCart ShopCart">
    
    <div class="ShopCart__empty">
      <div class="ShopCart__empty_message">
        <h1 class="ShopCart__empty_title">УПС! КОРЗИНА ПУСТА</h1>
        <p class="ShopCart__empty_subtitle">Для совершения заказа добавьте в корзину нужные вам услуги через каталог.</p>
      </div>

      <div class="ShopCart__empty_box">
        <button class="ShopCart__empty_btn" @click="nextPages({item: 'Услуги', index: 3})">Услуги</button>
        <img src="../assets/icon/empty.jpg" alt="empty">
      </div>
    </div>
    
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{

    }
  },

  methods:{
    ...mapMutations([
      'nextPages',
    ]),
  },
}
</script>

<style>
@import url('../assets/style/pageShopCart.css');

</style>
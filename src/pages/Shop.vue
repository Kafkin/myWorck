<template>
  <section class="page_Shop Shop">
    <div class="page_Shop_BoxImg">
      <!-- <h1 class="page_Shop_title">Тимуровцы работают даже в плохую погоду!</h1> -->
      <!-- <img class="page_News_img" src="../assets/img/pageNewsSet/dom_zdaniia_gory_148563_1920x10802.jpg" alt=""> -->
    </div>

    <div class="page_Shop_BoxItem">
      <form class="page_Shop_form">
        <input type="text" placeholder="Что будем искать?">
        <img src="../assets/icon/search.svg" alt="loopa">
      </form>

      <h2 class="page_Shop_subtitle">НАШИ УСЛУГИ</h2>
      <div class="page_Shop_card">
        <vCard class="vShop" v-for="(item, index) in arrayCard" :key="index" :item="item" @push="push" v-show="index >= minIndex && index <= maxIndex"></vCard>
      </div>
      
      <div class="page_Shop_navigation">
        <span class="page_Shop_navigationItem" :class="{ 'page_Shop_navigationItemActive': currentNews === index }" @click="nextVisible(index)" v-for="(item, index) in Math.ceil(arrayCard.length / 6)" :key="index">{{ index+1 }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import vCard from '../components/card.vue'

export default {
  data(){
    return{
      arrayCard: [
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopOne', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopTwo', price: 500 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopThree', price: 800 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopFour', price: 700 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopFive', price: 500 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 },
        { title: 'Услуги садовника', body: 'Республика Северная Осетия — Алания, Владикавказ, пр-т Мира, 4, р-н Иристонский', img: 'imgShopSix', price: 1000 }
      ],

      currentNews: 0,
      windowWidth: null,

      minIndex: 0,
      maxIndex: 5,

      minIndexStandart: 0,
      maxIndexStandart: 5,
    }
  },

  methods:{
    nextVisible(index){
      this.currentNews = index
      this.minIndex = this.minIndexStandart + (index * 6)
      this.maxIndex = this.maxIndexStandart + (index * 6)
    },
  },

  components:{
    vCard
  }
}
</script>

<style>
@import url('../assets/style/pageShop.css');

</style>
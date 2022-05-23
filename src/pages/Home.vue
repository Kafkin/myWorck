<template>
  <section class="page_Home Home">
    <div class="Home__box-title">
      <h1 class="Home__title">Мы <span class="span span_yellow">поможем</span> привести вашу дачу в порядок</h1>
      <p class="Home__sub-title">сайт <span class="span span_logo span_yellow">timurovcy</span> для помощи дачникам</p>
      <button class="Home__btn" @click="nextPages({item: 'О компании', index: 1})">подробнее</button>
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
@import url('../assets/style/pageHome.css');

</style>
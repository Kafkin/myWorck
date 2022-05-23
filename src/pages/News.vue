<template>
  <section class="page_News News">
    <div class="page_News_BoxImg">
      <h1 class="page_News_title">Тимуровцы работают даже в плохую погоду!</h1>
      <!-- <img class="page_News_img" src="../assets/img/pageNewsSet/dom_zdaniia_gory_148563_1920x10802.jpg" alt=""> -->
    </div>

    <div class="page_News_BoxItem">
      <h2 class="page_News_subtitle">НАШИ НОВОСТИ</h2>
      <div>
        <vNews class="vNews" v-for="(item, index) in arrayNews" :key="index" :item="item" v-show="minIndex <= index && index <= maxIndex"></vNews>
      </div>
      
      <div class="page_News_navigation">
        <span class="page_News_navigationItem" :class="{ 'page_News_navigationItemActive': currentNews === index }" @click="nextNews(index)" v-for="(item, index) in Math.ceil(arrayNews.length / 3)" :key="index">{{ index+1 }}</span>
      </div>
    </div>


  </section>
</template>

<script>
import vNews from '../components/news.vue'

export default {
  data(){
    return{
      arrayNews: [
        {title: 'Вредители!', body: 'Многолетние и однолетние злаковые сорняки являются злостными вредителями культурных растений.', img: 'imgNewsOne'},
        {title: 'Утки <3', body: 'Взрослых уток нужно содержать в просторном птичнике, где зимой достаточно тепло, а летом', img: 'imgNewsTwo'},
        {title: 'Угличане?', body: 'Угличане выберут лучший вариант благоустройства зоны отдыха у прудов', img: 'imgNewsThree'},
        {title: 'Угличане?', body: 'Угличане выберут лучший вариант благоустройства зоны отдыха у прудов', img: 'imgNewsThree'},
        {title: 'Угличане?', body: 'Угличане выберут лучший вариант благоустройства зоны отдыха у прудов', img: 'imgNewsThree'},
        {title: 'Угличане?', body: 'Угличане выберут лучший вариант благоустройства зоны отдыха у прудов', img: 'imgNewsThree'},
        {title: 'Угличане?', body: 'Угличане выберут лучший вариант благоустройства зоны отдыха у прудов', img: 'imgNewsThree'},
        {title: 'Угличане?', body: 'Угличане выберут лучший вариант благоустройства зоны отдыха у прудов', img: 'imgNewsThree'}
      ],

      currentNews: 0,
      windowWidth: null,

      minIndex: 0,
      maxIndex: 2,
      minStandart: 0,
      maxStandart: 2,
    }
  },

  methods:{
    updateWidth() {
      this.windowWidth = window.innerWidth;
    },

    nextNews(index){
      this.currentNews = index
      this.minIndex = this.minStandart + (index * 3)
      this.maxIndex = this.maxStandart + (index * 3)
    }
  },

  computed:{
    
  },

  created(){
    window.addEventListener('resize', this.updateWidth);
    this.windowWidth = window.innerWidth;
  },

  components:{
    vNews
  }
}
</script>

<style>
@import url('../assets/style/pageNews.css');

</style>
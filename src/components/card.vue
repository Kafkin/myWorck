<template>
  <div>
    <div class="vShop__boxImg">
      <img :src="require(`../assets/img/pageShopSet/${item.img}.jpg`)" alt="">
    </div>

    <div class="vShop__div">
      <div class="vShop__div_two">
        <h2 class="vShop__title">{{ item.title }}</h2>
        <p class="vShop__price">От {{ item.price }}руб</p>
      </div>
      <p class="vShop__body">{{ item.body }}</p>
      <button class="vShop__btn">подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  props:{
    item: {
      type: String
    }
  }
}
</script>

<style>
.vShop{
  width: max-content; height: max-content;
  margin-bottom: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.vShop__boxImg{
  width: 175px; height: 140px;
  overflow: hidden;
  margin-bottom: 7px;
}

.vShop__boxImg > img{
  width: 110%; height: 110%;
  object-fit: contain;
  object-position: 0;
}

.vShop__div{
  width: 100%; height: 100%;
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vShop__div_two{
  width: 100%; height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vShop__title{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: #F1AA1E;
}

.vShop__price{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
}

.vShop__body{
  max-width: 160px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #828282;
  margin: 10px 0;
  text-align: center;
}

.vShop__btn{
  width: max-content; height: max-content;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 107.52%;
  color: #FFFFFF;
  background: #F1AA1E;
  border-radius: 100px;
  border: none;
  padding: 9px 13px;
  cursor: pointer;
  z-index: 700;
}



/* @media */
@media (min-width: 480px){
  .vShop{
    flex-direction: row;
  }

  .vShop__div {
    width: 55%;
    padding: 0 10px;
    align-items: flex-start;
  }
  

  .vShop__div_two{
    flex-direction: row;
    justify-content: space-between;
  }
  
  .vShop__body{
    max-width: 250px;
    text-align: start;
  }
}

@media (min-width: 800px){
  .page_Shop_card{
    width: 600px; height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .vShop{
    flex-direction: column;
  }

  .vShop__boxImg {
    width: 225px;
    height: 166px;
    overflow: hidden;
    margin-bottom: 7px;
  }

  .vShop__boxImg > img {
    width: 100%;
    height: 120%;
  }

  .vShop__div {
    width: 90%;
    padding: 0 10px;
    align-items: flex-start;
  }
  

  .vShop__div_two{
    flex-direction: row;
    justify-content: space-between;
  }
  
  .vShop__body{
    max-width: 250px;
    text-align: start;
  }
}

@media (min-width: 1200px){
  .page_Shop_card{
    width: 900px; height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}



@media (min-width: 1700px){
  .vShop__boxImg {
    width: 281px;
    height: 201px;
    overflow: hidden;
    margin-bottom: 7px;
  }

  .vShop__title{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #F1AA1E;
  }

  .vShop__price{
    font-size: 15px;
  }

  .vShop__body{
    font-size: 14px;
    margin-bottom: 20px;
  }

  .vShop__btn{
    font-size: 14px;
    padding: 15px 25px;
  }

  .vShop__boxImg > img {
    width: 120%;
    height: 117%;
  }

  .vShop__div{
    width: 100%;
    padding: 0;
    padding-right: 15px;
    align-items: flex-start;
  }
}
</style>
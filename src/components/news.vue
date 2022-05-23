<template>
  <div>
    <div class="vNews__boxImg">
      <img :src="require(`../assets/img/pageNewsSet/${item.img}.jpg`)" alt="">
    </div>

    <div class="vNews__div">
      <h2 class="vNews__title">{{ item.title }}</h2>
      <p class="vNews__body">{{ item.body }}</p>
      <button class="vNews__btn">подробнее</button>
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
.vNews{
  width: max-content; height: max-content;
  margin-bottom: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.vNews__boxImg{
  width: 235px; height: 168px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 7px;
}

.vNews__boxImg > img{
  width: 110%; height: 110%;
  object-fit: contain;
  object-position: 0;
}

.vNews__div{
  width: 100%; height: 100%;
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.vNews__title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 14px;
}

.vNews__body{
  max-width: 230px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
  margin: 10px 0;
}

.vNews__btn{
  width: max-content; height: max-content;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 107.52%;
  color: #FFFFFF;
  background: #F1AA1E;
  border-radius: 100px;
  border: none;
  padding: 9px 13px;
  cursor: pointer;
}


/* @media */
@media (min-width: 576px){
  .vNews{
    width: max-content; height: 168px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .vNews__boxImg{
    width: 235px; height: 168px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 7px;
  }

  .vNews__div{
    width: max-content; height: 100%;
    gap: 0;
  }

  .vNews__title{
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .vNews__body{
    margin: 0;
    max-width: 250px;
  }

  .vNews__btn{
    margin: 0;
    margin-top: auto;
  }
}

@media (min-width: 1250px){
  .vNews{
    width: max-content; height: 211px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .vNews__boxImg{
    width: 284px; height: 211px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 7px;
  }

  .vNews__title{
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .vNews__body{
    margin: 0;
    font-size: 18px;
    max-width: 270px;
    font-weight: 200;
    margin-top: 10px;
  }

  .vNews__btn{
    margin: 0;
    padding: 15px 25px;
    margin-top: auto;
  }
}
</style>
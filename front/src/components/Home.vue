<template>
  <div class="template">
    <mt-swipe :auto="4000" :show-indicators="true" class="swipe-wrap">
      <mt-swipe-item v-for="(item,i) of banList" :key="i" class="swipe-item">
        <img :src="item"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="indexNav">
      <div class="in1 fl">
        <router-link :to="{name:'Home'}">
          <strong class="fl">宅配<br>套餐</strong>
          <img src="../assets/icon1.png" class="fr"/>
        </router-link>
      </div>
      <div class="in2 fr">
        <router-link :to="{name:'Home'}">
          <strong class="fl">农场特供</strong>
          <img src="../assets/icon2.png" class="fr"/>
        </router-link>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="indexNav" style="margin-top:4px">
      <div class="in1 fr boluo"></div>
      <div class="in2 fl">
        <router-link :to="{name:'Home'}">
          <strong class="fl">卡券专区</strong>
          <img src="../assets/icon3.png" class="fr"/>
        </router-link>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="indexNav" style="margin-top:4px">
      <div class="in4">
        <router-link :to="{name:'Home'}">
          <img src="../assets/icon4.png"/>
          <span>我的农场</span>
        </router-link>
      </div>
      <div class="in4">
        <router-link :to="{name:'Home'}">
          <img src="../assets/icon5.png"/>
          <span>养生专家</span>
        </router-link>
      </div>
      <div class="in4">
        <router-link :to="{name:'Home'}">
          <img src="../assets/icon6.png"/>
          <span>走进农场</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data(){
    return{
      banList:[require("../assets/ban.jpg"),require("../assets/ban.jpg"),require("../assets/ban.jpg"),require("../assets/ban.jpg"),require("../assets/ban.jpg")]
    }
  },
  mounted(){
    setTimeout(() => {
      var height = $(".swipe-item").children("img").height();
      $(".swipe-wrap").css("height", height);
    }, 100);
  }
}
</script>

<style scoped lang="less">
.template{
  width: 100%;
  .swipe-wrap{
    width: 100%;
    transform: translateZ(0);
    .swipe-item{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: auto;
      }
    }
  }
  .indexNav{
    .in1{
      width: 32.5%;
      height: 135px;
      a{
        background: #bfcf6c;
        padding: 7% 5%;
        display: block;
        color: #fff;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        strong{
          font-weight: 400;
          text-align: right;
          padding: 1.3rem 0 0 0.5rem;
          font-size: 1.2rem;
        }
        img{
          padding: 1.2rem 0.5rem 0 0;
        }
      }
      a::after{
        content: " ";
        display: table;
        clear: both;
      }
    }
    .in1.boluo{
      background: url('../assets/boluo.jpg') no-repeat right bottom;
    }
    .in2{
      width: calc(67.5% - 4px);
      height: 135px;
      a{
        background: #7CBB46;
        padding: 7% 5%;
        display: block;
        color: #fff;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        img{
          padding: 0 2rem 0 0;
        }
        strong{
          font-size: 1.5rem;
          padding: 1rem 0 0 1.5rem;
        }
      }
      a::after{
        content: " ";
        display: table;
        clear: both;
      }
    }
    .in4{
      height: 65px;
      width: calc((100% - 8px) / 3);
      background: #0C7052;
      margin-right: 4px;
      float: left;
      text-align: center;
      line-height: 65px;
      a{
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        img{
          vertical-align: middle;
        }
      }
    }
    .in4:last-child{
      margin-right: 0;
    }
    .clearfix::before,.clearfix::after{
      content: " ";
      display: table;
    }
    .clearfix::after{
      clear: both;
    }
  }
  .fl{
    float: left;
    margin-right: 4px;
  }
  .fr{
    float: right;
  }
  a{
    -webkit-tap-highlight-color: transparent;
  }
  img{
    max-width: 100%;
    height: auto;
  }
}
@media screen and (max-width: 480px){
  .indexNav .in1{
    height: 105px !important;
  }
  .indexNav .in2{
    height: 105px !important;
  }
  .indexNav .in1 a img{
    width: 45%;
  }
  .indexNav .in2 a img{
    width: 20%;
  }
}
@media screen and (max-width: 414px){
  .indexNav .in4 a img{
    width: 15px;
    height: auto;
  }
}
</style>

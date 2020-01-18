<template>
  <div id="app">
    <router-view/>
    <div class="tabbar" v-if="$route.meta.showTab">
      <div class="tab-item active" @click="dealClick($event)">
        <div class="tab-item-row"><img src="./assets/icon_1_2.png"/></div>
        <div class="tab-item-row">
          <router-link :to="{name:'Home'}">首页</router-link>
        </div>
      </div>
      <div class="tab-item" @click="dealClick($event)">
        <div class="tab-item-row"><img src="./assets/icon_2_1.png"/></div>
        <div class="tab-item-row">
          <router-link :to="{name:'Home'}">电话</router-link>
        </div>
      </div>
      <div class="tab-item" @click="dealClick($event)">
        <div class="tab-item-row"><img src="./assets/icon_3_1.png"/></div>
        <div class="tab-item-row">
          <router-link :to="{name:'Cart'}">购物车</router-link>
        </div>
      </div>
      <div class="tab-item" @click="dealClick($event)">
        <div class="tab-item-row"><img src="./assets/icon_4_1.png"/></div>
        <div class="tab-item-row">
          <router-link :to="{name:'Member'}">会员</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  methods:{
    dealClick(e){
      var index1 = $(e.currentTarget).index();
      var index2 = $(".active").index();
      $(".active").find("img").attr("src",require("./assets/icon_"+(index2+1)+"_1.png"));
      $(".active").removeClass("active");
      $(e.currentTarget).addClass("active");
      if(index1===0){
        $(e.currentTarget).find("img").attr("src",require("./assets/icon_1_2.png"))
      }else if(index1===1){
        $(e.currentTarget).find("img").attr("src",require("./assets/icon_2_2.png"))
      }else if(index1===2){
        $(e.currentTarget).find("img").attr("src",require("./assets/icon_3_2.png"))
      }else{
        $(e.currentTarget).find("img").attr("src",require("./assets/icon_4_2.png"))
      }
    }
  }
}
</script>

<style lang="less">
body{
  #app{
    width: 640px;
    margin: 0 auto;
    .tabbar{
      height: 55px;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #21292C;
      .tab-item{
        width: 25%;
        float: left;
        text-align: center;
        height: 100%;
        .tab-item-row{
          height: 50%;
          img{
            height: 20px;
            padding-top: 10px;
          }
          a{
            color: #fff;
            font-size: 0.8rem;
            text-decoration: none;
            outline: none;
            -webkit-tap-highlight-color: transparent;
          }
          a:active,a:link,a:visited{
            outline: none;
          }
        }
      }
      .tab-item.active{
        background-color: #000000;
      }
    }
  }
  margin: 0;
  padding: 0;
  font-size: 16px;
}
@media screen and (max-width: 640px){
  #app{
    width: 100% !important;
  }
}
</style>

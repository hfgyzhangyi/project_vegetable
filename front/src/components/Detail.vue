<template>
    <div class="template">
        <mt-swipe :auto="4000" :show-indicators="true" class="swipe-wrap">
            <mt-swipe-item v-for="(item,i) of banList" :key="i" class="swipe-item">
                <img :src="item"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="price">
            14.25
            <div class="count">
                <span @click="minus">-</span>
                <span class="num">0</span>
                <span @click="plus">+</span>
            </div>
        </div>
        <div class="collect">
            <div class="detail">
                <p>三级分销农庄有机毛豆500g</p>
                <p>富含纤维素，平衡每日膳食</p>
            </div>
            <div class="icon"></div>
        </div>
        <div class="specs">
            <h3>商品规格</h3>
            <div><span @click="specsChoose($event)" class="active">500g</span></div>
            <div><span @click="specsChoose($event)">1000g</span></div>
            <div><span @click="specsChoose($event)">1500g</span></div>
            <div><span @click="specsChoose($event)">2000g</span></div>
            <div><span @click="specsChoose($event)">3000g</span></div>
        </div>
        <div class="detail">
            <div class="title">
                <ul>
                    <li @click="changePanel($event)" class="active">商品简介<span></span></li>
                    <li @click="changePanel($event)">商品参数<span></span></li>
                    <li @click="changePanel($event)">订购列表</li>
                </ul>
            </div>
            <div class="panel active">
                <img src="../assets/shangpin.jpg"/>
            </div>
            <div class="panel">暂无信息</div>
            <div class="panel">暂无信息</div>
        </div>
        <div class="bottom">
            <router-link :to="{name:'Home'}">
                <img src="../assets/icon7.png"/>
            </router-link>
            <button>加入购物车</button>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            banList:[require("../assets/proinfo.jpg"),require("../assets/proinfo.jpg"),require("../assets/proinfo.jpg")]
        }
    },
    methods:{
        minus(){
            var num = parseInt($(".num").text());
            if(num!==0){
                $(".num").text(--num);
            }
        },
        plus(){
            var num = parseInt($(".num").text());
            if(num<=98)
                $(".num").text(++num);
        },
        specsChoose(e){
            $("span.active").removeClass("active");
            $(e.currentTarget).addClass("active");
        },
        changePanel(e){
            var index = $(e.currentTarget).index();
            $("li.active").removeClass("active");
            $(e.currentTarget).addClass("active");
            $(".panel.active").removeClass("active");
            $(".panel:eq("+index+")").addClass("active");
        }
    },
    mounted(){
        $("body").css("background", "#EFEFEF");
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
    .mb-4{
        margin-bottom: 4rem;
    }
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
    .price{
        margin-top: 1rem;
        color: #FF6600;
        border-top: 1px solid #DDDDDD;
        border-bottom: 1px solid #DDDDDD;
        padding: 1rem 0.7rem;
        position: relative;
        background: #fff;
        .count{
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0;
            span{
                display: inline-block;
                color: #000;
                border: 1px solid #D9D9D9;
                font-size: 1rem;
                -moz-user-select: none;
                -webkit-user-select: none;
                user-select: none;
            }
            span:nth-child(1),span:nth-child(3){
                width: 1.5rem;
                height: 1.5rem;
                text-align: center;
                line-height: 1.5rem;
                background-color: #F7F7F7;
            }
            span:nth-child(2){
                height: 1.5rem;
                width: 2rem;
                text-align: center;
                line-height: 1.5rem;
                border-left: none;
                border-right: none;
            }
        }
    }
    .collect{
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding: 1rem 0.5rem;
        margin-bottom: 1rem;
        .detail{
            flex: 1;
            p{
                margin: 0;
            }
            p:nth-child(1){
                font-weight: bold;
                font-size: 0.9rem;
            }
            p:nth-child(2){
                font-size: 0.9rem;
                color: #999999;
            }
        }
    }
    .specs{
        background: #fff;
        padding: 0.5rem 0;
        border-bottom: 1px solid #DDDDDD;
        border-top: 1px solid #DDDDDD;
        margin-bottom: 1rem;
        h3{
            font-weight: 400;
            font-size: 0.9rem;
            margin: 0;
            padding: 0  0.7rem 0.5rem 0.7rem;
            border-bottom: 1px solid #DDDDDD;
        }
        div{
            width: 50%;
            padding: 0.2rem;
            float: left;
            box-sizing: border-box;
            margin-top: 0.5rem;
            span{
                display: inline-block;
                width: 100%;
                border: 1px solid #DDDDDD;
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 0.9rem;
            }
            span.active{
                border-color: #5EA626;
                color: #5EA626;
            }
        }
    }
    .specs:after{
        content: " ";
        display: table;
        clear: both;
    }
    .detail{
        background: #fff;
        padding: 0.3rem 0;
        .title{
            background-color: #F1F1F1;
            padding: 0.1rem 0;
            ul{
                list-style: none;
                padding: 0;
                li{
                    float: left;
                    width: 33.333333%;
                    font-size: 0.9rem;
                    position: relative;
                    text-align: center;
                    span{
                        position: absolute;
                        right: 0;
                        width: 1px;
                        height: 100%;
                        background-color: #A9ABAA;
                    }
                }
                li.active{
                    color: #5EA626;
                }
            }
            ul:after{
                content: " ";
                display: table;
                clear: both;
            }
        }
        .panel{
            z-index: 1;
            opacity: 0;
            background-color: #fff;
            padding: 0.1rem 0.2rem;
            display: none;
            img{
                width: 100%;
                height: auto;
            }
            font-size: 0.9rem;
        }
        .panel.active{
            z-index: 2;
            opacity: 1;
            display: block;
        }
        .panel:nth-child(3),.panel:nth-child(4){
            padding-bottom: 10rem;
        }
    }
    .bottom{
        background-color: #fff;
        border-top: 1px solid #DDDDDD;
        padding: 0.5rem 1rem;
        position: relative;
        img{
            max-width: 100%;
            height: auto;
            margin-left: 10%;
        }
        button{
            width: 60%;
            height: 70%;
            background-color: #FF6600;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 2%;
            border: none;
            color: #fff;
        }
    }
}
</style>
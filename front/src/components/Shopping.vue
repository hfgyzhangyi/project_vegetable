<template>
    <div class="template">
        <mt-swipe :auto="4000" :show-indicators="false" class="swipe-wrap">
            <mt-swipe-item v-for="(item,i) of banList" :key="i" class="swipe-item">
                <img :src="item"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="list">
            <h1>宅配套餐</h1>
            <ul>
                <li>
                    <router-link :to="{name:'Detail'}">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div>
                        <p>6斤有机蔬菜箱</p>
                        <p>十七农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
                    </div>
                </li>
                <li>
                    <router-link :to="{name:'Detail'}">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div>
                        <p>21斤有机蔬菜箱</p>
                        <p>十七农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
                    </div>
                </li>
                <li>
                    <router-link :to="{name:'Detail'}">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div>
                        <p>12斤有机蔬菜箱</p>
                        <p>十七农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list">
            <h1>有机食材</h1>
            <ul>
                <li>
                    <router-link :to="{name:'Detail'}">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div>
                        <p>时令果蔬</p>
                        <p>十七农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
                    </div>
                </li>
                <li class="big-item">
                    <h3>时令果蔬<span>更多</span></h3>
                    <div class="big-item-area">
                        <div>
                            <router-link :to="{name:'Detail'}">
                                <img src="../assets/z1.jpg"/>
                            </router-link>
                            <p>十七农庄有机毛豆500g</p>
                            <p>富含纤维素，平衡每日膳食</p>
                            <p>¥14.40</p>
                        </div>
                        <div>
                            <router-link :to="{name:'Detail'}">
                                <img src="../assets/z2.jpg"/>
                            </router-link>
                            <p>十七农庄有机毛豆500g</p>
                            <p>有机种植，风味独特，清热解暑，营养丰富</p>
                            <p>¥14.40</p>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link :to="{name:'Detail'}">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div>
                        <p>肉禽蛋奶</p>
                        <p>肉类、禽类、蛋类</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="list">
            <h1>卡券专区</h1>
            <ul>
                <li class="small-item">
                    <router-link :to="{name:'Detail'}" class="link">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div class="detail">
                        <p>套餐卡</p>
                        <p>月度套餐卡A、月度套餐卡B、季度套餐卡A、季度套餐卡B、半年套餐卡A、半年套餐卡B</p>
                    </div>
                </li>
                <li class="small-item">
                    <router-link :to="{name:'Detail'}" class="link">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div class="detail">
                        <p>健康礼券</p>
                        <p>有机健康体验150礼券、正能量518礼券、正能量998礼券、有机乐活礼券</p>
                    </div>
                </li>
                <li>
                    <router-link :to="{name:'Detail'}">
                        <img src="../assets/zhai1.jpg"/>
                    </router-link>
                    <div>
                        <p>精品礼盒</p>
                        <p>正能量518礼盒、正能量998礼盒、有机健康体验150礼盒</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mb-4"></div>
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
    .list{
        width: 100%;
        h1{
            margin: 0;
            padding: 0;
            background-color: #EFEFEF;
            padding: 0.5rem 0 0.5rem 0.5rem;
            font-size: 1rem;
            font-weight: 400;
        }
        ul{
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;
            li{
                width: 100%;
                display: flex;
                padding: 0.5rem;
                box-sizing: border-box;
                border-bottom: 1px solid #E8E8E8;
                a{
                    -webkit-tap-highlight-color: transparent;
                    margin-right: 0.3rem;
                }
                div{
                    flex:1;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    p{
                        font-size: 0.7rem;
                        margin: 0;
                    }
                    p:first-child{
                        font-size: 0.9rem;
                        font-weight: bold;
                        margin-top: -0.5rem;
                        margin-bottom: 0.3rem;
                    }
                    p:last-child{
                        color: #979797;
                    }
                }
            }
            li.small-item{
                width: 100%;
                padding: 0.5rem;
                box-sizing: border-box;
                display: block;
                a{
                    -webkit-tap-highlight-color: transparent;
                    margin-right: 0.3rem;
                }
                .link{
                    float: left;
                }
                .detail{
                    float: left;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    padding-top: 0.8rem;
                }
            }
            li.small-item::after{
                content: " ";
                display: table;
                clear: both;
            }
            li.big-item{
                width: 100%;
                display: flex;
                padding: 0.5rem;
                box-sizing: border-box;
                border-bottom: 1px solid #E8E8E8;
                flex-direction: column;
                h3{
                    margin: 0;
                    padding: 0;
                    font-size: 0.9rem;
                    font-weight: 400;
                    span{
                        position: absolute;
                        right: 0.5rem;
                        color: #FF6600;
                    }
                }
                .big-item-area{
                    display: flex;
                    flex-direction: row;
                    img{
                        max-width: 100%;
                        height: auto;
                    }
                    p{
                        color: #000;
                        font-size: 1rem;
                    }
                    p:nth-child(3){
                        color: #999999;
                        padding-top: 0.5rem;
                        padding-bottom: 0.3rem;
                        font-size: 0.7rem;
                        flex: 1;
                    }
                    p:nth-child(4){
                        color: #FF6600;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
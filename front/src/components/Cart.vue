<template>
    <div class="template">
        <div class="top">
            <img src="../assets/user.jpg"/>
        </div>
        <div class="cart">
            <span>购物车共有：<strong class="orange">2</strong>件商品</span>
            <div>
                <span></span>
                <img src="../assets/icon8.png"/>
            </div>
        </div>
        <div class="item">
            <div class="item-wrap">
                <img src="../assets/zf3.jpg"/>
                <div>
                    <p>十七农庄有机瓢瓜400g</p>
                    <p>下单时间：2015-08-11 13:51</p>
                </div>
                <count :num="0" :index="0" @count="count"></count>
            </div>
            <div class="price">¥0</div>
        </div>
        <div class="item">
            <div class="item-wrap">
                <img src="../assets/zf2.jpg"/>
                <div>
                    <p>十七农庄有机瓢瓜400g</p>
                    <p>下单时间：2015-08-11 13:51</p>
                </div>
                <count :num="0" :index="1" @count="count"></count>
            </div>
            <div class="price">¥0</div>
        </div>
        <bottom :price="price" :text="text"></bottom>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            price:0,
            text:"去结算"
        }
    },
    mounted(){
        $("body").css("background", "#EFEFEF");
    },
    methods:{
        count(index,num){
            $(".price:eq("+index+")").text("¥"+(36.6*num).toFixed(2));
            var prices = $(".price");
            var count = 0;
            for(var i=0;i<prices.length;i++){
                count=parseFloat($(prices[i]).text().substring(1))+parseFloat(count);
            }
            this.price = count.toFixed(2);
        }
    }
}
</script>

<style scoped lang="less">
.template{
    .top{
        font-size: 0;
        img{
            width: 100%;
            height: auto;
        }
    }
    .cart{
        background-color: #fff;
        padding: 0.7rem 0.8rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #DDDDDD;
        span{
            font-size: 0.9rem;
            color: #999999;
            .orange{
                color: #FF6600;
            }
        }
        div{
            float: right;
            width: 25%;
            text-align: center;
            position: relative;
            span{
                width: 1px;
                height: 70%;
                background: #A9ABAA;
                position: absolute;
                left: 0;
                transform: translateY(15%);
            }
        }
    }
    .item{
        background-color: #fff;
        border-top: 1px solid #dddddd;
        margin-bottom: 1rem;
        .item-wrap{
            width: 100%;
            padding: 0.7rem 0.8rem;
            box-sizing: border-box;
            border-bottom: 1px solid #dddddd;
            display: flex;
            align-items: center;
            position: relative;
            img{
                width: 12%;
                height: auto;
                margin-right: 0.5rem;
            }
            div{
                p{
                    font-size: 0.7rem;
                }
                p:nth-child(1){
                    font-weight: bold;
                }
                p:nth-child(2){
                    color: #999999;
                }
            }
        }
        .price{
            color: #FF6600;
            width: 100%;
            padding: 0.7rem 0.8rem;
            box-sizing: border-box;
            font-weight: bold;
        }
    }
}
</style>
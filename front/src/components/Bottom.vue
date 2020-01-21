<template>
    <div class="template">
        <div class="wrap">
            <div class="arrow">
                <router-link :to="{name:'Shopping'}">
                    <img src="../assets/arrow.png"/>
                </router-link>
            </div>
            <div class="total">
                总计：<strong class="orange">¥{{price}}</strong>
            </div>
            <div class="submit">
                <button @click="submit">{{text}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:"bottom",
    props:["price","text"],
    methods:{
        submit(){
            if(this.text === "去结算"){
                if(this.price===0){
                    this.$toast("没有商品需要结算")
                }else{
                    this.$router.push({name:'Comfirm',params:{price:this.price}})
                }
            }else{
                this.$router.push({name:'Finish'})
            }
        }
    }
}
</script>

<style scoped lang="less">
.template{
    .wrap{
        width: 100%;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #DDDDDD;
        display: flex;
        align-items: center;
        .arrow{
            padding: 1rem;
            border-right: 1px solid #DDDDDD;
            width: 5%;
            text-align: center;
        }
        .total{
            padding: 1rem;
            width: 50%;
            border-right: 1px solid #DDDDDD;
            box-sizing: border-box;
            font-size: 0.9rem;
            .orange{
                color: #FF6600;
            }
        }
        .submit{
            padding: 0 0.5rem;
            width: 45%;
            box-sizing: border-box;
            button{
                width: 100%;
                background-color: #FF6600;
                color: #fff;
                height: 2.5rem;
                border: none;
            }
        }
    }
}
</style>
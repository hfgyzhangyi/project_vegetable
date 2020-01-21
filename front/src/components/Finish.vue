<template>
    <div class="template">
        <div class="header">
            订单提交成功
        </div>
        <div class="top"></div>
        <div class="item">
            <div class="pic"><img src="../assets/zf3.jpg"/></div>
            <div class="content">
                <p>订单号：AODA456787211453</p>
                <p>创建日期：2015-8-11</p>
                <p>失效日期：2015-9-12</p>
                <p>¥36.90</p>
            </div>
            <span style="color:#FF6600">等待支付</span>
        </div>
        <p class="notice">请您尽快完成付款，否则订单将被取消</p>
        <div class="bottom">
            <div><button @click="shop" class="shop">继续购物</button></div>
            <div><button class="pay">立即支付</button></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    mounted(){
        $("body").css("background", "#EFEFEF");
    },
    methods:{
        shop(){
            this.$router.push({name:"Shopping"});
        }
    }
}
</script>

<style scoped lang="less">
.template{
    .header{
        padding: 0.7rem;
        background: #5EA626;
        color: #fff;
        text-align: center;
        font-size: 0.9rem;
    }
    .top{
        height: 120px;
        background: url("../assets/dingdan.jpg") no-repeat center center;
    }
    .item{
        background: #fff;
        border-top: 1px solid #dddddd;
        padding: 0.5rem;
        margin-top: 1rem;
        display: flex;
        position: relative;
        .pic{
            width: 13%;
            display: flex;
            align-items: center;
            img{
                width: 100%;
                height: auto;
            }
        }
        .content{
            margin-left: 0.5rem;
            p{
                margin: 0;
                font-size: 0.5rem;
            }
            p:nth-child(1){
                margin: 0.5rem 0;
                font-weight: bold;
            }
            p:nth-child(2),p:nth-child(3){
                color: #999999;
            }
            p:nth-child(4){
                color: #FF6600;
                font-weight: bold;
            }
        }
        span{
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.9rem;
        }
    }
    p.notice{
        color: #FF6600;
        font-size: 0.9rem;
        padding: 0.5rem 0;
        text-align: center;
    }
    .bottom{
        padding: 0 0.5rem;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #dddddd;
        div{
            width: 50%;
            display: inline-block;
            float: left;
            text-align: center;
            padding: 0.5rem 0;
            button{
                width: 90%;
                height: 2.5rem;
                border: none;
                color: #fff;
                outline: none;
            }
            button.shop{
                background: #5EA626;
            }
            button.pay{
                background: #FF701E;
            }
        }
        div:nth-child(1){
            border-right: 1px solid #dddddd;
            box-sizing: border-box;
        }
    }
}
</style>
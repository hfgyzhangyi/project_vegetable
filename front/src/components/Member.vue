<template>
    <div class="template">
        <div class="top">
            <img src="../assets/user.jpg"/>
        </div>
        <div class="content-wrap">
            <div class="line" @click="toOrder">我的订单</div>
            <div class="line">我的菜箱<span class="note">会员可以选菜啦</span></div>
            <div class="line no-border">绑定套餐</div>
        </div>
        <div class="content-wrap">
            <div class="line">我的抵用券</div>
            <div class="line">收货地址管理</div>
            <div class="line">我的收藏</div>
            <div class="line">我的喜好</div>
            <button class="logout" @click="logout">退出登录</button>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    beforeCreate(){
        if(window.sessionStorage.getItem("account")===""||window.sessionStorage.getItem("account")===null){
            this.$router.push({name:"Register"})
        }
    },
    mounted(){
        $("body").css("background", "#fff");
        var index = $(".tab-item.active").index();
        $(".tab-item.active").find("img").attr("src",require("../assets/icon_"+(index+1)+"_1.png"));
        $(".tab-item.active").removeClass("active");
        $(".tab-item:eq(3)").addClass("active");
        $(".tab-item:eq(3)").find("img").attr("src",require("../assets/icon_4_2.png"))
    },
    methods:{
        logout(){
            //this.$store.dispatch("setPhoneNumberFun","")
            window.sessionStorage.removeItem("account")
            this.$router.push({name:"Login"})
        },
        toOrder(){
            this.$router.push({name:"Order"})
        }
    }
}
</script>

<style scoped lang="less">
.template{
    background-color: #EFEFEF;
    .top{
        img{
            height: auto;
            width: 100%;
        }
    }
    .content-wrap{
        margin-top: 0.5rem;
        padding: 0 0.5rem;
        background: #fff;
        width: 100%;
        box-sizing: border-box;
        .line{
            height: 2.5rem;
            width: 100%;
            border-bottom: 1px solid #DDDDDD;
            line-height: 2.5rem;
            padding-left: 1rem;
            font-size: 0.9rem;
            box-sizing: border-box;
            background: url("../assets/jian-new.png") no-repeat center right;
            position: relative;
            .note{
                color: red;
                position: absolute;
                right: 30px;
                font-size: 0.9rem;
            }
        }
        .no-border{
            border: none;
        }
        .logout{
            height: 3rem;
            width: 90%;
            margin: 2rem 0 0 5%;
            border: none;
            background-color: #5EA626;
            color: #fff;
            font-size: 1rem;
            outline: none;
        }
    }
}
</style>
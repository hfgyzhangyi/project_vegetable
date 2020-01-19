<template>
    <div class="template">
        <div class="logo">
            <router-link :to="{name:'Home'}">
                <img src="../assets/logo.png"/>
            </router-link>
        </div>
        <div class="input-wrap">
            <p>还没有十七农场账号？点此<router-link :to="{name:'Register'}"><span style="color:red">注册</span></router-link></p>
            <div class="input-area">
                <input type="text" placeholder="输入手机号码或者邮箱号" class="account"/>
                <input type="text" placeholder="输入密码" class="password"/>
            </div>
        </div>
        <button class="submit" @click="login">立即登录</button>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    mounted(){
        $("body").css("background", "#EFEFEF");
    },
    methods:{
        login(){
            var account = $(".account").val()
            var password = $(".password").val()
            if(account==="hfgyzhangyi"&&password==="12345zy"){
                //this.$store.dispatch("setPhoneNumberFun", account)
                window.sessionStorage.setItem("account", "hfgyzhangyi")
                this.$router.push({name:'Member'})
            }
            else
                this.$toast("用户名或密码不正确")
        }
    }
}
</script>

<style scoped lang="less">
.template{
    .logo{
        img{
            max-width: 100%;
            height: auto;
        }
    }
    .input-wrap{
        font-size: 0.8rem;
        p{
            margin-bottom: 0.3rem;
            a{
                text-decoration: none;
            }
        }
        .input-area{
            padding: 1rem 1rem;
            background-color: #fff;
            width: 100%;
            box-sizing: border-box;
            input{
                width: 100%;
                height: 2.5rem;
                border: none;
                border-bottom: 1px solid #DDDDDD;
                display: block;
                position: relative;
                margin-bottom: 1px;
            }
        }
    }
    .submit{
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
</style>
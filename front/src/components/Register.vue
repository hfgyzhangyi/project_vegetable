<template>
    <div class="template">
        <div class="logo">
            <router-link :to="{name:'Home'}">
                <img src="../assets/logo.png"/>
            </router-link>
        </div>
        <div class="input-wrap">
            <p>已经有账号了？点此<router-link :to="{name:'Login'}"><span style="color:red">登录</span></router-link></p>
            <div class="input-area">
                <input type="text" placeholder="输入手机号码或者邮箱号"/>
                <div class="line" style="width:100%;border-bottom:1px solid #DDDDDD">
                    <input type="text" placeholder="输入短信验证码" class="message"/>
                    <button>获取验证码</button>
                </div>
                <input type="text" placeholder="设置新密码（6-18位数字或字母）"/>
                <input type="text" placeholder="再次输入密码"/>
            </div>
        </div>
        <button class="submit">立即注册</button>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    mounted(){
        $("body").css("background", "#EFEFEF");
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
            .line{
                input.message{
                    width: 65%;
                    border: none;
                    float: left;
                }
                button{
                    background-color: #5EA626;
                    width: 27%;
                    margin-left: 4%;
                    float: right;
                    height: 2rem;
                    margin-top: 0.25rem;
                    color: #fff;
                    border: none;
                    outline: none;
                }
            }
            .line::after{
                content: " ";
                clear: both;
                display: table;
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
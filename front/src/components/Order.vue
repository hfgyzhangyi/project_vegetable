<template>
    <div class="template">
        <div class="top">
            <img src="../assets/user.jpg"/>
        </div>
        <div class="nav-wrap">
            <ul>
                <li>待付款<span></span></li>
                <li>待发货<span></span></li>
                <li class="active">已取消<span></span></li>
                <li>已完成</li>
            </ul>
        </div>
        <div class="list">
            <div class="item">
                <div class="line1">
                    <span>订单号:PO20150819111145</span>
                    <span style="color:red">订单取消</span>
                </div>
                <div class="line2">
                    <img src="../assets/zf3.jpg"/>
                    <div class="content">
                        <div>十七农庄有机瓢瓜400g</div>
                        <div>下单时间：2015-08-11  13:51</div>
                    </div>
                </div>
                <div class="line3">
                    ¥36.60
                </div>
            </div>
            <div class="item">
                <div class="line1">
                    <span>订单号:PO20150819111145</span>
                    <span style="color:red">订单取消</span>
                </div>
                <div class="line2">
                    <img src="../assets/zf3.jpg"/>
                    <div class="content">
                        <div>十七农庄有机瓢瓜400g</div>
                        <div>下单时间：2015-08-11  13:51</div>
                    </div>
                </div>
                <div class="line3">
                    ¥36.60
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    beforeCreate(){
        setTimeout(()=>{
            var index = $(".tab-item.active").index();
            if(index!==-1){
                $(".tab-item.active").find("img").attr("src",require("../assets/icon_"+(index+1)+"_1.png"));
            }
            $(".tab-item.active").removeClass("active");
            $(".tab-item:eq(3)").addClass("active");
            $(".tab-item:eq(3)").find("img").attr("src",require("../assets/icon_4_2.png"))
        },100)
    },
    mounted(){
        $("body").css("background", "#EFEFEF");
    }
}
</script>

<style scoped lang="less">
.template{
    .top{
        img{
            width: 100%;
            height: auto;
        }
    }
    .nav-wrap{
        background: #fff;
        padding: 0 1.5rem;
        width: 100%;
        font-size: 0;
        box-sizing: border-box;
        ul{
            list-style: none;
            width: 100%;
            padding: 0;
            li{
                float: left;
                height: 3rem;
                font-size: 0.9rem;
                line-height: 3rem;
                width: 25%;
                text-align: center;
                box-sizing: border-box;
                position: relative;
                span{
                    display: inline-block;
                    height: 1rem;
                    width: 1px;
                    background: #A9ABAA;
                    position: absolute;
                    right: 0;
                    top: 1rem;
                }
            }
            li.active{
                color: #5EA626;
            }
        }
        ul::after{
            content: " ";
            display: table;
            clear: both;
        }
    }
    .list{
        width: 100%;
        .item{
            width: 100%;
            background-color: #fff;
            margin-top: 1rem;
            .line1{
                display: flex;
                justify-content: space-between;
                padding: 0.5rem 0.5rem;
                border-bottom: 1px solid #DDDDDD;
                span{
                    font-size: 0.7rem;
                }
            }
            .line2{
                display: flex;
                padding: 0.5rem 0.5rem;
                border-bottom: 1px solid #DDDDDD;
                width: 100%;
                box-sizing: border-box;
                .content{
                    display: flex;
                    flex-direction: column;
                    flex:1;
                    justify-content: center;
                    position: relative;
                    background: url("../assets/jian-new.png") no-repeat right center;
                    div{
                        margin-bottom: 0.5rem;
                        font-size: 0.8rem;
                    }
                    div:nth-child(1){
                        font-weight: bold;
                    }
                    div:nth-child(2){
                        color: #999999;
                        font-size: 0.7rem;
                    }
                }
            }
            .line3{
                padding: 0.5rem 0.5rem;
                box-sizing: border-box;
                color: #FF6600;
                font-size: 1rem;
                font-weight: bold;
            }
        }
    }
}
</style>
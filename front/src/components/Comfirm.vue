<template>
    <div class="template">
        <div class="top">
            <img src="../assets/user.jpg"/>
        </div>
        <div class="item">
            新增收货地址
            <img src="../assets/jian-new.png"/>
        </div>
        <div class="item">
            选择收货时间
            <img src="../assets/jian-new.png"/>
        </div>
        <div class="item">
            支付方式
            <span>网上支付</span>
        </div>
        <div class="item">
            优惠券
            <span>无</span>
        </div>
        <div class="item">
            是否需要开发票
            <span><label style="color:red">是</label>&nbsp;&nbsp;&nbsp;<label style="color:black">否</label></span>
        </div>
        <div class="item mt-0 bt-none">
            发票抬头
            <span>个人</span>
        </div>
        <div class="item mt-0 bt-none">
            发票内容
            <span>请选择发票内容</span>
        </div>
        <div class="item mt-0 bt-none">
            商品清单
        </div>
        <div class="wrap">
            <div class="item-wrap">
                <img src="../assets/zf3.jpg"/>
                <div>
                    <p>十七农庄有机瓢瓜400g</p>
                    <p>下单时间：2015-08-11 13:51</p>
                </div>
                <span>×1</span>
            </div>
            <div class="price">¥36.60</div>
        </div>
        <div class="wrap">
            <div class="item-wrap">
                <img src="../assets/zf3.jpg"/>
                <div>
                    <p>十七农庄有机瓢瓜400g</p>
                    <p>下单时间：2015-08-11 13:51</p>
                </div>
                <span>×1</span>
            </div>
            <div class="price">¥36.60</div>
        </div>
        <div class="item mt-0 bt-none">
            商品金额
            <span style="color:#FF6600">¥{{price1}}</span>
        </div>
        <div class="item mt-0 bt-none">
            折扣优惠
            <span style="color:#7ABD54">¥0.00</span>
        </div>
        <div class="item mt-0 bt-none">
            抵扣金额
            <span style="color:#7ABD54">¥0.00</span>
        </div>
        <div class="item mt-0 bt-none">
            运费
            <span style="color:#FF6600">¥{{price2}}</span>
        </div>
        <div class="mb-4"></div>
        <bottom :price="price3" :text="text"></bottom>
    </div>
</template>

<script>
export default {
    data(){
        return{
            price1:0,
            price2:0,
            price3:0,
            text:"提交订单"
        }
    },
    mounted(){
        $("body").css("background", "#EFEFEF");
        this.$axios.get("http://localhost:3000/pay").then(res=>{
            if(this.$route.params.price === undefined){
                this.price1 = parseFloat(window.sessionStorage.getItem("price")).toFixed(2);
                this.price2 = parseFloat(res.data.fee).toFixed(2);
                this.price3 = (parseFloat(this.price1)+parseFloat(this.price2)).toFixed(2);
            }else{
                this.price1 = parseFloat(this.$route.params.price).toFixed(2);
                this.price2 = parseFloat(res.data.fee).toFixed(2);
                this.price3 = (parseFloat(this.price1)+parseFloat(this.price2)).toFixed(2);
                window.sessionStorage.setItem("price", this.price1);
            }
        })
    }
}
</script>

<style scoped lang="less">
.template{
    .mb-4{
        margin-bottom: 4rem;
    }
    .top{
        img{
            width: 100%;
            height: auto;
        }
    }
    .item{
        padding: 0.5rem;
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        border-top: 1px solid #DDDDDD;
        border-bottom: 1px solid #DDDDDD;
        position: relative;
        img{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        span{
            position: absolute;
            right: 0.5rem;
            font-size: 0.7rem;
            color: #999999;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .mt-0{
        margin-top: 0;
    }
    .bt-none{
        border-top: none;
    }
    .wrap{
        .item-wrap{
            width: 100%;
            padding: 0.7rem 0.8rem;
            box-sizing: border-box;
            border-bottom: 1px solid #dddddd;
            display: flex;
            align-items: center;
            position: relative;
            background: #fff;
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
            span{
                position: absolute;
                right: 0.8rem;
                top: 50%;
                transform: translateY(-50%);
                font-size: 0.9rem;
            }
        }
        .price{
            width: 100%;
            padding: 0.7rem 0.8rem;
            box-sizing: border-box;
            border-bottom: 1px solid #dddddd;
            background: #fff;
            color: #FF6600;
            font-weight: bold;
        }
    }
}
</style>
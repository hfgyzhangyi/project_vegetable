<template>
    <div class="template">
        <div class="top">
            <router-link :to="{name:'Home'}">
                <img src="../assets/logo.png"/>
            </router-link>
        </div>
        <div class="content">
            <h1>走进农场</h1>
            <p>十七农场有限公司</p>
            <p>地址：上海 · 普陀区曹杨路1040弄一号楼中友大厦19楼</p>
            <p>电话：021-31127521 & 021-60521286</p>
            <p>客服：kefu@webqin.net & kefu2@webqin.net</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        $("body").css("background", "#EFEFEF");
    }
}
</script>

<style scoped lang="less">
.template{
    .top{
        a{
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    .content{
        width: 100%;
        h1{
            background-color: #00B150;
            font-size: 0.9rem;
            padding: 0.2rem 0 0.2rem 0.5rem;
            color: #fff;
            font-weight: 400;
        }
        p:nth-child(2){
            font-weight: 600;
            font-size: 0.9rem;
            padding: 1rem 0 1.3rem 0;
        }
        p:not(:nth-child(2)){
            margin: 0.5rem 0;
            font-size: 0.9rem;
        }
    }
}
</style>
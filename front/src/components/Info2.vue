<template>
    <div class="template">
        <div class="top">
            <router-link :to="{name:'Home'}">
                <img src="../assets/logo.png"/>
            </router-link>
        </div>
        <div class="content">
            <h1>养生专家</h1>
            <ul>
                <li>
                    <router-link :to="{name:'Info1'}">十七农场有限公计有限公计有限公司始建于九十年代</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">公司联手各大品牌材料厂商，推出“一站式采购”、“一条龙服务”理念</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">时代的日益变迁，创造了信念不断进取的精神，制定出一系列的保障计划</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">十七农场有限公计有限公计有限公司始建于九十年代</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">公司联手各大品牌材料厂商，推出“一站式采购”、“一条龙服务”理念</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">时代的日益变迁，创造了信念不断进取的精神，制定出一系列的保障计划</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">十七农场有限公计有限公计有限公司始建于九十年代</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">公司联手各大品牌材料厂商，推出“一站式采购”、“一条龙服务”理念</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">时代的日益变迁，创造了信念不断进取的精神，制定出一系列的保障计划</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">十七农场有限公计有限公计有限公司始建于九十年代</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">公司联手各大品牌材料厂商，推出“一站式采购”、“一条龙服务”理念</router-link>
                    <span>2015年4月30日</span>
                </li>
                <li>
                    <router-link :to="{name:'Info1'}">时代的日益变迁，创造了信念不断进取的精神，制定出一系列的保障计划</router-link>
                    <span>2015年4月30日</span>
                </li>
            </ul>
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
        ul{
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;
            li{
                width: 100%;
                position: relative;
                border-bottom: solid #DDDDDD 0.333333px;
                a{
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 50%;
                    text-decoration: none;
                    color: #000;
                    font-size: 0.9rem;
                }
                span{
                    position: absolute;
                    right: 0;
                    font-size: 0.9rem;
                    color: #999999;
                }
            }
        }
    }
}
</style>
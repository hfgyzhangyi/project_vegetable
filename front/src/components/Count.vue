<template>
    <div class="template">
        <div class="count">
            <span @click="minus($event)">-</span>
            <span class="num">{{num}}</span>
            <span @click="plus($event)">+</span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:"count",
    props:["num","index"],
    methods:{
        minus(e){
            var num = parseInt($(e.currentTarget).next(".num").text());
            if(num!==0){
                $(e.currentTarget).next(".num").text(--num);
                this.$emit("count",this.index,num)
            }
        },
        plus(e){
            var num = parseInt($(e.currentTarget).prev(".num").text());
            if(num<=98) {
                $(e.currentTarget).prev(".num").text(++num);
                this.$emit("count",this.index,num)
            }
        }
    }
}
</script>

<style scoped lang="less">
.template{
    .count{
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0;
        span{
            display: inline-block;
            color: #000;
            border: 1px solid #D9D9D9;
            font-size: 1rem;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        }
        span:nth-child(1),span:nth-child(3){
            width: 1.5rem;
            height: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            background-color: #F7F7F7;
        }
        span:nth-child(2){
            height: 1.5rem;
            width: 2rem;
            text-align: center;
            line-height: 1.5rem;
            border-left: none;
            border-right: none;
        }
    }
}
</style>
<template>
    <div class="template">
        <div class="top">
            <router-link :to="{name:'Home'}">
                <img src="../assets/logo.png"/>
            </router-link>
        </div>
        <div class="content">
            <h1>我的农场</h1>
            <article>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海秦王网络科技有限公司经过多年的发展，秦王网络科技有限公司已成为一家专业的互联网应用技术及网络传播服务提供商，致力为用户提供成熟的互联网应用技术与专业的网络传播服务。
                <br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海秦王网络科技有限公司凭借着对互联网行业的独到见解和丰富经验，在项目策划、项目管理、设计制作、技术开发和网络传播等多方面寻求平衡；在项目过程中，秦王网络通过周密的策划、深入的调查、理性的分析、精妙的创意、专业的实施，并同客户的实际情况和具体需求进行良好结合，为不同类型的客户提供最佳的互联网应用定制解决方案，帮助客户在新的全球化互联网环境中保持优势。
                <br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;秦王网络秉承先进的互联网应用技术和领先的网络传播理念，建立了科学的管理机制和强有力的服务体系；专业资深的互联网应用技术服务团队将以最优化的资源配置与最佳的网络传播方式为源动力，为秦王网络庞大而优秀的客户群体打造网络新形象，正是秦王网络的独到之处。
            </article>
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
        article{
            font-size: 0.9rem;
        }
    }
}
</style>
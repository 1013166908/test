<template>
  <div>
    <top></top>
    <section-one></section-one>
    <section-two></section-two>
    <list></list>
  </div>
</template>
<script>
    import Top from '@/components/Top'
    import SectionOne from '@/components/SectionOne'
    import SectionTwo from '@/components/SectionTwo'
    import List from '@/components/List'
    export default {
        name:"Index",
        components:{
            Top,SectionOne,SectionTwo,List
        },
        data(){
            return {
                select:'按钮1'
            }
        },
        methods:{
            makeActive:function(item){
                this.select=item;
            }
        }
    }
</script>
<style scoped>
  .yao{
    height:100px;
    background: #ffe0d7;
    border: 1px solid red;
  }
</style>

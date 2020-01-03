<template>
  <div class="wrap">
    <div>
      <div class="left">
        <div class="block one">
          <div class="title">
            <h2>{{title[0].main}}</h2>
            <h3 v-for="item in title[0].others">{{item}}</h3>
          </div>
          <div class="content">
            <div class="box-1"><img src="" alt=""></div>
            <div class="box-2"><img src="" alt=""></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="block two">
          <div class="title">
            <h2>{{title[1].main}}</h2>
            <h3 v-for="item in title[1].others">{{item}}</h3>
          </div>
          <div class="content">
            <div><img src="" alt=""></div>
          </div>
        </div>
        <div class="block three">
          <div class="title">
            <h2>{{title[2].main}}</h2>
            <h3 v-for="item in title[2].others">{{item}}</h3>
          </div>
          <div class="content">
            <div><img src="" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:"SectionOne",
      data(){
          return{
              title:[
                  {
                      main:"标题1",
                      others:["副标题副标题副标题副标题","副标题2"]
                  },
                  {
                      main:"标题2",
                      others:["副标题副标题副标题","副标题2"]
                  },
                  {
                      main:"标题3",
                      others:["副标题副标题","副标题2"]
                  },
              ]
          }
      }
  }
</script>
<style scoped lang="less">
  @import "../assets/less/section-one";
</style>

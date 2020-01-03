<template>
  <div class="wrap">
    <div>
      <header>
        <div class="title">
          <h2>标题型</h2>
          <div></div>
        </div>
        <div class="more">
          more
        </div>
      </header>
      <div class="content" @mouseenter="stopLun" @mouseleave="startLun">
        <div class="top">
          <h3>放大轮播</h3>
          <h4>副标题</h4>
          <div class="last" @click="toLast"></div>
          <div class="next" @click="toNext"></div>
        </div>
        <div class="lunbo" v-if="arr.length>=5">
          <a href="javascript:;" :style="style[index]" v-for="(item,index) in arr" :key="item">{{item}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:"SectionTwo",
      data(){
          return {
              arr:["图片1","图片2","图片3","图片4","图片5","图片6"],
              timer:null,
              now:0,
              style:[],
              styleLeftNone:{width:0,height:0,left:-228+"px",top:120+"px"},
              styleLeft:{width:228+"px",height:94+"px",left:56+"px",top:80+"px"},
              styleMiddle:{width:516+"px",height:214+"px",left:306+"px",top:0},
              styleRight:{width:228+"px",height:94+"px",left:845+"px",top:80+"px"},
              styleRightNone:{width:0,height:0,left:1128+"px",top:120+"px"},
          }
      },

      methods:{
          //调整样式数组
          setStyle(n){ //n为当前激活轮播图位置
            let length=this.arr.length; //轮播图数量
            let l1=n-1,l2=n-2,r1=n+1,r2=n+2; //未激活轮播图
            //边界情况
            if(n==length-1){ //当前为最后一张
                r1=0;r2=1;
            }else if(n==length-2){
                r2=0;
            }else if(n==0){
                l1=length-1; l2=length-2;
            }else if(n==1){
                l2=length-1;
            }
            this.style[n]=this.styleMiddle; //设置当前轮播图样式
            this.style[r1]=this.styleRight;
            this.style[r2]=this.styleRightNone;
            this.style[l1]=this.styleLeft;
            this.style[l2]=this.styleLeftNone;
            this.$set(this.style,n,this.styleMiddle);
        },

          //上一张
          toLast(){
              if(this.now==0) this.now=this.arr.length-1;
              else this.now--;
              this.setStyle(this.now);
          },

          //下一张
          toNext(){
              if(this.now==this.arr.length-1) this.now=0;
              else this.now++;
              this.setStyle(this.now);
          },

          //停止轮播
          stopLun(){
              clearInterval(this.timer);
          },

          //开始轮播
          startLun(){
              this.timer=setInterval(()=>{
                  this.toNext();
              },3000);
          },

          //自适应大小
          setImageSize(){
              let widthNow=window.innerWidth;
              if(widthNow>=1128) widthNow=1128;
              this.styleMiddle.width = widthNow*0.457 + 'px';
              this.styleMiddle.height = widthNow*0.19 + 'px';
              this.styleMiddle.left = widthNow*0.271 + 'px';
              this.styleLeft.width = widthNow*0.202 + 'px';
              this.styleLeft.height = widthNow*0.083+ 'px';
              this.styleLeft.left = widthNow*0.05 + 'px';
              this.styleLeft.top = widthNow*0.07 + 'px';
              this.styleRight.width = widthNow*0.202 + 'px';
              this.styleRight.height = widthNow*0.083+ 'px';
              this.styleRight.left = widthNow*0.749 + 'px';
              this.styleRight.top = widthNow*0.07 + 'px';
              this.styleLeftNone.left ="-"+ widthNow*0.202 + 'px';
              this.styleLeftNone.top = widthNow*0.106 + 'px';
              this.styleRightNone.left =widthNow + 'px';
              this.styleRightNone.top = widthNow*0.106 + 'px';
          },

      },

      mounted(){
          let that=this;
          this.setImageSize();
          window.onresize = function () {
              that.setImageSize();
          }

          for(let i=0;i<this.arr.length;i++){
              this.style[i]=this.styleLeftNone;
          }
          this.setStyle(that.now);
          this.startLun();

      },

      watch:{

      }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/section-two";
</style>

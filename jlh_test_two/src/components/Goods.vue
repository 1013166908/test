<template>
  <div class="wrap-goods">
    <header>
      <p class="id"><span>退换货处理单号：</span><span>{{goodsData.id}}</span></p>
      <p class="time"><span>申请时间：</span><span>{{getTime(goodsData.time)}}</span></p>
    </header>
    <div class="content">
      <div class="img">
<!--        换成图片-->
        <div></div>
      </div>
      <div class="ifo">
        <div>
          <h4>{{goodsData.name}}</h4>
          <ul>
            <li v-for="(item,index) in goodsData.type"><span>{{item}}</span><span v-if="index<goodsData.type.length-1">，</span></li>
          </ul>
        </div>
      </div>
      <div style="flex:150" class="price">￥{{goodsData.price}}</div>
      <div style="flex:76" class="num">x{{goodsData.num}}</div>
      <div style="flex:264" class="state"><a href="#">{{getState(goodsData.state)}}</a></div>
      <div style="flex:159" class="check"><button><span>查看详情</span></button></div>
    </div>
  </div>
</template>
<script>
    export default {
        name:"Goods",
        props:["goodsData","id"],
        data(){
            return {

            }
        },
        methods:{
            setNum(n){
                if(n<10) return "0"+n;
                else return n;
            },
            //获取时间
            getTime(time){
                let date=new Date(time);
                let y=date.getFullYear();
                let m=this.setNum(date.getMonth()+1);
                let d=this.setNum(date.getDate());
                let h=this.setNum(date.getHours());
                let min=this.setNum(date.getMinutes());
                let s=this.setNum(date.getSeconds());
                return y+"-"+m+"-"+d+" "+h+":"+min+":"+s;
            },
            //获取状态
            getState(str){
              let state="";
              switch (str) {
                  case "1001":state="待支付";break;
                  case "2001":state="待发货";break;
                  case "2002":state="待收货";break;
                  case "2003":state="待核销";break;
                  case "3001":state="已完成";break;
                  case "3002":state="已核销";break;
                  case "4001":state="退款申请待审核";break;
                  case "4002":state="用户退货给商家";break;
                  case "4003":state="等待商家处理";break;
                  case "4004":state="等待银行处理";break;
                  case "4005":state="已退款";break;
                  case "5001":state="交易关闭（超时关闭）";break;
                  case "5002":state="已取消（主动取消）";break;
                  case "5003":state="已失效";break;
                  default:state="状态未知";
              }
              return state;
            }
        }
    }
</script>
<style lang="less" scoped>
  @import "../assets/less/goods.less";
</style>

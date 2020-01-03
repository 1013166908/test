<template>
  <div class="wrap">
    <div>
      <header>
        <h2>订单</h2>
      </header>
<!--      搜索-->
      <div class="search">
        <div class="name">
          <input type="text" placeholder="请输入商品名称或退款单号" v-model="idValue"><button @click="toSelectId(idValue)"><span>搜索商品</span></button>
        </div>
        <div class="time">
          <span>申请时间</span>
          <img src="../assets/images/time.png" alt="">
          <select name="" id="" v-model="timeValue" @change="toSelectTime(timeValue)">
            <option value="0">全部</option>
            <option value="1">7天内</option>
            <option value="2">一个月内</option>
            <option value="3">三个月内</option>
          </select>
        </div>
      </div>
<!--      导航-->
      <ul class="nav">
        <li>
          <a href="javascript:;" :class="select.state==0?'active':''" @click="toSelectGoods(0)">全部</a>
          <div v-if="stateNum[0]">{{stateNum[0]}}</div>
        </li>
        <li>
          <a href="javascript:;" :class="select.state==1?'active':''" @click="toSelectGoods(1)" >待支付</a>
          <div v-show="stateNum[1]">{{stateNum[1]}}</div>
        </li>
        <li>
          <a href="javascript:;" :class="select.state==2?'active':''" @click="toSelectGoods(2)">待收货</a>
          <div v-show="stateNum[2]">{{stateNum[2]}}</div>
        </li>
        <li>
          <a href="javascript:;" :class="select.state==3?'active':''" @click="toSelectGoods(3)">已完成</a>
          <div v-show="stateNum[3]">{{stateNum[3]}}</div>
        </li>
        <li>
          <a href="javascript:;" :class="select.state==4?'active':''" @click="toSelectGoods(4)">退款售后</a>
          <div v-show="stateNum[4]">{{stateNum[4]}}</div>
        </li>
      </ul>
<!--      商品列表-->
      <div class="goods">
        <ul class="title">
          <li style="text-align: left;text-indent: 2em;">商品信息</li>
          <li style="flex:150">单价</li>
          <li style="flex:76">数量</li>
          <li style="flex:264">当前状态</li>
          <li style="flex:159">操作</li>
        </ul>
        <van-list v-if="goodsList.length"
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">
          <van-cell v-for="(item,index) in list" :key="index" >
            <goods :id="index" :goodsData="item"></goods>
          </van-cell>
        </van-list>
        <div v-else style="height:200px;line-height: 200px;text-align: center">
          暂无符合条件的数据
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../assets/js/list.js"></script>
<style lang="less" scoped>
  @import "../assets/less/list.less";
</style>

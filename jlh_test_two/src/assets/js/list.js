import Goods from '@/components/Goods'
import {List} from 'vant'
export default {
  name: "List",
  data() {
    //全部数据，全部展示数据，当前展示数据，是否加载，是否加载完成
    //当前加载到第几个，每种状态订单数，时间下拉列表选择值
    //筛选条件：状态、时间、id（名称）
    return {
      allList: [],
      goodsList: [],
      list: [],
      loading: false,
      finished: false,
      page: 0,
      stateNum: [0, 0, 0, 0, 0],
      timeValue:0,
      idValue:"",
      select: {
        state: 0,
        time: "",
        id: ""
      }
    }
  },
  methods: {
    //异步更新
    onLoad() {
      setTimeout(() => {
        let n = 10; //每次加载条数
        //如果剩余条数不足每次加载数
        if (this.goodsList.length - this.page < 10) n = this.goodsList.length - this.page;
        for (let i = 0; i < n; i++) {
          this.list.push(this.goodsList[this.page++]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.goodsList.length) {
          this.finished = true;
        }
      }, 500);
    },

    //设置小标
    setLittleNum(){
      this.stateNum=[0,0,0,0,0];
      this.stateNum[0]=this.goodsList.length;
      this.goodsList.map(item => {
        if(item.state[0]!="5") {
          //根据商品状态码设置小标
          this.stateNum[Number(item.state[0])]++;
        }
      })
    },

    //筛选数据
    selectGoods() {
      this.list = [];
      this.page = 0;
      this.finished=false;
      let {state, time, id} = this.select;
      this.goodsList = this.allList;
      this.setLittleNum();
      //是否筛选时间
      if (time != "") {
        this.goodsList = this.goodsList.filter(item => {
          return (item.time >=time);
        })
        this.setLittleNum();
      }

      //是否筛选id名称
      if (id!= "") {
        this.goodsList = this.goodsList.filter(item => {
          return (item.name == id || item.id == id);
        })
        this.setLittleNum();
      }

      //是否筛选状态
      if (state) {
        this.goodsList = this.goodsList.filter(item => {
          return (item.state[0] == state);
        })
      }

      this.onLoad();
    },

    //点击类别导航
    toSelectGoods(type) {
      this.select.state = type; //改变当前选择条件
      this.selectGoods();
    },

    //点击时间范围
    toSelectTime(time) {
      if(time==0){ //全部
        this.select.time="";
      }
      else{//非全部
        let nowTime=new Date(); //获取当前时间日期
        if(time==1){ //7天内
          this.select.time=nowTime.getTime()-(86400*1000*7);
        }else if(time==2){ //一个月内
          let m=nowTime.getMonth();
          if(m){ //当前月份大于1
            nowTime.setMonth(m-1);
          }else{ //当前月份为1月
            nowTime.setMonth(11);
            let y=nowTime.getFullYear();
            nowTime.setFullYear(y-1);
          }
          this.select.time=nowTime.getTime();
        }else if(time==3){ //三个月内
          let m=nowTime.getMonth();
          if(m>2){ //当前月份大于3
            nowTime.setMonth(m-3);
          }else{ //当前月份为1月
            nowTime.setMonth(m+9);
            let y=nowTime.getFullYear();
            nowTime.setFullYear(y-1);
          }
          this.select.time=nowTime.getTime();
        }
      }

      this.selectGoods();
    },

    //输入id名称
    toSelectId(id){
      this.select.id=id;
      this.idValue="";
      this.selectGoods();
    }
  },

  mounted() {
    // 获取数据
    this.$http({
      url: "https://www.fastmock.site/mock/5e1b04d5532cb79bd7b1e5e10808fd5c/goods/list"
    }).then(res => {
      this.allList = res.data.data;
      this.goodsList = this.allList;
      // 小标设置
      this.setLittleNum();
    })

  },
  components: {
    Goods
  }
}

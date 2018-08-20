<template>
  <div>
    <x-header :left-options="{showBack: false}">购物车</x-header>
    <div class="goodsList">
      <div class="products" v-for="goodsItms in goodsList" :key="goodsItms.id" :id="goodsItms.id">
      <div class="icon" style="float:left;width:20%;background:Cyan;height:80px;">
        <img class="default-image" :src="goodsItms.imgurl" style="width:80px;height:80px;">
      </div>
      <div class="info" style="float:left;width:80%;height:80px;">
      <div class="title" style="margin-left:10px;height:30px; font-size:14px;line-height:30px;">{{goodsItms.name}}</div>
      <div class="price" style="margin-left:10px;height:auto; font-size:12px;">{{goodsItms.price}} 元/斤</div>
      <div class="btn" style="margin-left:10px;height:auto; font-size:12px;"><span class="kucun">{{goodsItms.kucun}}</span></div>
      <span class="buyBtn">立即购买</span>
      </div>
      </div>
    </div>
    <tabbar>
      <tabbar-item selected link="index">
        <img slot="icon" src="../../assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/speak">
        <img slot="icon" src="../../assets/keshuo.png">
        <span slot="label">客说</span>
      </tabbar-item>
      <tabbar-item link="/shopCar">
        <img slot="icon" src="../../assets/shopCar_in.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/my">
        <img slot="icon" src="../../assets/myself.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  },
  data () {
    return {
      goodsList: [{imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10005', name: '西蓝花', kucun: '5000', origin: '山东', price: '2', salesNum: '500', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10006', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10006', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10005', name: '西蓝花', kucun: '5000', origin: '山东', price: '2', salesNum: '500', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10006', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10006', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}],
      shoplist: [
        {
          id: 11,
          name: '鱼香肉丝',
          price: 12
        },
        {
          id: 22,
          name: '宫保鸡丁',
          price: 14
        },
        {
          id: 34,
          name: '土豆丝',
          price: 10
        },
        {
          id: 47,
          name: '米饭',
          price: 2
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
ul{
  overflow: hidden;
  list-style: none;
  li{
    float: left;
    width: 25%;
    text-align: center;
  }
}
.bottom_grid{
  position: fixed;
  width: 100%;
  left: 0;
  bottom:0;
    .grid-center {
      display: block;
      text-align: center;
      color: #666;
    }
    .weui-grids {
      background-color: #fff;
    }
  }
  .table-shop > th {
  text-align: center;
}
.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}
.item {
  flex: 1;
}
.vux-header{
    background-color: #039bff;
  }
  .goodsList{
    overflow: hidden;
    li{
      overflow: hidden;
      ul{
        overflow: hidden;
        li{
          overflow: hidden;
        }
      }
    }
    .products{
      overflow: hidden;
      padding: 5px 10px;
      margin-top: 5px;
      background: rgb(233, 233, 240);
      .info{
        position: relative;
        .btn{
          position: absolute;
          bottom: 10px;
          .kucun{
            float: left;
          }
        }
        .buyBtn{
          float: right;
          position: absolute;
          right: 10px;
          bottom: 10px;
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 15px;
          background: #f60;
          color: #fff;
        }
      }
    }
    .goods{
      margin-top: 10px;
      overflow: hidden;
      .img{
        float: left;
        padding: 10px;
        .default-image{
          width: 60px;
          height: 60px;
        }
      }
      .mt10{
        margin-top: 10px;
      }
      .info{
        float: left;
      }
    }
  }
</style>

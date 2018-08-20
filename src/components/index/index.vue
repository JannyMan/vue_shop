<template>
  <div>
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list1" :key="item.index">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <group>
      <cell title="公告">
        <marquee>
          <marquee-item v-for="item in publicTxt" :key="item.id" :id="item.id">{{item.detil}}</marquee-item>
        </marquee>
      </cell>
    </group>
    <div class="goodsList">
      <div class="products" v-for="goodsItms in goodsList" :key="goodsItms.id" :id="goodsItms.id">
      <div class="icon" style="float:left;width:20%;background:Cyan;height:80px;">
        <img class="default-image" :src="goodsItms.vue_img" style="width:80px;height:80px;">
      </div>
      <div class="info" style="float:left;width:80%;height:80px;">
      <div class="title" style="margin-left:10px;height:30px; font-size:14px;line-height:30px;">{{goodsItms.name}}</div>
      <div class="price" style="margin-left:10px;height:auto; font-size:12px;">{{goodsItms.price}} 元/斤</div>
      <div class="btn" style="margin-left:10px;height:auto; font-size:12px;"><span class="kucun">{{goodsItms.kucun}}</span></div>
      <span class="buyBtn">+</span>
      </div>
      </div>
    </div>
    <tabbar>
      <tabbar-item selected link="index">
        <img slot="icon" src="../../assets/home_in.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/speak">
        <img slot="icon" src="../../assets/keshuo.png">
        <span slot="label">客说</span>
      </tabbar-item>
      <tabbar-item link="/shopCar">
        <img slot="icon" src="../../assets/shopCar.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/my">
        <img slot="icon" src="../../assets/myself.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <divider>我是有底线的</divider>
    <div class="h56"></div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import { Tabbar, TabbarItem, Group, Cell, Swiper, GroupTitle, SwiperItem, XButton, Masker, Panel, Marquee, MarqueeItem, Divider } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://www.291buy.cn/shop/images/ban1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://www.291buy.cn/shop/images/banner.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://www.291buy.cn/shop/images/banner1.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://www.291buy.cn/shop/images/banner1.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))
export default {
  name: 'HelloWorld',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Panel,
    Masker,
    Marquee,
    MarqueeItem,
    Divider
  },
  methods: {
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    onItemClick () {
      console.log('on item click')
    },
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      goodsList: [{imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10005', name: '西蓝花', kucun: '5000', origin: '山东', price: '2', salesNum: '500', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10006', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10007', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10008', name: '西蓝花', kucun: '5000', origin: '山东', price: '2', salesNum: '500', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10009', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}, {imgurl: 'https://www.291buy.cn/shop/images/baicaiyang.jpg', id: '10010', name: '小白菜', kucun: '666666', origin: '湖北', price: '9', salesNum: '699', showType: '1'}],
      demo06_list: urlList,
      demo06_index: 0,
      type: '1',
      winWidth: 0,
      winHight: 0,
      winWidht: 0,
      publicTxt: [{id:10001,detil:'满100减50',url:'https://www.baidu.com'},
                  {id:10002,detil:'全场包邮',url:'https://www.qq.com'}],
      list: [{
        src: 'https://www.291buy.cn/shop/images/banner2.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      list1: [{
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://www.291buy.cn/shop/images/banner3.png'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'https://www.291buy.cn/shop/images/banner4.png'
      }, {
        title: '远离车内毒气，日本车载空气净化器精选',
        img: 'https://www.291buy.cn/shop/images/banner1.jpg'
      }]
    }
  },
  created () {
    //let th = this;
    // axios.post('/vue/static/php/getAllStorage.php', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // }).then(function (response) {
    //   th.goodsList = response.data;
    //   console.log(th.goodsList);
    // }).catch(function (error) {
    //   console.log(error)
    // })
    console.log(this.GLOBAL);
    this.$jsonp('https://www.291buy.cn/vue/getAllStorage.php').then(json => {
       console.log(json);
       this.goodsList = json;
    }).catch(err => {
  　　console.log(err)
    });
  },
  mounted () {
    this.winWidth = 0;
    this.winHight = 0;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import './index.less';
</style>

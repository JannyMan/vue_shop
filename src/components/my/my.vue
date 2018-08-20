<template>
  <div>
      <ul class="userInfo">
        <li class="icon"><img src="../../assets/touxiang.jpg" alt=""></li>
        <li class="user">
          <ul>
            <li>江林</li>
            <li>13667268016</li>
          </ul>
        </li>
        <li class="more">></li>
      </ul>
      <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>1130</span>
          <br/>
          余额
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          优惠券
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          红包
        </div>
        <div>
          <span>88</span>
          <br/>
          积分
        </div>
      </div>
    </card>
    <cell title="收货地址" is-link>
        <div class="badge-value">
          <span class="vertical-middle">&nbsp;</span>
          <badge></badge>
        </div>
    </cell>
    <cell title="我的订单" is-link>
        <div class="badge-value">
          <span class="vertical-middle">&nbsp;</span>
          <badge></badge>
        </div>
    </cell>
    <cell title="系统通知" is-link>
        <div class="badge-value">
          <span class="vertical-middle">&nbsp;</span>
          <badge></badge>
        </div>
    </cell>
    <cell title="会员卡" is-link>
        <div class="badge-value">
          <span class="vertical-middle">&nbsp;</span>
          <badge></badge>
        </div>
    </cell>
    <cell title="联系我们" is-link>
        <div class="badge-value">
          <span class="vertical-middle">New Messages&nbsp;</span>
          <badge></badge>
        </div>
    </cell>
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
        <img slot="icon" src="../../assets/shopCar.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/my">
        <img slot="icon" src="../../assets/myself_in.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Card, Badge, Group, Cell } from 'vux'
export default {
  name: 'my',
  components: {
    Card,
    Badge,
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
      touxiang: '../../assets/touxiang.jpg'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
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
  .card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.userInfo{
  width: 100%;
  padding-top: 20px;
  list-style: none;
  overflow: hidden;
  background-color: rgb(3,155,255);
  color: #fff;
  .user{
    width: 75%;
    float: left;
    ul{
      list-style: none;
    }
  }
  .icon{
    width: 20%;
    float:left;
    img{
      width: 50px;
      height: 50px;
      margin-left: 10px;
    }
  }
  .more{
    width: 5%;
    float:left;
  }
}

</style>

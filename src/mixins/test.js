

export default {
  data: {
    mixin: 'MixinText',
    cartList: [
      {
          title: 'Apple/苹果 iPhone 11',
          image: '../images/PhoneListImg/iPhone 11.jpg',
          specifications: '享24期免息，可免824.9元，每期229.1元（每日7.6元）',
          price: 5499,
          buynbr: 0,
          selected: true
      },
      {
          title: 'Apple/苹果 iPhone SE',
          image: '../images/PhoneListImg/iPhone SE.jpg',
          specifications: '享24期免息，可免247.4元，每期274.9元（每日9.2元）',
          price: 3299,
          buynbr: 0,
          selected: true
      },
      {
          title:
              '【限时6期免息】Huawei/华为Mate30 5G 麒麟990徕卡5G手机mate30 5g手机智能手机华为手机华为官方旗舰店',
          image: '../images/PhoneListImg/华为mate30 5G.jpg',
          specifications: '6.62英寸 | 超长待机 | 上市:2019-11',
          price: 4499,
          buynbr: 0,
          selected: true
      }
  ],
  userName: '张三           158****3455',
  userAddress: '中国广东省深圳市南山区深南大道10000号腾讯大厦',
  allProductList: [
      [
          {
              title: '【限时6+64G直降200】Huawei/华为畅享10 大内存智能手机 华为手机 4800万华为官方旗舰店',
              image: '../images/PhoneListImg/华为畅享10.jpg',
              specifications: '6.39英寸 | 超长待机 | 上市:2019-10',
              price: 1099
          }, {
              title: '【买赠耳机】Huawei/华为畅享Z 5G双模90Hz畅滑屏手机畅享z5g手机智能手机华为手机华为官方旗舰店',
              image: '../images/PhoneListImg/华为畅享Z.jpg',
              specifications: '6.5英寸 | 超长待机 | 上市:2020-05',
              price: 1699
          },
          {
              title: '【限时6期免息】Huawei/华为nova7 SE5G超级快充40W 华为 5g手机智能手机华为手机华为官方旗舰店',
              image: '../images/PhoneListImg/华为nova7SE 5G.jpg',
              specifications: '6.5英寸 | 超长待机 | 上市:2020-04',
              price: 2399
          }, {
              title: '【限时3期免息+买赠耳机】Huawei/华为畅享20 Pro 5G全场景SoC芯片华为畅享20pro5g华为手机华为官方旗舰店',
              image: '../images/PhoneListImg/华为畅享20Pro.jpg',
              specifications: '6.5英寸 | 超长待机 | 上市:2020-06',
              price: 1999
          }, {
              title: '【限时6期免息】Huawei/华为Mate30 5G 麒麟990徕卡5G手机mate30 5g手机智能手机华为手机华为官方旗舰店',
              image: '../images/PhoneListImg/华为mate30 5G.jpg',
              specifications: '6.62英寸 | 超长待机 | 上市:2019-11',
              price: 4499
          }
      ],
      [
          {
              title: 'Apple/苹果 iPhone 11',
              image: '../images/PhoneListImg/iPhone 11.jpg',
              specifications: '享24期免息，可免824.9元，每期229.1元（每日7.6元）',
              price: 5499
          }, {
              title: 'Apple/苹果 iPhone SE',
              image: '../images/PhoneListImg/iPhone SE.jpg',
              specifications: '享24期免息，可免247.4元，每期274.9元（每日9.2元）',
              price: 3299
          },
          {
              title: 'Apple/苹果 iPhone XR',
              image: '../images/PhoneListImg/iPhone XR.jpg',
              specifications: '享24期免息，可免359.9元，每期399.9元（每日13.3元）',
              price: 4799
          }, {
              title: 'Apple/苹果 iPhone 11 Pro',
              image: '../images/PhoneListImg/iPhone 11 Pro.jpg',
              specifications: '享24期免息，可免1304.8元，每期362.5元（每日12.1元）',
              price: 8699
          }, {
              title: 'Apple/苹果 iPhone 11 Pro Max',
              image: '../images/PhoneListImg/iPhone 11 Pro Max.jpg',
              specifications: '享24期免息，可免1439.8元，每期400元（每日13.3元）',
              price: 9599
          }
      ]
  ]
  },
  methods: {
    mixintap () {
      this.mixin = 'MixinText' + (Math.random() + '').substring(3, 7);
      console.log('mixin method tap');
    },
    tap () {
      console.log('tap in mixin');
    }
  },
  created () {
    console.log('created in mixin');
  }
}

export default {
    cartList: [],
    collectList: [],
    sumMoney: 0,
    userName: '张三           158****3455',
    userAddress: '中国广东省深圳市南山区深南大道10000号腾讯大厦',
    allOrder: [],
    browseTrace: [],
    allProductList: [
        [
            {
                title: '【限时6+64G直降200】Huawei/华为畅享10 大内存智能手机 华为手机 4800万华为官方旗舰店',
                image: '../images/PhoneListImg/华为畅享10.jpg',
                specifications: '6.39英寸 | 超长待机 | 上市:2019-10',
                price: 1099,
                buynbr: 0,
                selected: true
            }, {
                title: '【买赠耳机】Huawei/华为畅享Z 5G双模90Hz畅滑屏手机畅享z5g手机智能手机华为手机华为官方旗舰店',
                image: '../images/PhoneListImg/华为畅享Z.jpg',
                specifications: '6.5英寸 | 超长待机 | 上市:2020-05',
                price: 1699,
                buynbr: 0,
                selected: true
            },
            {
                title: '【限时6期免息】Huawei/华为nova7 SE5G超级快充40W 华为 5g手机智能手机华为手机华为官方旗舰店',
                image: '../images/PhoneListImg/华为nova7SE 5G.jpg',
                specifications: '6.5英寸 | 超长待机 | 上市:2020-04',
                price: 2399,
                buynbr: 0,
                selected: true
            }, {
                title: '【限时3期免息+买赠耳机】Huawei/华为畅享20 Pro 5G全场景SoC芯片华为畅享20pro5g华为手机华为官方旗舰店',
                image: '../images/PhoneListImg/华为畅享20Pro.jpg',
                specifications: '6.5英寸 | 超长待机 | 上市:2020-06',
                price: 1999,
                buynbr: 0,
                selected: true
            }, {
                title: '【限时6期免息】Huawei/华为Mate30 5G 麒麟990徕卡5G手机mate30 5g手机智能手机华为手机华为官方旗舰店',
                image: '../images/PhoneListImg/华为mate30 5G.jpg',
                specifications: '6.62英寸 | 超长待机 | 上市:2019-11',
                price: 4499,
                buynbr: 0,
                selected: true
            }
        ],
        [
            {
                title: 'Apple/苹果 iPhone 11',
                image: '../images/PhoneListImg/iPhone 11.jpg',
                specifications: '享24期免息，可免824.9元，每期229.1元（每日7.6元）',
                price: 5499,
                buynbr: 0,
                selected: true
            }, {
                title: 'Apple/苹果 iPhone SE',
                image: '../images/PhoneListImg/iPhone SE.jpg',
                specifications: '享24期免息，可免247.4元，每期274.9元（每日9.2元）',
                price: 3299,
                buynbr: 0,
                selected: true
            },
            {
                title: 'Apple/苹果 iPhone XR',
                image: '../images/PhoneListImg/iPhone XR.jpg',
                specifications: '享24期免息，可免359.9元，每期399.9元（每日13.3元）',
                price: 4799,
                buynbr: 0,
                selected: true
            }, {
                title: 'Apple/苹果 iPhone 11 Pro',
                image: '../images/PhoneListImg/iPhone 11 Pro.jpg',
                specifications: '享24期免息，可免1304.8元，每期362.5元（每日12.1元）',
                price: 8699,
                buynbr: 0,
                selected: true
            }, {
                title: 'Apple/苹果 iPhone 11 Pro Max',
                image: '../images/PhoneListImg/iPhone 11 Pro Max.jpg',
                specifications: '享24期免息，可免1439.8元，每期400元（每日13.3元）',
                price: 9599,
                buynbr: 0,
                selected: true
            }
        ],
        [
            {
                title: '【抢先加购128G蓝闪降300 24期免息】小米105g手机骁龙8651亿像素8K相机智能游戏小米官方旗舰店小米手机官网',
                image: '../images/PhoneListImg/MI10.jpg',
                specifications: '6.67英寸 | 超长待机 | 上市:2020-02',
                price: 5499,
                buynbr: 0,
                selected: true
            }, {
                title: '【新颜色开售 12期免息】红米k30pro 骁龙865索尼6400万智能游戏学生5g手机redmi小米官方旗舰店正品xiaomi',
                image: '../images/PhoneListImg/Redmik30Pro.jpg',
                specifications: '6.67英寸 | 超长待机 | 上市:2020-03',
                price: 3299,
                buynbr: 0,
                selected: true
            },
            {
                title: '【K30 5G首降 下拉详情页提前加购】 红米K30i 双模5G4800万旗舰拍照学生老年智能机30pro小米官方旗舰店10',
                image: '../images/PhoneListImg/RedmiK30i.jpg',
                specifications: '6.67英寸 | 超长待机 | 上市:2020-05',
                price: 4799,
                buynbr: 0,
                selected: true
            }
        ],
        [
            {
                title: '【12期免息+优惠520元】OPPO A92s oppoa92s手机新款上市 官网旗舰手机 5g手机 oppor17 pro 未来x 0pp0手机',
                image: '../images/PhoneListImg/oppoA92s.jpg',
                specifications: '6.57英寸 | 超长待机 | 上市:2020-04',
                price: 1999,
                buynbr: 0,
                selected: true
            }, {
                title: '【12期免息】OPPO Reno4 opporeno4手机5g新款上市reno4pro新品oppo官网旗舰店官方0pporeno3 r17r19 reno5',
                image: '../images/PhoneListImg/oppoReno4.jpg',
                specifications: '6.4英寸 | 4800万像素 | 超长待机',
                price: 2999,
                buynbr: 0,
                selected: true
            },
            {
                title: '【oppo新款手机上市】OPPO ace2 oppoace2手机官方旗舰5g新品 opporeno3pro5g版 r17r19 find x2 oppo5g手机',
                image: '../images/PhoneListImg/oppoAce2.jpg',
                specifications: '6.5英寸 | 4800万像素 | 超长待机',
                price: 3499,
                buynbr: 0,
                selected: true
            }
        ],
        [
            {
                title: '【优惠1500元 6期免息】Samsung/三星Galaxy S10 SM-G9730骁龙855 4G游戏官方全面屏智能手机',
                image: '../images/PhoneListImg/GalaxyS10.jpg',
                specifications: '6.1英寸 | 持久待机 | 上市:2019-03',
                price: 3699,
                buynbr: 0,
                selected: true
            }, {
                title: '【24期免息 赠原装无线充】Samsung/三星 Galaxy S20 SM-G9810骁龙865官方120Hz智能5G双模拍照手机正品',
                image: '../images/PhoneListImg/GalaxyS20.jpg',
                specifications: '6.2英寸 | 超长待机 | 上市:2020-03',
                price: 6999,
                buynbr: 0,
                selected: true
            },
            {
                title: '【优惠1100元  6期免息】Samsung/三星Galaxy S10+SM-G9750骁龙855 IP68防水前置双摄智能手机',
                image: '../images/PhoneListImg/GalaxyS10+.jpg',
                specifications: '6.4英寸 | 持久待机 | 上市:2019-03',
                price: 4499,
                buynbr: 0,
                selected: true
            }
        ],
        [
            {
                title: '【享24期免息】vivo X50双模5G智能手机官方旗舰店官网正品vivoX50全新限量版x30 x27 s6 s5 x50pro',
                image: '../images/PhoneListImg/vivoX50.jpg',
                specifications: '6.56英寸 | 超长待机 | 上市:2020-06',
                price: 3498,
                buynbr: 0,
                selected: true
            }, {
                title: '【薇娅推荐】vivo X50 Pro+双模5G超清1亿拍照模式高通骁龙865处理器120Hz曲面屏智能手机官方旗舰店官网正品',
                image: '../images/PhoneListImg/vivoX50Pro.jpg',
                specifications: '6.65英寸 | 超长待机 | 上市:2020-07',
                price: 4998,
                buynbr: 0,
                selected: true
            },
            {
                title: '【下单立减300元】vivo S6新品双模5G智能新款手机官方旗舰店官网正品vivos6全新限量版x30 x27 s5 pro',
                image: '../images/PhoneListImg/vivoS6.jpg',
                specifications: '6.44英寸 | 超长待机 | 上市:2020-03',
                price: 2398,
                buynbr: 0,
                selected: true
            }
        ]
    ]

}


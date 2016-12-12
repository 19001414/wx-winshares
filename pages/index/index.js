var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            '../../image/swiper1.jpg',
            '../../image/swiper1.jpg',
            '../../image/swiper1.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iconArray: [
            {
                "iconUrl": '../../image/todayhotesticon.png',
                "iconText": '特惠活动'
            },
            {
                "iconUrl": '../../image/zhekouicon.png',
                "iconText": '品味套餐'
            },
            {
                "iconUrl": '../../image/miaoshaicon.png',
                "iconText": '优惠码'
            },
        ],
    },
    onDetailTap:function(e){
        var thisData = e.currentTarget.dataset;
        console.log(thisData);
        var goodsId = thisData.org;
        wx.navigateTo({
            url:'../spdetail/spdetail?goodsId='+goodsId
        })
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})
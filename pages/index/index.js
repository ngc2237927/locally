// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       /* slides:[],
        categories:[],*/
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       /* wx.request({
            url: 'https://locally.uieee.com/slides',
            success: res => {
                this.setData({ slides: res.data})
            }
        })

        wx.request({
            url: 'https://locally.uieee.com/categories',
            success: res => {
                this.setData({ categories: res.data})
            }
        })*/

         /* wx.request({
            //这里的地址没有跨域的概念
            url:"https://api.douban.com/movie/coming_soon",
            header: {
                'Content-Type':'json'
            },
            success: function (res) {
                console.log(res)
            }
        })
        //发送异步请求不再是web那套
        //没有跨域
        //请求的地址要在后台加白名单
        //域名必须备案，服务端必须采用 HTTPS*/
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
// pages/types/types.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrs:[],
    count:0,
    title:'',
    children:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  click:function(res){
    var that = this
    var key = res.currentTarget.dataset.index
    that.setData({
      count:key,
      title:this.data.arrs[key].name,
      children:this.data.arrs[key].children
    })
  },
  onLoad: function (options) {
    var that = this
     // 缓存数据
     var as =  wx.getStorageSync('as')
    if(!as){
      wx.request({
        url: 'http://106.75.79.117:3000/aslide',
        success:function(res){
          console.log(res)
          var arrs = res.data
          wx.setStorageSync('as', arrs)
          that.setData({
            arrs,
            title:arrs[0].name,
            children:arrs[0].children,
          })
        }
      })
    }else{
      that.setData({
        arrs:as,
        title:as[0].name,
        children:as[0].children,
      })
    }
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
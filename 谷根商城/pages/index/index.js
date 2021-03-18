// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipe:[],
    contents:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 缓存数据
    var swipe =  wx.getStorageSync('swipe')
    // 如果数据没有缓存就发送请求
    if(!swipe){
      wx.request({
        url: 'http://106.75.79.117:3000/banners',
        success:function(res){
          var swipe = res.data
          wx.setStorageSync('swipe', swipe)
          that.setData({
            swipe
          })
        }
      })
    }else{
      // 如果有缓存就直接用缓存的数据，不去再次发送请求
      that.setData({
        swipe
      })
    }
    var contents = wx.getStorageSync('contents')
    if(!contents){
      wx.request({
        url: 'http://106.75.79.117:3000/contents',
        success:function(res){
          var contents = res.data.contents
          console.log(res)
          wx.setStorageSync('contents', contents)
          that.setData({
            contents
          })
        }
      })
    }else{
      // 如果有缓存就直接用缓存的数据，不去再次发送请求
      that.setData({
        contents
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
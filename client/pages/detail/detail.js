// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    type: '',
    message: '',
    contact: ''
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function (options) {
    console.log(options.id)
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_item',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: options.id
      },
      success: (res) => {
        this.setData(res.data.data)
      }
    })
  },

  handleBackTap() {
    wx.navigateBack({
      
    })
  }
})
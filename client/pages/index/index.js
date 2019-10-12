// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0,
    markers: []
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.context = wx.createMapContext('map')

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        this.setData({
          longitude,
          latitude
        })
      }
    })

    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_list',
      success: this.loadData
    })
  },

  loadData(res) {
    let markers = []

    res.data.data.map(value => {
      markers.push({
        id: value.id,
        latitude: value.latitude,
        longitude: value.longitude,
        iconPath: `/resources/${value.type}.png`
      })
    })

    this.setData({
      markers
    })
  },

  handleNavTap() {
    this.context.moveToLocation()
  },

  handeMarkerTap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId,
    })
  }
})
Page({
  data: {
    address: '点击选择，要勾选哦~',
    isSubmit: false,
    isSuccess: false
  },

  onReady() {
    this.staticData = { type: 'buy' }
  },

  handleAddrTap() {
    wx.chooseLocation({
      success: (result) => {
        this.setData({
          address: result.address
        })

        this.staticData.longitude = result.longitude
        this.staticData.latitude = result.latitude
      }
    })
  },

  radioChange(e) {
    this.staticData.type = e.detail.value
  },

  handleMessageInput(e) {
    this.staticData.message = e.detail.value
  },


  handleContactInput(e) {
    this.staticData.contact = e.detail.value
  },

  showToast(title) {
    wx.showToast({
      title,
      icon: 'none',
      duration: 2000
    })
  },

  handleSubmitTap() {
    if (this.data.address === '点击选择，要勾选哦~') {
      this.showToast('请选择地址')
      return;
    }

    if (!this.staticData.message) {
      this.showToast('请填写说明')
      return;
    }

    if (!this.staticData.contact) {
      this.showToast('请填写联系方式')
      return;
    }

    // address，latitude，longitude，message，contact，type（sell，buy）
    let data = {
      address: this.data.address,
      ...this.staticData
    }

    // 数据提交
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/add_item', //仅为示例，并非真实的接口地址
      data,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        if (res.data.ret) {
          this.setData({
            isSuccess: true
          })
        } else {
          this.setData({
            isSuccess: false
          })
        }

        this.setData({
          isSubmit: true
        })
      },
      fail() {
        this.setData({
          isSuccess: false,
          isSubmit: true
        })
      }
    })
  },

  handleBackHomeTap() {
    wx.navigateBack({})
  },

  handleBackSubmitTap() {
    this.setData({
      isSubmit: false
    })
  }
})
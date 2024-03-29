Page({
  onLoad() {
    this.setData({
      // handleSearch: this.handleSearch.bind(this)
      // keyword: ''
      results: []
    })
  },

  // handleSearch(keyword) {
  //   return new Promise((resolve, reject) => {
  //     wx.request({
  //       url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_search_list',
  //       method: 'post',
  //       header: {
  //         'content-type': 'application/x-www-form-urlencoded'
  //       },
  //       data: {
  //         keyword
  //       },
  //       success(ret) {
  //         let result = ret.data.data
  //         let arr = result.map((item) => {
  //           return {
  //             text: item.message,
  //             value: item.id
  //           }
  //         })
  //         resolve(arr)
  //       }
  //     })
  //   })
  // },

  // selectResult(e) {
  //   wx.navigateTo({
  //     url: '/pages/detail/detail?id=' + e.detail.item.value,
  //   })
  // }

  handleBlur(e) {
    this.doSearch(e.detail.value)
  },

  doSearch(keyword) {
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_search_list',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        keyword
      },
      success: (ret) => {
        this.setData({
          results: ret.data.data
        })
        // let result = ret.data.data
        // let arr = result.map((item) => {
        //   return {
        //     text: item.message,
        //     value: item.id
        //   }
        // })
        // resolve(arr)
      }
    })
  }
})
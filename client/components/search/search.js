// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    keywords: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(e) {
      this.setData({
        keywords: e.detail.value
      })
    },

    handleClick() {
      this.triggerEvent('onValue', this.data.keywords)
    }
  }
})

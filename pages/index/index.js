Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    movie:null,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();

    
  },
  loadMovie (){
    // 莫泰加载信息框
    wx.showToast({
      title: '正在加载',
      icon:'loading',
      duration: 10000
    })
    let thispage = this;
    wx.request({
      url: './index.json',
      // url: 'http://api.douban.com/v2/movie/in_theaters',
      // http://api.douban.com/v2/movie/in_theaters
      // https://v.iqiyi.com/c/mix/info.json?apiKey=&qipuId=1
      // method:"POST",
      header:{'content-type':"json"},
      success:function(res){
        // 成功时
        // console.log(res)
        let subjects = res.data.subjects
        thispage.setData({movie:subjects})
        wx.hideToast()
      }
    })

  },

  
})
define('module/common', function(require, exports, module){

  'use strict';

  var $ = require('jquery');
  
  var common = {
    regx: {
      name: /^[a-zA-Z\u4e00-\u9fa5]+$/,
      number: /^[1-9]+\d*$/,
      mobile: /^(13[0-9]{9})|(18[0-9]{9})|(15[0-9]{9})|(14[57][0-9]{8})|(17[0-9]{9})$/,
      email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g,
      zipcode: /^\d{6}$/,

    },
    /*页面延迟刷新*/
    reload: function(time){
      var t = 'undefined' == typeof (time) ? 1e3 : time;
      window.setTimeout(function(){
        window.location.reload();
      }, t);
    },
    /*页面延迟跳转*/
    redirect: function(url, time){
      var t = 'undefined' == typeof (time) ? 1e3 : time;
      window.setTimeout(function(){
        window.location.href = url;
      }, t);
    },
    /*图片延时加载*/
    imgLazyLoad: function(){
      var sl = require('jquery.imglazyload');
      $.imgLazyLoad({ diff: 100 });
    },
    btnInit:function(){
      $('.Z_app_qrcode').click(function(){
        $.ui.layer.show('<span style="text-align: center; display: block;"><img src="/Public/Home/default/images/app_qrcode.png" /></span>');
      });
    },
    /*全局初始化*/
    init: function(){
      var _self = this;
      _self.resizeContainer();
      _self.setTotop();
      //让表单支持ajax提交
      _self.formSubmit();
      _self.imgLazyLoad();

      /*常用按钮效果初始化*/
      _self.btnInit();
    }
  }

  common.init();
  
  module.exports = common;
});
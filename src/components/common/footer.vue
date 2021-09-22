<template>
  <div class="footer">
    <div class="container">
      <ul class="support clearfix">
        <li>
           <el-popover
            placement="top-start"
            title="Tips"
            width="200"
            trigger="hover"
            content="1. Registration / login
Before purchasing, please login or register in the top right corner of the home page. Old users log in by entering the user name and password set before; new users need to fill in the registration information for user registration.">
    <a  slot="reference" href="javascript:;" target="_self">
              <i class="icon icon-salable"><img src="../../assets/picture/homePic/598841392d064.png"></i>
              <h4>Help Center</h4>
            </a>
  </el-popover>
          </li>
          <li>
           <el-popover
            placement="top-start"
            title="Shopping"
            width="200"
            trigger="hover"
            content="Search by category: you can browse the home page, click the navigation bar on the home page to enter the categories you are interested in to view the products you need to buy; or you can query the products you want in the category navigation directory on the left.">
    <a  slot="reference" href="javascript:;" target="_self">
               <i class="icon icon-salable"><img src="../../assets/picture/homePic/5988415cd455b.png"></i>
              <h4>Shopping Directory</h4>
            </a>
  </el-popover>
          </li>
           <li>
           <el-popover
            placement="top-start"
            title="Servie"
            width="200"
            trigger="hover"
            content="You can send suggestions to this email address: 1234@123.com">
    <a  slot="reference" href="javascript:;" target="_self">
             <i class="icon icon-salable"><img src="../../assets/picture/homePic/598841743c1e9.png"></i>
              <h4>Sale Servie</h4>
            </a>
  </el-popover>
          </li>
          <li>
            <a href="#" target="_self">
              <i class="icon icon-salable"><img src="../../assets/picture/homePic/598841824021f.png"></i>
              <h4>Authentic guarantee</h4>
            </a>
          </li>     
       </ul>

      <div class="info">
                  <a href="#" target="_self"><span class="text">About Us</span></a><em>|</em>          <a href="#" target="_self"><span class="text">Shopping Directory</span></a><em>|</em>        
                  <a href="#" target="_self"><span class="text">Sale Service</span></a>      
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    
    };
  },
  methods: {
    help(){

    }
  }
};
</script>

<style lang="less" scoped>
  .footer .slde-menu > ul > li > a > .icon {
    color: #ee4138;
}

.footer .slde-menu > .slde-box {
    border: 3px solid #ee4138;
}
 .page-wrap .jump-msg .time a {
    color: #ee4138;
}
.list-filter.cate dl dd span.current a {
    color: #ee4138;
}
.list-filter.sort > .dl-horizontal > dd > a.active {
    color: #ee4138; 
}
.item-title h3 .more {
    background-color: #ee4138;
}
.item-title h3 .icon-box {
    border: 1px solid #ee4138;
}

.item-title h3 .icon-box > .icon {
    color: #ee4138;
}
 .item-pic .hd ul li.on {
    border: 2px solid #ee4138;
}
.item-info > .panel .skubox_lists.attention {
    border: 2px solid #ee4138;
}
.item-info > .panel .sku-box .spec-lists > li.choose > a:hover {
    border: 2px solid #ee4138;
}
.item-info > .panel .sku-box .spec-lists > li.select a {
    border: 2px solid #ee4138;
}
.item-info > .panel .sku-box .spec-lists > li.select span {
  border-bottom: 8px solid #ee4138;
  border-right: 8px solid #ee4138;
}
.cart-list .item .box > .del:hover {
    background-color: #ee4138;
}
.cart-list .check.active .icon {
    color: #ee4138;
} 
.cart-list .supplier-box dd.supplier-dd .is-self {
    color: #ee4138;
}
.address-item.selected > dl {
    border-color: #ee4138;
}
.address-edit-box {
    border: 1px solid #ee4138;
}
 .address-edit-box .bd .item select:focus {
    border-color: #ee4138;
}
.order-pay-list .selected {
    border-color: #ee4138;
}
.order-pay-list .selected .icon {
    color: #ee4138;
}
.order-pay-extend > .item.selected {
    background: #ee4138;
}
.order-preview .info > h3 > .icon-round-chenggong {
    color: #ee4138;
}
.order-preview .thirdpay .list li.active .icon-round-chenggong:before {
    color: #ee4138;
}
.order-detail-table .column-delivery .order-delivery-status .order-delivery-steps .step.step-now .progress {
    background: #ee4138;
}
.delivery-log > div > p > i.is-new {
    background-color: #ee4138;
}
.order-comment-box .validate-error {
    color: #ee4138;
}
.login-third li .icon-qq, .login-third li .icon-weibo {
    color: #ee4138;
}
.withdraw > .step > ul > li.active:after {
    background-color: #ee4138;
}

.withdraw > .step > ul > li.active > .icon {
    color: #ee4138;
}
.shop > h3 .title-right-tip a:hover {
    color: #ee4138;
    border-bottom: 1px dotted #ee4138;
}
a:focus, a:hover {
    color: #ee4138;
}
.text-primary {
    color: #ee4138;
}

a.text-primary:hover {
    color: #ee4138;
}
.text-danger {
    color: #ee4138;
}
.pc_index_1x4 ul li span a{
  color:#ee4138;
}
</style>

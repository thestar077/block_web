<template>
  <div class="searchzone"> 
    <el-row>
      <el-col :span="8">
        <div class="zone-left">
          筛选
        </div>
      </el-col>
      <el-col :span="16" class="zone-right">
        <div class="querybtn" @click="handleQuery()">
          <span class="btn-txt">查询</span>
        </div>
        <div class="resetbtn" @click="handleReset()">
          <span class="btn-txt">重置</span>
        </div>
      </el-col>
    </el-row>
      

    <div style="padding:20px 0px 0px 20px;">
      <div class="search-item" v-for="(item,index) in searchCriterias" :key="index">
        <div class="search-name">{{item.name+':'}}</div>
        <div class="search-txt">
          <el-input :class="classname" placeholder="请输入" v-if="item.type == 'input'" @input="change($event)" v-model="searchdata[item.key]"></el-input>
          <!-- <input type="text" /> -->
          <el-date-picker v-if="item.type == 'date'"
          v-model="singleDate" type="date" placeholder="选择日期">
          </el-date-picker>
          <div class="date-range" v-if="item.type == 'dateRange'">
            <el-date-picker v-model="daterangemodel" type="daterange" range-separator="-"
            unlink-panels start-placeholder="开始日期" end-placeholder="截止日期">
            </el-date-picker>
          </div>
          <div v-if="item.type == 'select'">
            <el-select v-model="selectData" placeholder="请选择">
              <el-option
                v-for="item in selectDataList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
            
        </div>
      </div>
      <!-- <div class="ml5 flex">
        
        <div class="resetbtn" v-show="isOtherEvent">
          <span class="btn-txt" @click="handleOther()">{{eventName}}</span>
        </div>
        <div class="querybtn" v-show="isAdd"  @click="handleAdd()">
          <img src="@/assets/picture/myicon/add.png" width="16"/>
          <span class="btn-txt">添加</span>
        </div>
      </div> -->
    </div>
    
  </div> 
</template>

<script>
export default {
  name: 'SearchZone',
  props:['searchCriterias','classname','isAdd','isOtherEvent','eventName','selectList'],
  data() {
    return {
      searchdata:{},
      singleDate:null,
      daterangemodel: null,
      selectData:null,
      selectDataList:null
    };
  },
  created(){
    this.wrapData();
  },
  watch:{
    searchCriterias(val){
      this.wrapData();
    }
  },
  methods: {
    change(e){
      this.$forceUpdate()
    },
    wrapData(){
      this.searchCriterias.forEach(sitem=>{
        this.searchdata[sitem.key] = null;
        if(!sitem.type) sitem.type = 'input';
        if(sitem.type == 'date') this.searchdata[sitem.key] = this.singleDate;
        if(sitem.type == 'daterange') this.searchdata[sitem.key] = this.daterangemodel;
        if(sitem.type == 'select') this.selectDataList = this.selectList;
      })
      this.$forceUpdate();
    },
    handleReset(notrefresh){
      for(let key in this.searchdata){
        this.searchdata[key] = null;
      }
      this.daterangemodel = null;
      this.selectData = null;
      this.singleDate = null;
      if(!notrefresh) this.$emit('query',this.searchdata);
      this.$forceUpdate();
    },
    handleQuery(){
      this.searchCriterias.forEach(sitem=>{
        if(sitem.type == 'date') this.searchdata[sitem.key] = this.singleDate;
        if(sitem.type == 'dateRange') this.searchdata[sitem.key] = this.daterangemodel;
        if(sitem.type == 'select') this.searchdata[sitem.key] = this.selectData;
      })
      this.searchdata.pageNum = 1;
      this.$emit('query',this.searchdata);
    },
    handleAdd(){
      this.$emit('handleAdd');
    },
    handleOther(){
      this.$emit('handleOther');
    },
  }
};
</script>
<style lang="less" scoped>

.ml5{margin-left: 2rem;}
.searchzone{
  border:1px solid #ebeef5;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  padding-bottom: 40px;
  margin: 20px 0px 20px 0px;
  .search-item{
    display: inline-block;
    margin-right: 20px;
    .search-name{
      display: inline-block;
      margin-right: 10px;
    }
    .search-txt{
      display: inline-block;
    }
  }
  /deep/ .el-input__icon{
    height: auto !important;
  }
  /deep/ .el-input__icon{line-height: 34px;}
  /deep/ .el-input--prefix .el-input__inner{padding-left: 30px !important;}
  /deep/ .el-date-editor.el-input{height: 100%;}
  /deep/ .el-date-editor .el-range__icon{left: 10px;top: 1px;position: absolute;}
  .date-range{display: flex;align-items: center;height: 100%;}
  .date-range span{margin-left: .5rem;margin-right: 1rem;width: 1.6rem;height: 1px;background: rgba(31,29,55,.4);}
  /deep/ .el-date-editor.el-input__inner{max-width: 17vw;border: none;padding: 3px 0px;}
  /deep/ .el-date-editor .el-range-separator{margin-right: 4px;opacity: .4;}
  /deep/ .el-input__inner{
    width: 200px;
    height: 4rem;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #EAEDF0;
    margin-bottom: 2rem;
  }
  .date-range{
    /deep/ .el-date-editor{
      border-radius: 4px;
      border: 1px solid #EAEDF0;
      padding:0 5px;
      width: auto;
       .el-range-input{
          width: 100px;
       }
       .el-range__icon{
        left:0;
       }
    }
  }
  .zone-left{
    text-align: left;
    line-height: 32px;
    font-size: 1.6rem;
    font-weight: bold;
    font: 18px 'PingFangSC-Semibold', Helvetica, Arial, sans-serif;
    color: #1F1D37;
  }
  .zone-right{
    text-align: right;
  }
  
}


</style>

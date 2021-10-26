<template>
  <div class="sc-TmcTc sc-jHVexB kszNjt cpemDa" id="eggNestsPage">
  <h1 color="primary" class="sc-gsTCUz sc-idOhPF gQZLVC gOjCDZ" style="text-align: center;">Stake LP tokens to earn EGG</h1>
  <div class="sc-eHfQar hhRQON">
    <div class="sc-hzMMCg kRzfai">
      <div class="sc-citwmv ewFXGZ">
<!--         <input type="checkbox" class="sc-cBNfnY hrtCUK">
        <div class="sc-gWHgXt kGCxUh"></div> -->
        <el-switch
          v-model="isStaked"
          active-color="#31D0AA"
          inactive-color="#EEEAF4">
        </el-switch>
      </div>
      <div color="text" class="sc-gsTCUz UNrzd">Staked only</div></div>
    <div class="sc-kEjbxe dnCuQj">
      <button v-click type="button" v-for="(item,index) in actList" :key="index" @click="handleActive(index)" :class="actIndex == index?'sc-dlfnbm kjBbpq':'sc-dlfnbm xiYlH sc-iqHYGH cxRybB'">{{item.name}}</button>
    </div>
  </div>
  <div>
  <div class="sc-kYrkKh cqrcSX"></div>
    <div class="sc-eLgOdN ejJoEn">
      <div class="sc-ikPAkQ diwHUn" v-for="(item,index) in eggArr" :key="index">
        <div :class="index<2?'sc-XhUPp kiNLFp colorBg':'sc-XhUPp kiNLFp'"></div>
        <div class="sc-eCssSg sc-dtwoBo ejYhYu inCwUZ">
          <div width="64" height="64" class="sc-dIUggk dzdjjs">
            <img :src="item.pic" width="100" class="sc-hHftDr kCQmsc"></div>
          <div class="sc-eCssSg cseSbW">
          <h2 color="text" class="sc-gsTCUz sc-idOhPF dILVHG lnUPhx">{{item.name}}</h2>
            <div class="sc-eCssSg ecyRc">
              <div class="sc-cxFLnm lbtiF" v-if="item.noFree">
                <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ hMHdGP">
                  <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path>
                </svg>No Fees</div>
              <div class="sc-cxFLnm hyUuWC sc-dacFzL fIUiIW">{{item.num}}X</div></div>
          </div>
        </div>
        <div class="sc-eCssSg fAoKek">
          <div color="text" class="sc-gsTCUz UNrzd">APR:</div>
          <div color="text" class="sc-gsTCUz UNsmv" style="display: flex; align-items: center;">
            <button class="sc-dlfnbm eSZGEW sc-hKgILt fwjcqd" type="button">
              <svg viewBox="0 0 25 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg">
                <path d="M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z" fill="#1FC7D4"></path>
                <path d="M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z" fill="#1FC7D4"></path>
                <path d="M18.2 15.75H13.2V17.25H18.2V15.75Z" fill="#1FC7D4"></path>
                <path d="M18.2 13.25H13.2V14.75H18.2V13.25Z" fill="#1FC7D4"></path>
                <path d="M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z" fill="#1FC7D4"></path>
                <path d="M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z" fill="#1FC7D4"></path>
              </svg>
            </button>136.63%</div>
        </div>
        <div class="sc-eCssSg MoQXc">
          <div color="text" class="sc-gsTCUz UNrzd">Stake:</div>
          <div color="text" class="sc-gsTCUz UNsmv">{{item.stake}} LP</div></div>
        <div class="sc-eCssSg MoQXc">
          <div color="text" class="sc-gsTCUz UNrzd">Earn:</div>
          <div color="text" class="sc-gsTCUz UNsmv">EGG</div></div>
        <div class="sc-eCssSg MoQXc">
          <div color="text" class="sc-gsTCUz UNrzd" style="font-size: 24px;">Deposit Fee:</div>
          <div color="text" class="sc-gsTCUz UNsmv" style="font-size: 24px;">0%</div></div>
        <div class="sc-euMpXR hghKoX">
          <div class="sc-eCssSg gqHjnk">
            <div color="secondary" font-size="12px" class="sc-gsTCUz dXVGhj">EGG</div>
            <div color="textSubtle" font-size="12px" class="sc-gsTCUz ghdcvx">Earned</div></div>
          <div class="sc-eCssSg cIpmpl">
            <h2 color="textDisabled" class="sc-gsTCUz sc-idOhPF dcRjaX lnUPhx">0</h2>
            <div class="sc-gInsOo grsaJH">
              <button disabled="" type="button" class="sc-dlfnbm IcZWJ">Harvest</button></div>
          </div>
          <div class="sc-eCssSg gqHjnk">
            <div color="secondary" font-size="12px" class="sc-gsTCUz dXVGhj">EGG-BUSD LP</div>
            <div color="textSubtle" font-size="12px" class="sc-gsTCUz ghdcvx">Staked</div></div>
          <button type="button" class="sc-dlfnbm hlRgJI">Unlock Wallet</button></div>
        <div class="sc-tYoTV jYOTaZ"></div>
        <div v-click @click="item.showDetail = !item.showDetail" aria-label="Hide or show expandable content" role="button" class="sc-bTvRPi bhoBuD">
          <div color="primary" class="sc-gsTCUz dCVmfN">Details</div>
          <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg">
            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
          </svg>
        </div>
        <div class="sc-biBrSq cjrMHQ" v-if="item.showDetail">
          <div class="sc-kIeTtH cnxSGb">
            <div class="sc-eCssSg MoQXc">
              <div color="text" class="sc-gsTCUz UNrzd">Deposit:</div>
              <a target="_blank" rel="noreferrer noopener" href="https://exchange.goosedefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xf952fc3ca7325cc27d15885d37117676d25bfda6" class="sc-gsTCUz sc-lmoMRL dCVmfN iqbrwR sc-hOqqkJ hShxNi" color="primary">{{item.deposit}} LP
                <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ jcbDsj">
                  <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
              </a>
            </div>
            <div class="sc-eCssSg MoQXc">
              <div color="text" class="sc-gsTCUz UNrzd">Total Value:</div>
              <div color="text" class="sc-gsTCUz UNrzd">$641,887</div></div>
            <div class="sc-eCssSg MoQXc">
              <div color="text" class="sc-gsTCUz UNrzd">My Staked Value:</div>
              <div color="text" class="sc-gsTCUz UNrzd">$0</div></div>
              <div class="sc-eCssSg MoQXc">
              <div color="text" class="sc-gsTCUz UNrzd">View on Arbitrum:</div>
              <div color="text" class="sc-gsTCUz UNrzd">{{item.name}} LP</div></div>
           <!--  <div class="sc-eCssSg FgqtZ">
              <a target="_blank" rel="noreferrer noopener" href="https://bscscan.com/token/0x19e7cbecdd23a16dfa5573df54d98f7caae03019" color="primary" class="sc-gsTCUz sc-lmoMRL dCVmTf iqbrwR">View on Arbitrum</a></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div width="100%" class="sc-dIUggk hULlXf">
    <img width="100%" src="@/assets/picture/8.png" alt="illustration" class="sc-hHftDr kCQmsc"></div>
</div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        actIndex:0,
        isStaked:false,
        actList:[
          {
            name:'Active',
          },
          {
            name:'Inactive',
          }
        ],
        eggArr:[
          {
            name:'DFD',
            num:20,
            stake:'DFD',
            deposit:'DFD',
            pic:require('@/assets/picture/egg/1.jpg'),
            noFree:true,
            showDetail:false
          },
          {
            name:'EGG',
            num:20,
            stake:'EGG',
            deposit:'',
            pic:require('@/assets/picture/egg/2.jpg'),
            noFree:true,
            showDetail:false
          },
          {
            name:'ETH',
            num:2,
            stake:'ETH',
            deposit:'',
            pic:require('@/assets/picture/egg/3.jpg'),
            noFree:true,
            showDetail:false
          },
          {
            name:'USDC',
            num:'60',
            stake:'',
            deposit:'',
            pic:require('@/assets/picture/egg/4.jpg'),
            noFree:false,
            showDetail:false
          },
          {
            name:'ETH-USDC',
            num:'60',
            stake:'',
            deposit:'',
            pic:require('@/assets/picture/egg/5.jpg'),
            noFree:false,
            showDetail:false
          },
          {
            name:'ETH-DFD',
            num:'60',
            stake:'',
            deposit:'',
            pic:require('@/assets/picture/egg/6.jpg'),
            noFree:false,
            showDetail:false
          },
          {
            name:'ETH-EGG',
            num:'60',
            stake:'',
            deposit:'',
            pic:require('@/assets/picture/egg/7.jpg'),
            noFree:false,
            showDetail:false
          }
        ],
      };
    },
    created() {
      
    },
    methods: {
      handleActive(index){
        this.actIndex = index;
      },
    }
  };
</script>

<style lang="less" scoped>
  .eggNestsPage{
    background-image: url('~@/assets/picture/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
  }
  .cpemDa {
    min-height: calc(100vh - 64px);
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .kszNjt {
    padding-left: 165px;
    padding-right: 165px;
    background-image: url('~@/assets/picture/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
  }
  .gOjCDZ {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
}
.gQZLVC {
    color: rgb(170, 137, 41);
    font-size: 38px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 24px;
}
.hhRQON {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 32px;
}
.kRzfai {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 32px;
}
.ewFXGZ {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(238, 234, 244);
    box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
    cursor: pointer;
    display: inline-flex;
    height: 40px;
    position: relative;
    width: 72px;
    border-radius: 24px;
    transition: background-color 200ms ease 0s;
}
.hrtCUK {
    cursor: pointer;
    opacity: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 3;
}
.kGCxUh {
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    height: 32px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 32px;
    z-index: 1;
    border-radius: 50%;
    transition: left 200ms ease-in 0s;
}
.kRzfai .sc-gsTCUz {
    margin-left: 8px;
}
.UNrzd {
    color: #BBAA9B;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
}
.dnCuQj {
    background-color: rgb(238, 234, 244);
    display: inline-flex;
    border-radius: 16px;
}
.kjBbpq {
    -webkit-box-align: center;
    align-items: center;
    background-color: #A39282;
    box-shadow: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 24px;
    font-weight: 600;
    width: max-content;
    height: 32px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    outline: 0px;
    padding: 0px 16px;
    transition: background-color 0.2s ease 0s;
}
.dnCuQj > button + button, .dnCuQj > a + a {
    margin-left: 2px;
}
.cxRybB {
    background-color: transparent;
    color: rgb(143, 128, 186);
}
.xiYlH {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(239, 244, 245);
    box-shadow: none;
    color: rgb(170, 137, 41);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 24px;
    font-weight: 600;
    width: max-content;
    height: 32px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    outline: 0px;
    padding: 0px 16px;
    transition: background-color 0.2s ease 0s;
}
.cqrcSX {
    background-color: #ECEBEE;
    height: 1px;
    width: 100%;
    margin: 0px auto 32px;
}
.hhRQON {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 32px;
}
.kRzfai {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 32px;
}
.ewFXGZ {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(238, 234, 244);
    box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
    cursor: pointer;
    display: inline-flex;
    height: 40px;
    position: relative;
    width: 72px;
    border-radius: 24px;
    transition: background-color 200ms ease 0s;
}
.hrtCUK {
    cursor: pointer;
    opacity: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 3;
}
.kGCxUh {
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    height: 32px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 32px;
    z-index: 1;
    border-radius: 50%;
    transition: left 200ms ease-in 0s;
}
.kRzfai .sc-gsTCUz {
    margin-left: 8px;
}
.dnCuQj {
    background-color: rgb(238, 234, 244);
    display: inline-flex;
    border-radius: 16px;
}
.dnCuQj > button + button, .dnCuQj > a + a {
    margin-left: 2px;
}
.cxRybB {
    background-color: transparent;
    color: rgb(143, 128, 186);
}
.xiYlH {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(239, 244, 245);
    box-shadow: none;
    color: rgb(170, 137, 41);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 24px;
    font-weight: 600;
    width: max-content;
    height: 32px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    outline: 0px;
    padding: 0px 16px;
    transition: background-color 0.2s ease 0s;
}
.ejJoEn {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
}
.diwHUn {
    align-self: baseline;
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    text-align: center;
    background: rgb(255, 255, 255);
    border-radius: 32px;
    padding: 24px;
}
.ejJoEn > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    margin: 0px 8px 32px;
}
.kiNLFp {   
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    /*background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;*/
    /*animation: 2s linear 0s infinite normal none running ilqnTz;*/
    border-radius: 16px;
}
.colorBg{
  filter: blur(6px);
  background-image: linear-gradient(#e66465, #9198e5);
}
.ejYhYu {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 12px;
}
.dzdjjs {
    position: relative;
    background-size: cover;
    height: 140px;
    max-width: 140px;
    max-height: 140px;
    width: 100%;
    padding-top: 0%;
    background-position: center center;
    background-repeat: no-repeat;
}
.cseSbW {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.dILVHG {
    color: #BBAA9B;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 4px;
}
.ecyRc {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.lbtiF {
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    color: rgb(49, 208, 170);
    display: inline-flex;
    font-size: 18px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(49, 208, 170);
    border-image: initial;
    border-radius: 16px;
    padding: 0 15px;
}
.fIUiIW {
    margin-left: 4px;
}
.hyUuWC {
    -webkit-box-align: center;
    align-items: center;
    background-color: #A39282;
    color: rgb(255, 255, 255);
    display: inline-flex;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    border-width: 2px;
    border-style: solid;
    border-color: #A39282;
    border-image: initial;
    border-radius: 16px;
    padding: 0px 8px;
}
.fAoKek {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.UNsmv {
    color: #BBAA9B;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
}
.fwjcqd {
    width: 32px;
    padding: 0px;
}
.eSZGEW {
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    color: rgb(170, 137, 41);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: max-content;
    height: 32px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    margin-left: 4px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    outline: 0px;
    padding: 0px 16px;
    transition: background-color 0.2s ease 0s;
}
.MoQXc {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
}
.hghKoX {
    padding-top: 16px;
}
.hghKoX {
    padding-top: 16px;
}
.gqHjnk {
    display: flex;
}
.dXVGhj {
    color: #A39282;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    text-transform: uppercase;
    padding-right: 3px;
}
.ghdcvx {
    color: #A39282;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    text-transform: uppercase;
}
.cIpmpl {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
}
.lnUPhx {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
}
.dcRjaX {
    color: rgb(189, 194, 196);
    font-size: 30px;
    font-weight: 600;
    line-height: 1.5;
}
.grsaJH {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
}
.IcZWJ:disabled, .IcZWJ.button--disabled {
    background-color: rgb(233, 234, 235);
    box-shadow: none;
    color: rgb(189, 194, 196);
    cursor: not-allowed;
    border-color: rgb(233, 234, 235);
}
.IcZWJ {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(170, 137, 41);
    box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 22px;
    font-weight: 600;
    width: max-content;
    height: 65px;
    line-height: 65px;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
}
.gqHjnk {
    display: flex;
}
.hlRgJI {
    -webkit-box-align: center;
    align-items: center;
    background-color: #A29181;
    box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 22px;
    font-weight: 600;
    width: 100%;
    height: 75px;
    line-height: 75px;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    margin-top: 20px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 25px;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
}
.jYOTaZ {
    background-color: rgb(233, 234, 235);
    height: 1px;
    width: 100%;
    margin: 35px auto;
}
.bhoBuD {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
}
.ehYguc {
    height: 100%;
    overflow: hidden;
}
.cnxSGb {
    margin-top: 24px;
}
.hShxNi {
    font-weight: normal;
    color: #BBAA9B;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
}
.iqbrwR {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
}
.dCVmfN {
    color: rgb(170, 137, 41);
    font-size: 25px;
    font-weight: 600;
    line-height: 1.5;
}
.FgqtZ {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.iqbrwR {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
}
.dCVmTf {
    color: rgb(170, 137, 41);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
.diwHUn {
    align-self: baseline;
    /*box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;*/
    border:1px solid #ECEBEE;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    text-align: center;
    background: rgb(255, 255, 255);
    border-radius: 32px;
    padding: 24px;
    padding-bottom: 35px;
}
.ejJoEn > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    margin: 0px 8px 32px;
}
</style>

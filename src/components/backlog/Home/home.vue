<template>
  <div class="homePage" id="homePage"> 
    <div class="topPart glMBCA">
      <h1 color="secondary" class="sc-gsTCUz sc-idOhPF dxmefR eyrSnX">Goose Finance</h1>
      <div color="text" class="sc-gsTCUz UNrzd">Top 3 best DEFI app on Binance Smart Chain.</div>
    </div>
    <div class="sc-fKFyDc sc-gsxnyZ hsFDCH cNaueE">
      <div class="sc-crrsfI eHffeS sc-eLgOdN ejJoEn">
        <div class="sc-dQppl ezBjmy">
          <h2 color="text" class="sc-gsTCUz sc-idOhPF bbSIME eyrSnX">Farms &amp; Staking</h2>
          <img src="@/assets/picture/2 (1).png" alt="cake logo" width="64" height="64" class="sc-kIeTtH cnxSGb">
          <div class="sc-bTvRPi bkmCaf">
            <div class="sc-hOqqkJ imhYNd">EGG to Harvest</div>
            <div color="textDisabled" class="sc-gsTCUz dcRinF" style="line-height: 60px;">LOCKED</div>
            <div class="sc-hOqqkJ imhYNd">~$0.00</div>
          </div>
          <div class="sc-bTvRPi bkmCaf">
            <div class="sc-hOqqkJ imhYNd">EGG in Wallet</div>
            <div color="textDisabled" class="sc-gsTCUz dcRinF" style="line-height: 36px;">LOCKED</div>
            <div class="sc-hOqqkJ imhYNd">~$0.00</div>
          </div>
          <div class="sc-dtwoBo inCwUZ">
            <button type="button" @click="dialogVisibleWallet = true" class="sc-dlfnbm btoybd">Unlock Wallet</button>
          </div>
        </div>
      </div>
      <div class="sc-crrsfI eHffeS sc-fvhGYg kHEClt">
        <div class="sc-dQppl ezBjmy">
          <h2 color="text" class="sc-gsTCUz sc-idOhPF bbSIME eyrSnX">Announcements</h2>
          <div>
            <div twdiv="yes"></div>
          </div>
        </div>
      </div>
      <div class="sc-crrsfI eHffeS sc-dacFzL fIUiIW">
        <div class="sc-dQppl ezBjmy">
          <h2 color="text" class="sc-gsTCUz sc-idOhPF bbSIME eyrSnX">EGG Stats</h2>
          <div class="sc-jUEnpm cCSKON">
            <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL">Market Cap</div>
            <div font-size="14px" color="text" class="sc-gsTCUz kxDFDt">$2,114,845</div>
          </div>
          <div class="sc-jUEnpm cCSKON">
            <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL">Total Minted</div>
            <div font-size="14px" color="text" class="sc-gsTCUz kxDFDt">5,401,929</div>
          </div>
          <div class="sc-jUEnpm cCSKON">
            <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL">Total Burned</div>
            <div font-size="14px" color="text" class="sc-gsTCUz kxDFDt">321,811</div>
          </div>
          <div class="sc-jUEnpm cCSKON">
            <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL">Circulating Supply</div>
            <div font-size="14px" color="text" class="sc-gsTCUz kxDFDt">5,080,118</div>
          </div>
          <div class="sc-jUEnpm cCSKON">
              <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL">New EGG/block</div>
              <div font-size="14px" color="text" class="sc-gsTCUz kxDFDt">0.7</div>
            </div>
          </div>
        </div>
        <div class="sc-crrsfI eHffeS sc-jQbIHB gTZZqe">
          <div class="sc-dQppl ezBjmy">
            <h2 color="text" class="sc-gsTCUz sc-idOhPF bbSIME gOjCDZ">Total Value Locked (TVL)</h2>
            <div font-size="40px" color="text" class="sc-gsTCUz diGZoE">$7,785,342.99</div>
            <div color="textSubtle" class="sc-gsTCUz eugENQ">Across all Farms and Nests and Layers</div>
          </div>
        </div>
      </div>
    <!-- Connect to a wallet -->
    <el-dialog
      title="Connect to a wallet"
      :visible.sync="dialogVisibleWallet"
      width="25%" append-to-body>
      <ul>
        <li class="walletItem" v-for="(item,index) in walletList" :key="index" @click="handleWallect(item,index)">
          <span class="dpJqVk">{{item.name}}</span>
          <img width="32" height="32" :src="item.pic">
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        dialogVisibleWallet:false,
        walletList:[
          {
            name:'Metamask',
            pic:require('@/assets/picture/walle1.png'),
          },
          {
            name:'TrustWallet',
            pic:require('@/assets/picture/walle1.png'),
          },
          {
            name:'MathWallet',
            pic:require('@/assets/picture/walle1.png'),
          },
          {
            name:'TokenPocket',
            pic:require('@/assets/picture/walle1.png'),
          },
          {
            name:'WalletConnect',
            pic:require('@/assets/picture/walle1.png'),
          },
          {
            name:'Binance Chain Wallet',
            pic:require('@/assets/picture/walle1.png'),
          }
        ],
        walletIndex:-1,
      };
    },
    created() {
      
    },
    methods: {
      handleWallect(item,index){
        this.walletIndex = index;
        this.dialogVisibleWallet = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  .homePage{
    .glMBCA {
        -webkit-box-align: center;
        align-items: center;
        background-image: url('~@/assets/picture/3_1.png');
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 116px;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center top;
        margin: auto auto 32px;
      }
    .topPart{
      background-image: url('~@/assets/picture/3_1.png'), url('~@/assets/picture/3b.png');
      height: 165px;
      padding-top: 0px;
      background-position: left center, right center;
      .eyrSnX {
          font-size: 80px;
          font-weight: 600;
          line-height: 1.1;
      }
      .dxmefR {
        font-size: 40px;
        font-weight: 600;
        line-height: 1.1;
        color: rgb(118, 69, 217);
        margin-bottom: 24px;
      }
      .UNrzd {
        color: rgb(69, 42, 122);
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
      }
    }
    .eyrSnX {
        font-size: 40px;
        font-weight: 600;
        line-height: 1.1;
    }
    .cNaueE {
      -webkit-box-align: stretch;
      align-items: stretch;
      justify-content: stretch;
      margin-bottom: 48px;
    }
    .hsFDCH {
      display: grid;
     /* grid-template-columns: repeat(6, 1fr);
      gap: 16px;*/
    }
    .cNaueE > div {
        width: 100%;
        grid-column: span 6 / auto;
    }
    .ejJoEn {
        background-image: url('~@/assets/picture/2a.png');
        min-height: 376px;
        background-repeat: no-repeat;
        background-position: right top;
    }
    .eHffeS {
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
        color: rgb(69, 42, 122);
        position: relative;
        border-radius: 32px;
        overflow: hidden;
    }
    .ezBjmy {
        padding: 24px;
    }
/*    .eyrSnX {
        font-size: 40px;
        font-weight: 600;
        line-height: 1.1;
    }*/
    .bbSIME {
        color: rgb(69, 42, 122);
        /*font-size: 16px;*/
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 24px;
    }
    .cnxSGb {
        margin-bottom: 16px;
    }
    .bkmCaf {
      margin-bottom: 16px;
    }
    .imhYNd {
        color: rgb(143, 128, 186);
        font-size: 14px;
    }
    .dcRinF {
        color: rgb(189, 194, 196);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
    }
    .imhYNd {
        color: rgb(143, 128, 186);
        font-size: 14px;
    }
    .dcRinF {
        color: rgb(189, 194, 196);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
    }
    .inCwUZ {
        margin-top: 24px;
    }
    .btoybd {
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(170, 137, 41);
        box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
        color: rgb(255, 255, 255);
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        height: 48px;
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
        padding: 0px 24px;
        transition: background-color 0.2s ease 0s;
    }
    .kHEClt {
        margin-left: auto;
        margin-right: auto;
    }
    .cCSKON {
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      font-size: 14px;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .kxDGqL {
        color: rgb(69, 42, 122);
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
    }
    .gOjCDZ {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.1;
    }
    .diGZoE {
        color: rgb(69, 42, 122);
        font-size: 40px;
        font-weight: 600;
        line-height: 1.5;
    }
    .eugENQ {
        color: rgb(143, 128, 186);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
    }
  }
  /deep/ .el-dialog__body{
      .walletItem{
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(239, 244, 245);
        box-shadow: none;
        color: rgb(170, 137, 41);
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        height: 68px;
        line-height: 1;
        letter-spacing: 0.03em;
        -webkit-box-pack: center;
        justify-content: space-between;
        opacity: 1;
        margin-bottom: 10px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        border-radius: 16px;
        outline: 0px;
        padding: 0px 24px;
        transition: background-color 0.2s ease 0s;
      }
      .dpJqVk {
          color: rgb(170, 137, 41);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          margin-right: 16px;
      }
    }
</style>

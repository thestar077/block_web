<template>
  <div class="sc-bAfeAT kgPYcZ">
   <div class="sc-aemoO sc-euMpXR hMtYfR kNcgdb"></div>
   <div height="0" class="sc-bsipQr dvUoqq">
    <div class="sc-gInsOo grsaJH"></div>
   </div>
   <div class="sc-fmlJLJ eyMhHH">
    <div class="sc-kEjbxe dnCuQj">
     <a variant="subtle" id="swap-nav-link" type="button" class="sc-dlfnbm kjBbpq" href="/exchange">Swap</a>
     <a variant="tertiary" colorkey="textSubtle" id="pool-nav-link" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB" type="button" href="/liquidity">Liquidity</a>
    <!--  <a id="pool-nav-link" href="https://www.binance.org/en/panama" target="_blank" rel="noreferrer noopener" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB" type="button">Bridge</a> -->
    </div>
   </div>
   <div class="sc-crrsfI eHffeS sc-gYhigD gdlclw">
    <div id="swap-page" class="sc-hkwnrn jOcitS">
     <div class="sc-iuAqxS cqvrXa">
      <div class="sc-eCssSg kZklEQ">
       <div class="sc-DJfgX fpDRn">
        <h2 color="text" class="sc-gsTCUz sc-idOhPF eEIHSi lnUPhx">Exchange</h2>
        <div color="textSubtle" font-size="14px" class="sc-gsTCUz cHBkgC">
         Trade tokens in an instant
        </div>
       </div>
       <button title="Settings" @click="showSetting" class="sc-dlfnbm gSiATn sc-hKgILt fwjcww" type="button">
        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="currentColor"></path>
        </svg></button>
       <button title="Recent transactions" @click="dialogVisibleTransactions = true;" class="sc-dlfnbm gSiATn sc-hKgILt fwjcww" type="button">
        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" fill="currentColor"></path>
        </svg></button>
      </div>
     </div>
     <div class="sc-dQppl ezBjmy">
      <div class="sc-aemoO hMtXtc">
       <div id="swap-currency-input" class="sc-dRPiIx kTSysC">
        <div class="sc-hYZPRl kXfhzq">
         <div class="sc-bUrJUP gLnOms">
          <div class="sc-dacFzL sc-jQbIHB sc-fvhGYg eJEsCB fLfbpJ kHEClt">
           <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL"></div>
          </div>
         </div>
         <div class="sc-iWFSnp bHLdTZ">
          <input class="sc-fybufo dHAxfv token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value="" />
          <button class="sc-jLiVlK ekurxD open-currency-select-button"><span class="sc-tkKAw iONwHy"><img src="@/assets/picture/bi/1.png" class="sc-fWPcDo kUFaZj" style="margin-right: 8px;" />
            <div color="text" class="sc-gsTCUz UNrzd">
             BNB
            </div>
            <svg viewbox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg mt120">
             <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
            </svg></span></button>
         </div>
        </div>
       </div>
       <div class="sc-aemoO WypEE">
        <div class="sc-dacFzL sc-jQbIHB sc-GTWni eJEsCB fLfbpJ ILfeX" style="padding: 0px 20px;">
         <div class="sc-bSFVuW jyABpM">
          <button class="sc-dlfnbm xiYlH sc-hKgILt fwjcqd" type="button" style="border-radius: 50%;">
           <svg style="margin-top: -5px;
    height: 20px;" viewbox="0 0 24 25" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ dRSIFi">
            <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
           </svg></button>
         </div>
        </div>
       </div>
       <div id="swap-currency-output" class="sc-dRPiIx kTSysC">
        <div class="sc-hYZPRl kXfhzq">
         <div class="sc-bUrJUP gLnOms">
          <div class="sc-dacFzL sc-jQbIHB sc-fvhGYg eJEsCB fLfbpJ kHEClt">
           <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL"></div>
          </div>
         </div>
         <div class="sc-iWFSnp bHLdTZ">
          <input class="sc-fybufo dHAxfv token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value="" />
          <button class="sc-jLiVlK eZTMLz open-currency-select-button selectBtn"><span class="sc-tkKAw iONwHy">
            <div color="text" class="sc-gsTCUz UNrzd">
             Select a currency
            </div>
            <svg viewbox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg  mt120">
             <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
            </svg></span></button>
         </div>
        </div>
       </div>
       <div class="sc-XhUPp ezkaCf">
        <div class="sc-aemoO kAkSNn"></div>
       </div>
      </div>
      <div class="sc-edoZmE hyACfo">
       <button type="button" class="sc-dlfnbm btoybd">Unlock Wallet</button>
      </div>
     </div>
    </div>
   </div>
   <!-- setting -->
  <el-dialog
    title="Setting"
    :visible.sync="dialogVisibleSetting"
    width="40%" append-to-body>
    <h3>
      <span>Slippage tolerance</span>
      <el-tooltip content="Bottom center" placement="right" effect="light">
        <span class="questionIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
      </el-tooltip>
    </h3>
    <div>
      <el-row>
        <el-col :span="12">
          <!-- <el-row :gutter="20"> -->
            <span :class="toleranceIndex == index?'toleranceIcon active':'toleranceIcon'" v-for="(item,index) in toleranceList" :key="index" @click="getTolerance(item,index)">{{item.name}}%</span>
          <!-- </el-row> -->
        </el-col>
        <el-col :span="12" class="percentBox">
          <el-input class="percentInput w100" v-model="formData.percent" placeholder=""></el-input>%
        </el-col>
      </el-row>
    </div>
    <h3>
      <span>Transaction deadline</span>
      <el-tooltip content="Bottom center" placement="right" effect="light">
        <span class="questionIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
      </el-tooltip>
    </h3>
    <el-row>
      <el-col :span="14" class="percentBox">
        <el-input class="percentInput" v-model="formData.minutes" placeholder=""></el-input>Minutes
      </el-col>
    </el-row>
    <!--< span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisibleSetting = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisibleSetting = false">确 定</el-button>
    </span> -->
  </el-dialog>
   <!-- Recent Transactions -->
  <el-dialog
    title="Recent Transactions"
    :visible.sync="dialogVisibleTransactions"
    width="40%" append-to-body>
    <h3 class="block textAlignCenter">
      <span>Please connect your wallet to view your recent transactions</span>
    </h3>
    <span slot="footer" class="dialog-footer">
      <el-button class="closeBtn center block" @click="dialogVisibleTransactions = false">Close</el-button>
    </span> 
  </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        dialogVisibleSetting:false,
        dialogVisibleTransactions:false,
        toleranceList:[
          {
            name:0.1
          },
          {
            name:0.5
          },
          {
            name:1
          }
        ],
        toleranceIndex:2,
        formData:{
          percent:1,
          minutes:24
        }
      };
    },
    created() {
      
    },
    methods: {
      showSetting(){
        this.dialogVisibleSetting = true;
      },
      getTolerance(item,index){
        this.toleranceIndex = index;
      },
    }
  };
</script>

<style lang="less" scoped>
  .kgPYcZ {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 152px);
    -webkit-box-align: center;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
    background-size: contain;
    padding: 32px 16px;
    flex: 1 1 0%;
    background-repeat: no-repeat;
    background-position: center top;
}
.kNcgdb {
    position: fixed;
    top: 64px;
    right: 20px;
    width: 100%;
    z-index: 2;
    max-width: 355px !important;
}
.hMtYfR {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 20px;
}
.dvUoqq {
    position: relative;
    max-width: 100%;
    height: 0px;
    display: none;
    margin: 0px;
}
.grsaJH {
    height: 99%;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
}
.eyMhHH {
    margin-bottom: 40px;
}
.dnCuQj {
    background-color: #eff4f5;
    display: inline-flex;
    border-radius: 50px;
}
.kjBbpq {
    -webkit-box-align: center;
    align-items: center;
    background-color: #aa8929;
    box-shadow: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 24px;
    font-weight: 600;
    width: max-content;
    height: 60px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 50px;
    outline: 0px;
    width: 200px;
    text-align: center;
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
    width: 200px;
    height: 60px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 50px;
    outline: 0px;
    text-align: center;
    transition: background-color 0.2s ease 0s;
}
.eHffeS {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    color: rgb(69, 42, 122);
    position: relative;
    border-radius: 32px;
    overflow: hidden;
}
.jOcitS {
    position: relative;
}
.cqvrXa {
    border-bottom: 1px solid rgb(233, 234, 235);
    padding: 24px;
}
.kZklEQ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.fpDRn {
    flex: 1 1 0%;
}
.lnUPhx {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.1;
}
.eEIHSi {
    color: #aa8929;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 8px;
}
.cHBkgC {
    color: #aa8929;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.5;
}
.fwjcww {
    width: 48px;
    padding: 0px;
}
.gSiATn {
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
.ezBjmy {
    padding: 24px;
}
.hMtXtc {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 12px;
}
.kHEClt {
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.fLfbpJ {
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}
.kxDGqL {
    color: rgb(69, 42, 122);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
}
.WypEE {
    display: grid;
    grid-auto-rows: auto;
}
.ILfeX {
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
}
.hMtXtc {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 12px;
}
.kXfhzq {
    background-color: #ebc65a3b;
    box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
    border-radius: 16px;
}
.kHEClt {
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.eJEsCB {
    box-sizing: border-box;
    min-width: 0px;
    margin: 0px;
}
.bHLdTZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: row nowrap;
    padding: 0 15px 15px 20px;
}
.dHAxfv {
    color: rgb(69, 42, 122);
    width: 60px;
    position: relative;
    font-weight: 500;
    background-color: transparent;
    font-size: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-appearance: textfield;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    flex: 1 1 auto;
    overflow: hidden;
    padding: 0px;
}
.ekurxD {
    -webkit-box-align: center;
    align-items: center;
    height: 34px;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    color: rgb(69, 42, 122);
    cursor: pointer;
    user-select: none;
    border-radius: 12px;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px 10px;
}
.iONwHy {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
}
.kUFaZj {
    width: 24px;
    height: 24px;
    box-shadow: rgba(0, 0, 0, 0.075) 0px 6px 10px;
    border-radius: 24px;
}
.UNrzd {
    color: #aa8929;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
}
.mt120{
  margin-top: 190px !important;
}
.WypEE {
    display: grid;
    grid-auto-rows: auto;
}
.ILfeX {
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
}
.fwjcqd {
    width: 60px;
    padding: 0px;
}
.dRSIFi {
    fill: rgb(170, 137, 41);
    flex-shrink: 0;
}
.kTSysC {
    display: flex;
    position: relative;
    background-color: rgb(250, 249, 250);
    z-index: 1;
    flex-flow: column nowrap;
    border-radius: 20px;
}
.gLnOms {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(69, 42, 122);
    font-size: 15px;
    line-height: 20px;
    flex-flow: row nowrap;
    padding: 15px 20px 0px;
}
.ezkaCf {
    width: 100%;
    padding: 5px 15px 0px;
    border-radius: 20px;
}
.hyACfo {
    margin-top: 20px;
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
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    height: 60px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 60px;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
}
.ILfeX {
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
}
.eZTMLz:focus, .eZTMLz:hover {
    background-color: rgb(224, 217, 235);
}
.eZTMLz {
    -webkit-box-align: center;
    align-items: center;
    height: 34px;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    color: rgb(255, 255, 255);
    cursor: pointer;
    user-select: none;
    border-radius: 12px;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px 0.5rem;
}
.selectBtn{
  padding:0;

}
.toleranceIcon{
  cursor: pointer;
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
    width: max-content;
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
    padding: 0px 20px;
    transition: background-color 0.2s ease 0s;
    margin-right: 10px;
}
.active{
  background-color: rgb(170, 137, 41);
    border-color: currentcolor;
    color: #fff;
}
.w100{
  width: 100% !important;
}
.percentInput{
 background-color: #aa892929;
 box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
 color: rgb(69, 42, 122);
 display: block;
 font-size: 16px;
 height: 48px;
 width: 75%;
 border-width: 0px;
 border-style: initial;
 border-color: initial;
 border-image: initial;
 border-radius: 16px;
 outline: 0px;
 padding: 0px 16px;
 margin-right: 20px;
}
.percentBox{
  display: flex;
  justify-content:space-between;
  -webkit-box-align: center;
  align-items: center;
}
/deep/ .el-input__inner{
  background: none;
  border:none;
}
</style>

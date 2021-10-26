<template>
  <div class="sc-bAfeAT kgPYcZ">
   <div class="sc-aemoO sc-euMpXR hMtYfR kNcgdb"></div>
    <div height="0" class="sc-bsipQr dvUoqq">
      <div class="sc-gInsOo grsaJH"></div>
    </div>
    <div class="sc-fmlJLJ eyMhHH">
     <div class="sc-kEjbxe dnCuQj">
     <a variant="tertiary" colorkey="textSubtle" id="swap-nav-link" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB" type="button" href="/exchange">Swap</a>
     <a variant="subtle" id="pool-nav-link" type="button" class="sc-dlfnbm kjBbpq" href="/liquidity">Liquidity</a>
      <!--  <a id="pool-nav-link" href="https://www.binance.org/en/panama" target="_blank" rel="noreferrer noopener" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB" type="button">Bridge</a> -->
     </div>
    </div>
    <!-- first -->
    <div v-if="isFirst" class="sc-crrsfI eHffeS sc-gYhigD gdlclw">
     <div class="sc-iuAqxS cqvrXa">
     <div class="sc-eCssSg kZklEQ">
      <div class="sc-DJfgX fpDRn">
       <h2 color="text" class="sc-gsTCUz sc-idOhPF eEIHSi lnUPhx">Liquidity</h2>
       <div color="textSubtle" font-size="14px" class="sc-gsTCUz cHBkgC" >
        Add liquidity to receive LP tokens
       </div>
      </div>
      <button title="Settings" v-click @click="showSetting" class="sc-dlfnbm gSiATn sc-hKgILt fwjcww" type="button">
       <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="currentColor"></path>
       </svg></button>
      <button title="Recent transactions" v-click @click="dialogVisibleTransactions = true;" class="sc-dlfnbm gSiATn sc-hKgILt fwjcww" type="button">
       <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" fill="currentColor"></path>
       </svg></button>
     </div>
     <div color="text" class="sc-gsTCUz dtMTzn">
      <span v-click @click="isFirst = false" id="join-pool-button" variant="primary" type="button" class="sc-dlfnbm IcZWJ" >Add Liquidity</span>
     </div>
     </div>
     <div class="sc-aemoO hJLLNK">
     <div class="sc-dQppl ezBjmy">
      <div class="sc-aemoO hMtXtc" style="width: 100%;">
       <div class="sc-dacFzL sc-jQbIHB sc-fvhGYg ilmkPN gKuQWF kHEClt">
        <div color="#452A7A" class="sc-gsTCUz UNrzd">
         Your Liquidity
        </div>
        <span style="margin-left: 4px;">
         <div class="sc-dUrnRO AXFeE">
          <div class="sc-hjWSAi juycFR">
          <span class="questionIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
          </div>
         </div></span>
       </div>
       <div class="sc-XhUPp sc-ikPAkQ bUHUNe bWNYkD">
        <div color="#BDC2C4" class="sc-gsTCUz dcRinF">
         <!-- Connect to a wallet to view your liquidity. -->
         In this collection,There are 5 Greek gods for you to unbox.Try your luck! 
        </div>
       </div>
       <div>
        <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL" style="padding: 0.5rem 0px;"> 
         <a id="import-pool-link" class="sc-bTvRPi bhoBuD" href="#/find"></a>
        </div>
        <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL" style="padding: 0.5rem 0px;">
         Or, if you staked your LP tokens in a farm, unstake them to see them here.
        </div>
       </div>
      </div>
     </div>
     </div>
    </div>
    <!-- second -->
    <div v-else class="sc-crrsfI eHffeS sc-gYhigD gdlclw">
   <div class="sc-cHjxUU hbOhGN">
    <div class="sc-dacFzL sc-jQbIHB sc-fvhGYg eJEsCB fLfbpJ kHEClt" >
     <span v-click @click="isFirst = true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-jifIRw evqUXD">
       <line x1="19" y1="12" x2="5" y2="12"></line>
       <polyline points="12 19 5 12 12 5"></polyline>
      </svg></span>
     <div class="sc-dkAroR iiSeFJ">
      Add Liquidity
     </div>
     <span style="margin-left: 4px;">
      <div class="sc-dUrnRO AXFeE">
       <div class="sc-hjWSAi juycFR">
        <span class="questionIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
       </div>
      </div></span>
    </div>
   </div>
   <div class="sc-bGqQkm jyZRYv">
    <div class="sc-dQppl ezBjmy">
     <div class="sc-aemoO hMtYfR">
      <div id="add-liquidity-input-tokena" class="sc-dRPiIx kTSysC">
       <div class="sc-hYZPRl kXfhzq">
        <div class="sc-bUrJUP gLnOms">
         <div class="sc-dacFzL sc-jQbIHB sc-fvhGYg eJEsCB fLfbpJ kHEClt">
          <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL"></div>
         </div>
        </div>
        <div class="sc-iWFSnp bHLdTZ">
         <input class="sc-fybufo dHAxfv token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value="" />
         <button v-click @click="showToken(1)" class="sc-jLiVlK ekurxD open-currency-select-button"><span class="sc-tkKAw iONwHy"><img :src="token1.pic" class="sc-fWPcDo kUFaZj" style="margin-right: 8px;" />
           <div color="text" class="sc-gsTCUz UNrzd">
            {{token1.name}}
           </div>
           <svg viewbox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg downArrow">
            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
           </svg></span></button>
        </div>
       </div>
      </div>
      <div class="sc-TmcTc sc-jHVexB cJbABh iiHqcD">
       <svg viewbox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ ewCGLh">
        <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path>
       </svg>
      </div>
      <div id="add-liquidity-input-tokenb" class="sc-dRPiIx kTSysC">
       <div class="sc-hYZPRl kXfhzq">
        <div class="sc-bUrJUP gLnOms">
         <div class="sc-dacFzL sc-jQbIHB sc-fvhGYg eJEsCB fLfbpJ kHEClt">
          <div font-size="14px" color="text" class="sc-gsTCUz kxDGqL"></div>
         </div>
        </div>
        <div class="sc-iWFSnp bHLdTZ">
         <input class="sc-fybufo dHAxfv token-amount-input" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value="" />
         <button v-click @click="showToken(2)" class="sc-jLiVlK ekurxD open-currency-select-button"><span class="sc-tkKAw iONwHy"><img :src="token2.pic" class="sc-fWPcDo kUFaZj" style="margin-right: 8px;" />
           <div color="text" class="sc-gsTCUz UNrzd">
            {{token2.name}}
           </div>
           <svg style="margin-top:120px;" viewbox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg">
            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
           </svg></span></button>
        </div>
       </div>
      </div>
      <button v-click type="button" class="sc-dlfnbm btoybd">Unlock Wallet</button>
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
            <span v-click :class="toleranceIndex == index?'toleranceIcon active':'toleranceIcon'" v-for="(item,index) in toleranceList" :key="index" @click="getTolerance(item,index)">{{item.name}}%</span>
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
      <el-button class="closeBtn center block" v-click @click="dialogVisibleTransactions = false">Close</el-button>
    </span> 
  </el-dialog>
  <!-- Select Token -->
  <el-dialog class="tokenDialog"
      title="Select a token"
      :visible.sync="dialogVisibleToken"
      width="40%" append-to-body>
      <el-input class="tokenInput" @input="search" v-model="input" placeholder="Search name"></el-input>
      <p class="tokenName">Token name</p>
      <div class="tokenBox">
        <ul>
          <li class="tokenItem" v-for="(item,index) in tokenList" :key="index" @click="handleToken(item,index)">
            <img :src="item.pic">
             <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        isFirst:true,
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
        dialogVisibleToken:false,
        toleranceIndex:2,
        formData:{
          percent:1,
          minutes:24
        },
        token1:{
          pic:require('@/assets/picture/bi/1.png'),
          name:'Uniswap (UNI)',
        },
        token2:{
          pic:require('@/assets/picture/bi/1.png'),
          name:'Uniswap (UNI)',
        },
        tokenIndex:1,
        tokenList:[
          {
            pic:require('@/assets/picture/bi/1.png'),
            name:'Uniswap (UNI)',
          },
          {
            pic:require('@/assets/picture/bi/2.png'),
            name:'Tether USD (USDT)',
          },
          {
            pic:require('@/assets/picture/bi/3.png'),
            name:'USD Coin (USDC)',
          },
          {
            pic:require('@/assets/picture/bi/4.png'),
            name:'Wrapped BTC (WBTC)',
          },
          {
            pic:require('@/assets/picture/bi/5.png'),
            name:'ChainLink Token (LINK)',
          },
          {
            pic:require('@/assets/picture/bi/6.png'),
            name:'Graph Token (GRT)',
          },
          {
            pic:require('@/assets/picture/bi/7.png'),
            name:'SushiToken (SUSHI)',
          },
          {
            pic:require('@/assets/picture/bi/8.png'),
            name:'Compound (COMP)',
          },
          {
            pic:require('@/assets/picture/bi/9.png'),
            name:'Magic Internet Money (MIM)',
          },
          {
            pic:require('@/assets/picture/bi/10.png'),
            name:'yearn.finance (YFI)',
          },
          {
            pic:require('@/assets/picture/bi/11.png'),
            name:'Curve DAO Token (CRV)',
          },
          {
            pic:require('@/assets/picture/bi/12.png'),
            name:'CelerToken (CELR)',
          },
          {
            pic:require('@/assets/picture/bi/13.png'),
            name:'Gnosis Token (GNO)',
          },
          {
            pic:require('@/assets/picture/bi/14.png'),
            name:'Rari Governance Token (RGT)',
          },
          {
            pic:require('@/assets/picture/bi/15.png'),
            name:'Badger (BADGER)',
          },
          {
            pic:require('@/assets/picture/bi/16.png'),
            name:'DODO bird (DODO)',
          },
          {
            pic:require('@/assets/picture/bi/17.png'),
            name:'Balancer (BAL)',
          },
          {
            pic:require('@/assets/picture/bi/18.png'),
            name:'Synth sUSD (sUSD)',
          },
          {
            pic:require('@/assets/picture/bi/19.png'),
            name:'MATH Token (MATH)',
          },
          {
            pic:require('@/assets/picture/bi/20.png'),
            name:'Cream (CREAM)',
          },
          {
            pic:require('@/assets/picture/bi/21.png'),
            name:'MCDEX Token (MCB)',
          },
          {
            pic:require('@/assets/picture/bi/22.png'),
            name:'Stake DAO Token (SDT)',
          },
          {
            pic:require('@/assets/picture/bi/23.png'),
            name:'dForce (DF)',
          },
          {
            pic:require('@/assets/picture/bi/24.png'),
            name:'Cap (CAP)',
          },
          {
            pic:require('@/assets/picture/bi/25.png'),
            name:'Fuse Token (FUSE)',
          },
          {
            pic:require('@/assets/picture/bi/26.png'),
            name:'Alchemy (ALCH)',
          },
          {
            pic:require('@/assets/picture/bi/27.png'),
            name:'Wrapped Ether (WETH)',
          },
          {
            pic:require('@/assets/picture/bi/28.png'),
            name:'ArbiNYAN (NYAN)',
          },
          {
            pic:require('@/assets/picture/bi/29.png'),
            name:'dForce EUR (EUX)',
          },
          {
            pic:require('@/assets/picture/bi/30.png'),
            name:'dForce USD (USX)',
          },
          {
            pic:require('@/assets/picture/bi/31.png'),
            name:'DXdao (DXD)',
          },
          {
            pic:require('@/assets/picture/bi/32.png'),
            name:'Wootrade Network (WOO)',
          },
        ]
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
      showToken(index){
        this.tokenIndex = index;
        this.dialogVisibleToken = true;
      },
      handleToken(item,index){
        if(this.tokenIndex == 1){
          this.token1 = item;
        }else{
          this.token2 = item;
        }
        this.dialogVisibleToken = false;
      },
      search(){
        if(this.input){
          let _search = this.input.toLowerCase();
          let newListData = []; // 用于存放搜索出来数据的新数组
          if (_search) {
            this.tokenList.filter(item => {
              if (item.name.toLowerCase().indexOf(_search) !== -1) {
                newListData.push(item);
              }
            }) 
          }
          this.tokenList = newListData;
        }else{
          this.tokenList = [
          {
            pic:require('@/assets/picture/bi/1.png'),
            name:'Uniswap (UNI)',
          },
          {
            pic:require('@/assets/picture/bi/2.png'),
            name:'Tether USD (USDT)',
          },
          {
            pic:require('@/assets/picture/bi/3.png'),
            name:'USD Coin (USDC)',
          },
          {
            pic:require('@/assets/picture/bi/4.png'),
            name:'Wrapped BTC (WBTC)',
          },
          {
            pic:require('@/assets/picture/bi/5.png'),
            name:'ChainLink Token (LINK)',
          },
          {
            pic:require('@/assets/picture/bi/6.png'),
            name:'Graph Token (GRT)',
          },
          {
            pic:require('@/assets/picture/bi/7.png'),
            name:'SushiToken (SUSHI)',
          },
          {
            pic:require('@/assets/picture/bi/8.png'),
            name:'Compound (COMP)',
          },
          {
            pic:require('@/assets/picture/bi/9.png'),
            name:'Magic Internet Money (MIM)',
          },
          {
            pic:require('@/assets/picture/bi/10.png'),
            name:'yearn.finance (YFI)',
          },
          {
            pic:require('@/assets/picture/bi/11.png'),
            name:'Curve DAO Token (CRV)',
          },
          {
            pic:require('@/assets/picture/bi/12.png'),
            name:'CelerToken (CELR)',
          },
          {
            pic:require('@/assets/picture/bi/13.png'),
            name:'Gnosis Token (GNO)',
          },
          {
            pic:require('@/assets/picture/bi/14.png'),
            name:'Rari Governance Token (RGT)',
          },
          {
            pic:require('@/assets/picture/bi/15.png'),
            name:'Badger (BADGER)',
          },
          {
            pic:require('@/assets/picture/bi/16.png'),
            name:'DODO bird (DODO)',
          },
          {
            pic:require('@/assets/picture/bi/17.png'),
            name:'Balancer (BAL)',
          },
          {
            pic:require('@/assets/picture/bi/18.png'),
            name:'Synth sUSD (sUSD)',
          },
          {
            pic:require('@/assets/picture/bi/19.png'),
            name:'MATH Token (MATH)',
          },
          {
            pic:require('@/assets/picture/bi/20.png'),
            name:'Cream (CREAM)',
          },
          {
            pic:require('@/assets/picture/bi/21.png'),
            name:'MCDEX Token (MCB)',
          },
          {
            pic:require('@/assets/picture/bi/22.png'),
            name:'Stake DAO Token (SDT)',
          },
          {
            pic:require('@/assets/picture/bi/23.png'),
            name:'dForce (DF)',
          },
          {
            pic:require('@/assets/picture/bi/24.png'),
            name:'Cap (CAP)',
          },
          {
            pic:require('@/assets/picture/bi/25.png'),
            name:'Fuse Token (FUSE)',
          },
          {
            pic:require('@/assets/picture/bi/26.png'),
            name:'Alchemy (ALCH)',
          },
          {
            pic:require('@/assets/picture/bi/27.png'),
            name:'Wrapped Ether (WETH)',
          },
          {
            pic:require('@/assets/picture/bi/28.png'),
            name:'ArbiNYAN (NYAN)',
          },
          {
            pic:require('@/assets/picture/bi/29.png'),
            name:'dForce EUR (EUX)',
          },
          {
            pic:require('@/assets/picture/bi/30.png'),
            name:'dForce USD (USX)',
          },
          {
            pic:require('@/assets/picture/bi/31.png'),
            name:'DXdao (DXD)',
          },
          {
            pic:require('@/assets/picture/bi/32.png'),
            name:'Wootrade Network (WOO)',
          },
        ]
        }
      }, 
    }
  };
</script>

<style lang="less" scoped>
.tokenInput{
  /deep/ .el-input__inner{
    border:1px solid #A29181;
    padding:30px;
    border-radius: 20px;
    font-size: 20px;
  }
}
.tokenName{
  font-size: 24px;
  padding:20px 0;
  color: #A29181;
}
.tokenBox{
  height: 30vh;
  overflow-y: scroll;
  .tokenItem{
    padding-bottom: 40px;
    cursor: pointer;
    img{
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 20px;
    }
    span{
      font-size: 22px;
      color: #cdb7a2;
    }
  }
}
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
    right: 1rem;
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
    background-color: #f0f0f0;
    display: inline-flex;
    border-radius: 60px;
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
    border-radius: 60px;
    outline: 0px;
    text-align: center;
    transition: background-color 0.2s ease 0s;
}
.dnCuQj > button + button, .dnCuQj > a + a {
    margin-left: 2px;
}
.kjBbpq {
    -webkit-box-align: center;
    align-items: center;
    background-color: #A29181;
    box-shadow: none;
    color: rgb(255, 255, 255);
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
    border-radius: 60px;
    outline: 0px;
    text-align: center;
    transition: background-color 0.2s ease 0s;
}
.cxRybB {
    background-color: transparent;
    color: #A29181;
}
.gdlclw {
    position: relative;
    max-width: 600px;
    width: 100%;
    z-index: 5;
}
.eHffeS {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
    color: rgb(69, 42, 122);
    position: relative;
    border-radius: 32px;
    overflow: hidden;
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
    color: #897461;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 8px;
}
.cHBkgC {
    color:#897461;
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
    color: #A29181;
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
.dtMTzn {
    color: rgb(69, 42, 122);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 16px;
}
.hJLLNK {
    display: grid;
    grid-auto-rows: auto;
    justify-items: center;
    grid-row-gap: 24px;
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
.gKuQWF {
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
}
.ilmkPN {
    box-sizing: border-box;
    min-width: 0px;
    margin: 0px;
    padding: 0px 8px;
}
.UNrzd {
    color: #A29181;
    font-size: 26px;
    font-weight: 400;
    line-height: 1.5;
}
.AXFeE {
    display: inline-block;
}
.juycFR {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: default;
    color: #A29181;
    padding: 0.2rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: none rgb(255, 255, 255);
    outline: none;
    border-radius: 36px;
}
.bWNYkD {
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-image: initial;
}
.bUHUNe {
    width: 100%;
    border-radius: 16px;
    padding: 40px;
}
.dcRinF {
    color: rgb(189, 194, 196);
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
}
.hFAhkg {
    margin-top: 5rem;
}
.bBhENM {
    position: fixed;
    height: 100%;
}
.iZzpKI {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(69, 42, 122);
    opacity: 0.6;
    z-index: 10;
    pointer-events: initial;
    transition: opacity 0.4s ease 0s;
}
.IcZWJ {
    -webkit-box-align: center;
    align-items: center;
    background-color: #A29181;
    box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 24px;
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
 background-color: rgb(238, 234, 244);
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
.hbOhGN {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row nowrap;
    border-radius: 3rem;
}
.fLfbpJ {
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}
.eJEsCB {
    box-sizing: border-box;
    min-width: 0px;
    margin: 0px;
}
.iiSeFJ {
    font-weight: 500;
    font-size: 20px;
}
.jyZRYv {
    position: relative;
}
.kTSysC {
    display: flex;
    position: relative;
    background-color: rgb(250, 249, 250);
    z-index: 1;
    flex-flow: column nowrap;
    border-radius: 20px;
}
.iiHqcD {
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
}
.cJbABh {
    height: 30px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
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
.kXfhzq {
    background-color: #ebc65a3b;
    box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
    border-radius: 16px;
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
.kHEClt {
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.selectCurrency{
  margin-top: -185px;
}
.fLfbpJ {
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}
.eJEsCB {
    box-sizing: border-box;
    min-width: 0px;
    margin: 0px;
}
.kxDGqL {
    color: #A29181;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
}
.bHLdTZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: row nowrap;
    padding: 0 15px 15px 20px;
    height: 50px;
}
.dHAxfv {
    color: rgb(69, 42, 122);
    width: 0px;
    position: relative;
    font-weight: 500;
    background-color: transparent;
    font-size: 16px;
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
.downArrow{
  margin-top: 190px;
}
.ekurxD {
    -webkit-box-align: center;
    align-items: center;
    height: auto;
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
}
.kUFaZj {
    width: 24px;
    height: 24px;
    box-shadow: rgba(0, 0, 0, 0.075) 0px 6px 10px;
    border-radius: 24px;
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
</style>

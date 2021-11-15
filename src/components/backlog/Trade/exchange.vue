<template>
  <div class="sc-bAfeAT kgPYcZ">
   <div class="sc-aemoO sc-euMpXR hMtYfR kNcgdb"></div>
   <div height="0" class="sc-bsipQr dvUoqq">
    <div class="sc-gInsOo grsaJH"></div>
   </div>
   <div class="sc-fmlJLJ eyMhHH">
    <div class="sc-kEjbxe dnCuQj">
      <router-link to="/exchange" class="sc-dlfnbm kjBbpq">Swap</router-link>
      <router-link to="/liquidity" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB">Liquidity</router-link>
     <!-- <a variant="subtle" id="swap-nav-link" type="button" class="sc-dlfnbm kjBbpq" href="/exchange">Swap</a>
     <a variant="tertiary" colorkey="textSubtle" id="pool-nav-link" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB" type="button" href="/liquidity">Liquidity</a>
     <a id="pool-nav-link" href="https://www.binance.org/en/panama" target="_blank" rel="noreferrer noopener" class="sc-dlfnbm xiYlH sc-iqHYGH cxRybB" type="button">Bridge</a> -->
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
       <button title="Settings" v-click @click="showSetting" class="sc-dlfnbm gSiATn sc-hKgILt fwjcww" type="button">
        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="currentColor"></path>
        </svg></button>
       <button title="Recent transactions" v-click @click="dialogVisibleTransactions = true;" class="sc-dlfnbm gSiATn sc-hKgILt fwjcww" type="button">
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
          <input class="sc-fybufo dHAxfv token-amount-input" placeholder="0.0" v-model="amountA"  @blur="handleAmountChange(1)"/>
          <button @click="showToken(1)" class="sc-jLiVlK ekurxD open-currency-select-button"><span class="sc-tkKAw iONwHy">
              <img v-if="tokenA.pic" :src="tokenA.pic" class="sc-fWPcDo kUFaZj" style="margin-right: 8px;" />
              <div color="text" class="sc-gsTCUz UNrzd">
                {{tokenA.name?tokenA.name:'Select a currency'}}
              </div>
            <svg viewbox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg mt120">
             <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
            </svg></span></button>
         </div>
        </div>
       </div>
       <div class="sc-aemoO WypEE">
        <div class="sc-dacFzL sc-jQbIHB sc-GTWni eJEsCB fLfbpJ ILfeX" style="padding: 0px 20px;">
         <div class="sc-bSFVuW jyABpM" @click="changeBi">
           <!-- 交换按钮 -->
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
          <input class="sc-fybufo dHAxfv token-amount-input" disabled placeholder="0.0" v-model="amountB"/>
           <button @click="showToken(2)" class="sc-jLiVlK ekurxD open-currency-select-button"><span class="sc-tkKAw iONwHy">
              <img v-if="tokenB.pic" :src="tokenB.pic" class="sc-fWPcDo kUFaZj" style="margin-right: 8px;" />
              <div color="text" class="sc-gsTCUz UNrzd">
                {{tokenB.name?tokenB.name:'Select a currency'}}
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
        <!-- <button v-click type="button" v-if="isToken2Approve && isToken2Approve" class="sc-dlfnbm btoybd" @click="dialogVisibleConfirmSwap = true">Swap</button>
        <button v-click type="button" v-else @click="dialogVisibleWallet = true" class="sc-dlfnbm btoybd">Unlock Wallet</button> -->
        <button v-if="accounts == null || accounts == undefined || accounts.length == 0" type="button" @click="dialogVisibleWallet = true" class="sc-dlfnbm btoybd  mt30">Unlock Wallet</button>
         <!-- v-else-if="needsApprove == true" -->
        <button :disabled="needsApprove == false" @click="approve()" :class="needsApprove ? 'sc-dlfnbm btoybd mr20 mt20' : 'sc-dlfnbm btoybd mr20 mt20 disableBtn'">Approve {{tokenA.symbol}}</button>
        <!-- v-else -->
        <button :disabled="swapReady == false" type="button" :class="swapReady == true ? 'sc-dlfnbm btoybd mt30 mt20' : 'sc-dlfnbm btoybd mt30 mt20 disableBtn'" @click="dialogVisibleConfirmSwap = true">Swap</button>
      </div>
      <div class="sc-edoZmE hyACfo" >
        <!-- <div>
          <button v-click type="button" v-if="!isToken1Approve" @click="approve()" class="sc-dlfnbm btoybd mr20">Approve {{tokenA.name}}</button>
          <button v-click type="button" @click="dialogVisibleConfirmSwap = true" v-else class="sc-dlfnbm btoybd mr20 swapBtn">Swap</button>
        </div> -->
        <!-- <div>
          <button v-click type="button" v-if="!isToken2Approve" @click="isToken2Approve = !isToken2Approve" class="sc-dlfnbm btoybd mr20">Approve {{tokenB.name}}</button>
          <button v-click type="button" @click="dialogVisibleConfirmSwap = true" v-else class="sc-dlfnbm btoybd mr20 swapBtn">Swap</button>
        </div> -->
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
            <span :class="toleranceIndex == index?'toleranceIcon active':'toleranceIcon'" v-for="(item,index) in toleranceList" :key="index" @click="updateSlippage(index)">{{item.name}}%</span>
          <!-- </el-row> -->
        </el-col>
        <el-col :span="12" class="percentBox">
          <el-input class="percentInput w100" v-model="formData.slippage" @blur="slippageBlurred()" placeholder=""></el-input>%
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
        <el-input class="percentInput" v-model="formData.deadline" @blur="deadlineBlurred()" placeholder=""></el-input>Minutes
      </el-col>
    </el-row>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button class="closeBtn center block" @click="dialogVisibleSetting = false">Close</el-button>
      <el-button class="closeBtn center block bgActive" @click="handleConfirm">Confirm</el-button>
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
    <div class="recentVisible">
      <div class="flex"> 
          <span>Swap {{tokenA.value}} {{tokenA.name}} for {{tokenB.value}} {{tokenB.name}}</span>
          <span class="el-icon-link"></span>
      </div>
      <span class="el-icon-circle-check"></span>
      <span style="color:red;" class="el-icon-circle-close"></span>
    </div>
    <div class="recentVisible">
      <div class="flex"> 
          <span>Approve {{tokenA.name}}</span>
          <span class="el-icon-link"></span>
      </div>
      <span class="el-icon-circle-check"></span>
      <span style="color:red;" class="el-icon-circle-close"></span>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button class="closeBtn center block" @click="dialogVisibleTransactions = false">Close</el-button>
    </span> 
  </el-dialog>
  <!-- ConfirmSwap -->
  <el-dialog
    title="Confirm Swap"
    :visible.sync="dialogVisibleConfirmSwap"
    width="40%" append-to-body>
    <div class="biItem">
      <div class="biPic">
        <img :src="tokenA.pic">
        <span>{{amountA}}</span>
      </div>
      <span>{{tokenA.symbol}}</span>
    </div>
    <div class="el-icon-bottom changeBtn"></div>
    <div class="biItem">
      <div class="biPic">
        <img :src="tokenB.pic">
        <span>{{amountB}}</span>
      </div>
      <span>{{tokenB.symbol}}</span>
    </div>
    <p class="swapTips">Output is estimated.You will receive at least{{tokenB.value}} {{tokenB.name}} or the transaction will revert.</p>
    <p class="swapTxt">
      <span>Price</span>
      <span>{{(amountA / amountB).toFixed(4)}} {{tokenA.symbol}} / {{tokenB.symbol}}</span>
    </p>
    <p class="swapTxt">
      <span>Minimum received</span>
      <span>{{amountB * (1 - swapSlippage)}} {{tokenB.symbol}}</span>
    </p>
    <p class="swapTxt">
      <span>Price Impact</span>
      <span>{{swapSlippage * 100.0}}%</span>
    </p>
    <!-- <p class="swapTxt">
      <span>Liquidity Provider Fee</span>
      <span>0.03996 {{tokenA.name}}</span>
    </p> -->
    <span slot="footer" class="dialog-footer">
      <el-button class="sc-dlfnbm btoybd center block" @click="confirmSwap">Confirm Swap</el-button>
    </span> 
  </el-dialog>
   <!-- Waiting for confirmation -->
  <el-dialog
    title="Waiting for confirmation"
    :visible.sync="dialogVisibleConfirmationWaiting"
    width="40%" append-to-body>
    <div class="el-icon-loading submittedIcon"></div>
    <p class="submittedVisible waitingTxt">
      <span>Swapping {{tokenA.value}} {{tokenA.name}} for {{tokenB.value}} {{tokenB.name}}</span>
    </p>
    <p class="watingTips">Confirm this transaction in your wallet</p>
  </el-dialog>
   <!-- Transaction submitted -->
  <el-dialog
    title="Transaction submitted"
    :visible.sync="dialogVisibleTransactionsSubmitted"
    width="40%" append-to-body>
    <div class="el-icon-bottom submittedIcon"></div>
    <p class="submittedVisible">
      <span>View on bscscan</span>
      <span class="el-icon-link"></span>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button class="closeBtn center block" @click="dialogVisibleTransactionsSubmitted = false">Close</el-button>
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
          <li class="tokenItem" v-for="(item,index) in tokenList" :key="index" @click="handleTokenChange(item,index)">
            <img :src="item.pic">
             <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- Connect to a wallet -->
    <ComponentWallet :showModal="dialogVisibleWallet" @hideModal="dialogVisibleWallet = false" />
  </div>
</template>

<script>
  import qs from 'qs';
  import myStorage from '../../../store/myStorage';
  import {toFixed} from '../../../utils/math.js';
  import abiTokenDefender from '../../../assets/abi/DefenderToken.json';
  export default {
    data() {
      return {
        count:1,
        input:'',
        dialogVisibleWallet:false,
        dialogVisibleConfirmationWaiting:false,
        dialogVisibleTransactionsSubmitted:false,
        dialogVisibleConfirmSwap:false,
        dialogVisibleToken:false,
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
          slippage:1,
          deadline:24
        },
        tokenA: {},
        tokenB: {},
        amountA: '',
        amountB: '',
        tokenAIndex: -1,
        tokenBIndex: 1000,
        tokenABalance: 0,
        tokenBBalance: 0,
        tokenAAllowance: 0,
        tokenBAllowance: 0,
        tokenPathSelected: [],
        tokenIndex:1,
        rateAB: 0,
        rateBA: 0,
        pairAddr: '',
        pairContract: '',
        oppositeOrder: false,
        isToken1Approve: false,
        isToken2Approve: false,
        isTokenApproved: false,
        needsApprove: false,
        tokenListData: [],
        // currentContracts: {
        //   tokenA: {},
        //   tokenB: {},
        //   pair: {},
        // }
      };
    },
    created() {
    },
    computed: {
        web3() {
          return this.$store.state.web3.web3;
        },
        accounts () {
          return this.$store.state.web3.accounts;
        },
        contractFactory() {
          return this.$store.state.web3.contracts.uniswap_factory;
        },
        contractRouter() {
          return this.$store.state.web3.contracts.router_v1;
        },
        user() {
          return (this.$store.state.web3.accounts.length > 0) ? this.$store.state.web3.accounts[0] : '';
        },
        minter() {
          return this.$store.state.web3.minter;
        },
        walletConnected() {
          return this.web3 !== null && this.web3 !== undefined;
        },
        tokenList: {
          set: function(newVal) {
            this.tokenListData = newVal;
          },
          get: function() {
            return (this.tokenListData.length == 0) ? this.$store.state.web3.tokens : this.tokenListData;
          }
        },
        swapReady() {
          return this.amountA > 0 && this.amountB > 0 && this.tokenPathSelected.length > 0 && this.needsApprove === false;
        },
        swapPaths() {
          return this.$store.state.web3.swap.paths;
        },
        swapSlippage() {
          return this.$store.state.baseData.userConfig.slippage;
        },
        deadline() {
          return this.$store.state.baseData.userConfig.deadline;
        },
        displayDecimals() {
          return this.$store.state.baseData.consts.display_decimals;
        },
        defaultContractDecimals() {
          return this.$store.state.baseData.consts.contract_decimals;
        },
    },
    watch: {
      'amountA': function(newVal) {
        // this.amountA = newVal.replace(/\D/g, '')
      },
      'amountB': function(newVal) {
        // this.amountB = newVal.replace(/\D/g, '')
      },
      tokenAIndex: function(val) {
        
      },
      tokenBIndex: function(val) {
        
      },
      'formData.slippage': function(val) {
          if (val) {
            if(Number(val) >= 100) {
              val = 100
            }
            // this.formData.slippage = String(val).replace(/\D/g, '');
          }
      },
    },
    methods: {
      showSetting(){
        this.formData.slippage = this.swapSlippage * 100.0;
        this.formData.deadline = this.deadline / 60.0;
        this.slippageBlurred();
        this.dialogVisibleSetting = true;
      },
      updateSlippage(index){
        this.toleranceIndex = index;
        this.formData.slippage = this.toleranceList[index].name;
        let slippage = this.formData.slippage / 100.0;
        this.$store.commit('USER_CONFIG_SLIPPAGE', slippage);
        myStorage.set('config_slippage', slippage);
      },
      slippageBlurred() {
        let slippage = this.formData.slippage;
        this.toleranceIndex = -1;
        for (let i = 0; i < this.toleranceList.length; i++) {
          let tolerance = this.toleranceList[i];
          if (tolerance.name == slippage) {
            this.toleranceIndex = i;
          }
        }

        this.$store.commit('USER_CONFIG_SLIPPAGE', slippage / 100.0);
        myStorage.set('config_slippage', slippage / 100.0);
      },
      deadlineBlurred() {
        let deadline = this.formData.deadline * 60.0;
        myStorage.set('config_deadline', deadline);
        this.$store.commit('USER_CONFIG_DEADLINE', deadline);
      },
      showToken(index){
        if (this.walletConnected === false) {
          alert("Please unlock your wallet first.");
          return;
        }
        console.log('web3', this.web3)
        this.tokenIndex = index;
        this.dialogVisibleToken = true;
      },
      // 获取授权
      getAuthorization(){
        this.$router.push({path: "/authorization"});
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
          this.tokenList = this.$store.state.web3.tokens;
        }
      }, 
      changeBi(){
        // let tokenA = this.tokenA;
        // let tokenB = this.tokenB;
        // this.tokenA = tokenB;
        // this.tokenB = tokenA;
      },
      async confirmSwap(){
        this.dialogVisibleConfirmSwap = false;
        this.dialogVisibleConfirmationWaiting = true;
        if (this.amountA > 0 && this.amountB > 0) {
          let timeNow = Math.floor(Date.now() / 1000);
          // let expiry = 10 * 60;  // 10 mins
          let deadline = timeNow + this.deadline;

          if (this.oppositeOrder === false) {
            let amountIn = toFixed(this.amountA * Math.pow(10, this.tokenA.decimals)) + '';
            let amountOutMin = parseFloat(this.amountB) * (1.0 - this.swapSlippage) * Math.pow(10, this.tokenB.decimals) + '';
            let amountOutExpected = toFixed(parseFloat(this.amountB) * Math.pow(10, this.tokenB.decimals)) + '';
            let to = this.user;
            let slippage = Math.floor(this.swapSlippage * 1000);
            console.log(`amountIn = ${amountIn}, amountOutMin = ${amountOutMin}, amountOutExpected = ${amountOutExpected}, this.tokenPathSelected = ${this.tokenPathSelected}, to = ${to}, slippage = ${slippage}, deadline = ${deadline}`);

            let amountsOut = await this.contractRouter.methods.swapExactTokensForTokens(amountIn, amountOutMin, amountOutExpected, this.tokenPathSelected, to, slippage, deadline).send({ from: this.user });
            console.log('amountsOut', amountsOut);
          } else {
            let amountOut = toFixed(this.amountA * Math.pow(10, this.tokenA.decimals)) + '';
            let amountInMax = parseFloat(this.amountB) * (1.0 + this.swapSlippage) * Math.pow(10, this.tokenB.decimals) + '';
            let amountInExpected = toFixed(parseFloat(this.amountB) * Math.pow(10, this.tokenB.decimals)) + '';
            let to = this.user;
            let slippage = Math.floor(this.swapSlippage * 1000);
            console.log(`amountOut = ${amountOut}, amountInMax = ${amountInMax}, amountInExpected = ${amountInExpected}, this.tokenPathSelected = ${this.tokenPathSelected}, to = ${to}, slippage = ${slippage}, deadline = ${deadline}`);

            let amountIn = await this.contractRouter.methods.swapTokensForExactTokens(amountOut, amountInMax, amountInExpected, this.tokenPathSelected, to, slippage, deadline).send({ from: this.user });
            console.log('amountIn', amountIn);
          }
          
          // let testAmountIn = await this.contractRouter.methods.testAmountIn().call();
          // let testAmountOut = await this.contractRouter.methods.testAmountOut().call();
          // console.log(`testAmountIn = ${testAmountIn}, testAmountOut = ${testAmountOut}`);
          // let testSlippage = await this.contractRouter.methods.testSlippage().call();
          // let testCurrentSlippage = await this.contractRouter.methods.testCurrentSlippage().call();
          // console.log(`testSlippage = ${testSlippage}, testCurrentSlippage = ${testCurrentSlippage}`);
          // let currentSlippage = await this.contractRouter.methods.getSlippage(this.tokenPathSelected[0], this.tokenPathSelected[1]).call();
          // console.log(`curren slippage = ${currentSlippage}`);
          
          this.dialogVisibleConfirmationWaiting = false;
          let balanceTokenA = await this.tokenA.contract.methods.balanceOf(this.pairAddr).call();
          let balanceTokenB = await this.tokenB.contract.methods.balanceOf(this.pairAddr).call();
          
          console.log(`balanceTokenA = ${balanceTokenA}, balanceTokenB = ${balanceTokenB}`);
        } else {
          alert("Please specify the amounts to swap.");
        }
        },
      computeSwapPath() {
        this.tokenPathSelected = [];
        if (this.swapPaths.length > 0) {
          this.swapPaths.forEach((path) => {
            if (path[0] == this.tokenAIndex && path[path.length - 1] == this.tokenBIndex || 
              path[0] == this.tokenBIndex && path[path.length -1] == this.tokenAIndex) {
              path.forEach((item) => {
                this.tokenPathSelected.push(this.tokenList[item].address);
              })

              this.oppositeOrder = path[0] == this.tokenBIndex && path[path.length -1] == this.tokenAIndex;
              return;
            }
          });
        }
        console.log('this.tokenPathSelected', this.tokenPathSelected);
      },
      async checkPairAvailability() {
        if (this.tokenPathSelected.length > 0) {
            this.pairAddr = await this.contractFactory.methods.getPair(this.tokenA.address, this.tokenB.address).call();
            if (this.pairAddr == '0x0000000000000000000000000000000000000000') {
              alert('Current token pair is not supported.');
              return false;
            }
            console.log(`pairAddr = ${this.pairAddr}`);
            this.pairContract = new this.web3.eth.Contract(
                abiTokenDefender,
                this.pairAddr
            );
            return true;
        }
      },
      async computeTokenAmount() {
        if (this.tokenPathSelected.length > 0 && this.amountA > 0) {
          let amountA = toFixed(parseFloat(this.amountA) * Math.pow(10, this.tokenA.decimals)) + '';
          if (this.oppositeOrder === false) {
            let amountsOut = await this.contractRouter.methods.getAmountsOut(amountA, this.tokenPathSelected).call();
            this.amountB = (amountsOut[amountsOut.length - 1] * 1.0 / Math.pow(10, this.tokenB.decimals)).toFixed(this.displayDecimals);
          } else {
            let amountsIn = await this.contractRouter.methods.getAmountsIn(amountA, this.tokenPathSelected).call();
            this.amountB = (amountsIn[0] * 1.0 / Math.pow(10, this.tokenB.decimals)).toFixed(this.displayDecimals);
          }
          
          console.log('tokenB amount', this.amountB)
        }
      },
      async handleTokenChange(item, index){
        // console.log(`AAA this.tokenIndex = ${this.tokenIndex}, index = ${index}`);
        if (this.tokenIndex== 1 && index === this.tokenBIndex || this.tokenIndex == 2 && index === this.tokenAIndex) {
          alert("Tokens cannot be the same. Please try again.")
          return;
        }

        if (this.tokenIndex == 1) {
          await this.getTokenBalance(item);
          await this.getTokenAllowance(item);
        }

        if(this.tokenIndex== 1){
          this.tokenA = item;
          this.tokenAIndex = index;
          this.needsApprove = (this.amountA > this.tokenAAllowance) ? true : false;
        }else{
          this.tokenB = item;
          this.tokenBIndex = index;
        }

        this.computeSwapPath();

        if (this.tokenPathSelected.length > 0 && this.amountA > 0) {
          this.needsApprove = await this.checkPairAvailability();
          await this.computeTokenAmount();
        }

        this.dialogVisibleToken = false;
      },
      async getTokenBalance(item) {
        if (item.address.length > 0) {
          let contract = item.contract;
          let balance = await contract.methods.balanceOf(this.user).call();
          if (this.tokenIndex == 1) {
            this.tokenABalance = Math.floor(balance / Math.pow(10, item.decimals));
            console.log(`TokenA balance = ${this.tokenABalance}`);
          } else {
            this.tokenBBalance = Math.floor(balance / Math.pow(10, item.decimals));
            console.log(`TokenB balance = ${this.tokenBBalance}`);
          }
          
        } else {
          alert("The currently selected token is not supported.");
        }
      },
      async getTokenAllowance(item) {
        if (item.address.length > 0) {
          let contract = item.contract;
          let allowance = await contract.methods.allowance(this.user, this.contractRouter.options.address).call();
          allowance = allowance / Math.pow(10, item.decimals);
          console.log(`Allowance = ${allowance}`);
          if (this.tokenIndex == 1) {
            this.tokenAAllowance = allowance;
          } else {
            this.tokenBAllowance = allowance;
          }
        } else {
          alert("The currently selected token is not supported.");
        }
      },
      async handleAmountChange(index) {
        if (index == 1 && this.tokenPathSelected.length > 0 && this.amountA > 0) {
            this.needsApprove = await this.checkPairAvailability();
            this.needsApprove = (this.amountA > this.tokenAAllowance) ? true : false;
            
            await this.computeTokenAmount();
        } 
      },
      async approve() {
        if (this.contractRouter == null || this.contractRouter == undefined) {
          alert("Invalid contracts. Please contact the customer service.");
          return;
        }

        let amountA = toFixed(parseFloat(this.amountA) * Math.pow(10, this.tokenA.decimals)) + '';
        console.log('amountA', amountA)
        await this.tokenA.contract.methods.approve(this.contractRouter.options.address, amountA).send({ from: this.user });
        console.log(`this.user = ${this.user}, router = ${this.contractRouter.options.address}`);
        let allowanceTokenA = await this.tokenA.contract.methods.allowance(this.user, this.contractRouter.options.address).call();
        console.log(`Allowance of tokenA = ${allowanceTokenA}, address = ${this.contractRouter.options.address}`);

        this.needsApprove = false;
      },
      // async swap() {
      //   if (this.amountA > 0 && this.amountB > 0) {
      //     let timeNow = Math.floor(Date.now() / 1000);
      //     let expiry = 10 * 60;  // 10 mins
      //     let deadline = timeNow + expiry;

      //     let amountIn = this.amountA;
      //     let amountOutMin = Math.floor(this.amountB * (1.0 - this.swapSliding));
      //     let to = this.user;
          
      //     await this.contractRouter.methods.swapExactTokensForTokens(amountIn, amountOutMin, this.tokenPathSelected, to, deadline).send({ from: this.user });

      //     let balanceTokenA = await this.currentContracts.tokenA.methods.balanceOf(this.pairAddr).call();
      //     let balanceTokenB = await this.currentContracts.tokenB.methods.balanceOf(this.pairAddr).call();
          
      //     console.log(`balanceTokenA = ${balanceTokenA}, balanceTokenB = ${balanceTokenB}`);
      //   } else {
      //     alert("Please specify the amounts to swap.");
      //   }
      // },
      // handleConfirm() {  // 处理设置

      // }
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

.disableBtn{
    background: #E9EAEB !important;
    color: #C0C4C6 !important;
    margin-top: 20px;
  }
.changeBtn{
  font-size: 30px;
  color: #999;
  margin:20px;
  cursor: pointer;
}
.mt20{
  margin-top: 20px;
}
.biItem{
  display: flex;
  justify-content:space-between;
  align-items: center;
  span{
   font-size: 28px;
   color: #AA8929;
  }
  .biPic{
    margin-bottom: 20px;
    img{
      margin-right: 10px;
      width: 50px;
    }
  }
}
.swapTips{
  font-size: 28px;
  margin:50px 0;
  color: #AA8929;
}
.swapTxt{
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin:10px 0;
  span{
    font-size: 24px;
    color: #d7c799;
  }
}
.submittedIcon{
  font-size: 150px;
  display: block;
  margin:0 auto;
  text-align: center;
  color: #AA8929;
}
.waitingTxt{
  width: auto !important;
  text-align: center;
}
.watingTips{
  margin-top: 10px;
  font-size: 24px;
  color: #d7c799;
  text-align: center;
}
.submittedVisible{
  margin:0 auto;
  width: 280px;
  margin-top: 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  span{
    font-size: 24px;
    text-align: center;
    color: #AA8929;
    display: block;
    margin-right: 20px;
  }
}
.recentVisible{
  margin-top: 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  .flex{
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  span{
    font-size: 20px;
    text-align: center;
    color: #d7c799;
    display: block;
    margin-right: 20px;
  }
}
.tokenDialog{
  ::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px #A39282;
    background: #A39282;
  }
  ::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px #A39282;
    border-radius: 10px;
    background: #fff;
  }
}
.tokenInput{
  /deep/ .el-input__inner{
    border:1px solid #AA8929;
    padding:30px;
    border-radius: 20px;
    font-size: 20px;
  }
}
.tokenName{
  font-size: 24px;
  padding:20px 0;
  color: #AA8929;
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
    background-color: #A29181;
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
    color: #A29181;
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
    margin-right: 110px;
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
.mr20{
  margin-right: 20px;
}
.approveBtn{
  display: flex;
  justify-content:space-between;
  align-items: center;
  .swapBtn{
    background: #E7E8EA;
    color: #C8C9CB;
  }
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
    svg{
      margin:0!important;
      height:40px;
    }
}
.kUFaZj {
    width: 24px;
    height: 24px;
    box-shadow: rgba(0, 0, 0, 0.075) 0px 6px 10px;
    border-radius: 24px;
}
.UNrzd {
    color: #A29181;
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
    fill: #A29181;
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
    background-color: #A29181;
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
.dialog-footer{
  display: flex;
  align-items: center;
  justify-content:space-between;
}
.bgActive{
  background: #A29181 !important;
  color: #fff !important;
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
    padding: 0px 20px;
    transition: background-color 0.2s ease 0s;
    margin-right: 10px;
}
.active{
  background-color: #A29181;
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
.el-input-number /deep/ input {
  text-align: left;
  color:#333;
}
</style>

<template id="template_wallet">
    <!-- Connect to a wallet -->
    <el-dialog
      title="Connect to a wallet"
      :visible.sync="isVisible"
      width="30%" append-to-body>
      <ul>
        <li class="walletItem" v-for="(item,index) in walletList" :key="index" @click="handleWallect(item,index)">
          <span class="dpJqVk">{{item.name}}</span>
          <img width="32" height="32" :src="item.pic">
        </li>
      </ul>
    </el-dialog>
</template>

<script>
    import Vue from 'vue';
    import { ethers } from 'ethers';
    import WalletConnect from "@walletconnect/client";
    import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
    var ComponentWallet = Vue.component('ComponentWallet', {
        template: '#template_wallet',
        data() {
            return {
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
            }
        },
        props: {
            showModal: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            isVisible: {
                get: function() {
                    return this.showModal;
                },
                set: function(_showModal) {
                    this.$emit('hideModal');
                }
            }
        },
        created() {
            
        },
        methods: {
            async handleWallect(item,index){
                this.walletIndex = index;
                this.$emit('hideModal');
            }
        }
    })

    export default ComponentWallet;
</script>

<style scoped>
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
        height: 48px;
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
</style>
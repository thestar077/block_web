import Web3 from 'web3';
import axios from 'axios';
import myStorage from './myStorage';

const WEB3 = 'WEB3';
const WEB3_ACCOUNTS = 'WEB3_ACCOUNTS';
const WEB3_CONTRACT_TOKEN_EGG = 'WEB3_CONTRACT_TOKEN_EGG';
const WEB3_CONTRACT_TOKEN_DGG = 'WEB3_CONTRACT_TOKEN_DGG';
const WEB3_CONTRACT_TOKEN_DFD = 'WEB3_CONTRACT_TOKEN_DFD';
const WEB3_CONTRACT_DGG_SALE = 'WEB3_CONTRACT_DGG_SALE';
const WEB3_CONTRACT_RAND = 'WEB3_CONTRACT_RAND';
const NFT_ASSET = 'NFT_ASSET';
const NFT_BOUGHT = 'NFT_BOUGHT';

export default {
    state: {
        web3: '',
        address: {
            token: {
                egg: '0x0116686E2291dbd5e317F47faDBFb43B599786Ef',
                dfd: '0x9bAaB117304f7D6517048e371025dB8f89a8DbE5',
                dgg: '0x31A65C6d4EB07ad51E7afc890aC3b7bE84dF2Ead',
                usdc: '',
                weth: '',
            },
            rand: '0x2706A171ECb68E0038378D40Dd1d136361d0cB7d',
            dgg_sale: '0x10C246E3B657A9b091C0D20454F76506e23f4F87',
        },
        contracts: {
            token: {
                egg: '',
                dfd: '',
                dgg: '',
                usdc: '',
                weth: '',
            },
            rand: '',
            dgg_sale: '',
        },
        minter: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
        accounts: '',
        assets: [],
        nft_bought: [],
    },
    actions: {
        async getWeb3Account({ commit, dispatch }, walletName) {
            if (walletName !== 'WalletConnect') {
                if (window.ethereum) {
                    await window.ethereum.send('eth_requestAccounts');
                    let web3 = new Web3(window.ethereum);
                    commit('WEB3', web3);
                    let accounts = await web3.eth.getAccounts();
                    commit('WEB3_ACCOUNTS', accounts);
                    try {
                        // Request account access if needed
                        await ethereum.enable();
                        console.log('ethereum.enabled');
                    } catch (error) {
                        // User denied account access...
                        console.warn('ethereum.enable error', error);
                    }
                } else {
                    const provider = new WalletConnect({
                        bridge: this.state.url.web3.wallet_connect_bridge,
                    });
                    // Check if connection is already established
                    if (!provider.connected) {
                        console.log(provider);
                        // create new session
                        // await provider.createSession();
                        // const uri = this.provider.uri;
                        
                        // console.log("uri = " + uri);
                        provider.createSession().then(() => {
                            // get uri for QR Code modal
                            const uri = provider.uri;
                            console.log("uri = " + uri);
                            // display QR Code modal
                            WalletConnectQRCodeModal.open(uri, () => {
                                console.log("QR Code Modal closed");
                            });
                        });

                        // Subscribe to connection events
                        provider.on("connect", (error, payload) => {
                            if (error) {
                                throw error;
                            }

                            // Get provided accounts and chainId
                            const { accounts, chainId } = payload.params[0];
                        });

                        provider.on("session_update", (error, payload) => {
                            if (error) {
                                throw error;
                            }

                            // Get updated accounts and chainId
                            const { accounts, chainId } = payload.params[0];
                        });

                        provider.on("disconnect", (error, payload) => {
                            if (error) {
                                throw error;
                            }
                            // this.web3Store.update({ isConnected: false })
                        })
                    }
                }

                if (this.state.web3.web3) {
                    console.log('web3', this.state.web3.web3);
                    dispatch('getTokenEggContract');
                    dispatch('getTokenDggContract');
                    dispatch('getTokenDfdContract');
                    dispatch('getRandContract');
                    dispatch('getDggSaleContract');
                    console.log('egg contract', this.state.web3.contracts.token.egg);
                    console.log('dgg contract', this.state.web3.contracts.token.dgg);
                    console.log('dfd contract', this.state.web3.contracts.token.dfd);
                    console.log('rand contract', this.state.web3.contracts.rand);
                    console.log('dgg-sale contract', this.state.web3.contracts.dgg_sale);
                }
            }
        },
        getTokenEggContract({ commit }) {
            // console.log('this.state.abi.tokenEgg', this.state.abi.tokenEgg);
            // console.log('this.state.web3.address.token.egg', this.state.web3.address.token.egg);
            if (this.state.web3.web3) {
                let contractEggToken = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.tokenEgg),
                    this.state.web3.address.token.egg
                );
                commit('WEB3_CONTRACT_TOKEN_EGG', contractEggToken);
            } 
            
        },
        getTokenDggContract({ commit }) {
            if (this.state.web3.web3) {
                let contractDggToken = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.tokenDgg),
                    this.state.web3.address.token.dgg
                );
                commit('WEB3_CONTRACT_TOKEN_DGG', contractDggToken);
            } 
        },
        getTokenDfdContract({ commit }) {
            if (this.state.web3.web3) {
                let contractDfdToken = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.tokenDfd),
                    this.state.web3.address.token.dfd
                );
                commit('WEB3_CONTRACT_TOKEN_DFD', contractDfdToken);
            } 
        },
        getRandContract({ commit }) {
            if (this.state.web3.web3) {
                let contractRand = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.rand),
                    this.state.web3.address.rand
                );
                commit('WEB3_CONTRACT_RAND', contractRand);
            } 
        },
        getDggSaleContract({ commit }) {
            if (this.state.web3.web3) {
                let contractDggSale = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.dggSale),
                    this.state.web3.address.dgg_sale
                );
                commit('WEB3_CONTRACT_DGG_SALE', contractDggSale);
            } 
        },
        tradeNftToken({ commit }, data) {
            console.log('data', data);
            let url = this.state.url.api.base + this.state.url.api.nft.trade_token;
            axios({
                url: url,
                method: 'post',
                data
            }).then((data) => {
                if (data.status === 200) {
                    console.log('data', data.data);
                    commit('NFT_BOUGHT', data.data);
                }
            })
        },
    },
    mutations: {
        [WEB3](state, result) {
            state.web3 = result;
        },
        [WEB3_ACCOUNTS](state, result) {
            console.log('current web3 account', result);
            state.accounts = result;
        },
        [WEB3_CONTRACT_TOKEN_EGG](state, result) {
            state.contracts.token.egg = result;
        },
        [WEB3_CONTRACT_TOKEN_DGG](state, result) {
            state.contracts.token.dgg = result;
        },
        [WEB3_CONTRACT_TOKEN_DFD](state, result) {
            state.contracts.token.dfd = result;
        },
        [WEB3_CONTRACT_RAND](state, result) {
            state.contracts.rand = result;
        },
        [WEB3_CONTRACT_DGG_SALE](state, result) {
            state.contracts.dgg_sale = result;
        },
        [NFT_ASSET](state, result) {
            state.asset = result;
        },
        [NFT_BOUGHT](state, result) {
            state.nft_bought = result;
        },
    }
}
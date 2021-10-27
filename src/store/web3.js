import Web3 from 'web3';
import axios from 'axios';
import myStorage from './myStorage';

const WEB3 = 'WEB3';
const WEB3_ACCOUNTS = 'WEB3_ACCOUNTS';
const WEB3_CONTRACT_TOKEN_EGG = 'WEB3_CONTRACT_TOKEN_EGG';
const WEB3_CONTRACT_TOKEN_DGG = 'WEB3_CONTRACT_TOKEN_DGG';
const WEB3_CONTRACT_TOKEN_DFD = 'WEB3_CONTRACT_TOKEN_DFD';
const WEB3_CONTRACT_TOKEN_FTK1 = 'WEB3_CONTRACT_TOKEN_FTK1';
const WEB3_CONTRACT_TOKEN_FTK2 = 'WEB3_CONTRACT_TOKEN_FTK2';
const WEB3_CONTRACT_DGG_SALE = 'WEB3_CONTRACT_DGG_SALE';
const WEB3_CONTRACT_POOL_SINGLE = 'WEB3_CONTRACT_POOL_SINGLE';
const WEB3_CONTRACT_UNISWAP_FACTORY = 'WEB3_CONTRACT_UNISWAP_FACTORY';
const WEB3_CONTRACT_DEFENDER_ROUTER_V1 = 'WEB3_CONTRACT_DEFENDER_ROUTER_V1';
const WEB3_CONTRACT_RAND = 'WEB3_CONTRACT_RAND';
const NFT_ASSET = 'NFT_ASSET';
const NFT_BOUGHT = 'NFT_BOUGHT';

export default {
    state: {
        web3: '',
        address: {
            token: {
                egg: '0x6cf81809daf70601867A226c63359F264FC084E5',
                dfd: '0x2fe3b9Ad0D10ba98dF1862897A6902bcD10f4dC0',
                dgg: '0xE2f9DF720A9dafe74f15d271269B43fDC32e0d53',
                usdt: '0x3871d88C340EdB964A026278910bc52e93600e87',
                usdc: '0xC05826f074e39044f134D648F1b08286Eb451846',
                weth: '0x654Ca1BBb6057714A2efda8834E504c65e9812f7',
                ftk1: '0x05183B86125C3D4BE96E5C702cc333a2f4b67B2E',
                ftk2: '0x8B4101e76CcEA9d3936b036d73749F4D5ab8Ecd1',
            },
            rand: '0xBc45cA09c3d00a9bA25eB08b70849Db43A76BE03',
            dgg_sale: '0xFFe63f7AeC1E895A182821885a6852735ED1E50F',
            pool_single: '0x2586bA9AedCa16E7e25AaD304A1d87Bd588e18D2',
            uniswap_factory: '0xfE3b47E38E3d1DD3295ab7E40371342a15Ea6d7f',
            router_v1: '0x12FAa8F16e4EB106D2b8d63Ad91ECd152e093812',
        },
        contracts: {
            token: {
                egg: '',
                dfd: '',
                dgg: '',
                usdt: '',
                usdc: '',
                weth: '',
            },
            rand: '',
            dgg_sale: '',
            pool_single: '',
            uniswap_factory: '',
            router_v1: '',
        },
        tokens: [
            {
                symbol: 'UNI',
                pic:require('@/assets/picture/bi/1.png'),
                name:'Uniswap (UNI)',
            },
            {
                symbol: 'USDT',
                pic:require('@/assets/picture/bi/2.png'),
                name:'Tether USD (USDT)',
            },
            {
                symbol: 'USDC',
                pic:require('@/assets/picture/bi/3.png'),
                name:'USD Coin (USDC)',
            },
            {
                symbol: 'WBTC',
                pic:require('@/assets/picture/bi/4.png'),
                name:'Wrapped BTC (WBTC)',
            },
            {
                symbol: 'LINK',
                pic:require('@/assets/picture/bi/5.png'),
                name:'ChainLink Token (LINK)',
            },
            {
                symbol: 'GRT',
                pic:require('@/assets/picture/bi/6.png'),
                name:'Graph Token (GRT)',
            },
            {
                symbol: 'SUSHI',
                pic:require('@/assets/picture/bi/7.png'),
                name:'SushiToken (SUSHI)',
            },
            {
                symbol: 'COMP',
                pic:require('@/assets/picture/bi/8.png'),
                name:'Compound (COMP)',
            },
            {
                symbol: 'MIM',
                pic:require('@/assets/picture/bi/9.png'),
                name:'Magic Internet Money (MIM)',
            },
            {
                symbol: 'YFI',
                pic:require('@/assets/picture/bi/10.png'),
                name:'yearn.finance (YFI)',
            },
            {
                symbol: 'CRV',
                pic:require('@/assets/picture/bi/11.png'),
                name:'Curve DAO Token (CRV)',
            },
            {
                symbol: 'CELR',
                pic:require('@/assets/picture/bi/12.png'),
                name:'CelerToken (CELR)',
            },
            {
                symbol: 'GNO',
                pic:require('@/assets/picture/bi/13.png'),
                name:'Gnosis Token (GNO)',
            },
            {
                symbol: 'RGT',
                pic:require('@/assets/picture/bi/14.png'),
                name:'Rari Governance Token (RGT)',
            },
            {
                symbol: 'BADGER',
                pic:require('@/assets/picture/bi/15.png'),
                name:'Badger (BADGER)',
            },
            {
                symbol: 'DODO',
                pic:require('@/assets/picture/bi/16.png'),
                name:'DODO bird (DODO)',
            },
            {
                symbol: 'BAL',
                pic:require('@/assets/picture/bi/17.png'),
                name:'Balancer (BAL)',
            },
            {
                symbol: 'sUSD',
                pic:require('@/assets/picture/bi/18.png'),
                name:'Synth sUSD (sUSD)',
            },
            {
                symbol: 'MATH',
                pic:require('@/assets/picture/bi/19.png'),
                name:'MATH Token (MATH)',
            },
            {
                symbol: 'CREAM',
                pic:require('@/assets/picture/bi/20.png'),
                name:'Cream (CREAM)',
            },
            {
                symbol: 'MCB',
                pic:require('@/assets/picture/bi/21.png'),
                name:'MCDEX Token (MCB)',
            },
            {
                symbol: 'SDT',
                pic:require('@/assets/picture/bi/22.png'),
                name:'Stake DAO Token (SDT)',
            },
            {
                symbol: 'DF',
                pic:require('@/assets/picture/bi/23.png'),
                name:'dForce (DF)',
            },
            {
                symbol: 'CAP',
                pic:require('@/assets/picture/bi/24.png'),
                name:'Cap (CAP)',
            },
            {
                symbol: 'FUSE',
                pic:require('@/assets/picture/bi/25.png'),
                name:'Fuse Token (FUSE)',
            },
            {
                symbol: 'ALCH',
                pic:require('@/assets/picture/bi/26.png'),
                name:'Alchemy (ALCH)',
            },
            {
                symbol: 'WETH',
                pic:require('@/assets/picture/bi/27.png'),
                name:'Wrapped Ether (WETH)',
            },
            {
                symbol: 'NYAN',
                pic:require('@/assets/picture/bi/28.png'),
                name:'ArbiNYAN (NYAN)',
            },
            {
                symbol: 'EUX',
                pic:require('@/assets/picture/bi/29.png'),
                name:'dForce EUR (EUX)',
            },
            {
                symbol: 'USX',
                pic:require('@/assets/picture/bi/30.png'),
                name:'dForce USD (USX)',
            },
            {
                symbol: 'DXD',
                pic:require('@/assets/picture/bi/31.png'),
                name:'DXdao (DXD)',
            },
            {
                symbol: 'WOO',
                pic:require('@/assets/picture/bi/32.png'),
                name:'Wootrade Network (WOO)',
            },
        ],
        minter: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
        accounts: '',
        assets: [],
        liquidiy: [],
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
                    dispatch('getTokenFTK1Contract');
                    dispatch('getTokenFTK2Contract');
                    dispatch('getRandContract');
                    dispatch('getDggSaleContract');
                    dispatch('getPoolSingleContract');
                    dispatch('getUniswapFactoryContract');
                    dispatch('getDefenderRouterV1Contract');
                    dispatch('getMyNftAssets', this.state.web3.accounts[0]);
                    console.log('egg contract', this.state.web3.contracts.token.egg.options.address);
                    console.log('dgg contract', this.state.web3.contracts.token.dgg.options.address);
                    console.log('dfd contract', this.state.web3.contracts.token.dfd.options.address);
                    console.log('ftk1 contract', this.state.web3.contracts.token.ftk1.options.address);
                    console.log('ftk2 contract', this.state.web3.contracts.token.ftk2.options.address);
                    console.log('rand contract', this.state.web3.contracts.rand.options.address);
                    console.log('dgg-sale contract', this.state.web3.contracts.dgg_sale.options.address);
                    console.log('pool-single contract', this.state.web3.contracts.pool_single.options.address);
                    console.log('uniswap-factory contract', this.state.web3.contracts.uniswap_factory.options.address);
                    console.log('router-v1 contract', this.state.web3.contracts.router_v1.options.address);
                }
            }
        },
        getTokenEggContract({ commit }) {
            // console.log('this.state.abi.tokenEgg', this.state.abi.tokenEgg);
            // console.log('this.state.web3.address.token.egg', this.state.web3.address.token.egg);
            if (this.state.web3.web3) {
                let contractEggToken = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.token_egg),
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
                    JSON.parse(this.state.abi.token_dfd),
                    this.state.web3.address.token.dfd
                );
                commit('WEB3_CONTRACT_TOKEN_DFD', contractDfdToken);
            } 
        },
        getTokenFTK1Contract({ commit }) {
            if (this.state.web3.web3) {
                let contractFtk1 = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.token_mock),
                    this.state.web3.address.ftk1
                );
                commit('WEB3_CONTRACT_TOKEN_FTK1', contractFtk1);
            } 
        },
        getTokenFTK2Contract({ commit }) {
            if (this.state.web3.web3) {
                let contractFtk2 = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.token_mock),
                    this.state.web3.address.ftk2
                );
                commit('WEB3_CONTRACT_TOKEN_FTK2', contractFtk2);
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
                    JSON.parse(this.state.abi.dgg_sale),
                    this.state.web3.address.dgg_sale
                );
                commit('WEB3_CONTRACT_DGG_SALE', contractDggSale);
            } 
        },
        getPoolSingleContract({ commit }) {
            if (this.state.web3.web3) {
                let contractPoolSingle = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.pool_single),
                    this.state.web3.address.pool_single
                );
                commit('WEB3_CONTRACT_POOL_SINGLE', contractPoolSingle);
            } 
        },
        getUniswapFactoryContract({ commit }) {
            if (this.state.web3.web3) {
                let contractUniswapFactory = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.uniswap_factory),
                    this.state.web3.address.uniswap_factory
                );
                commit('WEB3_CONTRACT_UNISWAP_FACTORY', contractUniswapFactory);
            } 
        },
        getDefenderRouterV1Contract({ commit }) {
            if (this.state.web3.web3) {
                let contractDefenderRouterV1 = new this.state.web3.web3.eth.Contract(
                    JSON.parse(this.state.abi.router_v1),
                    this.state.web3.address.router_v1
                );
                commit('WEB3_CONTRACT_DEFENDER_ROUTER_V1', contractDefenderRouterV1);
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
        addLiquidity({ commit }, data) {

        }
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
        [WEB3_CONTRACT_TOKEN_FTK1](state, result) {
            state.contracts.token.ftk1 = result;
        },
        [WEB3_CONTRACT_TOKEN_FTK2](state, result) {
            state.contracts.token.ftk2 = result;
        },
        [WEB3_CONTRACT_RAND](state, result) {
            state.contracts.rand = result;
        },
        [WEB3_CONTRACT_DGG_SALE](state, result) {
            state.contracts.dgg_sale = result;
        },
        [WEB3_CONTRACT_POOL_SINGLE](state, result) {
            state.contracts.pool_single = result;
        },
        [WEB3_CONTRACT_UNISWAP_FACTORY](state, result) {
            state.contracts.uniswap_factory = result;
        },
        [WEB3_CONTRACT_DEFENDER_ROUTER_V1](state, result) {
            state.contracts.router_v1 = result;
        },
        [NFT_ASSET](state, result) {
            state.asset = result;
        },
        [NFT_BOUGHT](state, result) {
            state.nft_bought = result;
        },
    }
}
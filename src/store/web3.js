import Web3 from 'web3';
import axios from 'axios';
import myStorage from './myStorage';
import abiTokenDefender from '../assets/abi/DefenderToken.json';
import abiTokenMock from '../assets/abi/ERC20Mock.json';
import abiTokenDgg from '../assets/abi/DggToken.json';
import abiDggSale from '../assets/abi/DggSale.json';
import abiRand from '../assets/abi/RandOracle.json';
import abiUniswapPair from '../assets/abi/UniswapV2Pair.json';
import abiUniswapFactory from '../assets/abi/UniswapV2Factory.json';
import abiRouter from '../assets/abi/DefenderRouterV1.json';
import abiWeth from '../assets/abi/WETH.json';
import abiPoolSingle from '../assets/abi/PoolSingle.json';
import {toFixed} from '../utils/math.js';

const WEB3 = 'WEB3';
const WEB3_ACCOUNTS = 'WEB3_ACCOUNTS';
const WEB3_BLOCK_LATEST = 'WEB3_BLOCK_LATEST';
const WEB3_CONTRACT_TOKEN_EGG = 'WEB3_CONTRACT_TOKEN_EGG';
const WEB3_CONTRACT_TOKEN_DGG = 'WEB3_CONTRACT_TOKEN_DGG';
const WEB3_CONTRACT_TOKEN_DFD = 'WEB3_CONTRACT_TOKEN_DFD';
const WEB3_CONTRACT_TOKEN_USDT = 'WEB3_CONTRACT_TOKEN_USDT';
const WEB3_CONTRACT_TOKEN_USDC = 'WEB3_CONTRACT_TOKEN_USDC';
const WEB3_CONTRACT_TOKEN_FTK1 = 'WEB3_CONTRACT_TOKEN_FTK1';
const WEB3_CONTRACT_TOKEN_FTK2 = 'WEB3_CONTRACT_TOKEN_FTK2';
const WEB3_CONTRACT_TOKEN_PAIR = 'WEB3_CONTRACT_TOKEN_PAIR';
const WEB3_CONTRACT_TOKENS = 'WEB3_CONTRACT_TOKENS';
const WEB3_CONTRACT_DGG_SALE = 'WEB3_CONTRACT_DGG_SALE';
const WEB3_CONTRACT_POOL_SINGLE = 'WEB3_CONTRACT_POOL_SINGLE';
const WEB3_CONTRACT_UNISWAP_FACTORY = 'WEB3_CONTRACT_UNISWAP_FACTORY';
const WEB3_CONTRACT_DEFENDER_ROUTER_V1 = 'WEB3_CONTRACT_DEFENDER_ROUTER_V1';
const WEB3_CONTRACT_RAND = 'WEB3_CONTRACT_RAND';
const WEB3_SWAP_PATHS = 'WEB3_SWAP_PATHS';
const NFT_ASSET = 'NFT_ASSET';
const NFT_BOUGHT = 'NFT_BOUGHT';
const GET_LIQUIDITIES = 'GET_LIQUIDITIES';

export default {
    state: {
        web3: null,
        block: 0,
        address: {
            token: {
                // hardhat
                // egg: '0x7DA94E64EC71c62C6B1cF1965b4D8612DEBb4302',
                // dfd: '0xe7442F7cBbcec4265f0BbfF44089b2A9f8790EAE',
                // dgg: '0x0f79bB3457B69c27A75d14df9B16981bc5Df6f89',
                // usdt: '0x25f8c8dA03832Cbb33dd3ec46844ff3461e80aA2',
                // usdc: '0x780EE399b0F92ac4a576eeEF7eF55C69274a6E21',
                // weth: '0x516D6aB08d0E0c9A9F4FE3aF145F4b2Aa6864E04',
                // ftk1: '0x2aEecC8D4348F5b97F78E4C9F475686e3796375b',
                // ftk2: '0x8D2E189563b72Fb4ca635FB4A9d7BC99D8dE30a8',

                // ropsten
                egg: '0xf23e92af556CD1B0b230E8A84f387eb176B963B0',
                dfd: '0xd965D775566af9525d203e7ce282aD8db1fF4d1E',
                dgg: '0xCfeC85b12CbED5c41A25D60a202180a840bc52E1',
                usdt: '0x41d1FAA3d8907630becfBa1FD3E1C9C05501dC6d',
                usdc: '0x0057D32490cD1Edd1A5ad9c3b8Faa0c8ee844D68',
                weth: '0x3027902858A27cAE1Fbe351226ce72120df8497B',
                ftk1: '0xC7A0E701E7103A0DABCd37fc38EE689aEb16ea5d',
                ftk2: '0xbf538478a2b44803c4dF534b5CdA663B228749Aa',
            },
            // hardhat
            // rand: '0xa1Ef3B40EdcaA908159040058c3aE4302939830a',
            // dgg_sale: '0x2ff67F2688CA2E905b36fBf12084827B3dac5775',
            // pool_single: '0x80F43505d8d1A739504eB4237Eb15b2e0048Da8d',
            // uniswap_factory: '0x6B5de326A47c4D62A86e94d073F5b1EA5987bA2E',
            // router_v1: '0xdfE223DA9b7B97F490d0905a72F907E73C4B89a1',

            // ropsten
            rand: '0x8376113643805F4F8f7b92670c95F97D48195A9d',
            dgg_sale: '0x592ac6877626E6085aC7EaA6a38Ff7D43e9e61d4',
            pool_single: '0x80F43505d8d1A739504eB4237Eb15b2e0048Da8d',
            uniswap_factory: '0xd7D50e6615ccc154d153723c7973ffD23bd09880',
            router_v1: '0xD35E5D07c8d972b433c86dFFE4428761bB79fC40',
        },
        contracts: {
            token: {
                egg: '',
                dfd: '',
                dgg: '',
                usdt: '',
                usdc: '',
                weth: '',
                pair: '',
            },
            rand: '',
            dgg_sale: '',
            pool_single: '',
            uniswap_factory: '',
            router_v1: '',
        },
        tokens: [
            {
                symbol: 'FTK1',
                pic:require('@/assets/picture/bi/32.png'),
                name: 'Fake Token 1',
                // address: '0x2aEecC8D4348F5b97F78E4C9F475686e3796375b',  // Hardhat
                address: '0xC7A0E701E7103A0DABCd37fc38EE689aEb16ea5d',  // Ropsten
                contract: {},
                decimals: 18,
                index: 0,
                inA: true,
                inB: false,
                tokensA: [],
                tokensB: [1,2,3,7],   // FTK1/FTK2
            },
            {
                symbol: 'FTK2',
                pic:require('@/assets/picture/bi/31.png'),
                name: 'Fake Token 2',
                // address: '0x8D2E189563b72Fb4ca635FB4A9d7BC99D8dE30a8',  // Hardhat
                address: '0xbf538478a2b44803c4dF534b5CdA663B228749Aa',  // Ropsten
                contract: {},
                decimals: 18,
                index: 1,
                inA: true,
                inB: true,
                tokensA: [0],   // FTK1/FTK2
                tokensB: [2,3,7],
            },
            {
                symbol: 'USDT',
                pic:require('@/assets/picture/bi/2.png'),
                name:'Tether USD (USDT)',
                // address: '0x25f8c8dA03832Cbb33dd3ec46844ff3461e80aA2',  // Hardhat
                address: '0x41d1FAA3d8907630becfBa1FD3E1C9C05501dC6d',  // Ropsten
                contract: {},
                decimals: 18,
                index: 2,
                inA: true,
                inB: true,
                tokensA: [5,7],  // LINK/USDT, WETH/USDT
                tokensB: [4],   // USDT/WBTC
            },
            {
                symbol: 'USDC',
                pic:require('@/assets/picture/bi/3.png'),
                name:'USD Coin (USDC)',
                // address: '0x780EE399b0F92ac4a576eeEF7eF55C69274a6E21',  // Hardhat
                address: '0x0057D32490cD1Edd1A5ad9c3b8Faa0c8ee844D68',  // Ropsten
                contract: {},
                decimals: 18,
                index: 3,
                inA: true,
                inB: true,
                tokensA: [7],   // WETH/USDC
                tokensB: [5],   // USDC/LINK
            },
            {
                symbol: 'WBTC',
                pic:require('@/assets/picture/bi/4.png'),
                name:'Wrapped BTC (WBTC)',
                address: '',
                contract: {},
                decimals: 18,
                index: 4,
                inA: true,
                inB: true,
                tokensA: [2],   // USDT/WBTC
                tokensB: [7],   // WBTC/WETH
            },
            {
                symbol: 'LINK',
                pic:require('@/assets/picture/bi/5.png'),
                name:'ChainLink Token (LINK)',
                address: '',
                contract: {},
                decimals: 18,
                index: 5,
                inA: true,
                inB: true,
                tokensA: [3,7], // USDC/LINK, WETH/LINK
                tokensB: [2],   // LINK/USDT
            },
            {
                symbol: 'SUSHI',
                pic:require('@/assets/picture/bi/7.png'),
                name:'SushiToken (SUSHI)',
                address: '',
                contract: {},
                decimals: 18,
                index: 6,
                inA: false,
                inB: true,
                tokensA: [7],   // WETH/SUSHI
                tokensB: [],
            },
            {
                symbol: 'WETH',
                pic:require('@/assets/picture/bi/27.png'),
                name:'Wrapped Ether (WETH)',
                // address: '0x516D6aB08d0E0c9A9F4FE3aF145F4b2Aa6864E04',  // hardhat
                address: '0x3027902858A27cAE1Fbe351226ce72120df8497B',  // ropsten
                contract: {},
                decimals: 18,
                index: 7,
                inA: false,
                inB: true,
                tokensA: [0,1,2,3,4,5,6,8,9], //  WBTC/WETH, SPELL/WETH,// WETH/USDT, WETH/LINK, WETH/MIM, WETH/USDC, WETH/SUSHI
                tokensB: [], 
            },
            {
                symbol: 'MIM',
                pic:require('@/assets/picture/bi/9.png'),
                name:'Magic Internet Money (MIM)',
                address: '',
                contract: {},
                decimals: 18,
                index: 8,
                inA: false,
                inB: true,
                tokensA: [7],   // WETH/MIM
                tokensB: [],
            },
            {
                symbol: 'SPELL',
                pic:require('@/assets/picture/bi/33.jpg'),
                name:'SPELL Token (SPELL)',
                address: '',
                contract: {},
                decimals: 18,
                index: 9,
                inA: true,
                inB: false,
                tokensA: [],   // SPELL/WETH
                tokensB: [7],
            },
            {
                symbol: 'EGG',
                pic:require('@/assets/picture/bi/31.png'),
                name:'Dragon Egg Token (EGG)',
                // address: '0x7DA94E64EC71c62C6B1cF1965b4D8612DEBb4302',  // hardhat
                address: '0xf23e92af556CD1B0b230E8A84f387eb176B963B0',  // ropsten
                contract: {},
                decimals: 18,
                index: 10,
                inA: true,
                inB: false,
                tokensA: [],   // EGG/USDC
                tokensB: [3],
            },
        ],
        nests: [
            {
                name:'DFD',
                num:0,
                stake:'DFD',
                deposit:'DFD',
                pic:require('@/assets/picture/egg/1.jpg'),
                noFree:true,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '0x9bAaB117304f7D6517048e371025dB8f89a8DbE5',
                isStaked:false,
            },
            {
                name:'EGG',
                num:0,
                stake:'EGG',
                deposit:'EGG',
                pic:require('@/assets/picture/egg/2.jpg'),
                noFree:true,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '0x0116686E2291dbd5e317F47faDBFb43B599786Ef',
                isStaked:false,
            },
            {
            name:'ETH',
                num:20,
                stake:'ETH',
                deposit:'ETH',
                pic:require('@/assets/picture/egg/3.jpg'),
                noFree:true,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '',
                isStaked:false,
            },
            {
                name:'USDC',
                num:'60',
                stake:'USDC',
                deposit:'USDC',
                pic:require('@/assets/picture/egg/4.jpg'),
                noFree:false,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '',
                isStaked:false,
            },
            {
                name:'ETH-USDC LP',
                num:'50',
                stake:'ETH-USDC LP',
                deposit:'ETH-USDC LP',
                pic:require('@/assets/picture/egg/5.jpg'),
                noFree:false,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '',
                isStaked:false,
            },
            {
                name:'ETH-DFD LP',
                num:'25',
                stake:'ETH-DFD LP',
                deposit:'ETH-DFD LP',
                pic:require('@/assets/picture/egg/6.jpg'),
                noFree:false,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '',
                isStaked:false,
            },
            {
                name:'ETH-EGG LP',
                num:'10',
                stake:'ETH-EGG LP',
                deposit:'ETH-EGG LP',
                pic:require('@/assets/picture/egg/7.jpg'),
                noFree:false,
                showDetail:false,
                amount: 0,
                approved: false,
                address: '',
                isStaked:false,
            }
        ],
        swap: {
            paths: [
                [0, 1], // FTK1 -> FTK2
                [0, 7], // FTK1 -> WETH
                [7, 1], // WETH -> FTK2
                [10, 3], // EGG -> USDC
            ],
        },
        minter: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
        accounts: '',
        assets: [],
        liquidities: [],
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
                    let block = await web3.eth.getBlock("latest");
                    commit('WEB3_BLOCK_LATEST', block);
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
                    dispatch('getTokenContracts');
                    dispatch('getRandContract');
                    dispatch('getDggSaleContract');
                    // dispatch('getPoolSingleContract');
                    dispatch('getUniswapFactoryContract');
                    dispatch('getDefenderRouterV1Contract');
                    // dispatch('getMyNftAssets', this.state.web3.accounts[0]);
                    dispatch('getMyTransactions', this.state.web3.accounts[0]);
                    console.log('egg contract', this.state.web3.contracts.token.egg.options.address);
                    console.log('dgg contract', this.state.web3.contracts.token.dgg.options.address);
                    console.log('dfd contract', this.state.web3.contracts.token.dfd.options.address);
                    // console.log('ftk1 contract', this.state.web3.contracts.token.ftk1.options.address);
                    // console.log('ftk2 contract', this.state.web3.contracts.token.ftk2.options.address);
                    console.log('usdt contract', this.state.web3.contracts.token.usdt.options.address);
                    console.log('usdc contract', this.state.web3.contracts.token.usdc.options.address);
                    this.state.web3.tokens.forEach((token) => {
                        if (token.address.length > 0) {
                            console.log(`${token.symbol} contract: ${token.contract.options.address}`);
                        }
                    });
                    // console.log('rand contract', this.state.web3.contracts.rand.options.address);
                    // console.log('dgg-sale contract', this.state.web3.contracts.dgg_sale.options.address);
                    // console.log('pool-single contract', this.state.web3.contracts.pool_single.options.address);
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
                    abiTokenDefender,
                    this.state.web3.address.token.egg
                );
                commit('WEB3_CONTRACT_TOKEN_EGG', contractEggToken);
            } 
            
        },
        getTokenDggContract({ commit }) {
            if (this.state.web3.web3) {
                let contractDggToken = new this.state.web3.web3.eth.Contract(
                    abiTokenDgg,
                    this.state.web3.address.token.dgg
                );
                commit('WEB3_CONTRACT_TOKEN_DGG', contractDggToken);
            } 
        },
        getTokenDfdContract({ commit }) {
            if (this.state.web3.web3) {
                let contractDfdToken = new this.state.web3.web3.eth.Contract(
                    abiTokenDefender,
                    this.state.web3.address.token.dfd
                );
                commit('WEB3_CONTRACT_TOKEN_DFD', contractDfdToken);
            } 
        },
        async getTokenContracts({ commit }) {
            if (this.state.web3.web3) {
                let contractUsdtToken = new this.state.web3.web3.eth.Contract(
                    abiTokenDefender,
                    this.state.web3.address.token.usdt
                );
                commit('WEB3_CONTRACT_TOKEN_USDT', contractUsdtToken);

                let contractUsdcToken = new this.state.web3.web3.eth.Contract(
                    abiTokenDefender,
                    this.state.web3.address.token.usdc
                );
                commit('WEB3_CONTRACT_TOKEN_USDC', contractUsdcToken);

                let tokens = this.state.web3.tokens;
                tokens.forEach(async (token) => {
                    if (token.address.length > 0) {
                        token.contract = new this.state.web3.web3.eth.Contract(
                            abiTokenDefender,
                            token.address,
                        );
                        if (token.symbol === 'USDC') {
                            console.log('token.contract', token.contract.options.address);
                        }

                        let decimals = await token.contract.methods.decimals().call();
                        token.decimals = parseInt(decimals);
                    }
                });
                
                commit('WEB3_CONTRACT_TOKENS', tokens);
            } 
        },
        getTokenUniswapPairContract({ commit }, address) {
            if (this.state.web3.web3) {
                let contractPair = new this.state.web3.web3.eth.Contract(
                    abiUniswapPair,
                    address
                );
                commit('WEB3_CONTRACT_TOKEN_PAIR', contractPair);
            } 
        },
        getRandContract({ commit }) {
            if (this.state.web3.web3) {
                let contractRand = new this.state.web3.web3.eth.Contract(
                    abiRand,
                    this.state.web3.address.rand
                );
                commit('WEB3_CONTRACT_RAND', contractRand);
            } 
        },
        getDggSaleContract({ commit }) {
            if (this.state.web3.web3) {
                let contractDggSale = new this.state.web3.web3.eth.Contract(
                    abiDggSale,
                    this.state.web3.address.dgg_sale
                );
                commit('WEB3_CONTRACT_DGG_SALE', contractDggSale);
            } 
        },
        getPoolSingleContract({ commit }) {
            if (this.state.web3.web3) {
                let contractPoolSingle = new this.state.web3.web3.eth.Contract(
                    abiPoolSingle,
                    this.state.web3.address.pool_single
                );
                commit('WEB3_CONTRACT_POOL_SINGLE', contractPoolSingle);
            } 
        },
        getUniswapFactoryContract({ commit }) {
            if (this.state.web3.web3) {
                let contractUniswapFactory = new this.state.web3.web3.eth.Contract(
                    abiUniswapFactory,
                    this.state.web3.address.uniswap_factory
                );
                commit('WEB3_CONTRACT_UNISWAP_FACTORY', contractUniswapFactory);
            } 
        },
        getDefenderRouterV1Contract({ commit }) {
            if (this.state.web3.web3) {
                let contractDefenderRouterV1 = new this.state.web3.web3.eth.Contract(
                    abiRouter,
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
        async getMyLiquidities({ commit }) {
            let liquidities = [];
            let transactions = this.state.baseData.transactions;
            let contractRouter = this.state.web3.contracts.router_v1;
            let defaultContractDecimals = this.state.baseData.consts.contract_decimals;
            let displayDecimals = this.state.baseData.consts.display_decimals;
            let tokenList = this.state.web3.tokens;
            let swapPaths = this.state.web3.swap.paths;
            if (transactions.length > 0 && this.state.web3.contracts) {
                for (let i = 0; i < transactions.length; i++) {
                    let transaction = transactions[i];
                    if (transaction.category == 0) {    // Add Liquidity
                        let exists = false;
                        liquidities.forEach((liquidity) => {
                            if (liquidity.tokenA.symbol === transaction.data.tokenA && liquidity.tokenB.symbol === transaction.data.tokenB) {
                                liquidity.amountA = (parseFloat(liquidity.amountA) + parseFloat(transaction.data.amountA) / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals);
                                liquidity.amountB = (parseFloat(liquidity.amountB) + parseFloat(transaction.data.amountB) / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals);
                                liquidity.liquidity = (parseFloat(liquidity.liquidity) + (transaction.data.amountPair / Math.pow(10, defaultContractDecimals))).toFixed(displayDecimals);
                                exists = true;
                                return;
                            }
                        });
                        if (!exists) {
                            let tokenA = null;
                            let tokenB = null;
                            tokenList.forEach((token) => {
                                if (transaction.data.tokenA == token.symbol) {
                                tokenA = token;
                                }
                
                                if (transaction.data.tokenB == token.symbol) {
                                tokenB = token;
                                }
                            })
                            let newLiquidity = {
                                tokenA: tokenA,
                                tokenB: tokenB,
                                amountA: (transaction.data.amountA / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals),
                                amountB: (transaction.data.amountB / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals),
                                liquidity: (transaction.data.amountPair / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals),
                                supplies: 0,
                                priceAB: 0,
                                priceBA: 0,
                            };
                            console.log('newLiquidity', newLiquidity);
                            liquidities.push(newLiquidity);
                        }
                    }
                }

                for (let i = 0; i < transactions.length; i++) {
                    let transaction = transactions[i];
                    if (transaction.category == 1) {   // Remove liquidity
                        liquidities.forEach((liquidity) => {
                            if (liquidity.tokenA.symbol === transaction.data.tokenA && liquidity.tokenB.symbol === transaction.data.tokenB) {
                                liquidity.amountA = (parseFloat(liquidity.amountA) - parseFloat(transaction.data.amountA) / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals);
                                liquidity.amountB = (parseFloat(liquidity.amountB) - parseFloat(transaction.data.amountB) / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals);
                                liquidity.liquidity = (parseFloat(liquidity.liquidity) - (transaction.data.amountPair / Math.pow(10, defaultContractDecimals))).toFixed(displayDecimals);
                                return;
                            }
                        });
                    }
                }

                // Prepare swap paths
                for (let i = 0; i < liquidities.length; i++) {
                    
                    let supplies = await contractRouter.methods.getSupplies(liquidities[i].tokenA.address, liquidities[i].tokenB.address).call();
                    console.log('********** supplies', supplies);
                    if (supplies == 0) {
                    supplies = await contractRouter.methods.getSupplies(liquidities[i].tokenB.address, liquidities[i].tokenA.address).call();
                    }
        
                    liquidities[i].supplies = (supplies / Math.pow(10, defaultContractDecimals)).toFixed(displayDecimals);


                    let liquidity = liquidities[i];
                    // console.log('liquidity', liquidity);
                    // let amountA = toFixed(liquidity.amountA * Math.pow(10, liquidity.tokenA.decimals)) + '';
                    // let amountsOut = await contractRouter.methods.getAmountsOut(amountA, [liquidity.tokenA.address, liquidity.tokenB.address]).call();
                    // console.log('BBBBBBBB amountsOut', amountsOut)
                    // let priceAB = (amountsOut[amountsOut.length - 1] * 1.0 / amountsOut[0]);
                    // let priceBA = 1.0 / priceAB;
                    let priceAB = liquidity.amountB / liquidity.amountA;
                    let priceBA = 1.0 / priceAB;
                    liquidities[i].priceAB = priceAB.toFixed(displayDecimals);
                    liquidities[i].priceBA = priceBA.toFixed(displayDecimals);
                    
                }
    
                commit('GET_LIQUIDITIES', liquidities);
            }
    
            console.log('liquidities', liquidities);
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
        [WEB3_BLOCK_LATEST](state, result) {
            state.block = result;
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
        [WEB3_CONTRACT_TOKEN_USDT](state, result) {
            state.contracts.token.usdt = result;
        },
        [WEB3_CONTRACT_TOKEN_USDC](state, result) {
            state.contracts.token.usdc = result;
        },
        [WEB3_CONTRACT_TOKEN_FTK1](state, result) {
            state.contracts.token.ftk1 = result;
        },
        [WEB3_CONTRACT_TOKEN_FTK2](state, result) {
            state.contracts.token.ftk2 = result;
        },
        [WEB3_CONTRACT_TOKENS](state, result) {
            state.tokens = result;
        },
        [WEB3_CONTRACT_TOKEN_PAIR](state, result) {
            state.contracts.token.pair = result;
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
        [WEB3_SWAP_PATHS](state, result) {
            state.swap.paths = result;
        },
        [NFT_ASSET](state, result) {
            state.asset = result;
        },
        [NFT_BOUGHT](state, result) {
            state.nft_bought = result;
        },
        [GET_LIQUIDITIES](state, result) {
            state.liquidities = result;
        }
    }
}
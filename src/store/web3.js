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
const WEB3_CONTRACT_TOKEN_EGG = 'WEB3_CONTRACT_TOKEN_EGG';
const WEB3_CONTRACT_TOKEN_DGG = 'WEB3_CONTRACT_TOKEN_DGG';
const WEB3_CONTRACT_TOKEN_DFD = 'WEB3_CONTRACT_TOKEN_DFD';
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
        address: {
            token: {
                // hardhat
                // egg: '0x0116686E2291dbd5e317F47faDBFb43B599786Ef',
                // dfd: '0x9bAaB117304f7D6517048e371025dB8f89a8DbE5',
                // dgg: '0xd771D7C0e1EBE89C9E9F663824851BB89b926d1a',
                // usdt: '0x2706A171ECb68E0038378D40Dd1d136361d0cB7d',
                // usdc: '0x993F00eb9C73e3E4eAe3d6Afb4Ba65A6b8B5E597',
                // weth: '0xb198606906ED0a8fC59C46F7dE6442FBc05D1016',
                // ftk1: '0x1Eb835EB7BEEEE9E6bbFe08F16a2d2eF668204bd',
                // ftk2: '0x31A65C6d4EB07ad51E7afc890aC3b7bE84dF2Ead',

                // ropsten
                egg: '0xAbb8AB9aC56BF62f3F24606c4280a17de21c414e',
                dfd: '0x1036962B5941430FBEb0Ae7B7a9689d33BBEf812',
                dgg: '0xd771D7C0e1EBE89C9E9F663824851BB89b926d1a',
                usdt: '0x2706A171ECb68E0038378D40Dd1d136361d0cB7d',
                usdc: '0x993F00eb9C73e3E4eAe3d6Afb4Ba65A6b8B5E597',
                weth: '0x9d0a7ADdA80612132696e4b85D3e2b26fefb84Aa',
                ftk1: '0x05E6C4bF1A86C3Cb3b175BF7D273473616ed12C0',
                ftk2: '0x4FE3Ffb4b7c452777EC6e76b324C3643e6Ea83cD',
            },
            rand: '0x8aBb8E62Bd73f4c73b2CE7a02631B2dC911Ab720',
            dgg_sale: '0xBDF9001c5d3fFc03AB6564CA28E530665594dfF7',
            pool_single: '0x80F43505d8d1A739504eB4237Eb15b2e0048Da8d',
            uniswap_factory: '0xbB4e19cc579781E2c4a80B733c2649DC3cbBA009',
            router_v1: '0xfb841153be2a3A8A9922Ecb2903C86555c6ba9E0',
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
                address: '0x05E6C4bF1A86C3Cb3b175BF7D273473616ed12C0',
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
                address: '0x4FE3Ffb4b7c452777EC6e76b324C3643e6Ea83cD',
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
                address: '',
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
                address: '',
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
                address: '0x9d0a7ADdA80612132696e4b85D3e2b26fefb84Aa',
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
                    // dispatch('getRandContract');
                    // dispatch('getDggSaleContract');
                    // dispatch('getPoolSingleContract');
                    dispatch('getUniswapFactoryContract');
                    dispatch('getDefenderRouterV1Contract');
                    // dispatch('getMyNftAssets', this.state.web3.accounts[0]);
                    dispatch('getMyTransactions', this.state.web3.accounts[0]);
                    console.log('egg contract', this.state.web3.contracts.token.egg.options.address);
                    console.log('dgg contract', this.state.web3.contracts.token.dgg.options.address);
                    console.log('dfd contract', this.state.web3.contracts.token.dfd.options.address);
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
                let tokens = this.state.web3.tokens;
                tokens.forEach(async (token) => {
                    
                    if (token.address.length > 0) {
                        token.contract = new this.state.web3.web3.eth.Contract(
                            abiTokenDefender,
                            token.address,
                        );

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

                // console.log('AAAAAAAAAAAAAA liquidity', liquidities);
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
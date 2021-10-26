import axios from 'axios';
import myStorage from './myStorage';

const NFTS_ALL = 'NFTS_ALL';
const NFTS_BY_NAME = 'NFTS_BY_NAME';
const NFTS_BY_ID = 'NFTS_BY_ID';
const NFT_ASSET_BY_OWNER = 'NFT_ASSET_BY_OWNER';
const NFT_ASSETS_LOADED = 'NFT_ASSETS_LOADED';

const CONFIG = 'CONFIG';

export default {
    state: {
        nfts: [],
        assets: [],
        assetsLoaded: 0,
        config: {},
        consts: {
            dgg_price_egg_default: 800,
        },
    },
    actions: {
        getNftsAll({ commit }) {
            let url = this.state.url.api.base + this.state.url.api.nft.nft_all;
            axios({
                url: url,
                method: 'get',
            }).then((data) => {
                if (data.status === 200) {
                    let nftData = JSON.parse(data.data);
                    nftData.forEach((item) => {
                        item.image = this.state.url.static.base + this.state.url.static.images + item.image;
                        if (item.level === 0) {
                            item.levelStr = 'A';
                        } else if (item.level === 1) {
                            item.levelStr = 'A+';
                        } else if (item.level === 2) {
                            item.levelStr = 'S';
                        } else if (item.level === 3) {
                            item.levelStr = 'SR';
                        } else if (item.level === 4) {
                            item.levelStr = 'SSR';
                        }
                    });
                    console.log('getNftsAll', nftData);
                    myStorage.set('nfts', nftData);
                    myStorage.set('lastRefresh', (new Date()).getTime());
                    commit('NFTS_ALL', nftData);
                }
            })
        },
        getMyNftAssets({ commit }, owner) {
            let url = this.state.url.api.base + this.state.url.api.nft.nft_asset_by_owner;
            console.log('getMyNftAssets owner', owner);
            axios({
                url: url,
                method: 'get',
                params: {
                    owner: owner,
                }
            }).then((data) => {
                if (data.status === 200) {
                    
                    let myNftAsset = JSON.parse(data.data);
                    console.log('getMyNfts', myNftAsset.responseData);
                    commit('NFT_ASSETS_LOADED', 0);
                    let metas = [];
                    for (let idx = 0; idx < myNftAsset.responseData.length; idx++) {
                        let item = myNftAsset.responseData[idx];
                        let jsonUrl = this.state.url.static.base + item.meta;
                        console.log('jsonUrl', jsonUrl);
                        axios.get(jsonUrl).then(async (meta) => {
                            let metaData = JSON.parse(meta.data);
                            metas.push(metaData);
                            commit('NFT_ASSETS_LOADED', idx+1);
                            console.log('metas', metas)
                            commit('NFT_ASSET_BY_OWNER', metas);
                        });
                    }

                    
                    // myStorage.set('config', configData);
                    // commit('CONFIG', configData);
                }
            })
        },
        getConfig({ commit }) {
            let url = this.state.url.api.base + this.state.url.api.config.all;
            axios({
                url: url,
                method: 'get',
            }).then((data) => {
                if (data.status === 200) {
                    let configArr = JSON.parse(data.data).data;
                    let configData = {};
                    if (configArr.length > 0) {
                        configArr.forEach((item) => {
                            configData[item.name] = item.value;
                        });
                    }
                    console.log('getConfig', configData);
                    myStorage.set('config', configData);
                    commit('CONFIG', configData);
                }
            })
        },
    },
    mutations: {
        [NFTS_ALL](state, result) {
            state.nfts = []
            if (result && result.length > 0) {
                result.forEach((item) => {
                    if (state.nfts[item.name] == null || state.nfts[item.name] == undefined) {
                        state.nfts[item.name] = [];
                    } 

                    state.nfts[item.name].push(item);
                });
            }
        },
        [CONFIG](state, result) {
            state.config = result;
        },
        [NFT_ASSET_BY_OWNER](state, result) {
            state.assets = result;
        },
        [NFT_ASSETS_LOADED](state, result) {
            state.assetsLoaded = result;
        }
    },
};
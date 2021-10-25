import axios from 'axios';
import myStorage from './myStorage';

const NFTS_ALL = 'NFTS_ALL';
const NFTS_BY_NAME = 'NFTS_BY_NAME';
const NFTS_BY_ID = 'NFTS_BY_ID';

const CONFIG = 'CONFIG';

export default {
    state: {
        nfts: [],
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
        }
    },
};
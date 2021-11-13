
export default {
    state: {
        api: {
            // base: 'http://47.74.37.101:3001/',
            base: 'http://localhost:3001/',
            nft: {
                nft_all: 'allNfts',
                nft_by_id: 'nftById',
                nfts_by_name: 'nftsByName',
                trade_token: 'tradeNft',
                nft_asset_by_owner: 'nftAssetByOwner',
            },
            announcements: {
            
            },
            config: {
                all: 'configAll',
                getByUser: 'configByUser',
                addUserConfig: 'addUserConfig',
                updateUserConfig: 'updateUserConfig',
            },
            transaction: {
                getByUser: 'transactionsByUser',
                getByUserAndCategory: 'transactionsByUserAndCategory',
                addTransaction: 'addTransaction',
            }
        },
        static: {
            base: 'http://47.74.37.101:3001/static/nfts/',
            images: 'imgs/',
        },
        web3: {
            wallet_connect_bridge: 'https://bridge.walletconnect.org',
        },
    }
}
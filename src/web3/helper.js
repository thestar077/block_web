module.exports = {
    detectNetworkChanges: () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", async function() {
                // Time to reload your interface with accounts[0]!
                // accounts = await web3.eth.getAccounts();
                // // accounts = await web3.eth.getAccounts();
                // console.log(accounts);
                alert("account changed");
            });

            window.ethereum.on('networkChanged', function (networkId) {
                // Time to reload your interface with the new networkId
                alert("network changed");
            });
        }
    }
}
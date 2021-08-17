require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember clump just clock breeze gasp'; 
let testAccounts = [
"0xecf6d5690f9390fe8d03043240b22f49c6623f0bfc788321618c9d0cc1ed4421",
"0x58bf81607770091a524115e343525cdbd9e280a7abd650fa33913d1597961a24",
"0xc49087ecadc91d8d7b3777249626bfb0c659e12cd023ce6c8c1488ae409f1dec",
"0xcffe1a22bae0703f627869dde137b7404e93403dd37d418de699305e5abacc91",
"0xc059dbe327bccef4c371dc034634ea1bcefeda91c6da27c6ff7f26e5950a4e75",
"0xde32878b793112d48e9636bc0a7cea79cf156700172f417897c04455f5546664",
"0x7ee345fda62029c7b209e5a341a0dea88d84cf5d7619a070a37b648c09e946f6",
"0xb9e58fbd25c8a229bb3535b43dd614cb7e97f57f1ddcfa0830470aea2b0d4f97",
"0x2b257aac94b1be069e05a28733162d5a4e0bc992e8b953f152e004f21ec51b21",
"0x34837568e753154026d71781d78e4979f52fe356ba12a6a7abd13651a8d5b72f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name return pave comfort install clog front slim'; 
let testAccounts = [
"0xbb7657d746a85558b1be617181b372dc9857e0635f3822fa260062dc32eb7b8a",
"0xae9b6cd32f0782eeefa62ec372751f4a2109a48f09795ccba94f0e8e346359a9",
"0x9ba278746d46481fb96d197ed23bf5f7c95eaaef3ab6b21a8d387b027773b538",
"0xc377713cfeff1ea1e07cd334bb11e02fe839bc1979d83db5557b5f208530b6bd",
"0x2b2e9839f8b028d637e3b3aad951fffd0e4bf037c3bb06cd0d9fb9da25e29ae7",
"0x736914c4ea6b633b6382bb9f5d381d80013b92f1cf91b45748d65971395d245c",
"0x9497f6c15982acaadd183db62a852158977091b7c63395fb8f3362a7f0657dec",
"0xbe12742a9443e3fe1ef849d6b79e4068f410a5886acfd733830fd5b95c62a1a5",
"0x77a1a7371e680416b4c2e73f39a3e995731e1ebc6f14f0aa4f20cfb8935e7580",
"0x3104761f14bcda260f537226d1b86921caee7ed97a778caef7d9d692475f11f2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

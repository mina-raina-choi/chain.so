import { Injectable } from "../../node_modules/@angular/core";
import * as bitcoinjs from 'bitcoinjs-lib'

@Injectable()
export class BitcoinjsService {

    bitcoinNetwork: any;
    ltcNetwork: any;

    constructor() {
        this.bitcoinNetwork = bitcoinjs.networks.bitcoin
        this.ltcNetwork = bitcoinjs.networks.litecoin
    }

    createRawTx(coin) {
        let network;
        coin === 'BTC' ? network = this.bitcoinNetwork : network = this.ltcNetwork;
        const key = bitcoinjs.ECPair.fromWIF("private key", network);
        // get pubkey hash for P2WPKH
        const pubKeyHash = bitcoinjs.crypto.hash160(key.getPublicKeyBuffer());
        // create P2WPKH for use as redeemScript
        // const redeemScript = bitcoinjs.script.witnessPubKeyHash.output.encode(pubKeyHash);
        
        console.log("createRawTx",pubKeyHash,  key)

        const tx = new bitcoinjs.TransactionBuilder(network);
        // console.log("tx", tx)
        tx.setVersion(1);
        tx.addInput("a63b3939cfccac47ae44ca4a0a00487777f30b1724ac0f7176b562f37b74cc0f", 1);
        tx.addOutput("LNmG2viicYJZMovnX3ciuQSbxBuhKcSsJs", 87900797);
        // added more to the change, as "too big fee" warning was triggered
        tx.addOutput("Lc5txjffwkcbMk5WyF1qhB4WL5vHL7i8xv", 200000);

        // include the value of the input and the redeemScript
        // vin, keyPair, redeemScript, hashType, witnessValue, witnessScript
        tx.sign(0, key );

        console.log(tx.build().toHex());
        // 서명되기 전 rawTx
        //  tx.buildIncomplete().toHex() 
    }


    getRawTx(txid) {
        const res = bitcoinjs.Transaction.toHex(txid)
        console.log("getRawTx", res)
    }

    decode(rawTx) {
        const tx = bitcoinjs.Transaction.fromHex(rawTx);
        const txid = tx.getId();
        console.log(txid);
    }
}

// wannabit
// 020000000166a577adc00b99aecae2a60f2bc7461a290b0b33b8593f6556af9e072ea14544010000006b483045022100924023e9886b02613df323c35184cd5a43d3cfd47296ae8c16106404e2db426b022023dfd5b88aee369112d32b41cdfeb7d00afae9f456a75a2d64829830ffcbc403012103baa3aafb68a5ae6a808e82c3111a4d89535107be0b1f651750e6e19465e24469ffffffff02400d0300000000001976a9144d719e2ed6f936a6f99b39d2e0d7c3fc44e5120e88ac069f0500000000001976a91414ef969ad4261cb0719fb97d500c779f1fb5c51988ac00000000

// bitcoinjs-lib
// 020000000166a577adc00b99aecae2a60f2bc7461a290b0b33b8593f6556af9e072ea14544010000006a47304402207cc30897d284aa0ed14796e58d5471e25efb481e639924cf29694d627891ee8702205aa8daeb3f300419670d84dfa1fd2a07d2f4f17a93e42175964dcfcfed359def012103baa3aafb68a5ae6a808e82c3111a4d89535107be0b1f651750e6e19465e24469ffffffff02069f0500000000001976a91414ef969ad4261cb0719fb97d500c779f1fb5c51988ac400d0300000000001976a9144d719e2ed6f936a6f99b39d2e0d7c3fc44e5120e88ac00000000
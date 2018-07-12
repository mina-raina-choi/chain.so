import { Injectable } from "../../node_modules/@angular/core";
import * as bitcoinjs from 'bitcoinjs-lib'

@Injectable()
export class BitcoinjsService {

    bitcoinNetwork: any;

    constructor() {
        this.bitcoinNetwork = bitcoinjs.networks.bitcoin
    }

    createRawTx() {

        const key = bitcoinjs.ECPair.fromWIF("privatekey", this.bitcoinNetwork);
        // get pubkey hash for P2WPKH
        const pubKeyHash = bitcoinjs.crypto.hash160(key.getPublicKeyBuffer());
        // create P2WPKH for use as redeemScript
        // const redeemScript = bitcoinjs.script.witnessPubKeyHash.output.encode(pubKeyHash);
        
        console.log("createRawTx",pubKeyHash,  key)

        const tx = new bitcoinjs.TransactionBuilder(this.bitcoinNetwork);
        console.log("tx", tx)
        tx.setVersion(2); // version 1, 2?? 차이

        tx.addInput("5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f", 1);
        tx.addOutput("12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt", 569890);
        // added more to the change, as "too big fee" warning was triggered
        tx.addOutput("184V95i7AD1xjFG7kf1X5Sz55cE2rXAHPo", 200000);

        // include the value of the input and the redeemScript
        // vin, keyPair, redeemScript, hashType, witnessValue, witnessScript
        tx.sign(0, key );

        console.log(tx.build().toHex(), tx.buildIncomplete().toHex());
    }
}

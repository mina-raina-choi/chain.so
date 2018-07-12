import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChainsoService { 

    END_POINT = `https://chain.so`

    constructor(private http: HttpClient) { }

    // network info
    getInfo(network) {
        const url = `${this.END_POINT}/api/v2/get_info/${network}`
        const res = this.http.get(url);
        return res;
    }


    // address 관련
    getBalance(network, addr) {
        const url = `${this.END_POINT}/api/v2/get_address_balance/${network}/${addr}`
        const res = this.http.get(url);
        return res;
    }

    getReceivedValue(network, addr) {
        const url = `${this.END_POINT}/api/v2/get_address_received/${network}/${addr}`
        const res = this.http.get(url)
        return res
    }

    getSpentValue(network, addr) {
        const url = `${this.END_POINT}/api/v2/get_address_spent/${network}/${addr}`
        return this.http.get(url)
    }

    getUnspentTx(network, addr) {
        const url = `${this.END_POINT}/api/v2/get_tx_unspent/${network}/${addr}`
        return this.http.get(url)
    }

    isValidAddr(network, addr) {
        const url = `${this.END_POINT}/api/v2/is_address_valid/${network}/${addr}`
        return this.http.get(url)
    }

    getData(network, addr) {
        const url = `${this.END_POINT}/api/v2/address/${network}/${addr}`
        return this.http.get(url)
    }



    // txid 관련
    getConfidence(network, txid) {
        const url = `${this.END_POINT}/api/v2/get_confidence/${network}/${txid}`
        return this.http.get(url)
    }

    getTxInputs(network, txid) {
        const url = `${this.END_POINT}/api/v2/get_tx_inputs/${network}/${txid}`
        return this.http.get(url)
    }

    getTxOutputs(network, txid) {
        const url = `${this.END_POINT}/api/v2/get_tx_outputs/${network}/${txid}`
        return this.http.get(url)
    }

    getTx(network, txid) {
        const url = `${this.END_POINT}/api/v2/get_tx/${network}/${txid}`
        return this.http.get(url)
    }

    isTxConfirmed(network, txid) {
        const url = `${this.END_POINT}/api/v2/is_tx_confirmed/${network}/${txid}`
        return this.http.get(url)
    }

    isTxSpent(network, txid) {
        const url = `${this.END_POINT}/api/v2/is_tx_spent/${network}/${txid}/1`
        return this.http.get(url)
    }

    getTxDisplayData(network, txid) {
        const url = `${this.END_POINT}/api/v2/tx/${network}/${txid}`
        return this.http.get(url)
    }


    // block data
    getBlockHash(network, blockId) {
        const url = `${this.END_POINT}/api/v2/get_blockhash/${network}/${blockId}`
        return this.http.get(url)
    }

    getBlock(network, blockId) {
        const url = `${this.END_POINT}/api/v2/get_block/${network}/${blockId}`
        return this.http.get(url)
    }

    getBlockDisplayData(network, blockId) {
        const url = `${this.END_POINT}/api/v2/block/${network}/${blockId}`
        return this.http.get(url)
    }

    // get price
    getPrice(network, currency?) {
        const url = `${this.END_POINT}/api/v2/get_price/${network}/${currency}`
        return this.http.get(url)
    }

    // short addr
    getShortAddr(network, addr) {
        const url = `${this.END_POINT}/api/v2/short/${network}/${addr}`
        return this.http.get(url)
    }

    // send Transaction
    sendTx(network, body) {
        const url = `${this.END_POINT}/api/v2/send_tx/${network}`
        return this.http.post(url, JSON.stringify(body))
    }

    // realtime api
}
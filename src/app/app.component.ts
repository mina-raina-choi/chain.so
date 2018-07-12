import { Component, OnInit } from '@angular/core';
import { ChainsoService } from './chain.so.service';
import { BitcoinjsService } from './bitcoinjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private chainso: ChainsoService, private bitcoinService: BitcoinjsService) {

  }

  ngOnInit() {
    this.createRawTx()
    // this.getInfo('DOGE')

    // this.getBalance('BTC', '12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt')
    // this.getReceivedValue('BTC', '12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt')
    // this.getUnspentTx('BTC', '12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt')
    // this.isValidAddr('BTC', '12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt')
    // this.getAllData('BTC', '12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt')


    // this.getConfidence('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')
    // this.getTxInputs('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')
    // this.getTxOutputs('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')
    // this.getTx('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')
    // this.isTxConfirmed('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')
    this.isTxSpent('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')
    // this.getTxDisplayData('BTC', '5fb57e59919a08623e4e55a9f68a328200528a74831069ea9ff6b90a92e1693f')


    // this.getBlockHash('BTC', '00000000000000000007c34805aab1bab6626ce9949959e699e753cbaa9d2b0b')
    // this.getBlock('BTC', '00000000000000000007c34805aab1bab6626ce9949959e699e753cbaa9d2b0b')
    // this.getBlockDisplayData('BTC', '00000000000000000007c34805aab1bab6626ce9949959e699e753cbaa9d2b0b')

    // this.getPrice('BTC', 'USD')
    // this.getShortAddr('BTC', '12uhXixxk1TQMimYimjMr4WTQLtf4QeQLt')

  }

  createRawTx() {
    this.bitcoinService.createRawTx();
  }

  // network info
  getInfo(coin) {
    this.chainso.getInfo(coin).subscribe(res => {
      console.log("getInfo", res)
    }, err => {
      console.log("err", err)
    })
  }


  // addr 관련
  getBalance(network, addr) {
    this.chainso.getBalance(network, addr).subscribe(res => {
      console.log("balance", res)
      // { data:{network: "LTC", address: "Lc5txjffwkcbMk5WyF1qhB4WL5vHL7i8xv", confirmed_balance: "0.19665183", unconfirmed_balance: "0.00000000"} 
      // status:"success" }
    }, err => {
      console.log("err", err)
    })
  }

  getReceivedValue(network, addr) {
    this.chainso.getReceivedValue(network, addr).subscribe(res => {
      console.log("received value", res)
    }, err => {
      console.log('err', err)
    })
  }


  getUnspentTx(network, addr) {
    this.chainso.getUnspentTx(network, addr).subscribe(res => {
      console.log("getUnspentTx", res)
    }, err => {
      console.log("err", err)
    })
  }

  isValidAddr(network, addr) {
    this.chainso.isValidAddr(network, addr).subscribe(res => {
      console.log("isValidAddr", res)
    }, err => {
      console.log("err", err)
    })
  }

  getAllData(network, addr) {
    this.chainso.getData(network, addr).subscribe(res => {
      console.log("getData", res)
    }, err => {
      console.log('err', err)
    })
  }


  // txid 관련
  getConfidence(network, txid) {
    this.chainso.getConfidence(network, txid).subscribe(res => {
      console.log('getConfidence', res)
    }, err => {
      console.log("err", err)
    })
  }

  getTxInputs(network, txid) {
    this.chainso.getTxInputs(network, txid).subscribe(res => {
      console.log('getTxInputs', res)
    }, err => {
      console.log("err", err)
    })
  }

  getTxOutputs(network, txid) {
    this.chainso.getTxOutputs(network, txid).subscribe(res => {
      console.log('getTxOutputs', res)
    }, err => {
      console.log("err", err)
    })
  }

  getTx(network, txid) {
    this.chainso.getTx(network, txid).subscribe(res => {
      console.log('getTx', res)
    }, err => {
      console.log("err", err)
    })
  }

  isTxConfirmed(network, txid) {
    this.chainso.isTxConfirmed(network, txid).subscribe(res => {
      console.log('isTxConfirmed', res)
    }, err => {
      console.log("err", err)
    })
  }

  isTxSpent(network, txid) {
    this.chainso.isTxSpent(network, txid).subscribe(res => {
      console.log('isTxSpent', res)
    }, err => {
      console.log("err", err)
    })
  }

  getTxDisplayData(network, txid) {
    this.chainso.getTxDisplayData(network, txid).subscribe(res => {
      console.log('getTxDisplayData', res)
    }, err => {
      console.log("err", err)
    })
  }



  // block data
  getBlockHash(network, blockId) {
    this.chainso.getBlockHash(network, blockId).subscribe(res => {
      console.log('getBlockHash', res)
    }, err => {
      console.log("err", err)
    })
  }

  getBlock(network, blockId) {
    this.chainso.getBlock(network, blockId).subscribe(res => {
      console.log('getBlock', res)
    }, err => {
      console.log("err", err)
    })
  }

  getBlockDisplayData(network, blockId) {
    this.chainso.getBlockDisplayData(network, blockId).subscribe(res => {
      console.log('getBlockDisplayData', res)
    }, err => {
      console.log("err", err)
    })
  }

  // get price
  getPrice(network, currency?) {
    this.chainso.getPrice(network, currency).subscribe(res => {
      console.log('getPrice', res)
    }, err => {
      console.log("err", err)
    })
  }

  // short addr
  getShortAddr(network, addr) {
    this.chainso.getShortAddr(network, addr).subscribe(res => {
      console.log('getShortAddr', res)
    }, err => {
      console.log("err", err)
    })
  }

  // send Transaction
  sendTx() {
    
    const body = {
      tx_hex: ''
    }
    // this.sendTx('BTC', body)
    this.chainso.sendTx('BTC', body).subscribe(res => {
      console.log("sendTx", res)
    }, err => {
      console.log("err", err)
    })
  }
}

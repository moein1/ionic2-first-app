import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuoteService } from "../../service/quote";

@Component({
    selector: 'page-quote',
    templateUrl: 'quote.html'
})

export class QuotePage {
    person: string;
    text: string;
    constructor(private viewCtrl: ViewController, 
        private navParam: NavParams,
    private quoteService : QuoteService ) {

    }
    ionViewDidLoad() {
      //  this.person = this.navParam.data.quote.person;
        this.person = this.navParam.get('person');
        //this.text = this.navParam.data.quote.text;
        this.text = this.navParam.get('text');
    }
    onClose(remove=false) {
        this.viewCtrl.dismiss(remove);
    }

   
}
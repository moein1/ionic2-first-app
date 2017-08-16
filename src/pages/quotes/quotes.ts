import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuoteService } from "../../service/quote";

@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html'
})

export class QuotesPage implements OnInit {
    quoteGroup: { category: string, quotes: Quote[], icon: string }
    constructor(private navParam: NavParams, 
        private alertCtrl: AlertController,
        private quoteService : QuoteService) {

    }

    ionViewDidLoad() {
        // console.log(this.navParam.data);
        // if you want to use this approach we should
        //add (?) before te property on the view
        //the view will load before this method so 
        //the quoteGroup in the view should wait as soon as recieve data can show it        
    }

    ngOnInit() {
        
        this.quoteGroup = this.navParam.data.quotes;
    }
    onAddToFavorite(quote: Quote) {
        const alert = this.alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to this quote?',
            buttons: [{
                text: 'YEs, go ahead',
                handler: () => {
                    this.quoteService.addQuoteToFavorites(quote);
                }
            }, {
                text: 'No, I changed my mind.',
                role:'cancle',
                handler: () => {
                }
            }]
        });
        alert.present();
    };

    onRemoveFromFavorite(quote:Quote){
        this.quoteService.removeQuoteFromFavorites(quote);
    }

    isFavourite(quote:Quote){
        return this.quoteService.isQuoteFavorite(quote);
    }


}
import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { QuoteService } from "../../service/quote";
import { Quote } from "../../data/quote.interface";
import { QuotePage } from "../quote/quote";
import { SettingService } from "../../service/settings";

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})


export class FavoritesPage {
    favouriteQuotes: Quote[] = [];
    constructor(private quoteService: QuoteService,
         private modalCtrl: ModalController,
        private menuCtrl : MenuController,
        private settingService : SettingService) {

    }
    ionViewWillUnload() {
        console.log('unload');
    }

    ionViewWillEnter() {
        console.log('this is favorite list');
        this.favouriteQuotes = this.quoteService.getFavouritesQuotes();
    }

    onViewQuote(quote: Quote) {
        const modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if (remove) {
                this.onRemoveFavourite(quote);
            }
        })
    };

    onRemoveFavourite(quote: Quote) {
        var Position = this.quoteService.removeQuoteFromFavorites(quote);
        this.favouriteQuotes.splice(Position, 1);
    };

    itemBackground(){
        return this.settingService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }

    isAltBackground(){
        return this.settingService.isAltBackground();
    }

}
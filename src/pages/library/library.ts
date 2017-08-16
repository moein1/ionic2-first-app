import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";

@Component({
    selector: 'page-library',
    templateUrl: 'library.html'
})

export class LibraryPage implements OnInit {
    quotesPage : QuotesPage;
    quoteCollection: { category: string, quotes: Quote[], icon: string }[];
    constructor(private navCtrl: NavController) {

    }

    ngOnInit() {
        this.quoteCollection = quotes;
    }

    showQuotes(quotes) {
        this.navCtrl.push(QuotesPage, { quotes: quotes });
    }
}
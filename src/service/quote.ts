import { Quote } from "../data/quote.interface";

export class QuoteService {
    private favouriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favouriteQuotes.push(quote);
    };

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
            return quote.id == quoteEl.id;
        })
        this.favouriteQuotes.splice(position, 1);
        return position;
    };

    getFavouritesQuotes() {
        //this is back a copy of list of quotes
        return this.favouriteQuotes.slice();
    };

    isQuoteFavorite(quote: Quote) {
        return this.favouriteQuotes.find((quoteEl: Quote) => {
            return quote.id === quoteEl.id;
        })
    }
}
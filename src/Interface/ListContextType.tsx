export interface WatchListContextType{
    watchlist:any[];
    addToWatchlist:(movie:any)=>void;
    removeFromWatchlist:(id:number)=>void;
    isInwatchList:(id:number)=>boolean;
}

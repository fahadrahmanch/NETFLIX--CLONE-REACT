import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";import type{ WatchListContextType } from "../Interface/ListContextType";

const WatchlistContext=createContext<WatchListContextType|null>(null)
export const WatchlistProvider=({children}:{children:ReactNode})=>{
    console.log("sfjlalkjfklajfkdsjakl")
    const [watchlist,setWatchlist]=useState<any[]>([])
    console.log(watchlist)
    const addToWatchlist=(Movie:any)=>{
        console.log('ad')
        if(!watchlist.some((item:any)=>item.id==Movie.id)){
            setWatchlist(prev=>[...prev,Movie])

        }
    }
    const removeFromWatchlist=(id:number)=>{
        
     setWatchlist(prev=>prev.filter((item:any)=>item.id!=id))
    }
    const isInwatchList=(id:number)=>{
        return watchlist.some((item:any)=>item.id==id)
    }
    return(
        <WatchlistContext.Provider value={{watchlist,addToWatchlist,removeFromWatchlist,isInwatchList}}>
            {children}
        </WatchlistContext.Provider>
    )
}

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if (!context) {
      throw new Error("useWatchlist must be used within a WatchlistProvider");
    }
    return context;
  };
  
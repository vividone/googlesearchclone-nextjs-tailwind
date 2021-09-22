import React from 'react'
import PaginationButtons from '../components/PaginationButtons'

export default function SearchResults({results}) {
    const searches = results.results;
    //console.log("Search Results", searches.items[0]);

    return (

        
        <div className="mx-auto w-full pl-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-md mb-5 mt-3">About {searches.searchInformation?.formattedTotalResults} results  ( {searches.searchInformation?.formattedSearchTime} seconds) </p>
            
            {
               searches && searches.items.map((item) => (
                    <div key={item.link} className="max-w-xl mb-8">
                        <div className="group">
                        <a href={item.link} className="text-sml">{item.formattedUrl}</a>
                        <a href={item.link} className="text-sml"><h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{item.title}</h2></a>
                        </div>
                        <p className="line-clamp-2">{item.snippet}</p>
                    </div>
               ))
            }
            <PaginationButtons />
        </div>
    )
}

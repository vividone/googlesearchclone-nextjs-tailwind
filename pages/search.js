import Head from 'next/head'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import {API_KEY, CONTEXT_KEY} from '../key'
import Response from '../Response'
import {useRouter} from 'next/router'



export default function Search(results) {
    const router = useRouter();
    return (
        <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
        </Head>
        {/* Header */}
        <Header />
        {/* Search Results */}
            <SearchResults results={results}/>
        </div>
    )
}


export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json());

    return{
        props:{
            results: data,
        },
    };
}
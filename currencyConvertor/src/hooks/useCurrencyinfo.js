import { useEffect , useState} from "react";

function useCurrencyInfo(currency){
    const [data ,setdata ] = useState({})
    useEffect(() =>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
        .then((res) => res.json())
        .then((res)=>  setdata(res[currency]))
        console.table(data);
    },[currency])
    console.table(data);
    return data
    
}

export default useCurrencyInfo ;
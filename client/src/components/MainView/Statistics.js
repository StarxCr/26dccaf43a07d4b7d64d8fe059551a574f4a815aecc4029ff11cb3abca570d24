import React, { useRef, useState } from 'react'
import * as s from './Pages.styles';
const Statistics = () => {

    //sends GET request to get statisctics for a collection from opensea
    const getStats = async (collection_slug)=>{
        const url = `https://api.opensea.io/api/v1/collection/${collection_slug}/stats`;
        const stats = await fetch(url).then(res=>res.json());
        let newStatsJSX = Object.keys(stats.stats).map((item, index)=>{
            return <s.Stat key={index}><s.Title>{statNames[index]}</s.Title>
                {stats.stats[item].toFixed(2)}</s.Stat>})
        setStats(newStatsJSX);
    }
    //Пример ответа api opensea
    // const stats = {
    //     "stats": {
    //       "one_day_volume": 854.0710000000001,
    //       "one_day_change": 1.52227479641855,
    //       "one_day_sales": 59,
    //       "one_day_average_price": 14.47577966101695,
    //       "seven_day_volume": 3456.985410000001,
    //       "seven_day_change": 0.7941296845142394,
    //       "seven_day_sales": 266,
    //       "seven_day_average_price": 12.996185751879704,
    //       "thirty_day_volume": 10875.391657068703,
    //       "thirty_day_change": -0.41179629974114146,
    //       "thirty_day_sales": 877,
    //       "thirty_day_average_price": 12.400674637478566,
    //       "total_volume": 91283.71299397593,
    //       "total_sales": 20143,
    //       "total_supply": 10000,
    //       "count": 10000,
    //       "num_owners": 4173,
    //       "average_price": 4.531783398400235,
    //       "num_reports": 9,
    //       "market_cap": 129961.85751879704,
    //       "floor_price": 13.1
    //     }
    //   };
    const statNames = ['1-Day Volume', '1-Day Change', '1-Day Sales', '1-Day Av.Price', '7-Day Volume', '7-Day Change', '7-Day Sales', '7-Day Av.Price',
    '30-Day Volume', '30-Day Change', '30-Day Sales', '30-Day Av.Price', 'Total Volume', 'Total Sales', 'Total Supply', 'Count', 'Total Owners', 'Av.Price',
'Num of Reports', 'Market cap', 'Floor Price'];
      const inputRef = useRef();

    const [statsJSX, setStats] = useState('undefined');

  return (
    <s.PageSection>
        <s.MainContainer style={{display:'block'}}>
            <s.TextInput
            ref={inputRef}
        placeholder="SearchCollection"
        type="text"></s.TextInput>


    <s.Button 
        bgColor='#8000FF'
        color='white'
        outline='transparent'
        onClick={()=>{getStats(`${inputRef.current.value}`)}}>Get stats</s.Button>

        <s.SubContainer style={{display:'grid', width: '100%', gap:'2rem', gridTemplateColumns:'repeat(auto-fill, minmax(9.5rem, 1fr)'}}>
            {statsJSX === 'undefined'? <h1>Search Collection First</h1> : statsJSX}
        </s.SubContainer>
        </s.MainContainer>
    </s.PageSection>
  )
}

export default Statistics
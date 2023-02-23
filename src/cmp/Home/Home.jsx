import React from 'react'
import Applications from '../../comps/Applications/Applications';
import Movies from '../../comps/Movies/Movies';
import HeroBanner from '../../comps/HeroBanner/HeroBanner';
import NewUpdates from '../../comps/NewUpdates/NewUpdates';
import Categories from '../../comps/Categories/Categories';
import RecommendedGames from '../../comps/RecommendedGames/RecommendedGames';
import Banner from '../../comps/Banner/Banner';
import './Home.scss';


export default function Home() {
  return (
    <div className='home'>
        <HeroBanner/>
        <Categories/>
       
        <Applications type="recommended"/>
        <Applications type="updated"/>

        
        <Movies type="Popular"/>
        <Applications type="premium"/>

        <Banner/>
        
        
        
        {/* <NewUpdates/>
        <RecommendedGames/> */}
        {/* Home */}
    </div>
  )
}

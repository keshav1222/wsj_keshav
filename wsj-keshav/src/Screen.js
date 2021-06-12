import React, { useContext } from 'react';
import { NewsContext} from './News';
import Article from './Article';


function Screen(props) {
    const {data} = useContext(NewsContext);
    console.log(data);
    return (
        <div className="f">
            {data ? data.articles.map(news => <Article data = {news} key={news.url}/>)
            :""}
            
        </div>
    )
}

export default Screen

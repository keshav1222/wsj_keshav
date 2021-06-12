import React from 'react'

function Article({data}) {
    return (
        <div>
            <h2><a href={data.url}>{data.title}</a></h2>
            <p>{data.description}</p>
            
            <img src={data.urlToImage} alt='news'/>
            
        </div>
    )
}

export default Article

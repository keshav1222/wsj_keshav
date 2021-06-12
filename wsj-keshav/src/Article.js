import React from 'react'

function Article({data}) {
    return (
        <div className="display">
            <img className="img" src={data.urlToImage} alt='news'/>
            <strong><h2 className="text"><a className="url" href={data.url}>{data.title}</a></h2></strong>
            <p className="para">{data.description}</p>
            <hr />
           
            
            
            
        </div>
        
    )
}

export default Article

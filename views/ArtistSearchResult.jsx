const React = require("react"); 
const Layout = require('./Layout')

function ArtistSearchResult (props){
    return(
        <Layout>
            <div>  
                <h2>Hello people</h2>
                {props.body.artists.items.map((result,i)=> {
                    return (
                        <div key={i}>
                            <h2>{result.name}</h2>
                            { result.images.length>0 && ( <> <img src={result.images[0].url} height="100px"/> </>)}
                            <a href={result.external_urls.spotify} >Go see on spotify</a>
                            <br/>
                            <a href={`/artist/${result.id}`} >Go see albums</a>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
    
}
module.exports = ArtistSearchResult; 


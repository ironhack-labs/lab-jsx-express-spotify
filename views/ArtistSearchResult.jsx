const React = require("react"); 
const Layout = require('./Layout')
function ArtistSearchResult (data){
    return(
        <Layout>
            <div>  
                <h2>Search Result</h2>
            {data.body.artists.items.map((artistInfo,i)=> {
                return (
                    <div key={i}>
                        <h2>{artistInfo.name}</h2>
                        <img src={artistInfo.images[1]} />
                        <button><a href={`/albums/${artistInfo.id}`} >View albums</a></button>
                    </div>
                )
            })
            }
            </div>
        </Layout>
    )
}
module.exports = ArtistSearchResult; 
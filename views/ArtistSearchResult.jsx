const React = require('react');
const Layout = require('./layout');
function ArtistSearchResult(props){
    
return (
    <Layout>
    <div>
        {props.artists.items.map((artist, i)=>{
            return (
                <div key = {i}> 
                <h2>{artist.name}</h2>
                    <img className = "albImg" src={artist.images[0]
                    ? artist.images[0].url
                    : " "
                    }
                     />
                
                    <h3><a href={artist.id 
                    ? "/albums/" + artist.id 
                    : undefined}
                    >View Album
                    </a></h3>
                </div>
               )
            }  
        )         
        }
    </div>
    </Layout>
        ) 
        }
    
module.exports = ArtistSearchResult;
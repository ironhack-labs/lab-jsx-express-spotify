const React = require('react');

function ArtistSearchResult(props){
    
return (
    <html>
        <head>        <link href="/stylesheets/style.css" rel="stylesheet" /></head>
    <div>
       {console.log("props in the search result form: ", props.artists.items)}
       
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
            }  )         
        }

    </div>
    </html> 
                  
                  
                  
                  )
        }
        
     
 

module.exports = ArtistSearchResult;
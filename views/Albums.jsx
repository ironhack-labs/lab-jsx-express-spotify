const React = require('react');

function AlbumSearchResult(props){
    
return (
    <html>
        <head> <link href="/stylesheets/style.css" rel="stylesheet" /></head>
    <div>
       {console.log("props in the album page: ", props.items)}
       
        {props.items.map((alb, i)=>{
            return (
            
                <div key = {i}> 
                
                <h2>{alb.name}</h2>
                    
                    <img className = "albImg" src={alb.images[0]
                    ? alb.images[0].url
                    : " "
                    }
                     />
                
                    <a href={alb.id 
                    ? "/tracks/" + alb.id 
                    : undefined}
                    >View tracks
                    </a>
                </div>
               )
            }  )         
        }

    </div>
    </html> 
                  
                  
                  
                  )
        }
        
     
 

module.exports = AlbumSearchResult;
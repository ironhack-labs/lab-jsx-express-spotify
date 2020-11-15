const React = require('react');


function TrackSearchResult(props){
    
    return (
        <html>
            <head> <link href="/stylesheets/style.css" rel="stylesheet" /></head>
        <div>
           {console.log("props in the tracks page: ", props.items)}
           
            {props.items.map((track, i)=>{
                return (
                
                    <div key = {i}> 
                    
                    <h2>{track.name}</h2>
                        
                    <audio controls>
  <source src={track.preview_url} type="audio/ogg" />
  <source src={track.preview_url}  type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>   
                    
                        
                    </div>
                   )
                }  )         
            }
    
        </div>
        </html> 
                      
                      
                      
                      )
            }
            
         
     
    
    module.exports = TrackSearchResult;
const React = require('react');
const Layout = require('./layout');

function AlbumSearchResult(props){
    
return (
    <Layout>
    <div>
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
    </Layout>
 )
 }
module.exports = AlbumSearchResult;
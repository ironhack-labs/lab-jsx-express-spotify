const React = require('react');
const Layout = require('./Layout');


function ArtistSearchResult (props){
    return (
    <Layout>
        <div>
            {props.items.map((artist, i) =>{
                return(
                  <div key = {i} >
                    {artist.images.lenght !==0? null:(<img src={artist.images[1].url} width="200" alt="" />)}
                    <h5>{artist.name}</h5>
                    <a href={`/albums/${artist.id}`}>View Albums</a>   
                  </div>
                )
            }) }         
        </div> 

    </Layout>  
    );
}



module.exports = ArtistSearchResult
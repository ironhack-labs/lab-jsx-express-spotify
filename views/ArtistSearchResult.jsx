const React = require('react');
const Layout = require('./Layout');


function ArtistSearchResult (props){
    return (
    <Layout>
        <div>
            {props.items.map((artist, i) =>{
                console.log(artist)
                return(
                  <div key = {i} >
                    <img src={artist.images[1].url} width="200" alt="" />
                    <h5>{artist.name}</h5>
                    <a href="/abums/{artist.id}">View Albums</a>  
                  </div>
                )
            }) }         
        </div> 

        {props.children}
    </Layout>  
    );
}



module.exports = ArtistSearchResult
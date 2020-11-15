const React = require('react');
const Layout = require('./Layout');


function Albums (props){
    return (
    <Layout>
        <div>
            {props.map((artist, i) =>{
                //console.log(artist)
                return(
                  <div key = {i} >
                    <img src={artist.images[1].url} width="200" alt="" />
                    <h5>{artist.name}</h5>
                    <a href={'/albums/${artist.id}/tracks'}>View Tracks</a>  
                  </div>
                )
            }) }         
        </div> 
    </Layout>  
    );
}



module.exports = Albums
const React = require("react");
const Layout = require("./Layout");

function ArtistSearchResult(props) {
    
    //console.log("Cherry Picked [0] name: ", props.body.artists.items[0].name);
    //console.log("Cherry Picked [0] image [0].url: ", props.body.artists.items[0].images[0].url);
    //console.log("Sample item (6) ", props.body.artists.items[6]);
  
    return (
        <Layout>
            <h1>Search result:</h1>
            <div className="container">
            { 
                props.body.artists.items.map((el, i)=>{
                if (!el.images[0]){
                    //console.log("this artist search returns no image[0] for element "+ el)
                }else{
                    return (
                    <div key={i} className="result">
                        <img src= {el.images[0].url}></img>
                        <div>
                            <h2>{el.name} </h2>
                            <a className="card-button" href={"/albums/"+el.id}>View Albums </a>
                        </div>
                    </div>
                    )
                }
            })    
            }
            </div>
        </Layout>
    )
}
module.exports = ArtistSearchResult;

const React = require("react");
const Layout = require("./Layout");

function ArtistSearchResult(data) {
    
    //console.log("Cherry Picked [0] name: ", data.body.artists.items[0].name);
    //console.log("Cherry Picked [0] image [0].url: ", data.body.artists.items[0].images[0].url);
    //console.log("Sample item (6) ", data.body.artists.items[6]);
  
    const items = data.body.artists.items;
    return (
        <Layout>
        {
        items.map((el, i)=>{
            console.log (el.name);
            if (!el.images[0]){
                //console.log("this artist search returns no image[0] for element "+ el)
            }else{
                return (
                <div key={i} className="artistResult">
                <img src= {el.images[0].url}></img>
                <h2>{el.name} </h2>
                <a href={"/albums/"+el.id}>View Albums </a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </div>
            )

            }
            
            
        })    
        }
        </Layout>
    )
    
}
module.exports = ArtistSearchResult;

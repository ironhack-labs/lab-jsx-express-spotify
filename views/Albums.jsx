const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  //console.log("showing props at Albums:"+props.body.items[0].name)
  return <Layout>
  <h1>Albums Search Result</h1>
  
  {
    props.body.items.map((el, i)=>{
      if (!el.images[0]) {
        {/* return (
        <div class="albumsResult" key={i}>
          <h2>No picture 0 for album {el.name}</h2>
        </div>
        ) */}
      } else {
      return (
      <div class="albumsResult" key={i}>
        <img src={el.images[0].url}/>
        <h2>{el.name}</h2>
        <a class="button" href={"/tracks/"+el.id}>View tracks</a>
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

  }</Layout>;
}
module.exports = Albums;

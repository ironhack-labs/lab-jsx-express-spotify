const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  //console.log("showing props at Albums:"+props.body.items[0].name)
  return <Layout>{
    props.body.items.map((el, i)=>{
      if (!el.images || el.images ===[]) {
        <div class="albumsResult" key={i}>
        <h2>No pictures for album {el.name}</h2>
      </div>
      } else {
      return (
      <div class="albumsResult" key={i}>
        <img src={el.images[0].url}/>
        <h2>{el.name}</h2>
      </div>
      )
      }
    })

  }</Layout>;
}
module.exports = Albums;

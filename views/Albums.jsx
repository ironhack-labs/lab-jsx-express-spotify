const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  //console.log("showing props at Albums:"+props.body.items[0].name)
  
  
  
  
  return (
    <Layout>
      <h1>Albums Search Result</h1>
      <div className="container">
      {
        props.body.items.map((el, i)=>{
        if (!el.images[0]) {
            //No picture 0 for album {el.name}
        } else {
          return (
          <div className="result" key={i}>
            <img src={el.images[0].url}></img>
            <div>
              <h2>{el.name}</h2>
              <a className="card-button" href={"/tracks/"+el.id}>View tracks</a>
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
module.exports = Albums;

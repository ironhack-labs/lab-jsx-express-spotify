
const React = require('react');
const Layout = require('./Layout');


function Tracks(props) {
    return (
        <Layout>
          <h1>Tracks</h1>
          {
            //console.log("props body items 0:"+props.body.items[0].name)
            props.body.items.map((el, i)=>{
                return(
                    <div key={i} class="track">
                        <span>{el.name}</span>
                        <a href="/">Play</a>
                    </div>
                )

            })

          }
          
         
        
        </Layout>
        
      );
      
}
module.exports = Tracks;
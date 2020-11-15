const React = require("react"); 
const Layout = require('./Layout')

function Albums (data) {
    return(
        <Layout>
            <div>
               <h2>Albums</h2> 
                {data.body.items.map((albums,i)=>{
                    return(
                        <div key={i}>
                        <h2>{albums.name}</h2>
                        <img src={albums.images[1]} />
                        <button><a href={`/tracks/${albums.id}`}>View tracks</a></button>
                    </div>
                    )
                })
                }
            </div>    
        </Layout>
    )
    }
module.exports = Albums; 

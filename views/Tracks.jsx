const React = require("react"); 
const Layout = require('./Layout')

function Tracks (data){
    return (
        <Layout>
            <h2>Tracks</h2>
            {data.body.items.map((tracks,i)=> {
                return (
                    <div key={i}>
                        <h2>{tracks.name}</h2>
                        <audio controls src={tracks.preview_url}>
                        Your browser does not support the
                        <code>audio</code> element.
                        </audio>
                    </div>
                )
            })
            }
        </Layout>
    )
}

module.exports = Tracks
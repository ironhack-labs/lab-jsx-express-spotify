const React = require("react"); 
const Layout = require('./Layout')

function Tracks (props){
    return(
        <Layout>
            <div>  
                <h2>Hello TRacks</h2>
                {props.items.map((results, i) => {
                    return (
                    <div key={i}>
                        <h5>{results.name}</h5>
                        <br/>
                        <audio controls src={results.preview_url}>Your browser does not support the<code>audio</code> element.</audio>
                    </div>
                    );
                })}
            </div>
        </Layout>
    )
}
module.exports = Tracks; 


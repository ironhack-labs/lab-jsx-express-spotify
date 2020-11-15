const React = require('react');
const Layout = require('./layout');

function TrackSearchResult(props){
    
    return (
        <Layout>
        <div> 
        {props.items.map((track, i)=>{
            return (
                <div key = {i}> 
                <h2>{track.name}</h2>
                <audio controls>
                    <source src={track.preview_url} type="audio/ogg" />
                    <source src={track.preview_url}  type="audio/mpeg" />
                        Your browser does not support the audio tag.
                </audio>               
                </div>
                   )
                })         
        }
        </div>
        </Layout>
        )
        }
            
    module.exports = TrackSearchResult;
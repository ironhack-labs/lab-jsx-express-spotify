const React = require('react');
const Layout = require('./Layout');

function Tracks(props) {
  return (
    <Layout>
      <div> {
        props.items.map((track, i) => {
          console.log(tracks)
          return (
          <div key={i}>
            {!album.images ? null : (<img src={album.images[1].url} width="200" alt="" /> ) } 
            <h5>{track.name}</h5>
            <p>{!album.artists? null : album.artists[0].name}</p>
          </div>)
        })}
      </div>
    </Layout>
  );
}

module.exports = Tracks;
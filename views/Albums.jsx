const React = require('react');
const Layout = require('./Layout');

function Albums(props) {
  return (
    <Layout>
      <div> {
        props.items.map((album, i) => {
          console.log(album)
          return (
          <div key={i}>
            { !album.images ? null : (<img src={album.images[1].url} width="200" alt="" /> ) } 
            <h5>{album.name}</h5>
            <p>{!album.artists? null : album.artists[0].name}</p>
            <a href={`/tracks/${album.id}`}>View Tracks</a>
          </div>)
        })}
      </div>
    </Layout>
  );
}

module.exports = Albums;
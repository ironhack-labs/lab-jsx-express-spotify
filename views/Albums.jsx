const React = require("react");
const Layout = require("./layout");

function Albums(props) {
  const albumsArray = props.items;
  const albums = [albumsArray[0], albumsArray[albumsArray.length - 1]];

  return (
    <Layout>
      <div className="artistdiv">
        <h1 id="artisttitle">Tus últimas tendencias</h1>
        {albums.map((item, index) => {
          return (
            <div className="artistcontainer" key={index}>
              <div className="artistinnercontainer">
                <div className="pointlessname">
                  <p>ARTIST MOST LISTENED</p>
                </div>
                <div className="artistname">
                  <h3>{item.name.slice(-15)}</h3>
                  {item.images.length != 0 ? (
                    <img
                      src={item.images[0].url}
                      height="280px"
                      width="280px"
                      alt=""
                    />
                  ) : (
                    <img
                      src="/images/bjork.jpg"
                      height="280px"
                      width="280px"
                    ></img>
                  )}
                </div>
                <a href={`/album-tracks/${item.id}`}>View tracks</a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Albums;

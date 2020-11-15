const React = require("react");
const Layout = require("./Layout");

function ArtistSearchResult(props) {
  return (
    <Layout>
      <div class="result-container">
        {props.data.map((searchResObj, i) => {
          return (
            <div class="result-card" key={i}>
              <img
                class="cover-picture"
                src={
                  searchResObj.images.length === 0
                    ? null
                    : searchResObj.images[0].url
                }
              />
              <h2>{searchResObj.name}</h2>
              <a href={`/albums/${searchResObj.id}`}>View Albums</a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = ArtistSearchResult;

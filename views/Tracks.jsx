const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  const tracksArray = props.items;
  console.log(tracksArray);

  return (
    <Layout>
      <div id="trackscontainer">
        {tracksArray.map((item, index) => {
          return (
            <div id="trackdiv" key={index}>
              <h3>{item.name}</h3>
              <audio controls>
                <source src={item.preview_url} type="audio/mp3" />
              </audio>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Tracks;

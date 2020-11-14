const Express = require("express");
const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  return (
    <Layout>
      {props.items.map((element) => (
        <div className="artist-result ">
          <h3>{element.name}</h3>
          <img src={element.images[2] ? element.images[2].url : false} />
          <br />
          <a
            className="artist-link"
            href={element.id ? "/tracks/" + element.id : undefined}
          >
            {" "}
            ALBUM{" "}
          </a>
        </div>
      ))}
    </Layout>
  );
}

module.exports = Albums;

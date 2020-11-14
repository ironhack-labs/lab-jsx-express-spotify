const Express = require("express");
const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  return (
    <Layout>
      <div className="results-container">
        {props.items.map((element) => (
          <div class="artist-result">
            <img
              src={
                element.images[1]
                  ? element.images[1].url
                  : "/images/noalbum.gif"
              }
              width={element.images[1] ? element.images[1].width : "320"}
              height={element.images[1] ? element.images[1].height : "320"}
            />
            <h3>{element.name}</h3>
            <a
              class="artist-link"
              href={element.id ? "/tracks/" + element.id : undefined}
            >
              {" "}
              View tracks{" "}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Albums;

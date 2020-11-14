const Express = require("express");
const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  return (
    <Layout>
      {props.items.map((element) => (
        <div>
          <h1>{element.name}</h1>
          <img src={element.images[2] ? element.images[2].url : false} />
          <br />
          <a href={element.id ? "/tracks/" + element.id : undefined}> ALBUM </a>
        </div>
      ))}
    </Layout>
  );
}

module.exports = Albums;

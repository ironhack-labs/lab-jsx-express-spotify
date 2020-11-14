const Express = require("express");
const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  // console.log("props", props);
  return (
    <Layout>
      <table>
        <tr>
          <td>Title</td>
          <td>Listen</td>
        </tr>
        {props.items.map((element) => (
          <tr>
            <td>{element.name}</td>
            <td>
              <audio controls autoplay src={element.preview_url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </td>
          </tr>
        ))}
      </table>
    </Layout>
  );
}

module.exports = Tracks;

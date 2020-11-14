const Express = require("express");
const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  console.log("props", props);
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <td className="td-head">Title</td>
            <td className="td-head">Listen</td>
          </tr>
        </thead>
        <tbody>
          {props.items.map((element) => (
            <tr>
              <td className="td-body">{element.name}</td>
              <td className="td-body">
                <audio
                  id={element.id}
                  controls
                  autoPlay
                  src={element.preview_url}
                >
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

module.exports = Tracks;

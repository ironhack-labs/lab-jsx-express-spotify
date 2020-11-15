const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  return (
    <Layout>
      <table>
        <thead>
          <th>Title</th>
          <th>Listen</th>
        </thead>
        <tbody>
          {props.data.map((track, i) => {
            return (
              <tr key={i}>
                <td>{track.name}</td>
                <td>
                  {!track.preview_url ? (
                    "Track not available"
                  ) : (
                    <audio controls src={track.preview_url}></audio>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}

module.exports = Tracks;

const React = require('react');
const Layout = require('./Layout');

function Tracks(props) {
    console.log(props)
  return (
    <Layout>
      <div> {
        props.items.map((track, i) => {
          console.log(track)
          return (
          <div key={i}>
            <h5>Track name : {track.name}</h5>
            <p>Artist: {!track.artists? null : track.artists[0].name}</p>
            <p>Duration: {millisToMinutesAndSeconds(track.duration_ms) } minutes</p>
            <a href={track.external_urls.spotify}>Listen from Browser</a>
          </div>)
        })}
      </div>
    </Layout>
  );
}

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
	//ES6 interpolated literals/template literals 
  	//If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

module.exports = Tracks;

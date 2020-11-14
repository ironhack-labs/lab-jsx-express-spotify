const React = require("react");
const Layout = require("./Layout");
function Home() {
  return (
    <Layout>
      <div className="homediv">
        <p id="homep">Recently heard</p>
        <h1>Dive in again</h1>
        <h2>
          Get back to what you were listening to, right where you left off.
        </h2>
        <form action="/artist-search" method="GET">
          <input type="text" name="search" placeholder="Look for..." />
          <button type="submit">Search for an Artist</button>
        </form>
        <div className="homeimages">
          <img className="homeimage" src="/images/bjork.jpg" alt="" />
          <img className="homeimage" src="/images/eraser.jpg" alt="" />
          <img className="homeimage" src="/images/coxon.jpg" alt="" />
          <img
            className="homeimage"
            src="/images/Kanyewest_collegedropout.jpg"
            alt=""
          />
          <img className="homeimage" src="/images/blur.jpg" alt="" />
          <img className="homeimage" src="/images/abbyroad.jpeg" alt="" />
        </div>
      </div>
    </Layout>
  );
}
module.exports = Home;

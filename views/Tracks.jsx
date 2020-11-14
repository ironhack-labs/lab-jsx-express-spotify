const React = require('react');
const Layout = require('./Layout');


function Tracks(props) {
    return (
        <Layout>
            <div id="track-page">
                <div id="track-titles">
                    <h2>Title</h2>
                    <h2>Listen</h2>
                </div>
                {props.data.map((prop, i) => {
                    return (
                        <div id="track">
                            {/* {prop.preview_url.length === 0 ? null : */}
                            <figure class="track" key={i}>
                                <figcaption>Listen to the {prop.name}:</figcaption>

                                <audio
                                    controls

                                    src={`${prop.preview_url}`}>
                                </audio>
                            </figure>

                        </div>
                    )
                }
                )}
            </div>
        </Layout>
    )
}

module.exports = Tracks;

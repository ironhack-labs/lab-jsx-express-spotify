const React = require('react');
const Layout = require('./Layout');


function Tracks(props) {
    console.log(props.data[0]);
    return (
        <Layout>
            <div>
                {props.data.map((prop, i) => {
                    return (
                        <div>
                            <h2>Title</h2>
                            <h2>Listen</h2>
                            {prop.preview_url.length === 0 ? null :
                                <figure key={i}>
                                    <figcaption>Listen to the {prop.name}:</figcaption>

                                    <audio
                                        controls

                                        src={`${prop.preview_url}`}>
                                    </audio>
                                </figure>}

                        </div>
                    )
                }
                )}
            </div>
        </Layout>
    )
}

module.exports = Tracks;

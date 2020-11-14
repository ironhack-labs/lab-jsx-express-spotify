const React = require('react');


function Tracks(props) {
    console.log(props.data[0].preview_url);
    return (

        <div>
            {props.data.map((prop, i) => {
                return (
                    <figure key={i}>
                        <figcaption>Listen to the T-Rex:</figcaption>
                        <audio
                            controls
                            src={prop.data.preview_url}>
                        </audio>
                    </figure>
                )

            }
            )}


        </div>
    )
}

module.exports = Tracks;

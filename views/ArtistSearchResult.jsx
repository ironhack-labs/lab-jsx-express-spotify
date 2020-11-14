const React = require('react');

function ArtistSearchResult(props) {
    console.log(props.data);

    return (
        <div>
            {props.data.map((prop, i) => {
                return (<div key={i}>
                    <h2>{prop.name}</h2>
                    {prop.images.length === 0 ? null :
                        <img src={`${prop.images[1].url}`} />}

                    <a href={`/albums/${prop.id}`}>View Albums</a>
                </div>)

            })}


        </div>
    )
}

module.exports = ArtistSearchResult;

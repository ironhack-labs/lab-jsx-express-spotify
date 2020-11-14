const React = require('react');
const Layout = require('./Layout');


function ArtistSearchResult(props) {

    return (
        <Layout>
            <main>
                <div id="artists">
                    {props.data.map((prop, i) => {
                        return (
                            <div class="individual-artist" key={i}>
                                {prop.images.length === 0 ? null :
                                    <img class="artist-photo" src={`${prop.images[1].url}`} />}
                                <h2 class="artist-name">{prop.name}</h2>

                                <a class="view-albums-link" href={`/albums/${prop.id}`}>View Albums</a>
                            </div>
                        )
                    })}
                </div>
            </main>
        </Layout>
    )
}

module.exports = ArtistSearchResult;

const React = require('react');
const Layout = require('./Layout');

function Albums(props) {
    return (
        <Layout>
            <main>
                <div id="albums">
                    {props.data.map((prop, i) => {
                        return (
                            <div class="individual-artist" key={i}>

                                {prop.images.length === 0 ? null :
                                    <img src={`${prop.images[1].url}`} />}
                                <h2 class="track-name">{prop.name}</h2>

                                <a class="view-tracks-link" href={`/albums/${prop.id}/tracks`}>View Tracks</a>

                            </div>)

                    })}
                </div>
            </main>
        </Layout>
    )
}


module.exports = Albums;

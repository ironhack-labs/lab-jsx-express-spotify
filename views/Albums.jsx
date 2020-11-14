const React = require('react');
const Layout = require('./Layout');

function Albums(props) {
    return (
        <Layout>
            <main>
                <div id="albums">
                    {props.data.map((prop, i) => {
                        return (
                            <div key={i}>

                                <h2>{prop.name}</h2>
                                {prop.images.length === 0 ? null :
                                    <img src={`${prop.images[1].url}`} />}
                                <a href={`/albums/${prop.id}/tracks`}>View Tracks</a>

                            </div>)

                    })}
                </div>
            </main>
        </Layout>
    )
}


module.exports = Albums;

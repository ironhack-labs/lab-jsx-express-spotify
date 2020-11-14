const React = require('react');

function Home() {

    return (
        <form action="/artist-search" method="GET">
            <input type="name" name="artistname" placeholder="Artist Name" />
            <button type="submit">Search for an Artist</button>

        </form>
    )
}


module.exports = Home;
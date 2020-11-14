const React = require('react');

function Home(){
    return(
        <form action="/artist-search" method="GET">
            <input type="text" name="artist" placeholder=""/> 
            <br/>
            <button type="submit">Search for an Artist</button>
        </form>
    )
}

module.exports = Home
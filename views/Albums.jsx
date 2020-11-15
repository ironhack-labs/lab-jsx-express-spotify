const React = require("react"); 
const Layout = require('./Layout')

function Albums (props){
    return(
        <Layout>
            <div>  
                <h2>Hello albums</h2>
                {props.items.map((results, i) => {
            return (
              <div key={i}>
            
                <h5>{results.name}</h5>
                { results.images.length>0 && ( <> <img src={results.images[0].url} height="100px"/> </>)}
                <br/>
                <br/>
                <a href={results.external_urls.spotify} >Go see on spotify</a>
                <br/>
                <br/>
                <a href={`/album/${results.id}`} >Go see album</a>
                
              </div>
            );
          })}
               
            </div>
        </Layout>
    )
}
module.exports = Albums; 



// {
//     body: {
//       href: 'https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on',
//       items: [
//         [Object], [Object], [Object],
//         [Object], [Object], [Object],
//         [Object], [Object], [Object],
//         [Object], [Object], [Object],
//         [Object], [Object], [Object],
//         [Object], [Object], [Object],
//         [Object], [Object]
//       ],
//       limit: 20,
//       next: 'https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk/albums?offset=20&limit=20&include_groups=album,single,compilation,appears_on',
//       offset: 0,
//       previous: null,
//       total: 100
//     },
//     headers: {
//       'content-type': 'application/json; charset=utf-8',
//       'cache-control': 'public, max-age=72253',
//       'x-robots-tag': 'noindex, nofollow',
//       'access-control-allow-origin': '*',
//       'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token',
//       'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
//       'access-control-allow-credentials': 'true',
//       'access-control-max-age': '604800',
//       'content-encoding': 'gzip',
//       'strict-transport-security': 'max-age=31536000',
//       'x-content-type-options': 'nosniff',
//       date: 'Sun, 15 Nov 2020 14:32:37 GMT',
//       server: 'envoy',
//       via: 'HTTP/2 edgeproxy, 1.1 google',
//       'alt-svc': 'clear',
//       connection: 'close',
//       'transfer-encoding': 'chunked'
//     },
//     statusCode: 200
// }
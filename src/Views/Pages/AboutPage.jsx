import * as React from 'react'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Some tips about the application</h3>
                <ul className="static-info">
                    <li>The stations page of this app shows a list of available stations to play. You decide how you want to order the stations and how they are displayed.</li>
                    <li>You are able to click on a station in the list to get details about the station should be displayed and the associated stream will begin playing</li>
                    <li>Tags can help you what to listen to based on tags.</li>
                    <li>You can make the filtering useful due to reliability and popularity information associated with a station.</li>
                </ul>
                <p>Mini TuneIn API that returns a list of stations:</p>
                <pre>
{`{
    data: [
        {
            id: "s306935",
            description: "The Element West is the first 24/7 West Coast station. Your host DJ Carisma plays nothing but the hottest West Coast hip hop, breaking the artists of tomorrow before you hear them anywhere else.",
            name: "The Element West",
            imgUrl: "https://cdn-profiles.tunein.com/s306935/images/logoq.jpg",
            streamUrl: "http://tunein4.streamguys1.com/elmntfree1",
            reliability: 64,
            popularity: 3,
            tags: [
                "hip hop",
                "music"
            ]
        },
        {
            id: "s249995",
            description: "Latin Hits is your source for the hottest chart topping hits of the moment from artists like J Balvin, Shakira and more! Enjoy your all your favorites and discover the freshest sounds of Latin's bright future right here.",
            name: "Latin Hits",
            imgUrl: "http://cdn-profiles.tunein.com/s249995/images/logoq.png",
            streamUrl: "http://tunein4.streamguys1.com/ltnhtfree1?aw_0_1st.age=34&aw_0_1st.gender=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548844301",
            reliability: 34,
            popularity: 2.7,
            tags: [
                "latin",
                "pop latino",
                "music"
            ]
        },
        {
            id: "s34804",
            name: "KQED",
            description: "KQED Public Radio, home of Forum with Michael Krasny and The California Report, is the most-listened-to public radio station in the nation and the most-listened-to radio station in the Bay Area, with an award-winning news and public affairs program service.",
            imgUrl: "https://cdn-radiotime-logos.tunein.com/s34804q.png",
            streamUrl: "http://50.31.186.115:80/kqedradio.mp3",
            reliability: 72,
            popularity: 4.4,
            tags: [
                "news",
                "public radio",
                "current affairs"
            ]
        },
        {
            id: "s249973",
            name: "Smooth Jazz",
            description: "Sit down and relax to the smooth, downtempo jazz of Kenny G, Sade, Anita Baker and George Benson.",
            imgUrl: "http://cdn-radiotime-logos.tunein.com/s249973q.png",
            streamUrl: "http://rfcmedia.streamguys1.com/smoothjazz.mp3?aw_0_1st.age=34&aw_0_1st.gender=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548844763",
            reliability: 93,
            popularity: 3.5,
            tags: [
                "jazz",
                "chicago",
                "music",
                "top"
            ]
        },
        {
            id: "s249994",
            name: "Classic Rock",
            description: "Long live rock! Turn the volume up to 11 with the classic hits of the '60s, '70s and '80s. From Led Zeppelin and Pink Floyd, to AC/DC and Queen, to Tom Petty and Guns N' Roses, classic rock lives here.",
            imgUrl: "https://cdn-profiles.tunein.com/s249994/images/logoq.png",
            streamUrl: "http://rfcmedia.streamguys1.com/classicrock.mp3?aw_0_1st.age=34&aw_0_1st.gender=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548845334",
            reliability: 83,
            popularity: 3.8,
            tags: [
                "classic rock",
                "music"
            ]
        },
        {
            id: "s242677",
            name: "Today's Hits",
            description: "Today's Hits is the pulse of popular music's beating heart. Follow every new song climbing up the charts, along with 24/7 hits from Drake, Taylor Swift, Bruno Mars, Ed Sheeran and more.",
            imgUrl: "https://cdn-profiles.tunein.com/s242677/images/logoq.png",
            streamUrl: "http://rfcmedia.streamguys1.com/MusicPulse.mp3?aw_0_1st.age=34&aw_0_1st.gender=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548845498",
            reliability: 98,
            popularity: 4.6,
            tags: [
                "top hits",
                "pop",
                "music"
            ]
        },
        {
            id: "s224628",
            name: "Country Roads",
            description: "Country Roads is the #1 station for today's biggest country music hits. From Carrie Underwood and Jason Aldean to Florida Georgia Line and Lady Antebellum, all paths lead to Country Roads.",
            imgUrl: "https://cdn-profiles.tunein.com/s224628/images/logoq.png",
            streamUrl: "http://rfcmedia.streamguys1.com/countryroads.mp3?aw_0_1st.age=34&aw_0_1st.gender=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548845654",
            reliability: 86,
            popularity: 4,
            tags: [
                "country hits",
                "music"
            ]
        },
        {
            id: "s32870",
            name: "KGO",
            description: "The Next Generation of KGO 810",
            imgUrl: "https://cdn-profiles.tunein.com/s32870/images/logoq.png",
            streamUrl: "http://18533.live.streamtheworld.com/KGOAM_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6I",
            reliability: 76,
            popularity: 2.6,
            tags: [
                "news"
            ]
        },
        {
            id: "s292162",
            name: "CNN",
            description: "CNN International has a distinct programming line-up to take viewers beyond the headlines with a transparent, diverse and intelligent product that connects them to the world’s most impactful stories.",
            imgUrl: "https://cdn-profiles.tunein.com/s292162/images/logoq.png",
            streamUrl: "http://tunein.streamguys1.com/secure-CNNi?key=c1b737c6f1e88cc38377c749d0d4a4aa3d3976bb91f12ec50ee2867801f52331",
            reliability: 96,
            popularity: 4.8,
            tags: [
                "news",
                "world news"
            ]
        },
        {
            id: "s24948",
            name: "BBC",
            description: "International news, analysis and information from the BBC World Service. In-depth news and sport with audio, video and forums.",
            imgUrl: "https://cdn-radiotime-logos.tunein.com/s24948q.png",
            streamUrl: "http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws",
            reliability: 96,
            popularity: 4.7,
            tags: [
                "news",
                "world news"
            ]
        }
    ]
}
`}
                </pre>
            </div>
        )
    }

}

import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero
        id="1"
        country="Hrvatska"
        image="dubb.png"
        location = "locationn.png"
        link="View on Google maps"
        title="Dubrovnik"
        landmark ="Dubrovačke zidine"
        date="12 Jan, 2023 - 18 Jan, 2023"
        description="Situated on the southern Adriatic Sea coast, it is usually regarded as the most picturesque city on the Dalmatian coast and is referred to as the “Pearl of the Adriatic.It is known for its rich history and culture, stunning architecture, and picturesque landscapes. The city's Old Town is listed as a UNESCO World Heritage Site and full of historic landmarks like the Walls of Dubrovnik and Rector's Palace.”"
      />

<Hero
        id="2"
        country="Hrvatska"
        image="rastokke.png"
        location = "locationn.png"
        link="View on Google maps"
        title="Rastoke"
        landmark ="Rastoke"
        date="11 Feb, 2023 - 18 Feb, 2023"
        description="A watermill village situated where the blue-green waters of river Slunjcica flows into the Korana river. Many ancient civilizations, as well as contemporary urban environments whitness that the water has always attracted people to come to its banks and settle there. For thousands of years, the waters of Korana and Slunjcica, and their flora and fauna, fought the laws of nature, and as a result of this struggle in the limestone plateau, a remarkable canyon was carved in for us to take pleasure in. "
      />
            <Hero
        id="3"
        country="Norway"
        image="norway.png"
        location = "locationn.png"
        link="View on Google maps"
        title="Dubrovnik"
        landmark ="Geirangerfjord"
        date="03 Jul, 2024 - 15 Jul, 2024"
        description="The iconic Geirangerfjord is known for its spectacular waterfalls and deserted fjord farms high up on the steep cliffsides. The Geirangerfjord is one of Norway's most popular natural attractions, situated in Stranda municipality. The fjord is 260 metres deep while the surrounding mountains are 1600-1700 metres high."
      />

<Hero
        id="4"
        country="Tanzania"
        image="kilimanjaro.png"
        location = "locationn.png"
        link="View on Google maps"
        title="Mount Kilimanjaro"
        landmark ="Mount Kilimanjaro"
        date="14 Jun, 2024 - 21 Jun, 2024"
        description="Mount Kilimanjaro is the tallest mountain on the African continent and the highest free-standing mountain in the world. 9. Kilimanjaro has three volcanic cones, Mawenzi, Shira and Kibo. Mawenzi and Shira are extinct but Kibo, the highest peak, is dormant and could erupt again."
      />

<Hero
        id="5"
        country="Japan"
        image="fuji.png"
        location = "locationn.png"
        link="View on Google maps"
        title="Mount Fuji"
        landmark ="Mount Fuji"
        date="20 Feb, 2024 - 25 Feb, 2024"
        description="Rising to 12,388 feet (3,776 metres), Mount Fuji is the tallest mountain in Japan and is known for its graceful conical form. It is the country sacred symbol, and temples and shrines are located around and on the volcano. Climbing the mountain has long been a religious practice, and Fuji is one of Japan`s most popular tourist attractions."
      />
    </div>
  );
}

export default App;

{
  /* <Card
            key = {item.id}
            country = [item.country]
            link = {item.link}
            title = {item.title}
            date = {item.date}
            description = {item.description}
    
    /> */
}

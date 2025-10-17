/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./News.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const newsLinks = [
    {
    id: 13,
    year: 2025,
    title:
      "Grant announcement: National Science Foundation Collaborative Archaeology Grant:  Drivers of Variation in Social Organization, co-PIs with Sarah Rowe and Guy Duke",
    description: "Interviewed by Ché Abdullah about creating space for the protection of African American burial grounds and protecting Cedar Grove Cemetery.",
      link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2513994&HistoricalAwards=false",
  },
  {
    id: 12,
    year: 2024,
    title:
      "Story Corps Podcast: Sara Juengst and Ché Abdullah",
    description: "Interviewed by Ché Abdullah about creating space for the protection of African American burial grounds and protecting Cedar Grove Cemetery.",
      link: "https://www.lincolntimesnews.com/news/digging-for-history-graduate-students-conduct-archeological-dig-at-mount-vernon-rosenwald-school/article_9e2e2210-6cb9-11ed-8b68-af5d1045c9ad.html",
  },
  {
    id: 1,
    year: 2022,
    title:
      "Lincoln Times: Digging for history: Graduate students conduct archeological dig at Mount Vernon Rosenwald School",
    description: "Interviewed and featured in the Lincoln Times News regarding the Mt. Vernon Rosenwald School excavation",
    link: "https://www.lincolntimesnews.com/news/digging-for-history-graduate-students-conduct-archeological-dig-at-mount-vernon-rosenwald-school/article_9e2e2210-6cb9-11ed-8b68-af5d1045c9ad.html",
  },
  {
    id: 2,
    year: 2021,
    title:
      "The Scientist: Scientists Reconstruct Warrior Pharaoh’s Murder Using CT Scans",
    description:  "Expert Commenter, The Scientist magazine regarding article “Computed tomography study of the mummy of King Seqenenre Taa II: New insights into his violent death”",
    link: "https://www.the-scientist.com/news-opinion/scientists-reconstruct-warrior-pharaohs-murder-using-ct-scans-68463",
  },
  {
    id: 3,
    year: 2020,
    title: "AnthroBiology Podcast: Dr. Sara Juengst - Bioarchaeology",
    description: "Interviewed and featured by the AnthroBiology Podcast",
    link: "https://podcasts.apple.com/us/podcast/dr-sara-juengst-bioarchaeology/id1493360298?i=1000467457377",
  },
  {
    id: 4,
    year: 2020,
    title:
      "Smithsonian Magazine: 8,000 Years Ago, a Child in Indonesia Was Buried Without Their Arms and Legs",
    description: "Research referenced in Smithsonian Magazine coverage of child burials from India",
    link: "https://www.smithsonianmag.com/smart-news/ancient-burial-child-arms-and-legs-removed-found-indonesia-180976227/",
  },
  {
    id: 5,
    year: 2019,
    title:
      "Smithsonian  Magazine: Twelve Fascinating Finds Revealed in 2019",
    description: "Research on unique Ecuadorian burials ranked 2nd most fascinating find of 2019” by Smithsonian  Magazine",
    link: "https://www.smithsonianmag.com/history/twelve-fascinating-finds-revealed-2019-180973837/",
  },
  {
    id: 6,
    year: 2019,
    title:
      "LiveScience: The 10 Biggest Archaeology Discoveries of 2019",
    description: "Research on unique Ecuadorian burials ranked as one of the “Top 10 Biggest Archaeological Discoveries of 2019” by LiveScience",
    link: "https://www.livescience.com/biggest-archaeology-discoveries-2019.html",
  },
  {
    id: 7,
    year: 2019,
    title:
      "Washington Post: Infant skeletons wearing ‘helmets’ of other children’s skulls may have been a sad farewell",
    description:  "Research on unique Ecuadorian burials featured on the Washington Post",
    link: "https://www.washingtonpost.com/science/2019/11/23/infant-skeletons-wearing-helmets-other-childrens-skulls-may-have-been-sad-farewell/",
  },
  {
    id: 8,
    year: 2019,
    title:
      "Smithsonian Magazine: Archaeologists Unearth Remains of Infants Wearing ‘Helmets’ Made From the Skulls of Other Children",
    description: "Research on unique Ecuadorian burials featured in Smithsonian Magazine",
    link: "https://www.smithsonianmag.com/smart-news/remains-infants-found-wearing-helmets-made-skulls-other-children-180973608/",
  },
  {
    id: 9,
    year: 2019,
    title:
      "BBC Science Focus: Babies from ancient Ecuador found wearing the skulls of other children as helmets",
    description: "Research on unique Ecuadorian burials featured on BBC Science Focus",
    link: "https://www.sciencefocus.com/news/babies-from-ancient-ecuador-found-wearing-the-skulls-of-other-children-as-helmets/",
  },
  {
    id: 10,
    year: 2019,
    title:
      "Gizmodo: Infant Skeletons Wearing ‘Helmets’ Made of Other Children’s Skulls Stun Archaeologists",
    description:  "Research on unique Ecuadorian burials featured on Gizmodo en Español",
    link: "https://es.gizmodo.com/nadie-sabe-por-que-estos-bebes-fueron-enterrados-usando-1839976062",
  },
  {
    id: 10,
    year: 2019,
    title:
      "Gizmodo: Infant Skeletons Wearing ‘Helmets’ Made of Other Children’s Skulls Stun Archaeologists",
    description:  "Research on unique Ecuadorian burials featured on Gizmodo in English",
    link: "https://gizmodo.com/infant-skeletons-wearing-helmets-made-of-other-childr-1839967365",
  },
  {
    id: 11,
    year: 2019,
    title:
      "The Charlotte Observer: Why were ancient babies buried in ‘helmets’ made of skulls? NC experts find clues",
    description: "Research on unique Ecuadorian burials featured in the Charlotte Observer",
    link: "https://www.charlotteobserver.com/news/state/north-carolina/article237585894.html",
  },
];

const News = () => {
  return (
    <div>
      <div className="container max-w-[1000px] mx-auto flex  justify-center  text-[#E7ECEF] text-2xl font-bold">
        <p className="pt-1 pb-3">// In the News</p>
      </div>

      
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          className=" news_container mySwiper"
        >
          {newsLinks.map(({ id, year, title, description, link }) => {
            return (
              <SwiperSlide className="news_item rsch_hover" key={id}>
                <a href={link} target="_blank" rel="noreferrer">
                  <h3>{title}</h3> <br></br>
                  <h5>{description}</h5>
                  

                  <hr className="mt-8 w-48 h-1 mx-auto rounded border-0 bg-[#A3CEF1]"></hr>
                  <small className=""> {year}</small>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
    </div>
  );
};

export default News;

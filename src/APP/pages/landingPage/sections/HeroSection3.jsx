import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { partners } from "../data";
// import { bannerImg } from "../../../../assets/images/hero-section";

import image1 from "./../../../../assets/images/community/Akinyi.png";
import image2 from "./../../../../assets/images/community/akinyiux.png";
import image3 from "./../../../../assets/images/community/community.png";
import image4 from "./../../../../assets/images/community/community.png";
import image5 from "./../../../../assets/images/community/eakinyi.png";
import image6 from "./../../../../assets/images/community/Emmy.png";
import image7 from "./../../../../assets/images/community/galleryimage1.png";
import image8 from "./../../../../assets/images/community/galleryimage2.png";
import image9 from "./../../../../assets/images/community/galleryimage3.png";
import image10 from "./../../../../assets/images/community/galleryimage4.png";
import image11 from "./../../../../assets/images/community/galleryimage5.png";
import image12 from "./../../../../assets/images/community/galleryimage6.png";
import image13 from "./../../../../assets/images/community/galleryimage7.png";
import image14 from "./../../../../assets/images/community/galleryimage8.png";
import image15 from "./../../../../assets/images/community/galleryimage9.png";

function HeroSection3() {
  // Array of image URLs
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  // Array of circle colors
  const circleColors = [
    "bg-grey1",
    "bg-grey2",
    "bg-grey3",
    "bg-grey4",
    "bg-grey5",
    "bg-green1",
    "bg-green2",
    "bg-green3",
    "bg-green4",
    "bg-green5",
  ];

  // Function to generate random position
  const getRandomPosition = () => ({
    top: `${Math.random() * 70}vh`, // Adjust the range based on container size
    left: `${Math.random() * 90}vw`, // Adjust the range based on container size
    position: "absolute",
  });


  // Function to generate random size for both images and circles
  const getRandomSize = () => {
    const size = Math.floor(Math.random() * 150) + 10;
    return {
      width: `${size}px`,
      height: `${size}px`,
      objectFit: "cover", // Set object-fit to cover for images
      borderRadius: "9999px", // Set border-radius to create a circular shape
    };
  };

  // Randomly select a color from circleColors array
  const getRandomColor = () =>
    circleColors[Math.floor(Math.random() * circleColors.length)];

  return (
    <section className="p-3 md:px-10 flex flex-col items-center justify-center gap-2 max-w-[1440px] mx-auto">
      {/* Hero Header */}
      <div className="flex flex-col items-center justify-center gap-8 md:gap-4 max-w-[670px]">
        {/* hero desc */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center md:text-center">
          <h1 className="md:text-[40px] text-2xl leading-8 md:leading-normal font-medium text-gray-900">
            Accelerate your <span className="text-primary">growth</span> and{" "}
            <span className="text-primary">potential</span> of the tech
            enthusiasts
          </h1>
          <p className="text-sm md:text-xl font-normal leading-relaxed">
            SpaceYaTech is the fastest growing Africa, open-source community
            looking to change the way young Africans get started in technology.
          </p>

          <Link
            to="/community"
            preventScrollReset={true}
            className="text-white bg-primary border-0 py-3 px-8 focus:outline-none rounded-lg text-lg w-full md:w-fit text-center"
          >
            Join the community
          </Link>
        </div>

        {/* hero img */}

        <div className="flex flex-col items-center border-yellow-500 border min-w-[1440px] min-h-[700px] rounded-[70%] relative overflow-hidden">

          {/* Render images */}
          {images.map((imageUrl, index) => (
            <img
              key={`image-${index}`}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="absolute w-40 h-40 object-cover rounded-full"
              style={{
                ...getRandomPosition(),
                ...getRandomSize(),
                zIndex: Math.floor(Math.random() * 5), // Random z-index to control overlapping
              }}
            />
          ))}

          {/* Render circles */}
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={`circle-${index}`}
              className={`w-10 h-10 rounded-full absolute ${getRandomColor()}`}
              style={{
                ...getRandomPosition(),
                ...getRandomSize(),
                // zIndex: Math.floor(Math.random() * 5), // Random z-index to control overlapping
              }}
            />
          ))}

          {/* <HeroSection4 /> */}
          {/* Render other content if needed */}
        </div>
        {/* <div className="flex-1">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>

      {/* Partners */}
      <div className="my-6 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold">Our Partners</h2>

        <p className="max-w-[832px] text-center text-base font-normal">
          At SpaceYaTech, we thrive on innovation, knowledge and the support of
          our dedicated partners. Join us in celebrating the companies and
          individuals who make SpaceYaTech possible.
        </p>

        <Marquee
          className="overflow-auto flex flex-row gap-14 w-full items-center"
          pauseOnHover
          gradient
          gradientColor="white"
          gradientWidth={100}
        >
          {partners.map(({ id, img, name, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
              <img
                src={img}
                className="object-cover max-w-none px-7"
                alt={name}
              />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default HeroSection3;

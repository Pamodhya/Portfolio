import React, { useRef, useState } from "react";
import { techstack } from "../techstack";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import Background3D from "../components/bg-animation";

function Home() {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Advance");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle smooth scrolling
  const scrollToNextPage = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollTop + container.clientHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="page-container" ref={containerRef}>
      <div className="page page1 relative" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Background3D />
        </div>
        <div className="flex relative z-10">
          <div className="mt-60 font-semibold">
            <h1 className="text-left ml-60 text-5xl font-extrabold text-white ">
              Hi There !
            </h1>
            <h1 className="text-left ml-60 text-5xl font-extrabold  text-white">
              I'm a full stack{" "}
              <span className="developer-text text-yellow-300">Developer</span>
            </h1>
            <div className="mt-10">
              <a href="mailto:Pamodhyaprabhashi@gmail.com">
                <button className="px-4 py-2 ml-60 border-2 border-solid text-white border-yellow-500 bg-yellow-500 hover:bg-black hover:text-white">
                  Hire me
                </button>
              </a>
              <button className="px-4 py-2 ml-4 border-2 border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white text-white">
                Download CV
              </button>
            </div>
            <div className="social-icons mt-10 ml-28">
              <div>
                <a
                  href="https://www.instagram.com/invites/contact/?igsh=1ijntnrznbnjn&utm_content=ng8908i"
                  className="mr-4"
                >
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    size="3x"
                    style={{ color: "#E4405F" }}
                  />
                </a>
              </div>
              <br />
              <div>
                <a href="#" className="mr-4">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    size="3x"
                    style={{ color: "#1DA1F2" }}
                  />
                </a>
              </div>
              <br />
              <div>
                <a
                  href="https://www.linkedin.com/in/pamodhya-thotahewa-754b5923a/"
                  className="mr-4"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="3x"
                    style={{ color: "#0077B5" }}
                  />
                </a>
              </div>
              <br />
              <div>
                <a href="https://github.com/Pamodhya" className="mr-4">
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="3x"
                    style={{ color: "#FFFFFF" }} // Changed color to white
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="AnimeImage ml-48 mt-36">
            <img
              src="/images/anime2.webp"
              alt="Anime Image"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="page page2  mt-28">
        <div>
          <div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
            <h1 className="mt-10 text-5xl text-white font-bold text-center">
              About me
            </h1>
          </div>
          <div className="flex w-full mt-10">
            <div className="photo w-1/2 flex justify-center items-center">
              <img
                src="/images/photo.jpeg"
                alt="Image"
                className="w-72 h-auto max-w-md rounded-tl-lg rounded-br-lg"
              />
            </div>
            <div className="details w-1/2  items-center">
              <div className="text-3xl font-semibold text-white">
                Pamodhya Thotahewa
              </div>
              <div className="text-xl font-thin text-yellow-400">
                Full stack web developer
              </div>
              <div className="flex mt-10">
                <button className="border-2 border-solid text-white border-white px-8 py-2 ">
                  <p className="font-semibold text-yellow-400">Location</p>
                  <p>Matale,Sri Lanka</p>
                </button>
                <button className="border-2 border-solid text-white border-white px-8 py-2 ml-10">
                  <p className="font-semibold   text-yellow-400">Age</p>
                  <p>22</p>
                </button>
                <button className="border-2 border-solid text-white border-white px-8 py-2 ml-10 ">
                  <p className="font-semibold  text-yellow-400">Projects</p>
                  <p>10+</p>
                </button>
              </div>
              <div className="details w-2/3 flex justify-center items-center mt-12 text-white">
                <div className="content-center">
                  <p className="text-justify">
                    Passionate and driven ReactJS developer with a strong
                    foundation in MERN Stack and NextJS. Dedicated to creating
                    dynamic and user-centric web applications. Eager to
                    contribute my expertise in frontend frameworks, modern UI/UX
                    design, and responsive development to a forward-thinking
                    team, while continuously learning and growing in the
                    ever-evolving world of web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page page3">
        <div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
          <h1 className="mt-10 text-5xl text-white font-bold mt-10 text-center">
            Tech stack
          </h1>
          <br />
          <br />
          <div className="flex justify-center">
            <button
              className="py-2 px-8 border border-solid border-white font-semibold text-white bg-black hover:bg-red-800"
              onClick={() => handleCategoryChange("Advance")}
            >
              Advance
            </button>
            <button
              className="py-2 px-8 border border-solid border-white font-semibold text-white bg-black hover:bg-red-800"
              onClick={() => handleCategoryChange("Good")}
            >
              Good
            </button>
            <button
              className="py-2 px-8 border border-solid border-white font-semibold text-white bg-black hover:bg-red-800"
              onClick={() => handleCategoryChange("Familiar")}
            >
              Familiar
            </button>
          </div>

          <br />
          <div className="techstack-container">
            {techstack
              .filter((tech) => tech.category === selectedCategory)
              .map((tech, index) => (
                <div key={index} className="techstack">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="techstack-image"
                  />
                  <h3>{tech.name}</h3>
                  <p className="category">{tech.category}</p>
                </div>
              ))}
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="page page4">
        <div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
          <h1 className="mt-10 text-5xl text-white font-bold text-center">
            Education
          </h1>
          <div className="mt-10 mx-auto max-w-7xl grid grid-cols-2 gap-x-20 gap-y-8">
            {/* 1st Container - Left Column */}
            <div className="containerr border border-solid border-white rounded-lg p-4 w-3/5 self-start">
              <div className="flex">
                <div className="p-2 flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a6/SLIIT_Logo_Crest.png"
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <p className="text-lg font-bold">Bachelor of Science</p>
                  <p className="text-sm">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <br />
                  <p className="text-sm">2022 - 2025 | Reading</p>
                </div>
              </div>
            </div>

            <div className="containerr border border-transparent rounded-lg"></div>
            <div className="containerr border border-transparent rounded-lg"></div>

            {/* 2nd Container - Right Column */}
            <div className="containerr border border-solid border-white rounded-lg p-4 w-3/5 self-end">
              <div className="flex">
                <div className="p-2 flex items-center">
                  <img
                    src="https://studyway-resources.s3.amazonaws.com/profilePictures/1676538581371.jpg"
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <p className="text-lg font-bold">
                    Diploma in Human Resource Management
                  </p>
                  <p className="text-sm">Lanka Professional Education Center</p>
                  <br />
                  <p className="text-sm">2024 - 2025 | Reading</p>
                </div>
              </div>
            </div>

            {/* 3rd Container - Left Column */}
            <div className="containerr border border-solid border-white rounded-lg p-4 w-3/5 self-start">
              <div className="flex">
                <div className="p-2 flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyUFViTOmGElYZ3XQBP4q_c0qN8rn7vkEFA&s"
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <p className="text-lg font-bold">Accounting Assistant</p>
                  <p className="text-sm">
                    Association of Accounting Technicians of Sri Lanka (AAT)
                  </p>
                  <br />
                  <p className="text-sm">2019 | Completed</p>
                </div>
              </div>
            </div>

            <div className="containerr border border-transparent rounded-lg"></div>
            <div className="containerr border border-transparent rounded-lg"></div>

            {/* 4th Container - Right Column */}
            <div className="containerr border border-solid border-white rounded-lg p-4 w-3/5 self-end">
              <div className="flex">
                <div className="p-2 flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAXJAWhMtBmrPybLVJvel3fKvFkUpjBubVQ&s"
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <p className="text-lg font-bold">
                    Computer Application Assistant [NVQ Level 3]
                  </p>
                  <p className="text-sm">NYSCO Vocational Training Centre</p>
                  <br />
                  <p className="text-sm">2019 | Completed</p>
                </div>
              </div>
            </div>

            {/* 5th Container - Left Column */}
            <div className="containerr border border-solid border-white rounded-lg p-4 w-3/5 self-start">
              <div className="flex">
                <div className="p-2 flex items-center">
                  <img
                    src="/images/ssb.png"
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <p className="text-lg font-bold">School attended</p>
                  <p className="text-sm">
                    Mt/Sri Sangamitta Girls' National School
                  </p>
                  <br />
                  <p className="text-sm">2017 - 2021 | Completed</p>
                </div>
              </div>
            </div>

            <div className="containerr border border-transparent rounded-lg"></div>
            <div className="containerr border border-transparent rounded-lg"></div>

            {/* 6th Container - Right Column */}
            <div className="containerr border border-solid border-white rounded-lg p-4 w-3/5 self-end ">
              <div className="flex">
                <div className="p-2 flex items-center">
                  <img
                    src="/images/stg.png"
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <p className="text-lg font-bold">School attended</p>
                  <p className="text-sm">ST.Thomas' Girls' School - Matale</p>
                  <br />
                  <p className="text-sm">2008 - 2017 | Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page page5">
        <div>
          <div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
            <h1 className="mt-10 text-5xl text-white font-bold text-center mb-5">
              Projects
            </h1>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/D5612AQG-fUwsuOoifw/article-cover_image-shrink_600_2000/0/1693194931027?e=2147483647&v=beta&t=n75uifCwx1mG1kHyzq3yQIsg6YFjmmRDNl6reK1hyys"
                      className="w-80 h-48 max-w-md"
                    />
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-yellow-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Online Auction System
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-8 text-sm leading-6 text-gray-600 text-justify">
                      An online auction system is a digital platform that
                      facilitates the buying and selling of goods and services
                      through bidding over the internet. This system allows
                      sellers to list items they wish to sell, and buyers to
                      place bids on these items within a specified timeframe.
                      The highest bid at the end of the auction period wins the
                      item.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                      <button className="relative z-10 rounded-full bg-purple-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        HTML
                      </button>
                      <button className="relative z-10 ml-2 rounded-full bg-pink-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        CSS
                      </button>
                      <button className="relative z-10 ml-2 rounded-full bg-orange-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        PHP
                      </button>
                      <button className="relative z-10 ml-2 mt-2 rounded-full bg-green-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        MySQL
                      </button>
                    </div>
                    <br />
                    <br />
                  </div>
                </article>

                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div>
                    <img
                      src="https://studentprojectguide.com/wp-content/uploads/2019/12/Online-Product-Auction-System-1024x601.jpg"
                      className="w-80 h-48 max-w-md"
                    />
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-yellow-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Online Bidding System
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-8 text-sm leading-6 text-gray-600 text-justify">
                      An online bidding system is a digital platform designed to
                      facilitate the process of placing bids on products or
                      services over the internet. These systems are commonly
                      used for various purposes, including auctions,
                      procurement, and contracting. They offer a convenient and
                      efficient way for users to engage in bidding activities
                      without the need for physical presence.
                    </p>
                    <br />
                    <br />
                    <br />
                    <div>
                      <button className="relative z-10 rounded-full bg-purple-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        JAVA
                      </button>
                      <button className="relative z-10 ml-2 rounded-full bg-pink-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Bootstrap
                      </button>
                      <button className="relative z-10 ml-2 rounded-full bg-orange-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        MySQL
                      </button>
                      <button className="relative z-10 ml-2 mt-2 rounded-full bg-green-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Tomcat
                      </button>
                    </div>
                    <br />
                    <br />
                  </div>
                </article>

                <article className="flex max-w-xl flex-col items-start justify-between ">
                  <div className="">
                    <img
                      src="https://www.polytheneuk.co.uk/wp-content/uploads/polytunnel-film-1024x683.jpg"
                      className="w-80 h-48 max-w-md"
                    />
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-yellow-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Online Enclosed Polytunnel Management System
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-8 text-sm leading-6 text-gray-600 text-justify">
                      An online enclosed polytunnel management system with
                      integrated e-commerce capabilities is a comprehensive
                      digital platform designed for modern agriculture. It
                      combines advanced environmental monitoring, automation,
                      and crop management with a marketplace for buying and
                      selling crops. This system helps farmers optimize crop
                      production within controlled environments and provides a
                      platform to reach broader markets.
                    </p>
                    <br />
                    <div>
                      <button className="relative z-10 rounded-full bg-purple-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Mongo DB
                      </button>
                      <button className="relative z-10 ml-2 rounded-full bg-pink-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Express JS
                      </button>
                      <button className="relative z-10 ml-2 rounded-full bg-orange-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        React
                      </button>
                      <button className="relative z-10 ml-2 mt-2 rounded-full bg-green-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Node JS
                      </button>
                    </div>
                    <br />
                    <br />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
        <div>
          <div className="py-3 bg-gray-200 text-center font-bold ">
            <p>@Pamo 2024</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;

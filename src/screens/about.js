import React from "react";

function about() {
  return (
    <div>
      <div>
        <h1 className="mt-10 text-5xl text-white font-bold text-center">About me</h1>
      </div>
      <div className="flex w-full mt-10">
        <div className="photo w-1/2 flex justify-center items-center">
          <img
            src="/images/photo.jpeg"
            alt="Image"
            className="w-72 h-auto max-w-md"
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
              < p>22</p>
            </button>
            <button className="border-2 border-solid text-white border-white px-8 py-2 ml-10 ">
              <p className="font-semibold  text-yellow-400">Projects</p>
              <p>10+</p>
            </button>
          </div>
          <div className="details w-2/3 flex justify-center items-center mt-12 text-white">
          <div className="content-center">
            <p className="text-justify">
              Passionate and driven ReactJS developer with a strong foundation
              in MERN Stack and NextJS. Dedicated to creating dynamic and
              user-centric web applications. Eager to contribute my expertise in
              frontend frameworks, modern UI/UX design, and responsive
              development to a forward-thinking team, while continuously
              learning and growing in the ever-evolving world of web
              development.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default about;

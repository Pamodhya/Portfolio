import React from "react";

function projects() {
  return (
    <div>
      <div>
        <h1 className="mt-10 text-4xl font-bold text-center mb-5">Projects</h1>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              
              <div>
                <img
                  src="https://media.licdn.com/dms/image/D5612AQG-fUwsuOoifw/article-cover_image-shrink_600_2000/0/1693194931027?e=2147483647&v=beta&t=n75uifCwx1mG1kHyzq3yQIsg6YFjmmRDNl6reK1hyys"
                  className="w-80 h-48 max-w-md"
                />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Online Auction System
                  </a>
                </h3>
                <p className="mt-5 line-clamp-8 text-sm leading-6 text-gray-600 text-justify">
                  An online auction system is a digital platform that
                  facilitates the buying and selling of goods and services
                  through bidding over the internet. This system allows sellers
                  to list items they wish to sell, and buyers to place bids on
                  these items within a specified timeframe. The highest bid at
                  the end of the auction period wins the item.
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
                <br /><br />
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
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Online Bidding System
                  </a>
                </h3>
                <p className="mt-5 line-clamp-8 text-sm leading-6 text-gray-600 text-justify">
                  An online bidding system is a digital platform designed to
                  facilitate the process of placing bids on products or services
                  over the internet. These systems are commonly used for various
                  purposes, including auctions, procurement, and contracting.
                  They offer a convenient and efficient way for users to engage
                  in bidding activities without the need for physical presence.
                </p>
                <br />
                <br />
                <br />
                <div>
                  <button className="relative z-10 rounded-full bg-purple-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    JAVA
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
                <br /><br />
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between ">
             
              <div className="">
                <img
                  src="https://sperotec.com/wp-content/uploads/2021/04/sensors-monitoring.png"
                  className="w-80 h-48 max-w-md"
                />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Online Enclosed Polytunnel Management System
                  </a>
                </h3>
                <p className="mt-5 line-clamp-8 text-sm leading-6 text-gray-600 text-justify">
                  An online enclosed polytunnel management system with
                  integrated e-commerce capabilities is a comprehensive digital
                  platform designed for modern agriculture. It combines advanced
                  environmental monitoring, automation, and crop management with
                  a marketplace for buying and selling crops. This system helps
                  farmers optimize crop production within controlled
                  environments and provides a platform to reach broader markets.
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
                <br /><br />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;

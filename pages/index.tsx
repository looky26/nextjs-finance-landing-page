import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Finance Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#133E44]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-5">
          <img src="/financelogo.svg" alt="" className="hover:cursor-pointer" />
          <div className=" hidden text-white lg:flex space-x-10 ">
            <div className="flex items-center space-x-2 hover:cursor-pointer">
              <p>Platform</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <p className="hover:cursor-pointer">Resources</p>
            <p className="hover:cursor-pointer">Company</p>
            <p className="hover:cursor-pointer">Pricing</p>
          </div>
          <div className="flex text-white items-center">
            <img
              src="/profile-2user.png"
              alt=""
              className="hover:cursor-pointer"
            />
            <div className="bg-[#2B666C] rounded-full p-2 flex ml-4 space-x-2 items-center hover:cursor-pointer">
              <img src="/usaicon.svg" alt="" />
              <p>USA</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </nav>

        <header className="max-w-7xl mx-auto">
          <div className="text-white flex justify-between flex-col lg:flex-row">
            <div className="p-5 pt-28 text-center lg:text-left md:text-left">
              <h1 className="text-5xl font-extrabold">
                The Next Gen <br />
                Payment Method
              </h1>
              <p className="mt-10 ">
                Learn how two big banks, BBVA and ABN AMRO, are responding and
                changing according to sustainability principles.
              </p>
              <div className="flex justify-cente lg:justify-start items-center mt-16 space-x-10">
                <button className="bg-[#D9EBD1] text-black p-3 lg:p-4  rounded-lg font-bold w-40">
                  Request Demo
                </button>
                <div className="flex items-center">
                  <div className="flex justify-center items-center h-12 w-12 lg:h-16 lg:w-16 border rounded-full mr-5">
                    <img
                      className="object-contain h-6 lg:h-8"
                      src="/scroll.svg"
                      alt=""
                    />
                  </div>
                  <p className="hover:cursor-pointer">Scroll down</p>
                </div>
              </div>
            </div>
            <img src="/card.png" alt="" className="lg:mt-32 object-contain p-10 lg:p-0 " />
          </div>
        </header>

        {/* transaction access secure users */}
        <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 mb-20 gap-y-4 px-5">
          <div className="flex justify-center space-x-8 items-center">
            <img
              src="/crown.png"
              alt=""
              className="h-[80px] lg:h-full md:h-full"
            />
            <div className="text-white">
              <img
                src="/star.png"
                alt=""
                className="h-[30px] lg:h-full md:h-full"
              />
              <p className="text-base lg:text-lg font-semibold">
                Daily Transaction
              </p>
              <p className="text-gray-400">30+ Actions</p>
            </div>
          </div>
          <div className="flex justify-center space-x-8 items-center">
            <img
              src="/radar.png"
              alt=""
              className="h-[80px] lg:h-full md:h-full"
            />
            <div className="text-white">
              <img
                src="/star.png"
                alt=""
                className="h-[30px] lg:h-full md:h-full"
              />
              <p className="text-base lg:text-lg font-semibold">
                Daily Transaction
              </p>
              <p className="text-gray-400">30+ Actions</p>
            </div>
          </div>
          <div className="flex justify-center space-x-8 items-center">
            <img
              src="/shield.png"
              alt=""
              className="h-[80px] lg:h-full md:h-full"
            />
            <div className="text-white">
              <img
                src="/star.png"
                alt=""
                className="h-[30px] lg:h-full md:h-full"
              />
              <p className="text-base lg:text-lg font-semibold">
                Daily Transaction
              </p>
              <p className="text-gray-400">30+ Actions</p>
            </div>
          </div>
          <div className="flex justify-center space-x-8 items-center">
            <img
              src="/global.png"
              alt=""
              className="h-[80px] lg:h-full md:h-full"
            />
            <div className="text-white">
              <img
                src="/star.png"
                alt=""
                className="h-[30px] lg:h-full md:h-full"
              />
              <p className="text-base lg:text-lg font-semibold">
                Daily Transaction
              </p>
              <p className="text-gray-400">30+ Actions</p>
            </div>
          </div>
        </div>

        {/* Features */}

        <div className="bg-[#F2EEE5]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-center pt-20">
            Send Your Money from <br /> Anywhere You Like
          </h1>
          <div className="flex justify-center mt-0 lg:-mt-20">
            <img src="/manservices.svg" alt="" className="" />
          </div>
        </div>

        {/* Financial Plans */}

        <div className="bg-[#FEC85B]">
          <div className=" max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 pt-28 pb-24 gap-x-5">
            <div className="flex justify-center ml-10 lg:m-0">
              <img src="/financialplanimg.svg" alt="" />
            </div>
            <div className="text-center lg:text-left space-y-5 pt-10">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold">
                Creating Financial <br /> Plan That Fits Your <br /> Lifestyle
              </h1>
              <p>
                Learn how two big banks, BBVA and ABN AMRO, are <br />{" "}
                responding and changing according to sustainability <br />{" "}
                principles. Learn how two big banks, BBVA and ABN AMRO,
                <br /> are responding and changing according to sustainability
              </p>
              <button className="bg-black rounded-lg text-white p-4 font-bold">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 mt-16 pb-10 ">
          <div className="relative mx-auto mb-10">
            {/* <img
              src="/radialbackground.png"
              alt=""
              className="absolute -top-32 left-5 rounded-full w-[400px]"
            /> */}
            <img src="/howitworksimg.svg" alt="" className="" />
            <h1 className="lg:text-6xl text-4xl  font-bold text-white absolute top-24 left-36">
              HOW IT <br />
              WORKS
            </h1>
            <p className="absolute top-60 left-36 lg:text-lg text-base text-white font-medium">
              Learn how two big banks, <br /> BBVA and ABN AMRO,
              <br /> are responding and
            </p>
          </div>
          <div className="grid grid-cols-2 mx-auto md:gap-x-10 lg:gap-x-20 px-2  text-white h-80 mt-14 md:pr-10">
            <div className="flex flex-wrap justify-center items-center space-x-5">
              <img src="/datasecure.png" alt="" />
              <div>
                <h1 className="text-xl font-semibold">Data Secure</h1>
                <p className="text-gray-300">We keep your data safer</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center space-x-5">
              <img src="/support.svg" alt="" />
              <div>
                <h1 className="text-xl font-semibold">24/7 Support</h1>
                <p className="text-gray-300">We keep your data safer</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center space-x-5">
              <img src="/account-data.svg" alt="" />
              <div>
                <h1 className="text-xl font-semibold">Account Data</h1>
                <p className="text-gray-300">We keep your data safer</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center space-x-5">
              <img src="/actions.svg" alt="" />
              <div>
                <h1 className="text-xl font-semibold">Multiple Actions</h1>
                <p className="text-gray-300">We keep your data safer</p>
              </div>
            </div>
          </div>
        </div>

        {/* pay by check */}
        <div className="bg-[#FFFFFF]">
          <div className="text-center lg:text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 pt-10 pb-10">
            <div className="space-y-10 mx-auto pt-28">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
                Pay By Check, Without <br /> Any of the Hassle
              </h1>
              <p>
                Learn how two big banks, BBVA and ABN <br /> AMRO, are
                responding and changing according <br /> to sustainability
                principles. Learn how
              </p>
              <button className="bg-black text-white p-5 rounded-lg">
                Request Demo
              </button>
            </div>
            <div className="flex justify-center">
              <img src="/paybycheckimg.png" alt="" />
            </div>
          </div>
        </div>

        {/* footer */}

        <div className="max-w-7xl text-center lg:text-start mx-auto grid grid-cols-1 lg:grid-cols-2 pt-28">
          <div className="text-white space-y-10 mx-auto">
            <div className="flex justify-center lg:justify-start">
            <img  src="/financelogo.svg" alt="" className="h-20" />
            </div>
            
            <h1 className="text-5xl font-bold">
              <span className="text-yellow-500">Join</span> Your Expectation
            </h1>
            <p className="text-base">
              Learn how two big banks, BBVA and ABN AMRO, are responding <br />{" "}
              and changing according to sustainability principles. Learn how{" "}
              <br /> two big banks, BBVA and ABN AMRO, are responding and <br />{" "}
              changing according to sustainability
            </p>
            {/* icons for social */}
            <div className="flex justify-center lg:justify-start space-x-3">
              <img src="/facebooklogo.png" alt="" />
              <img src="/linkedinlogo.png" alt="" />
              <img src="/twitterlogo.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col w-full px-5 lg:w-[500px] space-y-8 mx-auto mt-32 pb-10">
            <div className="flex items-center w-full bg-[#0F2F31] pl-5">
              <img src="/sms-star.png" alt="" />
              <input
                type="text"
                placeholder="Enter email address"
                className="p-5 text-white placeholder-gray-300 rounded-lg bg-[#0F2F31] outline-none w-full"
              />
            </div>
            <div className="flex items-center w-full bg-[#0F2F31] pl-5">
              <img src="/call-calling.png" alt="" />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-5 text-white placeholder-gray-300 rounded-lg bg-[#0F2F31] outline-none full"
              />
            </div>
            <div className="flex items-center w-full bg-[#0F2F31] pl-5">
              <img src="/sms-star.png" alt="" />
              <input
                type="text"
                placeholder="Select Service"
                className="p-5 text-white placeholder-gray-300 rounded-lg bg-[#0F2F31] outline-none full"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-yellow-500 p-3 rounded-lg w-fit ">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        <div className=" max-w-7xl mx-auto pb-20 pt-5">
          <div className="flex flex-wrap justify-center lg:justify-start text-white space-x-10 lg:ml-16">
            <div className="flex items-center space-x-2">
              <p>Platform</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <p>Resources</p>
            <p>Company</p>
            <p>Pricing</p>
            <p>Contact</p>
            <p>FAQs</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

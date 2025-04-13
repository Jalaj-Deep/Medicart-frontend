import React from "react";
import Layout from "../Components/Layouts/Layout";

const About = () => {
  return (
    <>
      <Layout>
      <div className="isolate relative flex flex-col min-h-screen overflow-hidden bg-gray-900">

          <img
            src="https://media-hosting.imagekit.io/dea342d6cf1343bf/Screenshot%202025-04-13%20191139.png?Expires=1839159717&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=m7m2YD20NU1LXWzQNCdIMGckMxoadDmv5z8CyuM~ehwhRstMPKoAcqsVJeA~L~dZrAQuW74mMCq7GtuxhaaypQA0WY1RxkqxNGg-ZGoI3NM3cnM3tAXItGMLI2i~UFwiidyvsGbA8KrixCkmr3HP~Dx~WQWgRGJBnkC6PWP3TA25ou-XRoVpb6Lxve5lp3mJBmUVF0LyQiUHPl5HNDs~TAKFen~7SrK6Aydgh0STQrqCWFrH2kGbtK~GFBUZykhvKn3-GKMUpmaYcp6iMk2TIFp20DmVK7nvofWqJH8Nt86oc84ccbwZGnNH8HR7VQYn98yCo-oAbR5RV7hLb5eaGg__"
            alt=""
            className="-z-10 md:object-center absolute inset-0 object-cover object-right w-full h-full"
          />
          <div
            className="sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl hidden"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="max-w-7xl lg:px-8 flex-grow px-6 mx-auto py-20">
  <div className="max-w-2xl text-left">
    <h2 className="sm:text-6xl text-4xl font-bold text-black text-left">
      About Us :
    </h2>
    <p className="mt-6 text-lg leading-8 text-black/80 text-left">
      Medicart is here to make buying medicines easier, faster, and stress-free.
      No more waiting in long lines at the pharmacy — just a few clicks, and your
      medicines are delivered right to your door.
    </p>
  </div>
</div>
</div>
      </Layout>
    </>
  );
};

export default About;

import { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  const originalView = { lat: 39.0742, lng: 21.8243, altitude: 1.5 };

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.7;
      globeRef.current.pointOfView(originalView);
    }
  }, []);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("astkout12@hotmail.com");
    setHasCopied(true);
  
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  
  const zoomInOnLocation = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotateSpeed = 0; 
      globeRef.current.pointOfView(
        { lat: 53.79648, lng: -1.54785, altitude: 0.3 },
        2000
      );
    }
  };
  
  const zoomOutToOriginal = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotateSpeed = 1; 
      globeRef.current.pointOfView(originalView, 2500);
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 flex flex-col justify-center items-center">
          <div className="grid-container flex flex-col items-center justify-center">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain hover:scale-110 transition-transform duration-150"
            />
            <div className="text-center mt-4">
              <p className="grid-headtext">Hi, I’m Asterios Koutoulidis</p>
              <p className="grid-subtext">
                I have been developing websites and applications for over 2
                year.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 grid-container justify-center">
          <div className="grid grid-cols-3 gap-6 items-center">
            {[
              "html",
              "css",
              "tailwind",
              "bootstrap",
              "javascript",
              "react",
              "node",
              "jQuery",
              "git",
            ].map((icon) => (
              <img
                key={icon}
                src={`assets/icons/${icon}.png`}
                alt={icon}
                className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-200"
              />
            ))}
          </div>
          <div className="mt-5">
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 flex flex-col justify-center items-center">
          <div className="grid-container flex flex-col items-center justify-center">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={350}
                width={350}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 53.79648,
                    lng: -1.54785,
                    text: "I'm here",
                    color: "white",
                    size: 10,
                    altitude: 10,
                  },
                ]}
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={zoomInOnLocation}
                className="px-2 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                My Location
              </button>
              <button
                onClick={zoomOutToOriginal}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Zoom Out
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Leeds, United Kingdom and open to remote work
                worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="overflow-hidden rounded-lg">
              <video
                src="assets/coding.mp4"
                alt="grid-3"
                className="w-full h-fit rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/contact.png"
              alt="grid-4"
              className="w-full h-full md:h-[126px] sm:h-[276px] object-cover object-center hover:scale-110 transition-transform duration-150"
            />

            <div className="space-y-3">
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full" />
              </a>

              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white mt-2">
                  astkout12@gmail.com
                </p>
              </div>
              <div className="flex gap-3 justify-center mt-5">
                <a href="https://www.linkedin.com/in/astkout/" target="_blank">
                  <div className="social-icon hover:bg-stone-700">
                    <img
                      src="/assets/LinkedIn.png"
                      alt="LinkedIn"
                      className="w-1/2 h-1/2"
                    />
                  </div>
                </a>
                <a href="https://github.com/astkout" target="_blank">
                  <div className="social-icon hover:bg-stone-700">
                    <img
                      src="/assets/GitHub.png"
                      alt="GitHub"
                      className="w-1/2 h-1/2"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

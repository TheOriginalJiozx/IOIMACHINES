import { useEffect, useState } from "react";
import ContactCase from "../components/ContactCase";

export default function CaseStudies() {

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.setPageTitle === "function") {
      window.setPageTitle("Case Studies");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#444444] font-sans">
      <section className="relative w-full mb-16">
        <div className="w-full h-80 sm:h-96 md:h-[34rem] bg-gray-100 overflow-hidden">
          <img src="/success_stories.jpg" alt="Case hero" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full flex items-center">
            <div className="lg:pl-0 -mt-80">
              <h1 className="lg:text-[38px] font-extrabold text-white uppercase" style={{ filter: "drop-shadow(0 8px 8px rgba(0,0,0,0.50))" }}>
                Case Studies
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="w-full h-80 sm:h-96 md:h-[34rem] bg-[#404D56] overflow-hidden flex items-center justify-center">
          <img src="/cases-1.png" className="object-contain h-3/4 w-auto" alt="heroTwo" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full flex items-center">
            <div className="lg:pl-0 -mt-80">
              <h1 className="lg:text-[38px] font-extrabold text-white uppercase" style={{ filter: "drop-shadow(0 8px 8px rgba(0,0,0,0.50))" }}></h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Vision Inspection of Rotors for rotary screw air compressors</h2>

            <div className="flex items-start gap-8 mb-6">
              <div className="w-48 flex-shrink-0">
                <img src="/rotorsCompressor-e1566565817235.png" alt="case" className="object-contain w-full h-auto" />
              </div>
              <div className="flex-1 text-sm text-[#606060] whitespace-pre-line">
                Rotors of rotary screw type air compressors have complex geometry. When they come out of grinding machines, various pores happen to appear on the surface. Some of these pores are big enough to consider as defects. These pores have arbitrary shapes and geometries and present a challenge to detect using conventional machine vision systems if they lie in shadowed areas caused by the geometry or at edges.
              </div>
            </div>

            <ul className="list-disc pl-5 text-sm text-[#606060] mb-6">
              <li>No reprogramming or re-engineering is required</li>
              <li>Zero downtime</li>
              <li>Zero escapements</li>
              <li>Seamless solution for different rotors of different shapes and sizes</li>
            </ul>
          </div>

          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <img src="/solution.png" alt="solution" className="w-full h-40 object-contain mb-4" />
              <h3 className="text-xl font-semibold">The Solution</h3>
              <p className="text-sm text-[#606060] mt-2">Solution text here</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-[36px] font-bold text-center text-[#606060]">GET ADVICE</h3>
        <h4 className="text-[14px] font-bold text-center text-[#606060]">How can we help you?</h4>
        <p className="text-center text-[#606060] mt-4">
          We perform a free evaluation of our solution on your specific
          <br /> inspection problem. We test our algorithm on the received images
          <br /> and run a live demo of the solution. You have the following options:
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 items-stretch">
          {["Send Us Sample Images", "On-Site Image Capture by Our Experts", "Live Algorithm Evaluation", "Review Results & Next"].map((text, i) => (
            <div key={text} className="p-6 border rounded text-left h-full flex items-start">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#606060]">{text}</h4>
                  {text === "Send Us Sample Images" && <p className="text-sm text-[#606060] mt-2">Send us a number of images representing good and bad objects including corner samples.</p>}
                  {text === "On-Site Image Capture by Our Experts" && <p className="text-sm text-[#606060] mt-2">Alternatively, we visit you on-site and take pictures ourselves of the test samples.</p>}
                  {text === "Live Algorithm Evaluation" && <p className="text-sm text-[#606060] mt-2">Or send representative samples to our laboratories.</p>}
                  {text === "Review Results & Next" && <p className="text-sm text-[#606060] mt-2">Get a free evaluation license of our IP core on your windows based computer. Run your own tests on your samples at your convenience.</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="bg-[#F7F6F6]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-14 h-14 mx-auto rounded-xl bg-white flex items-center justify-center text-[#444444] mb-4 shadow-sm">
              <i className="fas fa-balance-scale text-2xl text-[#444444]" aria-hidden="true"></i>
            </div>
            <p className="mt-4 font-semibold text-[#444444]">Fast Feasibility, No Commitment</p>
            <p className="mt-2 text-sm text-[#444444">Quickly understand whether your inspection task can be automated.</p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto rounded-xl bg-white flex items-center justify-center text-[#444444] mb-4 shadow-sm">
              <i className="fas fa-bullseye text-2xl text-[#444444]" aria-hidden="true"></i>
            </div>
            <p className="mt-4 font-semibold text-[#444444]">Proven Accuracy on Your Real Products</p>
            <p className="mt-2 text-sm text-[#444444]">We test using your actual samples and edge cases to ensure reliable performance.</p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto rounded-xl bg-white flex items-center justify-center text-[#444444] mb-4 shadow-sm">
              <i className="fas fa-user-cog text-2xl text-[#444444]" aria-hidden="true"></i>
            </div>
            <p className="mt-4 font-semibold text-[#444444]">Expert Guidance from Vision Specialists</p>
            <p className="mt-2 text-sm text-[#444444]">Our engineers analyze your application and recommend the optimal vision setup.</p>
          </div>
        </div>
      </section>

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <ContactCase />

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>
    </div>
  );
}

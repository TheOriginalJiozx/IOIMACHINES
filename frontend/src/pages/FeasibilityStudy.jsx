import { useEffect, useState } from "react";
import ContactCase from "../components/ContactCase";
import Features from "../components/Features";
import GetAdvice from "../components/GetAdvice";
import RequestConsultation from "../components/RequestConsultation";

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.setPageTitle === "function") {
      window.setPageTitle("Feasibility Study");
    }
  }, []);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.18 },
    );

    const els = Array.from(document.querySelectorAll(".enter-up"));
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#444444] font-sans">
      <section className="relative w-full">
        <div className="w-full h-80 sm:h-96 md:h-[34rem] bg-gray-100 overflow-hidden">
          <img src="/feasibility_study.jpg" alt="hero" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full flex items-center">
            <div className="lg:pl-0 -mt-80">
              <h1 className="lg:text-[48px] text-3xl font-extrabold text-white uppercase" style={{ filter: "drop-shadow(0 8px 8px rgba(0,0,0,0.50))" }}>
                {/* Feasibility Study Hero Text Here If You Want To Add Later */}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img src="/feasibility_report.jpg" alt="feasibilty-report" className="w-full md:h-[28rem] object-cover rounded shadow" />
              <div className="mt-4 text-[#444444] text-[15px] space-y-3">
                <div>We put our expertise and knowledge at your service to find out whether your quality inspection problem can be solved by a machine vision system.</div>
                <div>We study the economic, technical, legal, and scheduling considerations to ascertain the likelihood of completing the vision inspection project successfully.</div>
                <h3 className="text-[24px] font-semibold text-[#222222]">Deliverables</h3>
                <div>In the course of the feasibility study, we arrange a number of visits to your production site for the purposes of defining the scope of your needs and then to validate findings from the study.</div>
                <div>The feasibilty study concludes by a report which contains</div>
                <ul className="mt-4 list-disc list-outside pl-8 space-y-2 text-[15px]">
                  <li className="text-[#444444]">A Bill Of Material for your application</li>
                  <li className="text-[#444444]">A Price estimate of the needed system</li>
                  <li className="text-[#444444]">A Timeline and project plan for system design, implementation, test and validation.</li>
                  <li className="text-[#444444]">Sample pictures of your application</li>
                </ul>
              </div>
            </div>
            <div>

              <h2 className="text-[40px] font-semibold text-[#222222]">Process</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-[15px]">
                <li className="text-[#444444]">Project Scoping — develop and evaluate alternatives.</li>
                <li className="text-[#444444]">Tentatively selected plan.</li>
                <li className="text-[#444444]">Estimate cost, engineering, environmental and economic benefits.</li>
                <li className="text-[#444444]">Write Feasibility Report.</li>
              </ul>

              <div className="mt-10 flex justify-left">
                <button onClick={() => setShowModal(true)} className="text-black px-6 py-3 border border-black uppercase">
                  Request a Consultation
                </button>
              </div>
              <div className="mt-8 bg-[#FAFAFA] p-6 rounded shadow-sm">
                <h3 className="text-[20px] font-semibold mb-3 text-[#222222]">Scope & Approach</h3>
                <ul className="list-decimal pl-5 space-y-2 text-[15px] text-[#444444]">
                  <li>Initial site visit to define requirements and capture sample images.</li>
                  <li>Data analysis to evaluate technical feasibility and constraints.</li>
                  <li>Prototype design and validation on representative samples.</li>
                  <li>Final report with recommendations, BOM and project timeline.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      {showModal && <RequestConsultation modal onClose={() => setShowModal(false)} />}

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <GetAdvice />

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <Features />

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <ContactCase />

      <div className="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>
    </div>
  );
}

import { useEffect, useState } from 'react';

export default function Home() {
  const cards = [
    { title: 'A Novel Approach', desc: 'Historically, machine vision vendors relied \n on feature detection techniques to \n recognize objects and find abnormal...', icon: '/icon1.png' },
    { title: 'HW Enabled High Performance', desc: 'The algorithm runs at extreme high speed to \n achieve real time inspection. Therefore, \n parts of the algorithm run on a GPU...', icon: '/icon2.png' },
    { title: 'The Right Solution', desc: 'The method solves the problem of limited \n texture visibility on surfaces and provides \n invariance to large color variations...', icon: '/icon3.png' },
    { title: 'Application Areas', desc: 'Our innovative method is applicable in \n several areas such as texture analysis, \n medical image analysis and visionbased...', icon: '/icon4.png' },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');

  const modalTexts = {
    'A Novel Approach': `Historically, machine vision vendors relied on feature detection techniques to recognize objects and find abnormal features in images of surfaces. These techniques are hardcoded. It meant that their solutions were only applicable in highly controlled environments, such as inspecting a single type of object on a production line. Machine Learning based machine vision systems are far more flexible today. A single system handles many object types. It also adapts itself to accommodate for changes in the nature of defects and variations in surface appearance. Moreover, it is deployable in a range of circumstances. IOIMACHINES invented a new method of distinguishing between normal and abnormal features in images of surfaces based on a Machine Learning approach.`,
    'HW Enabled High Performance': `The algorithm runs at extreme high speed to achieve real time inspection. Therefore, Parts of the algorithm run on a GPU in a PC platform. The most critical part runs on a dedicated HW platform developed by IOIMACHINES. We also provide the SW solution as Software-as-a-service on the cloud.`,
    'The Right Solution': `The method solves the problem of limited texture visibility on surfaces and provides invariance to large color variations and variations in appearance, patterns, orientation and scale.`,
    'Application Areas': `Our innovative method is applicable in several areas such as Texture analysis, medical image analysis and vision based defect detection on surfaces of industrial objects.  The method is self-adaptive in the sense that it adapts itself to changes in appearance of both normal and defect surfaces.`,
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.setPageTitle === 'function') {
      window.setPageTitle('Machine Intelligence for Machine Vision');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#444444] font-sans">
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[38px] md:text-5xl font-extrabold text-text-[#444444] leading-tight">Smarter Vision for<br/> Smarter Machines</h1>
          <p className="text-[16px] mt-6 text-gray-[#929292] max-w-xl">
            IOIMACHINES delivers intelligent machine vision systems that help<br/>
            manufacturers detect defects, ensure product quality,<br/>
            and improve safety — in real time, at production speed.<br/>
          </p>
          <button className="mt-8 bg-[#444444] text-white px-6 py-3 rounded shadow">READ MORE</button>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-2xl h-64 md:h-96 bg-gray-100 overflow-hidden flex items-center justify-center">
            <img src="/ioimachinesbanner.jpg" alt="hero" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="border-text border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Our Technology</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {cards.map(({title, desc, icon}, i) => (
                <div key={title} className="bg-white rounded-lg p-6 shadow-sm flex items-start space-x-4">
                  <div className="w-16 h-16 flex-shrink-0 rounded-[58px] border border-black bg-[#D6D6D6] flex items-center justify-center text-gray-500 overflow-hidden">
                    {icon ? (
                      <img src={icon} alt={`${title} icon`} className="w-60 h-60 object-contain" style={{filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.50))'}} />
                    ) : (
                      <span className="w-8 h-8 block" aria-hidden="true" />
                    )}
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-[#606060] whitespace-pre-line">{desc}</p>
                    <button
                      type="button"
                      onClick={() => { setModalTitle(title); setModalBody(modalTexts[title] || desc); setModalOpen(true); }}
                      className="mt-3 inline-block text-sm text-[#606060] hover:underline"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="bg-[#0471AB]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="text-white">
            <h2 className="text-3xl font-bold">What We Do</h2>
            <h3 className="text-xl font-semibold mt-4">End-to-End Machine Vision Solutions</h3>

            <p className="mt-6 max-w-xl">We design and deliver complete machine vision solutions — from cameras and lighting to intelligent software and high-performance computing.</p>

            <div className="mt-6 bg-white/5 p-4 rounded">
              <p className="text-white">We design and implement custom machine vision solutions powered by AI, tailored to the specific requirements of each application and production environment.</p>
              <p className="mt-4 font-semibold">Our solutions are built to adapt to:</p>
              <ul className="mt-3 space-y-2 text-white text-sm list-inside pl-4">
                <li className="flex items-start"><i className="fas fa-box mr-3 mt-1 text-white"></i>Product and surface variations</li>
                <li className="flex items-start"><i className="fas fa-bug mr-3 mt-1 text-white"></i>New defect types</li>
                <li className="flex items-start"><i className="fas fa-sync-alt mr-3 mt-1 text-white"></i>Changing production conditions</li>
              </ul>
            </div>

            <p className="mt-6 text-white font-semibold">One partner. One system. Total accountability.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#F1F7FB] flex items-center justify-center text-[#0471AB]"><i className="fas fa-cogs"></i></div>
              <div>
                <h4 className="font-semibold text-black">Custom Integration</h4>
                <p className="text-sm text-black mt-1">Hardware, optics and software tailored to your line.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#F1F7FB] flex items-center justify-center text-[#0471AB]"><i className="fas fa-brain"></i></div>
              <div>
                <h4 className="font-semibold text-black">AI-driven Detection</h4>
                <p className="text-sm text-black mt-1">Algorithms that learn new defect types and adapt to variability.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#F1F7FB] flex items-center justify-center text-[#0471AB]"><i className="fas fa-tachometer-alt"></i></div>
              <div>
                <h4 className="font-semibold text-black">Performance & Reliability</h4>
                <p className="text-sm text-black mt-1">Tuned for stable, real-time inspection in production environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-[#444444]">System Maintenance and<br /> Continuous Optimization</h3>
            <p className="mt-4 text-gray-600">IOIMACHINES provides ongoing hardware and software maintenance services directly at the factory floor.</p>

            <div className="mt-6">
              <p className="font-semibold text-gray-700">Our services include:</p>
              <ul className="mt-3 text-gray-600 space-y-2 pl-5 list-disc">
                <li>Preventive and corrective system maintenance</li>
                <li>Software updates and algorithm improvements</li>
                <li>Hardware upgrades and system extensions</li>
                <li>Performance tuning to ensure stable, reliable inspection</li>
              </ul>
            </div>

            <p className="mt-4 text-gray-700">This ensures continuous, optimal operation over time — even in unpredictable production environments.</p>
          </div>

          <aside className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800">Full Ownership Option</h4>
            <p className="mt-3 text-gray-600">For customers who require full ownership of their vision system, IOIMACHINES offers its proprietary IP core in encrypted form.</p>

            <p className="mt-4 font-semibold text-gray-700">To support independent operation, we provide:</p>
            <ul className="mt-3 text-gray-600 space-y-2 pl-5 list-disc">
              <li>Training sessions for engineering and maintenance teams</li>
              <li>Knowledge transfer for system operation and upkeep</li>
              <li>Support in building in-house competencies</li>
            </ul>

            <p className="mt-4 text-gray-700">This enables customers to operate, maintain, and evolve their systems independently while protecting IOIMACHINES’ intellectual property.</p>
          </aside>
        </div>
      </section>

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-[36px] font-bold text-center text-[#606060]">GET ADVICE</h3>
        <h4 className="text-[14px] font-bold text-center text-[#606060]">How can we help you?</h4>
        <p className="text-center text-[#606060] mt-4">We perform a free evaluation of our solution on your specific<br /> inspection problem. We test our algorithm on the received images<br /> and run a live demo of the solution. You have the following options:</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 items-stretch">
          {["Send Us Sample Images","On-Site Image Capture by Our Experts","Live Algorithm Evaluation","Review Results & Next"].map((text,i)=> (
            <div key={text} className="p-6 border rounded text-left h-full flex items-start">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center font-bold flex-shrink-0">{i+1}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#606060]">{text}</h4>
                  {text === "Send Us Sample Images" && (
                    <p className="text-sm text-[#606060] mt-2">Send us a number of images representing good and bad objects including corner samples.</p>
                  )}
                  {text === "On-Site Image Capture by Our Experts" && (
                    <p className="text-sm text-[#606060] mt-2">Alternatively, we visit you on-site and take pictures ourselves of the test samples.</p>
                  )}
                  {text === "Live Algorithm Evaluation" && (
                    <p className="text-sm text-[#606060] mt-2">Or send representative samples to our laboratories.</p>
                  )}
                  {text === "Review Results & Next" && (
                    <p className="text-sm text-[#606060] mt-2">Get a free evaluation license of our IP core on your windows based computer. Run your own tests on your samples at your convenience.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

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

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h3 className="text-[30px] font-bold text-[#444444]">We want to hear about your case</h3>
        <p className="text-[#606060] text-[16px] mt-2">Contact us for a demo tailored for your needs</p>
        <form className="mt-8">
          <div className="flex flex-col items-center space-y-4">
            <input className="w-full max-w-sm border rounded px-4 py-3 mx-auto" placeholder="Full Name" />
            <input className="w-full max-w-sm border rounded px-4 py-3 mx-auto" placeholder="Email address" />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="w-full max-w-sm bg-[#444444] text-white px-6 py-3 rounded">CONTACT US</button>
          </div>
        </form>
      </section>

      <div class="top-0 left-0 right-0 bg-[#EBEBEB] z-50 border-b"></div>

          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/50" onClick={()=>setModalOpen(false)} />
              <div className="relative bg-white rounded-lg max-w-2xl w-full mx-4 p-6 shadow-lg">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{modalTitle}</h3>
                  <button onClick={()=>setModalOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
                </div>
                <div className="mt-4 text-sm text-gray-700 whitespace-pre-line">{modalBody}</div>
                <div className="mt-6 text-right">
                  <button onClick={()=>setModalOpen(false)} className="bg-[#444444] text-white px-4 py-2 rounded">Close</button>
                </div>
              </div>
            </div>
          )}
    </div>
  )
}

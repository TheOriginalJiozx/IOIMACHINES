export default function ContactCase() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#444444]">We want to hear about your case</h3>
      <p className="text-[#606060] text-sm sm:text-base mt-2">Contact us for a demo tailored for your needs</p>
      <form className="mt-6 sm:mt-8">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <input className="w-full max-w-lg sm:max-w-md border rounded px-4 py-3 mx-auto text-sm" placeholder="Full Name" />
          <input className="w-full max-w-lg sm:max-w-md border rounded px-4 py-3 mx-auto text-sm" placeholder="Email address" />
          <textarea className="w-full max-w-lg sm:max-w-md border rounded px-4 py-3 mx-auto text-sm" rows={4} placeholder="Briefly describe your case (optional)" />
        </div>
        <div className="mt-6 flex justify-center">
          <button className="w-full max-w-lg sm:max-w-md bg-[#444444] text-white px-6 py-3 rounded text-sm">CONTACT US</button>
        </div>
      </form>
    </section>
  );
}

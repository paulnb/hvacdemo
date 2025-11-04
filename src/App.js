// App.js
import React from "react";

// Sample gallery images. Replace src URLs with real image paths as needed.
const galleryImages = [
  { src: "/public/images/AC-Contractor.avif", alt: "AC Contractor" },
  { src: "/public/images/Commercial-Walk-In-Coolers.avif", alt: "Commercial Walk In Cooler" },
  { src: "/public/images/Heating-and-Air-Conditioning.avif", alt: "Heating and Air Conditioning" },
];

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6 md:justify-between gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/images/logo.png" alt="SCP Logo" className="h-12 w-auto mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                SCP Refrigeration
            </h1>
          </div>
            <p className="text-lg md:text-xl font-light mb-6 max-w-lg">
              HVAC & Commercial Cooling Experts in Sanger, TX. Keeping your business cold, comfortable, and running smoothly for over 20 years.
            </p>
            <a
              href="tel:+14695997370"
              className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full text-lg transition font-semibold shadow"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13A1.5 1.5 0 0116.5 18h-13A1.5 1.5 0 012 16.5v-13zm2 0A.5.5 0 002.5 3v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-13zm2 4a1 1 0 000 2h8a1 1 0 100-2H6zm1 4a1 1 0 000 2h6a1 1 0 100-2H7z"/></svg>
              Call Now: +14695997370
            </a>
          </div>
          <img
            src="public/images/Ice-Machines.avif"
            alt="SCP Refrigeration Crew"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-sm"
          />
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-14 flex flex-col md:flex-row gap-10" id="about">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif text-blue-900 mb-4 font-bold">About Us</h2>
          <p className="text-gray-700 text-lg mb-4">
            SCP Refrigeration is a family-owned, full-service commercial refrigeration and HVAC company, serving Sanger, TX and the surrounding region[web:2].
          </p>
          <ul className="space-y-2 text-base text-gray-700">
            <li>
              • Over 20 years of experience in refrigeration, freezer, and cooler installations
            </li>
            <li>
              • Licensed, insured, and trusted by local businesses
            </li>
            <li>
              • Fast response, professional service, and honest recommendations
            </li>
            <li>
              • Emergency support and scheduled maintenance available
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex items-center">
          <img
            src="/images/about-team.jpg"
            alt="SCP Team"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-14" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-blue-900 font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Commercial Refrigeration</h3>
              <p className="text-gray-700 mb-4">Walk-in coolers, freezers, ice machines, and more. We install, repair, and maintain commercial cold storage solutions for restaurants, grocery stores, and facilities.</p>
              <a 
                href="tel:+14695997370" 
                className="inline-flex items-center text-amber-600 hover:text-amber-800 font-bold"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13A1.5 1.5 0 0116.5 18h-13A1.5 1.5 0 012 16.5v-13zm2 0A.5.5 0 002.5 3v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-13zm2 4a1 1 0 000 2h8a1 1 0 100-2H6zm1 4a1 1 0 000 2h6a1 1 0 100-2H7z"/></svg>
                Call Now
              </a>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">HVAC Installation</h3>
              <p className="text-gray-700 mb-4">Complete commercial HVAC system setup, including rooftop units, ductwork, smart controls, and energy-efficient solutions for all business types.</p>
              <a 
                href="tel:+14695997370"
                className="inline-flex items-center text-amber-600 hover:text-amber-800 font-bold"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13A1.5 1.5 0 0116.5 18h-13A1.5 1.5 0 012 16.5v-13zm2 0A.5.5 0 002.5 3v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-13zm2 4a1 1 0 000 2h8a1 1 0 100-2H6zm1 4a1 1 0 000 2h6a1 1 0 100-2H7z"/></svg>
                Call Now
              </a>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Emergency Service & Maintenance</h3>
              <p className="text-gray-700 mb-4">Quick diagnostics and repairs for breakdowns. Preventative maintenance plans to keep your equipment reliable, safe, and efficient year-round.</p>
              <a 
                href="tel:+14695997370"
                className="inline-flex items-center text-amber-600 hover:text-amber-800 font-bold"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13A1.5 1.5 0 0116.5 18h-13A1.5 1.5 0 012 16.5v-13zm2 0A.5.5 0 002.5 3v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-13zm2 4a1 1 0 000 2h8a1 1 0 100-2H6zm1 4a1 1 0 000 2h6a1 1 0 100-2H7z"/></svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-6 py-14" id="gallery">
        <h2 className="text-3xl font-serif text-blue-900 font-bold mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="rounded-lg shadow-md overflow-hidden flex flex-col bg-white hover:scale-105 transition">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" />
              <span className="text-center px-4 py-2 font-medium text-gray-700">{img.alt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-14" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-lg">
            Ready to schedule service or need fast emergency help? SCP Refrigeration is here to keep your business cool and running.
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="mb-4 text-lg font-semibold">
                <span className="block">Phone:</span>
                <a
                  href="tel:+14695997370"
                  className="block text-amber-400 hover:text-amber-600 font-bold text-xl mt-1"
                >
                  +14695997370
                </a>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Service Area:</span>
                <span className="block">Sanger, TX & North Texas Region</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Email:</span>
                <span className="block">info@scprefrigeration.com</span>
              </div>
              <div>
                <span className="font-semibold">Hours:</span>
                <span className="block">Mon-Fri 7am-6pm, Emergency After Hours</span>
              </div>
            </div>
            <form className="md:w-1/2 bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-700 text-white placeholder-gray-300 px-4 py-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white placeholder-gray-300 px-4 py-2 rounded"
                required
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="bg-gray-700 text-white placeholder-gray-300 px-4 py-2 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 py-3 rounded font-bold text-white shadow transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-4 mt-10">
        <div className="container mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} SCP Refrigeration • Sanger, TX • <a href="mailto:info@scprefrigeration.com" className="text-amber-400 hover:text-amber-600">info@scprefrigeration.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

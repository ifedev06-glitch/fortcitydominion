"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Building & Civil Engineering",
    description:
      "Full-spectrum civil engineering and building construction services — from residential developments to large-scale commercial and industrial projects.",
    image:
      "/building-civil.jpg",
  },
  {
    title: "Construction & Infrastructure",
    description:
      "Roads, bridges, dams, water treatment plants, and utility infrastructure delivered on time and to the highest standards.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    title: "Oil & Gas Services",
    description:
      "Pipeline construction, facility maintenance, flow station operations, and EPC services for the upstream and midstream sectors.",
    image:
      "/oil-rig.jpg",
  },
  {
    title: "Property Development & Management",
    description:
      "End-to-end real estate development — land acquisition, design, construction, sales, and ongoing property management.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    title: "Project & Cost Management",
    description:
      "Professional project controls, cost estimation, budget management, and risk assessment to keep every project on track.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    title: "Procurement & Supply Chain",
    description:
      "Strategic sourcing, vendor management, logistics coordination, and supply chain optimization for complex construction projects.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    title: "Logistics",
    description:
      "Heavy equipment transport, material haulage, fleet management, and last-mile delivery across challenging terrains.",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "Skilled Professionals" },
  { value: "7", label: "Service Verticals" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#0f172a] flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Fartcity Dominion"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold leading-tight text-[#0f172a]">
                FARTCITY
              </h1>
              <p className="text-[10px] font-medium text-[#c7952b] -mt-0.5">
                DOMINION
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isContact = item === "Contact";
              return (
                <Link
                  key={item}
                  href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  className={
                    isContact
                      ? "bg-[#0f172a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1e293b] transition-colors"
                      : "text-sm font-medium text-gray-600 hover:text-[#0f172a] transition-colors"
                  }
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0f172a] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0f172a] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0f172a] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-gray-100 bg-white px-4 sm:px-6 pb-5 pt-3 space-y-1">
            {navItems.map((item) => {
              const isContact = item === "Contact";
              return (
                <Link
                  key={item}
                  href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isContact
                      ? "block text-center bg-[#0f172a] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#1e293b] transition-colors mt-3"
                      : "block text-sm font-medium text-gray-600 hover:text-[#0f172a] py-2.5 transition-colors"
                  }
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
          <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent" />
        </div>

          <div className="relative container-custom pt-16 pb-8 md:pt-32 md:pb-32">
          <div className="max-w-3xl">
            <p className="text-[#c7952b] font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
              Welcome to Fartcity Dominion
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide">
              Building the
              <br />
              <span className="text-[#c7952b]">Foundation</span> of{" "}
              <br className="md:hidden" />
              Tomorrow
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Engineering excellence worldwide — delivering world-class
              construction, infrastructure, oil & gas, and logistics solutions
              that drive progress.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-8">
              <Link
                href="#services"
                className="bg-[#c7952b] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#b8860b] transition-colors text-sm md:px-10"
              >
                Explore Our Services
              </Link>
              <Link
                href="#contact"
                className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm md:px-10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="container-custom py-4 md:py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white text-xl md:text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                  alt="Construction team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c7952b] text-white p-4 md:p-6 rounded-xl hidden md:block">
                <p className="text-2xl font-bold">12+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </div>
            </div>

            <div>
              <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Delivering Excellence Across Every Sector
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fartcity Dominion is a multidisciplinary engineering and
                construction firm with global operations. We bring
                together deep expertise in civil engineering, infrastructure
                development, oil & gas services, property development, project
                management, procurement, and logistics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over a decade of experience and a team of more than 500
                skilled professionals, we have successfully delivered 150+
                projects worldwide — earning a reputation for quality,
                safety, and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏗️", text: "ISO Certified" },
                  { icon: "🌍", text: "Global Reach" },
                  { icon: "✅", text: "Zero-Compliance" },
                  { icon: "👷", text: "Expert Team" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From concept to completion, we offer a comprehensive suite of
              services covering every aspect of construction, engineering, and
              logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const isOilRig = service.title === "Oil & Gas Services";
              return (
                <div
                  key={service.title}
                  className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${isOilRig ? "oil-rig-card" : ""}`}
                >
                  <div className={`relative overflow-hidden ${isOilRig ? "h-64" : "h-48"}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-white font-bold text-base">
                        {service.title}
                      </h3>

                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="bg-[#0f172a] py-14 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how Fartcity Dominion can bring your vision to
            life. From feasibility to handover, we&apos;re with you every step
            of the way.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#c7952b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#b8860b] transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
                Contact Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Let&apos;s Build Together
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have a project in mind? Reach out to our team and we&apos;ll get
                back to you within 24 hours.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: "🏢",
                    label: "Company",
                    value: "Fartcity Dominion",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+234 800 FARTCITY",
                  },
                  {
                    icon: "📍",
                    label: "Address",
                    value: "Lagos, Nigeria",
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "info@fartcity.com",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">
                        {item.label}
                      </p>
                      <p className="text-gray-500 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden h-80 md:h-auto min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#0f172a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Fartcity Dominion"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold leading-tight">FARTCITY</h3>
                  <p className="text-[10px] font-medium text-[#c7952b] -mt-0.5">
                    DOMINION
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building excellence worldwide. Engineering, construction,
                and infrastructure services that define the future.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-[#c7952b]">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {["Home", "About Us", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={
                        item === "Home"
                          ? "#home"
                          : `#${item.toLowerCase().replace(/\s+/, "")}`
                      }
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-[#c7952b]">
                Contact Info
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>Lagos, Nigeria</li>
                <li>info@fartcity.com</li>
                <li>+234 800 FARTCITY</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Fartcity Dominion. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Building the future, one project at a time.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

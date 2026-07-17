"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Building & Civil Engineering",
    description:
      "We undertake residential, commercial, industrial, and infrastructure projects with a focus on quality, durability, and value for money.",
    image:
      "/building-civil.jpg",
  },
  {
    title: "Oil & Gas Services",
    description:
      "We provide engineering support, procurement, maintenance, logistics coordination, and project services to the upstream, midstream, and downstream sectors.",
    image:
      "/oil-rig.jpg",
  },
  {
    title: "Property Development & Management",
    description:
      "We develop, manage, and maintain residential, commercial, and mixed-use properties while maximising long-term asset value.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    title: "Project Management",
    description:
      "Our project management services ensure projects are delivered safely, on time, within budget, and to the required quality standards.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    title: "Cost Management & Quantity Surveying",
    description:
      "Professional cost planning, estimating, procurement advice, contract administration, commercial management, value engineering, and financial control throughout the project lifecycle.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    title: "Procurement & Supply Chain",
    description:
      "We source, procure, and manage the timely delivery of quality materials, equipment, and specialist services for projects of all sizes.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
  {
    title: "Logistics Services",
    description:
      "We provide reliable logistics, transportation, distribution, and supply chain solutions to support construction, engineering, and industrial operations.",
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

const values = [
  "Integrity", "Excellence", "Professionalism", "Innovation",
  "Accountability", "Safety", "Sustainability", "Customer Focus",
];

const whyChooseUs = [
  "Experienced professionals",
  "Client-focused approach",
  "Transparent commercial management",
  "Commitment to health, safety, and environmental standards",
  "Innovative and practical solutions",
  "Reliable project delivery",
  "Competitive pricing",
  "Strong ethical business practices",
];

const industries = [
  "Construction", "Infrastructure", "Oil and Gas", "Real Estate",
  "Government", "Manufacturing", "Commercial Development", "Energy", "Industrial Facilities",
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
                alt="Fortcity Dominion"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold leading-tight text-[#0f172a]">
                FORTCITY
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
      <section id="home" className="relative min-h-screen flex items-center">
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
              Welcome to Fortcity Dominion Limited
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 tracking-wide">
              Building Today.
              <br />
              <span className="text-[#c7952b]">Powering</span> Tomorrow.
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Fortcity Dominion Limited is a Nigerian-owned multidisciplinary engineering
              and project services company committed to delivering innovative, sustainable,
              and cost-effective solutions across the construction, infrastructure, oil and
              gas, property, and logistics sectors.
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
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
              Fortcity Dominion Limited
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fortcity Dominion Limited was established to provide world-class engineering,
              commercial, and project delivery services to both the public and private sectors.
              Our team brings together extensive industry experience and a commitment to excellence,
              enabling us to deliver projects of the highest standard.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe every project deserves careful planning, disciplined execution, and
              transparent management. Our approach is built on professionalism, innovation,
              accountability, and long-term client relationships.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We combine technical expertise, commercial excellence, and professional integrity to
              deliver projects that create lasting value for our clients, partners, and communities.
              From concept to completion, we focus on quality, safety, efficiency, and timely delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== VISION / MISSION / VALUES ==================== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#c7952b]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a leading engineering, construction, and project management company
                in Africa, recognised for delivering exceptional value, sustainable solutions,
                and operational excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#c7952b]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative engineering and commercial solutions through quality
                workmanship, effective project management, and outstanding customer service
                while maintaining the highest standards of safety, integrity, and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#c7952b]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                We do more than deliver projects — we build trusted relationships, create
                lasting value, and contribute to sustainable development. Our success is
                measured by the confidence our clients place in us.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
              Our Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="bg-white border border-gray-200 text-gray-700 font-medium px-5 py-2.5 rounded-full text-sm shadow-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From concept to completion, we offer a comprehensive suite of services covering
              every aspect of construction, engineering, and project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const isOilRig = service.title === "Oil & Gas Services";
              return (
                <div
                  key={service.title}
                  className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${isOilRig ? "oil-rig-card" : ""}`}
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

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Fortcity Dominion?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-3 h-3 rounded-full bg-[#c7952b] mx-auto mb-3" />
                <p className="text-gray-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
              Industries
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-gray-50 border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg text-sm hover:border-[#c7952b] hover:text-[#c7952b] transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HSEQ ==================== */}
      <section className="py-16 md:py-24 bg-[#0f172a]">
        <div className="container-custom text-center">
          <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
            HSEQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Health, Safety, Environment & Quality
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Safety is at the heart of everything we do. We are committed to maintaining the
            highest standards of health, safety, environmental protection, and quality in
            every project we undertake.
          </p>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="bg-white py-14 md:py-20 border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how Fortcity Dominion Limited can bring your vision to
            life. From feasibility to handover, we&apos;re with you every step of the way.
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
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-[#c7952b] font-semibold text-sm tracking-widest uppercase mb-3">
                Contact Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have a project in mind? Reach out to our team and we&apos;ll get back to you
                within 24 hours.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "🏢", label: "Company", value: "Fortcity Dominion Limited" },
                  { icon: "📞", label: "Phone", value: "08065818141" },
                  { icon: "📍", label: "Address", value: "Lagos, Nigeria" },
                  { icon: "📧", label: "Email", value: "info@fortcitydominion.com" },
                  { icon: "🌐", label: "Website", value: "www.fortcitydominion.com" },
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
                    alt="Fortcity Dominion"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold leading-tight">FORTCITY</h3>
                  <p className="text-[10px] font-medium text-[#c7952b] -mt-0.5">
                    DOMINION
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building Today. Powering Tomorrow.
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
                <li>info@fortcitydominion.com</li>
                <li>08065818141</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Fortcity Dominion Limited. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Building Today. Powering Tomorrow.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

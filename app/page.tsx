"use client";

import { trackWhatsAppClick, trackSlideToForm } from "../lib/analytics";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Hammer,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

import { sendGAEvent } from "@next/third-parties/google";
import React from "react";

const WHATSAPP_NUMBER = "+918976321674"; // Replace with your WhatsApp number, country code included.

const PHONE_NUMBER = "+91 8976321674"; // Replace with your phone number.

const whatsappLink = `https\://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I need a quotation for home renovation in Mumbai.",
)}`;

const banner = { title: "Modern home renovation", src: "/projects/banner.png" };

const projects = [
  { title: "Home Civil & Construction Work", src: "/projects/Home Civil & Construction Work.png" },

  { title: "Plumbing & Electrical Transformation", src: "/projects/Plumbing & Electrical Transformation.png" },

  { title: "Flooring Comparison", src: "/projects/Before and After Flooring Comparison.png" },

  { title: "Furniture & Carpentry", src: "/projects/Furniture & Carpentry.png" },

  { title: "POP, Painting & Wallpaper", src: "/projects/POP, Painting & Wallpaper.png" },

  { title: "Kitchen Renovation", src: "/projects/Kitchen Renovation.png" },
  { title: "Bathroom Renovation", src: "/projects/Bathroom Renovation.png" },
  { title: "Aluminium Work", src: "/projects/Aluminium Work.png" },
  { title: "Swimming Pool Renovation", src: "/projects/Swimming Pool Renovation.png" },
];

const services = [
  [
    "Home Civil & Construction Work",
    "Demolition, construction, modifications and related civil work for your home.",
    Hammer,
  ],
  ["Plumbing & Electrical", "Complete plumbing, electrical points, fittings and related renovation work.", Wrench],
  ["Flooring", "Tile, marble and other flooring installation and renovation work.", Ruler],
  ["Furniture & Carpentry", "Custom furniture, wardrobes, cabinets and carpentry work.", Hammer],
  ["POP, Painting & Wallpaper", "POP, false ceiling, painting, wallpaper and finishing work.", Star],
  [
    "Kitchen & Bathroom Renovation",
    "Complete kitchen and bathroom remodeling, storage and finishing solutions.",
    ShieldCheck,
  ],
  ["Grill & Aluminium Work", "Custom grills, iron structures, aluminium doors, windows and fabrication work.", Wrench],
  ["Swimming Pool Work", "Swimming pool construction, renovation and related work.", Ruler],
];

function CTAButton({
  href,
  children,
  dark = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
        dark ? "bg-[#17211b] text-white hover:bg-[#28342c]" : "bg-[#b56b3d] text-white hover:bg-[#8e4d29]"
      }`}
      onClick={onClick}
    >
      {children}

      <ArrowRight size={17} />
    </a>
  );
}

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),

    phone: formData.get("phone"),

    location: formData.get("location"),

    requirement: formData.get("service"),

    startDate: formData.get("start"),
  };

  try {
    await fetch(
      "https\://script.google.com/macros/s/AKfycbxeax6vSFiMxcpZJqHs1Ti75QGtd5I-XqvUY8aXZrKqd1vtPnUNNsD5NV3H_EI0G5bWQw/exec",

      {
        method: "POST",

        mode: "no-cors",

        body: JSON.stringify(data),
      },
    );

    alert("Thank you! We will contact you shortly.");

    sendGAEvent("event", "generate_lead", {
      form_name: "inquiry_form",
    });

    form.reset();
  } catch (error) {
    console.error(error);

    alert("Something went wrong. Please contact us on WhatsApp.");
  }
}

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="text-lg font-black tracking-tight">
            HOME RENOVATION SERVICE
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-[#b56b3d]">
              Services
            </a>

            <a href="#projects" className="hover:text-[#b56b3d]">
              Projects
            </a>

            <a href="#process" className="hover:text-[#b56b3d]">
              How it works
            </a>

            <a href="#contact" className="hover:text-[#b56b3d]">
              Contact
            </a>
          </nav>

          <a
            href={whatsappLink}
            onClick={() => {
              trackWhatsAppClick("Header");
            }}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#17211b] px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b56b3d]/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] text-[#8e4d29]">
              <MapPin size={14} /> Mumbai & nearby areas
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.04em] sm:text-6xl">
              Home Renovation in Mumbai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#657067]">
              Complete home renovation and remodeling services — from civil work and plumbing to flooring, kitchen,
              furniture and final finishing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#contact" onClick={() => trackSlideToForm("Banner")}>
                Get Free Quote
              </CTAButton>

              <CTAButton href={whatsappLink} onClick={() => trackWhatsAppClick("Banner")} dark>
                WhatsApp Us
              </CTAButton>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#657067]">
              <span className="flex items-center gap-2">
                <Check size={17} /> Free site visit
              </span>

              <span className="flex items-center gap-2">
                <Check size={17} /> Customized quotation
              </span>

              <span className="flex items-center gap-2">
                <Check size={17} /> Mumbai service
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#e9e1d3] p-3 shadow-2xl">
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#ddd5c7]">
              <img
                src={banner.src}
                alt={banner.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#b56b3d]">What we do</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Complete Home Renovation Services</h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-3xl border border-black/8 bg-[#f7f4ee] p-7">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#e9e1d3] text-[#8e4d29]">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-bold">{title as string}</h3>

                <p className="mt-3 leading-7 text-[#657067]">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-[#b56b3d]">Works</p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Our Recent Home Projects</h2>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#8e4d29]"
              onClick={() => trackWhatsAppClick("Our Recent Home Projects")}
            >
              Planning a similar renovation? → WhatsApp Us
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl bg-[#e9e1d3]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 font-semibold">{project.title}</div>
              </div>
            ))}
          </div>

          {/* <p className="mt-5 text-sm text-[#657067]">
            Replace the six placeholder image paths with your brother's genuine project photos.
          </p> */}
        </div>
      </section>

      {/* Why us */}

      <section className="bg-[#17211b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#e9b08e]">Why choose us</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              One team for the renovation work you need.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Complete Project Execution", "We handle multiple aspects of the renovation through one team."],

              ["Site Visit Available", "We visit your location to understand the work before providing a quotation."],

              ["Customized Solutions", "Work is planned according to your home, requirements and budget."],

              [
                "Experienced Workforce",

                "Skilled workers are available for different renovation and construction requirements.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <Check className="mb-5 text-[#e9b08e]" size={25} />

                <h3 className="text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}

      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#b56b3d]">Simple process</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">How It Works</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Tell us what you need", "Contact us through WhatsApp or the enquiry form."],

              ["02", "Site Visit", "Our team visits your location and understands the work."],

              ["03", "Get Your Quotation", "We provide a quotation based on your requirements."],

              ["04", "Start the Work", "Once everything is finalized, the work begins."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-black/8 p-7">
                <div className="text-sm font-black text-[#b56b3d]">{num}</div>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-[#657067]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#e9e1d3] px-6 py-14 text-center sm:px-10">
          <MapPin className="mx-auto text-[#8e4d29]" />

          <h2 className="mt-4 text-4xl font-black tracking-tight">Serving Mumbai</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#657067]">
            Home renovation services for Mumbai and nearby areas.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-[#17211b] px-7 py-3.5 font-semibold text-white"
            onClick={() => trackSlideToForm("Serving Mumbai")}
          >
            Get a Free Site Visit
          </a>
        </div>
      </section>

      {/* Lead form */}

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#b56b3d]">Get in touch</p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Get a Free Home Renovation Consultation
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#657067]">
              Planning to renovate your home? Tell us what you need and we'll get in touch with you.
            </p>

            <div className="mt-8 space-y-4 text-sm font-semibold">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-3">
                <Phone size={19} /> {PHONE_NUMBER}
              </a>

              <a
                href={whatsappLink}
                onClick={() => {
                  trackWhatsAppClick("Get in touch");
                }}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle size={19} /> Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-[#f7f4ee] p-6 sm:p-8">
            <label className="block text-sm font-semibold">
              Name *
              <input
                required
                name="name"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b56b3d]"
              />
            </label>

            <label className="mt-5 block text-sm font-semibold">
              Phone Number *
              <input
                required
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b56b3d]"
              />
            </label>

            <label className="mt-5 block text-sm font-semibold">
              Location *
              <input
                required
                name="location"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b56b3d]"
              />
            </label>

            <label className="mt-5 block text-sm font-semibold">
              What do you need?
              <select name="service" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3">
                <option>Home Renovation</option>

                <option>Home Civil & Construction Work</option>

                <option>Kitchen Trolley / Furniture</option>

                <option>Other Home Work</option>
              </select>
            </label>

            <label className="mt-5 block text-sm font-semibold">
              When are you planning to start?
              <select name="start" className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3">
                <option>Within 1 month</option>

                <option>1–3 months</option>

                <option>3+ months</option>

                <option>Not decided</option>
              </select>
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#b56b3d] px-6 py-4 font-bold text-white hover:bg-[#8e4d29]"
            >
              Get Free Quote <ArrowRight size={18} />
            </button>

            <a
              href={whatsappLink}
              onClick={() => {
                trackWhatsAppClick("Form");
              }}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 font-bold"
            >
              <MessageCircle size={18} /> Chat with us on WhatsApp
            </a>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/8 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-[#657067] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} HOME RENOVATION SERVICE. All rights reserved.</p>

          <p>Mumbai & nearby service areas</p>
        </div>
      </footer>

      {/* Mobile CTA */}

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-black/10 bg-white/95 p-2 backdrop-blur md:hidden">
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-xl py-3 font-bold"
        >
          <Phone size={18} /> Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#17211b] py-3 font-bold text-white"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </main>
  );
}

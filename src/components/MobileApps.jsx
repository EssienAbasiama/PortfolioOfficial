import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const mobileApps = [
  {
    name: "QCloseHR",
    subtitle: "HR & Workforce Management System",
    context: "1200+ Employees Using This Platform",
    appStoreLink: "https://apps.apple.com/ng/app/qclosehr/id6751410996",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.qclosellc.QCloseHR&pcampaignid=web_share",
    image: "/images/qclosehr-mobile.png",
    description:
      "QCloseHR is a cloud-based HR and workforce management platform designed for modern organizations. It enables businesses to manage employee attendance, productivity, HR operations, and workforce analytics through a mobile-first experience.",
    features: [
      "Employee time and attendance tracking",
      "Task and productivity monitoring",
      "Leave and absence management",
      "Workforce analytics and reporting",
      "Mobile workforce management",
    ],
    tech: [
      "React Native",
      "REST APIs",
      "Node.js backend integration",
      "Mobile UI component systems",
    ],
  },
  {
    name: "QCloseSafety",
    subtitle: "Operational & Service Management",
    context: "Real-time workforce insights platform",
    appStoreLink: "https://apps.apple.com/ng/app/qclosesafety/id6755178119",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.qclosellc.QCloseSafety&pcampaignid=web_share",
    image: "/images/qclosesafety-mobile.png",
    description:
      "QCloseSafety is a productivity and service management platform designed to improve operational efficiency by simplifying workflows and providing real-time workforce insights.",
    features: [
      "Service workflow management",
      "Employee activity tracking",
      "Operational analytics",
      "Mobile productivity tools",
    ],
    tech: ["React Native", "API integrations", "Mobile-first architecture"],
  },
];

const IPhoneMockup = ({ app, index, onClick }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      className="flex flex-col items-center cursor-pointer group"
      onClick={onClick}
    >
      {/* iPhone frame */}
      <div className="relative w-[260px] sm:w-[300px]">
        {/* Outer shell */}
        <div
          className="relative bg-[#1a1a1a] rounded-[44px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.04]"
          style={{
            border: "6px solid #3a3a3a",
            boxShadow:
              "0 0 0 1px #555, 0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Full-bleed screen — image fills everything */}
          <div
            className="relative bg-black overflow-hidden"
            style={{ aspectRatio: "9/19.5" }}
          >
            {/* Dynamic Island — floats over the image */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10 border border-[#2a2a2a]" />
            {/* App screenshot */}
            <img
              src={app.image}
              alt={`${app.name} screenshot`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Placeholder shown when image missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0533] via-[#0d001f] to-[#050816] pointer-events-none">
              <div className="text-[48px] mb-3">📱</div>
              <p className="text-white text-[13px] font-bold text-center px-4">
                {app.name}
              </p>
              <p className="text-[#915EFF] text-[11px] mt-1 text-center px-4">
                {app.subtitle}
              </p>
            </div>

            {/* Hover overlay */}
            {/* Home indicator — floats over the image at the bottom */}
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[4px] bg-white/25 rounded-full z-10" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center z-20">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[13px] font-semibold bg-[#915EFF]/90 px-4 py-2 rounded-full">
                View Details
              </span>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute left-[-7px] top-[100px] w-[4px] h-[30px] bg-[#3a3a3a] rounded-l-sm" />
        <div className="absolute left-[-7px] top-[142px] w-[4px] h-[52px] bg-[#3a3a3a] rounded-l-sm" />
        <div className="absolute left-[-7px] top-[206px] w-[4px] h-[52px] bg-[#3a3a3a] rounded-l-sm" />
        <div className="absolute right-[-7px] top-[156px] w-[4px] h-[72px] bg-[#3a3a3a] rounded-r-sm" />
      </div>

      {/* Labels below mockup */}
      <div className="mt-5 flex flex-col items-center gap-2 max-w-[300px]">
        <span className="text-[11px] font-semibold bg-[#915EFF]/15 text-[#915EFF] border border-[#915EFF]/40 px-3 py-[3px] rounded-full uppercase tracking-wider">
          Built with React Native
        </span>
        <p className="text-white font-bold text-[18px] text-center">
          {app.name}
        </p>
        <p className="text-[#915EFF] text-[12px] font-medium text-center">
          {app.context}
        </p>
        <p className="text-secondary text-[12px] text-center">{app.subtitle}</p>
      </div>
    </motion.div>
  );
};

const AppModal = ({ app, onClose }) => {
  if (!app) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative bg-[#050816] border border-[#915EFF]/30 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xl leading-none"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-6 pr-8">
          <span className="text-[11px] font-semibold bg-[#915EFF]/15 text-[#915EFF] border border-[#915EFF]/40 px-3 py-[3px] rounded-full uppercase tracking-wider w-fit">
            Built with React Native
          </span>
          <h2 className="text-white font-black text-[28px] sm:text-[34px] leading-tight">
            {app.name}
          </h2>
          <p className="text-secondary text-[14px]">{app.subtitle}</p>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="font-semibold text-[15px] mb-2 uppercase tracking-wide text-[#915EFF]">
            About
          </h3>
          <p className="text-secondary text-[14px] leading-[26px]">
            {app.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
            Key Features
          </h3>
          <ul className="space-y-2">
            {app.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-secondary text-[14px]"
              >
                <span className="text-[#915EFF] mt-[3px] shrink-0">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {app.tech.map((t, i) => (
              <span
                key={i}
                className="text-[12px] bg-[#1d1836] text-[#915EFF] border border-[#915EFF]/30 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots placeholder */}
        <div className="mb-8">
          <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
            Screenshots
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="shrink-0 w-[100px] h-[180px] rounded-xl bg-[#1d1836] border border-[#915EFF]/20 flex items-center justify-center"
              >
                <span className="text-secondary text-[10px] text-center px-2">
                  Screenshot {n}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Store CTAs */}
        <div className="grid grid-cols-1 gap-3">
          <a
            href={app.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#915EFF] hover:bg-[#7d4fe0] active:bg-[#6b40cc] transition-colors text-white font-semibold rounded-xl py-3 px-6 w-full"
          >
            {/* Apple logo */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            View on App Store
          </a>

          <a
            href={app.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#1d1836] hover:bg-[#2a2248] active:bg-[#141126] border border-[#915EFF]/40 transition-colors text-white font-semibold rounded-xl py-3 px-6 w-full"
          >
            {/* Play icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 2.5v19l10.5-9.5L3 2.5zm11.7 8.6L17.8 8l3.2 1.8c1.3.7 1.3 2.5 0 3.2L17.8 15l-3.1-3.9zm-.9 1.1L17 16 6 22l7.8-9.8zM6 2l11 6-3.2 4L6 2z" />
            </svg>
            View on Play Store
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const MobileApps = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Production Apps I've Shipped
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Mobile Apps.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Production mobile applications live on the Apple App Store and Google
        Play Store — built with React Native and used by real organizations.
      </motion.p>

      <div className="mt-16 flex flex-wrap justify-center gap-14 sm:gap-20">
        {mobileApps.map((app, index) => (
          <IPhoneMockup
            key={app.name}
            app={app}
            index={index}
            onClick={() => setSelectedApp(app)}
          />
        ))}
      </div>

      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </>
  );
};

export default SectionWrapper(MobileApps, "mobile-apps");

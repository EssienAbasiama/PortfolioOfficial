import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import hrScreenshot1 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 22.14.10.jpeg";
import hrScreenshot2 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 22.14.12.jpeg";
import hrScreenshot3 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 22.14.13.jpeg";
import hrScreenshot4 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 3.jpeg";
import hrScreenshot5 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 4.jpeg";
import hrScreenshot6 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 5.jpeg";
import hrScreenshot7 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 6.jpeg";
import hrScreenshot8 from "../assets/HR_screenshot/WhatsApp Image 2026-03-14 at 7.jpeg";

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
    caseStudy: {
      projectOverview: [
        { label: "Role", value: "Senior Mobile Engineer" },
        { label: "Platform", value: "iOS and Android" },
        { label: "Technology", value: "React Native" },
        { label: "Status", value: "Production Application" },
      ],
      problem: [
        "Many organizations struggle with inefficient HR processes, manual attendance tracking, and limited visibility into employee productivity. Traditional HR systems are often complex and not optimized for mobile-first workflows.",
        "Organizations needed a simple, mobile-first platform that allows employees and managers to manage HR operations from anywhere while maintaining accurate workforce data.",
      ],
      solution: [
        "QCloseHR was designed as a mobile-first HR and workforce management platform that allows organizations to manage employee attendance, tasks, leave requests, and workforce analytics directly from mobile devices.",
        "The mobile application integrates with backend services to deliver real-time workforce insights and productivity data for employees, managers, and administrators.",
      ],
      myRoleIntro:
        "As the Senior Mobile Engineer, I was responsible for the end-to-end development of the mobile application.",
      responsibilities: [
        "Designing the mobile application architecture",
        "Developing core mobile UI systems using React Native",
        "Integrating the mobile client with backend APIs",
        "Implementing authentication and secure API communication",
        "Optimizing performance for mobile devices",
        "Preparing builds and deployments for the App Store",
      ],
      architecture: [
        {
          title: "Mobile Application",
          items: [
            "React Native",
            "TypeScript",
            "Reusable component-based UI architecture",
          ],
        },
        {
          title: "Backend Services",
          items: ["Node.js", "Laravel", "Java Spring Boot"],
        },
        {
          title: "API Communication",
          items: [
            "REST APIs",
            "Secure authentication and token-based requests",
          ],
        },
        {
          title: "Deployment",
          items: ["Apple App Store", "Google Play Store"],
        },
      ],
      challenges: [
        {
          title: "Performance Optimization",
          description:
            "Optimized API requests and improved data loading efficiency to ensure fast and reliable user interactions.",
        },
        {
          title: "Reusable Component Systems",
          description:
            "Built reusable UI components to accelerate development and maintain consistency across the application.",
        },
        {
          title: "Secure API Integration",
          description:
            "Implemented secure authentication and reliable API communication between the mobile application and backend systems.",
        },
      ],
      impact: [
        "Delivered a production HR platform used internally by the organization",
        "Enabled mobile workforce management and attendance tracking",
        "Improved operational visibility and productivity insights",
        "Established reusable mobile architecture for future products",
      ],
    },
    features: [
      "Attendance & Time Tracking: Employees can clock in/out, track working hours, and monitor daily attendance directly from the mobile app.",
      "Shift & Timesheet Management: Supports shift scheduling, timesheet tracking, and overtime monitoring.",
      "Leave & Time-Off Management: Employees can request leave, view balances, and managers can approve or reject requests.",
      "Payroll & Payslip Access: Employees can securely access payroll information and payslips.",
      "Task & To-Do Management: Allows employees to manage assigned tasks and track productivity.",
      "Invoices & Requests: Employees and teams can submit internal requests and manage service or invoice submissions.",
      "Calendar & Scheduling: Integrated calendar system for managing work schedules and HR events.",
      "Disciplinary Management: Supports documentation and tracking of disciplinary records.",
      "Performance Management: Includes KPI tracking, employee appraisals, and performance evaluation tools.",
      "Policies & Procedures: Centralized access to company HR policies and procedures.",
      "Announcements: Allows organizations to broadcast company announcements to employees.",
      "Workforce Reporting & Insights: Provides workforce analytics and HR reporting dashboards.",
    ],
    tech: [
      "React Native",
      "REST APIs",
      "Node.js backend integration",
      "Mobile UI component systems",
    ],
    techGroups: [
      {
        title: "Mobile Development",
        items: [
          "React Native",
          "TypeScript",
          "Cross-platform mobile architecture",
        ],
      },
      {
        title: "Backend Integration",
        items: [
          "Laravel (RESTful API services)",
          "Secure API communication",
          "Token-based authentication",
        ],
      },
      {
        title: "API Communication",
        items: ["REST APIs", "Axios / HTTP networking", "JSON data handling"],
      },
      {
        title: "Mobile UI Systems",
        items: [
          "Component-based UI architecture",
          "Reusable UI component systems",
          "Responsive mobile layouts",
        ],
      },
      {
        title: "Mobile Tooling & Deployment",
        items: [
          "Android Studio",
          "Xcode",
          "Apple App Store deployment",
          "Google Play Store deployment",
        ],
      },
    ],
    screenshots: [
      hrScreenshot1,
      hrScreenshot2,
      hrScreenshot3,
      hrScreenshot4,
      hrScreenshot5,
      hrScreenshot6,
      hrScreenshot7,
      hrScreenshot8,
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

  const caseStudy = app.caseStudy;
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const screenshotsRailRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const didDragRef = useRef(false);

  const handleRailPointerDown = (e) => {
    const rail = screenshotsRailRef.current;
    if (!rail) return;

    didDragRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = rail.scrollLeft;
    rail.style.cursor = "grabbing";
  };

  const handleRailPointerMove = (e) => {
    const rail = screenshotsRailRef.current;
    if (!rail || e.buttons !== 1) return;

    const deltaX = e.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 4) {
      didDragRef.current = true;
    }

    rail.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const handleRailPointerUp = () => {
    const rail = screenshotsRailRef.current;
    if (rail) {
      rail.style.cursor = "grab";
    }

    if (didDragRef.current) {
      requestAnimationFrame(() => {
        didDragRef.current = false;
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
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
        className="relative bg-[#050816] border border-[#915EFF]/30 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-[1210]"
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

        {caseStudy && (
          <>
            {/* Project Overview */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                Project Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.projectOverview.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-[#1d1836]/70 border border-[#915EFF]/20 px-3 py-3"
                  >
                    <p className="text-[11px] uppercase tracking-wider text-secondary mb-1">
                      {item.label}
                    </p>
                    <p className="text-white text-[14px] font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                Problem
              </h3>
              <div className="space-y-3">
                {caseStudy.problem.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-secondary text-[14px] leading-[26px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                Solution
              </h3>
              <div className="space-y-3">
                {caseStudy.solution.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-secondary text-[14px] leading-[26px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* My Role */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                My Role
              </h3>
              <p className="text-secondary text-[14px] leading-[26px] mb-3">
                {caseStudy.myRoleIntro}
              </p>
              <p className="text-white text-[13px] font-medium uppercase tracking-wide mb-2">
                Responsibilities included:
              </p>
              <ul className="space-y-2">
                {caseStudy.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-secondary text-[14px]"
                  >
                    <span className="text-[#915EFF] mt-[3px] shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                Architecture
              </h3>
              <div className="space-y-3">
                {caseStudy.architecture.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl bg-[#1d1836]/70 border border-[#915EFF]/20 px-3 py-3"
                  >
                    <p className="text-white text-[14px] font-semibold mb-2">
                      {block.title}
                    </p>
                    <ul className="space-y-1">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-secondary text-[13px]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Challenges */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                Engineering Challenges
              </h3>
              <div className="space-y-3">
                {caseStudy.challenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-xl bg-[#1d1836]/70 border border-[#915EFF]/20 px-3 py-3"
                  >
                    <p className="text-white text-[14px] font-semibold mb-1">
                      {challenge.title}
                    </p>
                    <p className="text-secondary text-[13px] leading-[24px]">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="mb-6">
              <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
                Impact
              </h3>
              <ul className="space-y-2">
                {caseStudy.impact.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-secondary text-[14px]"
                  >
                    <span className="text-[#915EFF] mt-[3px] shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

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
          {app.techGroups ? (
            <div className="space-y-3">
              {app.techGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl bg-[#1d1836]/70 border border-[#915EFF]/20 px-3 py-3"
                >
                  <p className="text-white text-[14px] font-semibold mb-2">
                    {group.title}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-secondary text-[13px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </div>

        {/* Screenshots placeholder */}
        <div className="mb-8">
          <h3 className="font-semibold text-[15px] mb-3 uppercase tracking-wide text-[#915EFF]">
            Screenshots
          </h3>
          {app.screenshots?.length ? (
            <>
              <p className="text-secondary text-[12px] mb-2">
                Tap any screenshot to magnify.
              </p>
              <div
                ref={screenshotsRailRef}
                className="flex gap-3 overflow-x-auto pb-2 cursor-grab select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onPointerDown={handleRailPointerDown}
                onPointerMove={handleRailPointerMove}
                onPointerUp={handleRailPointerUp}
                onPointerLeave={handleRailPointerUp}
              >
                {app.screenshots.map((shot, index) => (
                  <button
                    key={`shot-${index}`}
                    type="button"
                    onClick={(e) => {
                      if (didDragRef.current) {
                        e.preventDefault();
                        return;
                      }

                      setActiveScreenshot(shot);
                    }}
                    className="shrink-0 w-[108px] h-[192px] rounded-xl border border-[#915EFF]/20 overflow-hidden bg-[#1d1836] transition-transform duration-200 hover:scale-[1.03]"
                    aria-label={`Open screenshot ${index + 1}`}
                  >
                    <img
                      src={shot}
                      alt={`${app.name} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
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
          )}
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

        {activeScreenshot && (
          <div
            className="fixed inset-0 z-[1300] flex items-center justify-center p-4"
            onClick={() => setActiveScreenshot(null)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
            <button
              type="button"
              onClick={() => setActiveScreenshot(null)}
              className="absolute top-5 right-5 z-[1310] w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white text-2xl leading-none"
              aria-label="Close screenshot preview"
            >
              ×
            </button>
            <img
              src={activeScreenshot}
              alt={`${app.name} enlarged screenshot`}
              className="relative z-[1310] max-h-[88vh] max-w-[92vw] w-auto h-auto rounded-xl border border-[#915EFF]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
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

import React, { useState } from "react";
import { GiProgression } from "react-icons/gi";
import { MdRecommend } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import ProgressTracker from "./progressTracker";
import Recommendations from "./Recommendations";
import ProfessionalConsultation from "./professionalConsultation";
import CommunitySupport from "./communitySupport";
import PersonalizedModules from "./personalizedModules";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Progress Tracker");

  const tabs = [
    { label: "Progress Tracker", icon: <GiProgression size={36} /> },
    { label: "Recommendations", icon: <MdRecommend size={36} /> },
    { label: "Professional Consultation", icon: <BiConversation size={36} /> },
    { label: "Community Support", icon: <FaUsers size={36} /> },
    { label: "Personalized Modules", icon: <HiAdjustments size={36} /> },
  ];

  function SidebarItem({ icon, label }) {
    return (
      <div className="relative group flex items-center gap-2">
        <button className="grid place-content-center aspect-square size-12 rounded-lg bg-primary hover:bg-primary/20  focus:outline-none">
          {icon}
        </button>
        <span className="hidden md:block absolute z-10 left-full top-1/2 transform -translate-y-1/2 ml-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-base py-2 px-4 rounded-lg shadow-lg">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-12 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        Dashboard
      </h1>
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Tabs */}
        <div className="flex sticky top-4 md:flex-col space-x-4 md:space-x-0 md:space-y-4 ">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`p-2 text-base md:text-lg font-medium rounded-lg ${activeTab === tab.label
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-blue-100"
                } transition`}
            >
              <SidebarItem icon={tab.icon} label={tab.label} />
            </button>
          ))}

        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          {activeTab === "Progress Tracker" && <ProgressTracker />}
          {activeTab === "Recommendations" && <Recommendations />}
          {activeTab === "Professional Consultation" && <ProfessionalConsultation />}
          {activeTab === "Community Support" && <CommunitySupport />}
          {activeTab === "Personalized Modules" && <PersonalizedModules />}

        </div>
      </div>

    </div>
  );
};



export default Dashboard;

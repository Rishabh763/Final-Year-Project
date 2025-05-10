import React, { useState } from "react";
import { GiProgression } from "react-icons/gi";
import { MdRecommend } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import ProgressTracker from "./ProgressTracker";
import Recommendations from "./Recommendations";
import ProfessionalConsultation from "./ProfessionalConsultation";
import CommunitySupport from "./CommunitySupport";
import PersonalizedModules from "./PersonalizedModules";
import { useParams } from "react-router-dom";

const Dashboard = () => {

  const { username } = useParams();
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Progress Tracker";
  });

  const handleTabClick = (label) => {
    setActiveTab(label);
    localStorage.setItem("activeTab", label);
  };

  const tabs = [
    { label: "Progress Tracker", icon: <GiProgression size={36} /> },
    // { label: "Recommendations", icon: <MdRecommend size={36} /> },
    { label: "Professional Consultation", icon: <BiConversation size={36} /> },
    { label: "Community Support", icon: <FaUsers size={36} /> },
    { label: "Personalized Modules", icon: <HiAdjustments size={36} /> },
  ];

  function SidebarItem({ icon, label }) {
    return (
      <div className="relative group flex items-center gap-2 z-50">
        <button className="grid place-content-center aspect-square size-12 rounded-lg bg-primary  focus:outline-none">
          {icon}
        </button>
        <span className="hidden absolute left-[105%] top-1/2 transform -translate-y-1/2 ml-2 w-max  group-hover:block transition-opacity duration-300 bg-gray-800 text-white text-base py-2 px-4 rounded-lg shadow-lg">
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
      {/* <h1 className="text-2xl font-bold">Welcome, {username}</h1> */}
      <div className="flex flex-col md:flex-row gap-4 md:items-start">
        {/* Tabs */}
        <div className="flex sticky top-4 flex-wrap gap-4 md:flex-col ">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab.label)}
              className={`p-2 text-base md:text-lg font-medium rounded-lg ${activeTab === tab.label
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-blue-300"
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

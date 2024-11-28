import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Progress Tracker");

  const tabs = [
    "Progress Tracker",
    "Recommendations",
    "Professional Consultation",
    "Community Support",
    "Personalized Modules",
  ];

  // Sample data for charts
  const barData = [
    { name: "Week 1", value: 60 },
    { name: "Week 2", value: 75 },
    { name: "Week 3", value: 80 },
    { name: "Week 4", value: 90 },
  ];

  const pieData = [
    { name: "Completed", value: 70 },
    { name: "Pending", value: 30 },
  ];

  const COLORS = ["#4C7FF7", "#A3C9FF"]; // Blue shades

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-12 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        Dashboard
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Tabs */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 text-base md:text-lg font-medium rounded-lg ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-blue-100"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          {activeTab === "Progress Tracker" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Progress Tracker
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(221.2, 83.2%, 53.3%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === "Recommendations" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Recommendations
              </h2>
              <p className="text-gray-600">
                Here are personalized recommendations based on your progress...
              </p>
            </div>
          )}

          {activeTab === "Professional Consultation" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Professional Consultation
              </h2>
              <p className="text-gray-600">
                Schedule a consultation with a mental health professional.
              </p>
            </div>
          )}

          {activeTab === "Community Support" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Community Support
              </h2>
              <p className="text-gray-600">
                Join our community forums to connect with others.
              </p>
            </div>
          )}

          {activeTab === "Personalized Modules" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Personalized Modules
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};



export default Dashboard;

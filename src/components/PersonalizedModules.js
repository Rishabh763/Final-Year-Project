import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import { auth, db } from "../firebase.js";
import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";



const sections = [
  {
    id: "1",
    title: "Self Help Tools",
    subsections: [
      "CBT-Based Exercises",
      "Meditation & Mindfulness Guides",
      "Gratitude Journal",
      "Breathing Exercises",
    ],
  },
  {
    id: "2",
    title: "Emotional Support and Peer Counseling",
    subsections: [
      "Anonymous Peer Support",
      "Self-Help Groups",
    ],
  },
  {
    id: "3",
    title: "Digital Therapeutics",
    subsections: [
      "AI-Powered Chatbot Therapists",
      "Mood Tracker",
      "Behavioral Activation",
    ],
  },
  {
    id: "4",
    title: "Educational Content",
    subsections: [
      "Mental Health Literacy",
      "Science Behind Treatments",
      "Mythbusters",
    ],
  },
  {
    id: "5",
    title: "Long-Term Support",
    subsections: [
      "Periodic Check-Ins",
      "Gamified Progress Goals",
      "Relapse Prevention Plans",
    ],
  },
];




function PersonalizedModules() {


  const [user, setUser] = useState();
  const [disorder, setDisorder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchLatestDoc = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, "user", "PsychometricTest", user.email),
          orderBy("createdAt", "desc"),
          limit(1)
        );

        const querySnapshot = await getDocs(q);
        const latestDoc = querySnapshot.docs[0]?.data();

        setDisorder(latestDoc?.disorderScores || {});
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestDoc();
  }, [user]);


  const handleTabClick = (id) => {
    setSelectedTab(id);
    localStorage.setItem("selectedTab", id);
  };


  const [selectedTab, setSelectedTab] = useState(() => {
    return localStorage.getItem("selectedTab") || "1";
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-primary">
        Personalized Modules
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin text-blue-600" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={Object.entries(disorder)
              .map(([key, value]) => ({ disease: key.replace(/([a-z])([A-Z])/g, '$1 $2'), score: value }))
              .sort((a, b) => b.score - a.score)}

          >
            <PolarGrid />
            <PolarAngleAxis dataKey="disease" />
            <PolarRadiusAxis />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#2563eb"
              fill="#2563eb"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}




      <div className="grid gap-2 grid-flow-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleTabClick(section.id)}
            className={`px-4 py-2 rounded-md text-sm min-w-24 font-medium transition-colors duration-200 ${selectedTab === section.id
              ? "bg-primary text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
          >
            {section.id}. {section.title}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {sections
          .filter((section) => section.id === selectedTab)
          .map((section) => (
            <div
              key={section.id}
              className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            >
              {section.subsections.map((sub, index) => (
                <Link to={`/dashboard2/username/${encodeURIComponent(sub)}`} key={index}>
                  <div className="space-y-4 shadow-2xl rounded-lg bg-white p-6 transition-transform hover:-translate-y-2 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/95 focus:ring-offset-2">
                    <h3 className="text-xl font-semibold truncate">{sub}</h3>
                    <p className="text-gray-600 text-sm">{getSuggestion(sub)}</p>
                    {/* Example: if you want tags or specialties, you can use a mock list like this */}
                    {/* <div className="flex flex-wrap gap-2">
                    {["Wellbeing", "Support"].map((tag, i) => (
                      <span key={i} className="rounded-sm px-2 py-1 bg-primary text-white text-xs">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  </div>
                </Link>

              ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default PersonalizedModules


function getSuggestion(sub) {
  switch (sub) {
    case "CBT-Based Exercises":
      return "Try interactive mood tracking and thought record tools.";
    case "Meditation & Mindfulness Guides":
      return "Use daily 5-minute mindfulness audio guides.";
    case "Gratitude Journal":
      return "Daily prompts with image upload option for memories.";
    case "Breathing Exercises":
      return "Animated breath timers with music integration.";
    case "Anonymous Peer Support":
      return "Join real-time moderated discussions anonymously.";
    case "Self-Help Groups":
      return "Participate in themed weekly support sessions.";
    case "AI-Powered Chatbot Therapists":
      return "Talk with an AI therapist for daily reflections.";
    case "Mood Tracker":
      return "Log daily mood using emojis, notes, and trends.";
    case "Behavioral Activation":
      return "Get activity suggestions based on mood inputs.";
    case "Mental Health Literacy":
      return "Short videos explaining common disorders.";
    case "Science Behind Treatments":
      return "Simple infographics on how treatments work.";
    case "Mythbusters":
      return "Common myths vs facts explained in cards.";
    case "Periodic Check-Ins":
      return "Weekly assessments with score trends.";
    case "Gamified Progress Goals":
      return "Earn badges for completing daily tasks.";
    case "Relapse Prevention Plans":
      return "Personalized plans with early warning signs.";
    default:
      return "Useful content to support your journey.";
  }
}

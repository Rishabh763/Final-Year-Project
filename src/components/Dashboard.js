/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QeuCWjBaecx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Tooltip,
} from "recharts";
import { ResponsiveContainer, Cell } from "recharts";
// Dummy data for charts
const moodData = [
  { month: "January", mood: 186 },
  { month: "February", mood: 305 },
  { month: "March", mood: 237 },
  { month: "April", mood: 73 },
  { month: "May", mood: 209 },
  { month: "June", mood: 214 },
];

const meditationData = [
  { category: "Mindfulness", time: 275 },
  { category: "Breathing", time: 200 },
  { category: "Body Scan", time: 187 },
  { category: "Loving Kindness", time: 173 },
  { category: "Other", time: 99 },
  { category: "Others", time: 194 },
  { category: "Oth", time: 92 },
  { category: "Oer", time: 91 },
];

// Function to interpolate colors between two colors
const interpolateColor = (color1, color2, factor) => {
  const hex = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return [r, g, b];
  };

  const rgb1 = hex(color1);
  const rgb2 = hex(color2);

  const result = rgb1.map((c1, i) => Math.round(c1 + factor * (rgb2[i] - c1)));
  return `#${result.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
};

// Function to generate an array of blue colors from sky blue to dark blue
const generateGradientColors = (count) => {
  const colors = [];
  const startColor = "#2fa4c8"; // Sky blue
  const endColor = "#00008B"; // Dark blue

  for (let i = 0; i < count; i++) {
    const factor = i / (count - 1); // Normalize factor to [0, 1]
    colors.push(interpolateColor(startColor, endColor, factor));
  }

  return colors;
};
const randomBlueColors = generateGradientColors(meditationData.length);

function Dashboard({ username }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100 full-width">
      <header className="sticky top-0 z-30 flex py-2 items-center justify-between border-b bg-white px-6 shadow-md">
        <div className="flex items-center gap-4">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Mental illness</span>
          </Link>
          <Breadcrumb username={username} />
        </div>
        <UserMenu />
      </header>
      <div className="flex flex-1 items-start gap-4 p-4 md:p-6 h-min">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

function Breadcrumb({ username }) {
  return (
    <nav className="flex items-center text-sm text-gray-600">
      <Link to="#" className="hover:text-gray-900">
        Dashboard
      </Link>
      <span className="mx-2">/</span>
      <span className="capitalize">{username}</span>
    </nav>
  );
}

function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <button className="p-1 rounded-full size-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
        >
          <circle cx="12" cy="8" r="4" fill="#ccc" />
          <path
            d="M4 22v-2c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v2H4z"
            fill="#ccc"
          />
        </svg>
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <nav className="hidden md:flex w-16 sticky top-24 flex-col items-center gap-4 p-4 border-r bg-white">
      <SidebarItem icon={<DashboardIcon />} label="Dashboard" />
      <SidebarItem icon={<MoodIcon />} label="Mood Tracker" />
      <SidebarItem icon={<MeditationIcon />} label="Meditation" />
      <SidebarItem icon={<SleepIcon />} label="Sleep Tracker" />
    </nav>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="relative group">
      <button className="grid place-content-center aspect-square size-12 rounded-lg bg-gray-200 text-gray-500 hover:bg-gray-400 focus:outline-none">
        {icon}
      </button>
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg shadow-lg">
        {label}
      </span>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="Mood Score" value="75%" icon={<MoodIcon />} />
        <StatsCard
          title="Meditation Time"
          value="25 min"
          icon={<MeditationIcon />}
        />
        <StatsCard title="Sleep Quality" value="8.2" icon={<SleepIcon />} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ChartCard
          title="Mood Trends"
          icon={<GraphIcon />}
          chart={<MoodLineChart />}
        />
        <ChartCard
          title="Meditation Breakdown"
          icon={<PieIcon />}
          chart={<MeditationPieChart />}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <TableCard title="Sleep History" icon={<CalendarIcon />} />
        <TableCard title="Meditation Leaderboard" icon={<TrophyIcon />} />
      </div>
    </div>
  );
}

function StatsCard({ title, value, icon }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className="text-gray-500">{icon}</span>
      </div>
      <div className="text-4xl font-bold text-gray-900">{value}</div>
      <p className="text-xs text-gray-500">+3% from last week</p>
    </div>
  );
}

function ChartCard({ title, icon, chart }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className="text-gray-500">{icon}</span>
      </div>
      {chart}
    </div>
  );
}

function MoodLineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={moodData}>
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

function MeditationPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={meditationData}
          dataKey="time"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#224ff8"
          stroke="#fff"
          // isAnimationActive={false}
        >
          {meditationData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={randomBlueColors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

function TableCard({ title, icon }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className="text-gray-500">{icon}</span>
      </div>
      <div className="overflow-x-scroll">
        <table className="w-full text-center text-sm text-gray-900 min-w-80 ">
          <thead>
            <tr>
              <th className="pb-1">Sleep Quality</th>
              <th className="pb-1">Date</th>
              <th className="pb-1">Sleep Duration</th>
              <th className="pb-1">Bedtime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-06-01</td>
              <td>8.5</td>
              <td>7h 30m</td>
              <td>11:00 PM</td>
            </tr>
            <tr>
              <td>2023-05-31</td>
              <td>7.8</td>
              <td>6h 45m</td>
              <td>11:30 PM</td>
            </tr>
            <tr>
              <td>2023-06-01</td>
              <td>8.5</td>
              <td>7h 30m</td>
              <td>11:00 PM</td>
            </tr>
            <tr>
              <td>2023-05-31</td>
              <td>7.8</td>
              <td>6h 45m</td>
              <td>11:30 PM</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Icons Components
function MoodIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MeditationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 15c-1 0-1-2-1-2s0-2 1-2 1 2 1 2 0 2-1 2z" />
      <path d="M12 15c-1 0-1-2-1-2s0-2 1-2 1 2 1 2 0 2-1 2z" />
      <path d="M19 15c-1 0-1-2-1-2s0-2 1-2 1 2 1 2 0 2-1 2z" />
    </svg>
  );
}

function SleepIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h18v12H3z" />
      <path d="M8 12h8v2H8z" />
    </svg>
  );
}

function DashboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function GraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function PieIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default Dashboard;

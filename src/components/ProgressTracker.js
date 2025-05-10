import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  Line,
  LineChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { GrHostMaintenance } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { auth, db } from "../firebase.js";
import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function ProgressTracker() {
  const [user, setUser] = useState();
  const [basicScores, setBasicScores] = useState([]);
  const [barData, setBarData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [severityTrend, setSeverityTrend] = useState([]);
  const [latestSnapshot, setLatestSnapshot] = useState([]);
  const [loadingBasic, setLoadingBasic] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchBasicScores = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, "user", "BasicTest", user.email),
          orderBy("createdAt", "asc"),
          limit(15)
        );

        const querySnapshot = await getDocs(q);

        const results = querySnapshot.docs.map((doc, index) => ({
          ...doc.data(),
          index: index + 1,
          date: doc.data()?.createdAt?.toDate()?.toLocaleDateString() || `Attempt ${index + 1}`
        }));

        const positiveCount = results.filter(r => r.mentalIllness === "positive").length;
        const negativeCount = results.length - positiveCount;

        const barData = [
          { name: "Positive", value: positiveCount },
          { name: "Negative", value: negativeCount },
        ];

        const lineData = results.map(r => ({
          index: r.index,
          date: r.date,
          value: r.mentalIllness === "positive" ? 1 : 0,
        }));

        setBasicScores(results);
        setBarData(barData);
        setLineData(lineData);
      } catch (error) {
        console.error("Error fetching basic scores:", error);
      } finally {
        setLoadingBasic(false);
      }
    };

    const fetchSeverityAnalysis = async () => {
      if (!user) return;

      const tests = [
        "AnxietyDisorder",
        "AttentionDeficitHyperactivityDisorder",
        "BipolarDisorder",
        "ClinicalDepression",
        "Dementia",
        "ObsessiveCompulsiveDisorder",
        "PostTraumaticStressDisorder",
        "Schizophrenia"
      ];

      const trend = [];
      const snapshot = [];

      try {
        for (const test of tests) {
          const q = query(
            collection(db, "user", test, user.email),
            orderBy("createdAt", "asc"),
            limit(10)
          );

          const snapshotData = await getDocs(q);

          const testTrend = snapshotData.docs.map(doc => ({
            date: doc.data().createdAt?.toDate().toLocaleDateString() || "",
            newScore: doc.data().newScore,
            test
          }));

          if (testTrend.length > 0) {
            snapshot.push({ test, newScore: testTrend[testTrend.length - 1].newScore });
            trend.push(...testTrend);
          }
        }

        setSeverityTrend(trend);
        setLatestSnapshot(snapshot);
      } catch (error) {
        console.error("Error fetching severity data:", error);
      }
    };

    fetchBasicScores();
    fetchSeverityAnalysis();
  }, [user]);

  const COLORS = ["#2563eb", "#f87171"];

  return (
    <div className='min-h-[50vh]'>
      <h2 className="text-xl font-bold mb-4 text-primary">
        Progress Tracker
      </h2>

      {loadingBasic ? (
        <div className="flex justify-center items-center h-64">
          <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin text-blue-600" />
        </div>
      ) : (
        <>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Severity Snapshot */}
            <div>
              <h3 className='text-lg font-semibold text-primary mt-4'>Latest Severity Snapshot</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={latestSnapshot}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="test" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="newScore" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Severity Trend */}
            <div>
              <h3 className='text-lg font-semibold text-primary mt-4'>Severity Trend Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={severityTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="newScore" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <h3 className='text-lg font-semibold text-primary my-4'>Basic Test Analysis</h3>
            <div className='grid md:grid-cols-2 gap-4'>
              {/* Bar Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
              {/* Pie Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={barData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              {/* Line Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="index" />
                  <YAxis ticks={[0, 1]} domain={[0, 1]} tickFormatter={(v) => v === 1 ? 'Positive' : 'Negative'} />
                  <Tooltip formatter={(val) => val === 1 ? 'Positive' : 'Negative'} />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
      )}
    </div>
  );
}

export default ProgressTracker;

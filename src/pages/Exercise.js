import React from "react";
import Navbar from "../components/Navbar";
import { CgGames } from "react-icons/cg";

function Exercise() {
  return (
    <div className=" bg-muted py-12 content-grid min-h-screen">
      <Navbar />
      <main>
        <h1 className="text-3xl md:text-5xl mt-12 font-bold text-center">
          Exercise
        </h1>
        <div className="special-grid py-8">
          {/* Text-to-Speech Card */}
          <a
            className="card space-y-4 shadow-2xl rounded-lg bg-white text-primary p-6 transition-transform hover:-translate-y-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            href="https://shreygit225.github.io/IPD/games/tts/tts.html"
          >
            <CgGames fill="bg-primary" size={96} className="" />
            <h3 className="text-xl font-semibold truncate">Text-to-Speech</h3>
            <p className="text-muted-foreground">
              Effortlessly convert your notes or any text into speech. Ideal for
              reviewing content on the go or assisting with accessibility needs.
            </p>
          </a>

          {/* Note-taking Card */}
          <a
            className="card space-y-4 shadow-2xl rounded-lg bg-white text-primary p-6 transition-transform hover:-translate-y-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            href="https://shreygit225.github.io/IPD/games/tts/tts.html"
          >
            <CgGames fill="bg-primary" size={96} />
            <h3 className="text-xl font-semibold truncate">Note-taking</h3>
            <p className="text-muted-foreground">
              Organize your thoughts and ideas effectively with our advanced
              note-taking tool. Perfect for lectures, meetings, or brainstorming
              sessions.
            </p>
          </a>

          {/* Vocabulary & Pronunciation Card */}
          <a
            className="card space-y-4 shadow-2xl rounded-lg bg-white text-primary p-6 transition-transform hover:-translate-y-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            href="https://shreygit225.github.io/IPD/games/Main%20quiz/mainquiz.html"
          >
            <CgGames fill="bg-primary" size={96} />
            <h3 className="text-xl font-semibold truncate">
              Vocabulary & Pronunciation
            </h3>
            <p className="text-muted-foreground">
              Expand your vocabulary and refine your pronunciation with our
              interactive tools, designed to make learning languages engaging
              and effective.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Exercise;

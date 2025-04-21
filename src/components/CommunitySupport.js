import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function communitySupport() {
    return (
        <div>
            <main className="container mx-auto px-4 py-12">
                {/* Section Header */}
                <section className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-blue-600">
                        Join Our Supportive Community
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Connect with others, share experiences, and find support through our various community platforms. We're here to help you on your mental health journey.
                    </p>
                </section>

                {/* Community Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Discord Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                                />
                            </svg>
                            Discord
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Join our Discord server for real-time chat, support groups, and community events.
                        </p>
                        <a
                            href="https://discord.gg/mindmatters"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700"
                        >
                            Join Discord
                        </a>
                    </div>

                    {/* Telegram Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Telegram
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Follow our Telegram channel for daily affirmations, tips, and community updates.
                        </p>
                        <a
                            href="https://t.me/mindmatters"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700"
                        >
                            Join Telegram
                        </a>
                    </div>

                    {/* Support Forum Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-8 4h10a2 2 0 002-2v-8a2 2 0 00-2-2h-4l-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Support Forum
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Participate in our online forum to share experiences and get advice from the community.
                        </p>
                        <a
                            href="/forum"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700"
                        >
                            Visit Forum
                        </a>
                    </div>
                </div>

                {/* Community Guidelines */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Community Guidelines</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Be respectful and kind to all community members</li>
                        <li>Maintain confidentiality and privacy</li>
                        <li>Offer support, not medical advice</li>
                        <li>Report any concerning behavior to moderators</li>
                        <li>Engage in constructive and positive discussions</li>
                    </ul>
                </section>

                {/* Social Media Section */}
                <section className="bg-white rounded-lg p-8 shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Follow Us on Social Media</h3>
                    <p className="text-gray-600 mb-6">
                        Stay connected and get the latest updates from Mind Matters on our social media channels.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://facebook.com/mindmatters"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                            >
                                <FaFacebook className="mr-2" />
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com/mindmatters"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                            >
                                <FaTwitter className="mr-2" />
                                Twitter
                            </a>
                            <a
                                href="https://youtube.com/mindmatters"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                            >
                                <FaYoutube className="mr-2" />
                                YouTube
                            </a>
                            <a
                                href="https://linkedin.com/company/mindmatters"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                            >
                                <FaLinkedin className="mr-2" />
                                LinkedIn
                            </a>
                        </div>

                    </div>
                </section>
            </main>

        </div>
    )
}

export default communitySupport

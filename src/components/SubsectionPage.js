import { useParams } from "react-router-dom";

const subsectionDescriptions = {
  "CBT-Based Exercises": {
    description: "Cognitive Behavioral Therapy (CBT) is a structured, time-limited approach aimed at identifying and changing negative thought patterns and behaviors. CBT exercises often include journaling, behavior experiments, cognitive restructuring, and thought challenging techniques. These tools help individuals recognize distortions in thinking, identify beliefs that are no longer useful, and develop more positive behavioral patterns.",
    url: "https://moodgym.com.au/"
  },
  "Meditation & Mindfulness Guides": {
    description: "Meditation and mindfulness involve paying attention to the present moment without judgment. These practices are proven to reduce stress, improve focus, and support emotional regulation. Guided meditation sessions, breathing techniques, and body scans are common methods used. They're often delivered via apps or video/audio platforms.",
    url: "https://www.headspace.com/meditation"
  },
  "Gratitude Journal": {
    description: "A Gratitude Journal encourages daily reflection on the positive aspects of life. This practice can enhance mood, improve sleep, and increase overall well-being. Users write down things they are thankful for each day, which helps shift focus away from negative emotions.",
    url: "https://www.gratefulness.org/gratitude-journal/"
  },
  "Breathing Exercises": {
    description: "Breathing exercises help calm the nervous system and manage stress. Techniques like box breathing, 4-7-8 breathing, and diaphragmatic breathing can be easily practiced using online visual guides or mobile apps.",
    url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/"
  },
  "Anonymous Peer Support": {
    description: "Anonymous peer support platforms allow individuals to connect with others experiencing similar mental health issues. These communities provide emotional support and reduce feelings of isolation. They are moderated to ensure a safe and respectful environment.",
    url: "https://www.7cups.com/"
  },
  "Self-Help Groups": {
    description: "Self-help groups provide a space for people with similar challenges to share experiences and coping strategies. These groups may be in-person or virtual, and typically focus on mutual aid and empowerment.",
    url: "https://www.smartrecovery.org/"
  },
  "AI-Powered Chatbot Therapists": {
    description: "AI-based chatbots simulate therapeutic conversations, offering users real-time emotional support and coping strategies. These tools can serve as a supplement to therapy, especially useful for daily check-ins or crisis moments.",
    url: "https://woebothealth.com/"
  },
  "Mood Tracker": {
    description: "Mood tracking tools help users log their emotional states over time. They often include features like graphs, notes, and emoji-based inputs. Recognizing patterns in mood can help inform lifestyle or treatment decisions.",
    url: "https://www.daylio.net/"
  },
  "Behavioral Activation": {
    description: "Behavioral Activation is a technique that encourages engagement in activities to counter low mood and avoidance. It’s often used in treating depression and includes scheduling meaningful activities that align with personal values.",
    url: "https://psychologytools.com/self-help/behavioral-activation/"
  },
  "Mental Health Literacy": {
    description: "Mental health literacy involves understanding mental health conditions, recognizing symptoms, and knowing how and where to seek help. Increasing literacy can combat stigma and promote early intervention.",
    url: "https://www.mhanational.org/"
  },
  "Science Behind Treatments": {
    description: "This section provides clear, simplified explanations of how various mental health treatments work—from medications to therapy techniques—backed by scientific evidence. It aims to demystify treatment options.",
    url: "https://www.nimh.nih.gov/health/topics"
  },
  "Mythbusters": {
    description: "Common misconceptions about mental illness are addressed and corrected in this section. It promotes awareness and factual understanding by debunking widespread myths.",
    url: "https://www.cdc.gov/mentalhealth/learn/index.htm"
  },
  "Periodic Check-Ins": {
    description: "Regular self-assessments and professional check-ins help monitor progress and adjust treatment as needed. They often involve questionnaires and tracking tools to assess emotional and functional well-being.",
    url: "https://www.betterhelp.com/"
  },
  "Gamified Progress Goals": {
    description: "Using game elements such as rewards, streaks, and badges, this method motivates users to achieve wellness goals. It makes mental health maintenance more engaging and interactive.",
    url: "https://habitica.com/"
  },
  "Relapse Prevention Plans": {
    description: "Relapse prevention focuses on recognizing early warning signs and having a prepared response plan. This might include support contacts, coping strategies, and resource lists.",
    url: "https://www.verywellmind.com/relapse-prevention-strategies-5208327"
  },
};

export default function SubsectionPage() {
  const { subsection } = useParams();
  const decoded = decodeURIComponent(subsection);
  const info = subsectionDescriptions[decoded];

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-primary">{decoded}</h2>
      <p className="text-gray-800 text-lg">{info?.description || "No description found for this subsection."}</p>

      {info?.url && (
        <a
          href={info.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors"
        >
          Explore This Feature Online
        </a>
      )}
    </div>
  );
}

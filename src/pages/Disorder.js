import React from "react";
import { useParams } from "react-router-dom";

const diseasePages = [
    {
      disease: "Bipolar Disorder",
      title: "Bipolar Disorder Management Tips",
      description:
        "Managing bipolar disorder requires a balanced approach that includes medication, therapy, and lifestyle adjustments. Here are some tips to help manage the condition:",
      tips: [
        "Stick to Your Treatment Plan: Consistently taking prescribed medication and attending therapy sessions is crucial in managing mood swings and maintaining stability.",
        "Monitor Your Mood: Keep a mood journal to track your emotional highs and lows. This can help you and your healthcare provider recognize patterns and adjust treatment as needed.",
        "Establish a Daily Routine: Regular routines for sleep, meals, and activities can help stabilize your mood and reduce the risk of triggering a mood episode.",
        "Prioritize Sleep: Ensure you get enough sleep every night. Consistent sleep patterns can help prevent both manic and depressive episodes.",
        "Stay Active: Regular physical activity can help manage stress, improve mood, and promote overall well-being. Even a short walk or light exercise can be beneficial.",
        "Avoid Drugs and Alcohol: Substance use can interfere with your treatment and exacerbate mood swings, making it harder to manage bipolar disorder.",
        "Practice Stress Management: Techniques such as deep breathing, meditation, and relaxation exercises can help you manage stress and prevent mood episodes.",
        "Build a Support Network: Stay connected with friends, family, or a support group. Having a strong support system can provide encouragement and help you navigate challenges.",
        "Be Mindful of Triggers: Identify and avoid potential triggers, such as excessive stress, lack of sleep, or significant life changes, that could lead to a mood episode.",
        "Plan Ahead: Have a plan in place for what to do if you feel a manic or depressive episode coming on. Share this plan with a trusted person in your life who can support you.",
        "Focus on Nutrition: A balanced diet can help support overall mental health. Try to eat regularly and include a variety of fruits, vegetables, whole grains, and lean proteins.",
        "Engage in Therapy: Cognitive-behavioral therapy (CBT), interpersonal therapy, or other forms of counseling can provide tools to manage bipolar disorder effectively.",
        "Educate Yourself: Learn as much as you can about bipolar disorder. Understanding your condition can empower you to take an active role in your treatment and recovery.",
      ],
      conclusion:
        "Incorporating these tips into your daily life can help you manage bipolar disorder more effectively and improve your overall quality of life.",
    },
    {
      disease: "Attention-Deficit/Hyperactivity Disorder",
      title: "ADHD Management Tips",
      description:
        "Managing ADHD effectively requires personalized strategies that help improve focus, organization, and overall well-being. Here are some tips to assist in managing ADHD:",
      tips: [
        "Break Tasks into Smaller Steps: Large tasks can be overwhelming. Divide them into manageable steps to make progress easier and more achievable.",
        "Use Visual Aids: Visual schedules, checklists, and reminders can help keep track of tasks and deadlines. Consider using a whiteboard or apps designed for ADHD management.",
        "Establish a Routine: Consistency can help create a sense of stability. Develop a daily routine that includes specific times for work, breaks, and relaxation.",
        "Set Clear Goals: Define clear and attainable goals for yourself. Break them down into daily, weekly, and monthly objectives to stay on track.",
        "Minimize Distractions: Create a workspace free from distractions such as noise, clutter, and electronic devices. Use noise-canceling headphones or background music if it helps you focus.",
        "Practice Mindfulness: Techniques like deep breathing, meditation, and mindfulness can help improve concentration and reduce impulsivity.",
        "Take Regular Breaks: Working in short bursts with frequent breaks can prevent burnout and maintain focus. Consider using the Pomodoro Technique (25 minutes of work followed by a 5-minute break).",
        "Prioritize Physical Activity: Regular exercise can help manage ADHD symptoms by improving mood, concentration, and overall energy levels.",
        "Use Timers and Alarms: Timers and alarms can help manage time effectively and remind you to stay on task or take a break when needed.",
        "Stay Organized: Use tools like planners, digital calendars, and labeled storage systems to keep your environment and tasks organized.",
        "Seek Support: Don't hesitate to seek support from therapists, coaches, or support groups. They can provide guidance and strategies tailored to your needs.",
        "Get Adequate Sleep: A regular sleep schedule is crucial for managing ADHD. Create a relaxing bedtime routine and avoid screens before bed.",
        "Stay Positive: Remember that managing ADHD is a journey. Celebrate your progress, no matter how small, and be kind to yourself during setbacks.",
      ],
      conclusion:
        "Implementing these tips can help manage ADHD symptoms and lead to a more organized and fulfilling life.",
    },
    {
      disease: "Anxiety Disorder",
      title: "Anxiety Disorder Management Tips",
      description:
        "Managing anxiety disorder involves techniques to calm the mind, reduce stress, and improve overall well-being. Here are some tips to help manage anxiety:",
      tips: [
        "Practice Deep Breathing: Deep breathing exercises can help calm your nervous system and reduce anxiety. Try inhaling slowly through your nose, holding for a few seconds, and exhaling slowly through your mouth.",
        "Stay Physically Active: Regular exercise can help reduce anxiety by releasing endorphins, which are natural mood boosters. Even a short walk can make a difference.",
        "Limit Caffeine and Sugar: These substances can increase anxiety symptoms. Reducing or avoiding caffeine and sugary foods can help stabilize your mood.",
        "Establish a Routine: Having a consistent daily routine can provide a sense of stability and reduce the unpredictability that often triggers anxiety.",
        "Practice Mindfulness and Meditation: Mindfulness practices, such as meditation and grounding techniques, can help you stay present and reduce anxiety.",
        "Limit Exposure to Stressors: Identify your anxiety triggers and, where possible, limit your exposure to them. This might include reducing time on social media or avoiding certain environments.",
        "Get Adequate Sleep: Poor sleep can worsen anxiety. Aim for a regular sleep schedule, and create a calming bedtime routine to improve sleep quality.",
        "Talk to Someone You Trust: Sharing your feelings with a trusted friend, family member, or therapist can provide relief and help you gain perspective.",
        "Engage in Relaxing Activities: Activities like reading, listening to music, or spending time in nature can help reduce anxiety and promote relaxation.",
        "Challenge Negative Thoughts: When anxious thoughts arise, challenge them by asking if they are realistic or based on irrational fears. Cognitive behavioral techniques can help reframe these thoughts.",
        "Practice Progressive Muscle Relaxation: This technique involves tensing and then slowly releasing different muscle groups in your body, which can help reduce physical tension caused by anxiety.",
        "Set Aside 'Worry Time': Allocate a specific time each day to worry, and try to confine anxious thoughts to that period. This can help prevent anxiety from overwhelming your entire day.",
        "Seek Professional Help: If anxiety is interfering with your daily life, consider reaching out to a mental health professional. Therapy and, if needed, medication can be effective in managing anxiety disorder.",
      ],
      conclusion:
        "Incorporating these tips into your routine can help manage anxiety disorder and improve your quality of life.",
    },
    {
      disease: "Clinical Depression",
      title: "Clinical Depression Management Tips",
      description:
        "Managing clinical depression requires a comprehensive approach that combines self-care, professional help, and lifestyle adjustments. Here are some tips to support your journey:",
      tips: [
        "Reach Out for Support: Don't hesitate to talk to a trusted friend, family member, or therapist. Support from others can provide comfort and perspective.",
        "Set Small, Achievable Goals: When feeling low, even small tasks can feel overwhelming. Set tiny, manageable goals to help build momentum and a sense of accomplishment.",
        "Stick to a Routine: Depression can disrupt your daily life. Establishing a simple routine can provide structure and a sense of normalcy.",
        "Prioritize Sleep: Quality sleep is essential for mental health. Create a bedtime routine and ensure your sleep environment is conducive to rest.",
        "Exercise Regularly: Physical activity, even in small amounts, can boost mood and energy levels. Consider activities like walking, yoga, or stretching.",
        "Eat a Balanced Diet: Nutrition plays a role in mental health. Try to maintain a diet rich in fruits, vegetables, whole grains, and lean proteins.",
        "Practice Self-Compassion: Be kind to yourself during tough times. Acknowledge your feelings without judgment and avoid self-criticism.",
        "Engage in Activities You Enjoy: Even if you don't feel motivated, engaging in hobbies or activities you once enjoyed can provide a sense of purpose and pleasure.",
        "Limit Alcohol and Caffeine: These substances can affect your mood and sleep. Moderation or avoidance can help manage symptoms better.",
        "Practice Relaxation Techniques: Mindfulness, meditation, deep breathing, and progressive muscle relaxation can help reduce stress and anxiety.",
        "Stay Connected: Isolation can worsen depression. Stay connected with loved ones, even if it’s just through a quick message or a phone call.",
        "Avoid Making Major Decisions: When experiencing depression, it’s best to avoid making significant life decisions. Wait until you’re feeling better to evaluate important choices.",
        "Seek Professional Help: Don’t hesitate to reach out to a mental health professional for guidance. Therapy and, if necessary, medication can be crucial in managing depression.",
      ],
      conclusion:
        "Incorporating these tips into your daily life can help in managing clinical depression and improving your overall well-being.",
    },
    {
      disease: "Dementia",
      title: "Dementia Management Tips",
      description:
        "Managing dementia involves a combination of strategies to support cognitive function, emotional well-being, and daily living. Here are some tips to help manage dementia:",
      tips: [
        "Establish Routines: Consistent routines can help reduce confusion and provide a sense of stability for individuals with dementia.",
        "Encourage Mental Stimulation: Engage in activities that stimulate the mind, such as puzzles, reading, or simple games. Cognitive exercises can help maintain mental function.",
        "Promote Physical Activity: Regular physical activity can improve mood, increase energy levels, and promote overall well-being.",
        "Ensure a Safe Environment: Make the living environment safe by removing hazards, using night lights, and labeling items or rooms to help with orientation.",
        "Provide Balanced Nutrition: A healthy diet can support cognitive health. Ensure meals are balanced and consider foods that promote brain health, such as fruits, vegetables, and omega-3 fatty acids.",
        "Create a Calm Environment: Reduce noise and distractions to create a calm and relaxing atmosphere, which can help manage agitation and anxiety.",
        "Maintain Social Connections: Encourage social interaction with family and friends to promote emotional well-being and reduce feelings of isolation.",
        "Use Memory Aids: Calendars, clocks, and labeled photos can help individuals with dementia remember important information and reduce confusion.",
        "Promote Independence: Encourage the person to do as much as possible on their own, even if it takes longer. This can boost self-esteem and maintain skills.",
        "Stay Patient and Positive: Approach situations with patience and positivity. Respond to confusion or agitation with reassurance and calmness.",
        "Practice Reminiscence Therapy: Encourage talking about past memories, which can help stimulate the mind and provide comfort.",
        "Monitor Health: Regular check-ups with healthcare providers are essential for managing dementia and addressing any other health concerns.",
        "Seek Support: Caregivers should also seek support for themselves. Support groups, respite care, and counseling can help manage the emotional and physical demands of caregiving.",
      ],
      conclusion:
        "Incorporating these tips into daily routines can help manage dementia symptoms and improve the quality of life for individuals with dementia and their caregivers.",
    },
  ];

function Disorder() {
  const { diseaseName } = useParams();

  const Disease = diseasePages.find(
    (d) => (d.disease.toLowerCase() === diseaseName.toLowerCase())
  );

  if (!Disease) {
    return (
      <div className="text-white text-5xl grid place-content-center h-full">
        Disease not found
      </div>
    );
  }

  

  return (
    <div className="content-grid bg-[#f8f9fa]">
        <div
          className="bg-white rounded-3xl my-12 p-8  shadow-2xl  mx-auto max-w-5xl"
        >
          <h1 className="text-primary text-5xl font-bold my-5 text-center">{Disease.title}</h1>
          <p className="mb-5 text-justify">{Disease.description}</p>
          <ol className="list-decimal mb-5 pl-5">
            {Disease.tips.map((tip, index) => (
                <li key={index} className="mb-2 bg-[#f0f0f0] p-2 rounded-sm">{tip}</li>
            ))}
          </ol>
          <p>
            {Disease.conclusion}
          </p>
        </div>
    </div>
  );
}

export default Disorder;

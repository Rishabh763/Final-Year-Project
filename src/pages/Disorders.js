import React from "react";
import { Link,useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const diseasePages = [
  {
    disease: "BipolarDisorder",
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
    disease: "AttentionDeficitHyperactivityDisorder",
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
    disease: "Schizophrenia",
    title: "Schizophrenia Management Tips",
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
    disease: "AnxietyDisorder",
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
    disease: "ClinicalDepression",
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
    disease: "DissociativeIdentityDisorder",
    title: "Dissociative Identity Disorder Management Tips",
    description:
      "Managing Dissociative Identity Disorder (DID) involves working with a mental health professional and adopting strategies to integrate and stabilize your sense of self. Here are some tips for managing DID:",
    tips: [
      "Work with a Therapist: Regular therapy with a mental health professional experienced in treating DID is essential. They can help you understand and manage your symptoms.",
      "Build a Support System: Surround yourself with understanding friends and family who can offer support and empathy. Consider joining a support group for individuals with DID.",
      "Establish Grounding Techniques: Grounding techniques, such as mindfulness or sensory exercises, can help you stay connected to the present moment and reduce dissociative symptoms.",
      "Practice Self-Care: Engage in self-care activities that promote physical and emotional well-being. This can include hobbies, relaxation techniques, and maintaining a healthy lifestyle.",
      "Create a Safe Environment: Make your living space a safe and calming environment. Reduce stressors and create a space where you feel secure and comfortable.",
      "Keep a Journal: Documenting your thoughts, feelings, and experiences can help you track your progress and gain insight into your condition.",
      "Develop Coping Strategies: Work with your therapist to develop effective coping strategies for managing stress and triggers that may lead to dissociation.",
      "Stay Organized: Keeping track of your appointments, medications, and daily routines can help you manage your condition more effectively.",
      "Set Realistic Goals: Set small, achievable goals for yourself to build confidence and a sense of accomplishment.",
      "Practice Self-Compassion: Be gentle with yourself and recognize that managing DID is a process. Celebrate your progress and be patient with setbacks.",
      "Educate Yourself: Learning more about DID can empower you to understand your condition and advocate for yourself in treatment.",
      "Avoid Triggers: Identify and minimize exposure to potential triggers that may exacerbate dissociative symptoms. Work with your therapist to develop strategies for managing these triggers.",
      "Seek Emergency Help if Needed: If you experience severe distress or feel unsafe, seek immediate help from a mental health professional or emergency services.",
    ],
    conclusion:
      "Incorporating these strategies into your routine can aid in managing Dissociative Identity Disorder and improving your overall quality of life.",
  },
  {
    disease: "ObsessiveCompulsiveDisorder",
    title: "Obsessive-Compulsive Disorder Management Tips",
    description:
      "Managing Obsessive-Compulsive Disorder (OCD) involves a combination of therapy, medication, and self-help strategies. Here are some tips to help manage OCD:",
    tips: [
      "Engage in Cognitive-Behavioral Therapy (CBT): Specifically, Exposure and Response Prevention (ERP) is a highly effective therapy for OCD. Work with a therapist to learn how to face your fears gradually.",
      "Take Medication as Prescribed: If your doctor prescribes medication, such as selective serotonin reuptake inhibitors (SSRIs), take it as directed. Medication can help reduce OCD symptoms.",
      "Practice Mindfulness: Mindfulness techniques can help you stay grounded in the present moment and manage intrusive thoughts without reacting to them.",
      "Develop a Support System: Connect with supportive friends, family, or a support group. Sharing your experiences and receiving encouragement can be helpful in managing OCD.",
      "Establish a Routine: A consistent daily routine can help create stability and reduce stress, which may trigger or worsen OCD symptoms.",
      "Avoid Rituals and Compulsions: Challenge yourself to gradually reduce or eliminate compulsive behaviors. Work with your therapist to develop strategies for managing urges without performing rituals.",
      "Stay Active: Regular exercise can help reduce anxiety and improve overall well-being. Find an activity you enjoy and make it a part of your routine.",
      "Set Realistic Goals: Break tasks into smaller, achievable steps and celebrate your progress. Setting realistic goals can help manage the impact of OCD on your daily life.",
      "Use Relaxation Techniques: Techniques such as deep breathing, progressive muscle relaxation, or meditation can help manage anxiety and stress associated with OCD.",
      "Educate Yourself: Learn more about OCD to understand your condition better and recognize that it is a treatable mental health disorder.",
      "Avoid Avoidance: Facing your fears and anxieties rather than avoiding them can help reduce the power of OCD over time. Work with your therapist to gradually confront your fears.",
      "Practice Self-Compassion: Be kind to yourself and recognize that managing OCD is a process. Allow yourself to make mistakes and learn from them.",
      "Seek Professional Help: Regularly consult with a mental health professional experienced in treating OCD. They can provide guidance and adjust your treatment plan as needed.",
    ],
    conclusion:
      "Implementing these strategies can aid in managing OCD and improve your overall quality of life.",
  },
  {
    disease: "PostTraumaticStressDisorder",
    title: "Post-Traumatic Stress Disorder Management Tips",
    description:
      "Managing Post-Traumatic Stress Disorder (PTSD) involves addressing trauma-related symptoms through therapy, self-care, and lifestyle changes. Here are some tips to help manage PTSD:",
    tips: [
      "Seek Professional Therapy: Trauma-focused therapies, such as cognitive-behavioral therapy (CBT) or Eye Movement Desensitization and Reprocessing (EMDR), can be effective in addressing PTSD symptoms.",
      "Build a Support Network: Surround yourself with supportive friends and family members who understand your experiences and can offer encouragement and empathy.",
      "Practice Grounding Techniques: Grounding techniques can help you stay connected to the present moment and manage distressing symptoms. Techniques may include deep breathing, mindfulness, or sensory grounding exercises.",
      "Establish a Routine: A consistent daily routine can provide stability and a sense of normalcy, which can help reduce PTSD symptoms.",
      "Prioritize Self-Care: Engage in activities that promote physical and emotional well-being, such as exercise, healthy eating, and relaxation practices.",
      "Avoid Substance Abuse: Alcohol or drugs can worsen PTSD symptoms and interfere with your treatment. Focus on healthy coping strategies instead.",
      "Educate Yourself: Understanding PTSD and its effects can empower you to take an active role in your recovery and advocate for your needs.",
      "Set Boundaries: Establishing boundaries in relationships and environments can help you feel safer and more in control of your surroundings.",
      "Practice Self-Compassion: Be kind to yourself and recognize that healing from trauma is a gradual process. Allow yourself time to heal and avoid self-criticism.",
      "Engage in Therapy Regularly: Consistent therapy sessions are crucial for addressing and managing PTSD symptoms. Work with your therapist to develop coping strategies and monitor progress.",
      "Connect with Others: Consider joining a support group for individuals with PTSD. Sharing experiences with others who understand can provide comfort and insight.",
      "Use Stress Management Techniques: Techniques such as relaxation exercises, yoga, and meditation can help manage stress and anxiety associated with PTSD.",
      "Seek Emergency Help if Needed: If you experience severe distress or are in crisis, seek immediate help from a mental health professional or emergency services.",
    ],
    conclusion:
      "Incorporating these strategies into your daily life can support the management of PTSD and enhance your overall well-being.",
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

function Disorders() {
  const { diseaseName } = useParams();

  const Disease = diseasePages.find(
    (d) => d.disease.toLowerCase() === diseaseName.toLowerCase()
  );

  if (!Disease) {
    return (
      <div className=" text-5xl grid place-items-center h-screen">
        Disease not found
      </div>
    );
  }

  return (
    <div className=" bg-muted md:py-12">
      <Navbar/>
      <div className="bg-white rounded-3xl  p-8  shadow-2xl mt-16  mx-auto max-w-5xl">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold my-5 text-center">
          {Disease.title}
        </h1>
        <p className="mb-5 text-justify">{Disease.description}</p>
        <ol className="list-decimal mb-5 pl-5">
          {Disease.tips.map((tip, index) => (
            <li key={index} className="mb-2 bg-[#f0f0f0] p-2 rounded-sm">
              {tip}
            </li>
          ))}
        </ol>
        <p>{Disease.conclusion}</p>
        <div className="w-full flex justify-center">
          <Link to={`/test/${Disease.disease}`}>
            <button className="my-3">Test Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Disorders;

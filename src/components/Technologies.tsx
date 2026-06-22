import React from 'react';

export const technologies = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    color: 'green',
    items: [
      'Machine Learning algorithms and applications',
      'Deep Learning and neural network architectures',
      'Artificial General Intelligence (AGI) development',
      'GPT models and Large Language Models (LLMs)',
      'Transformer models and attention mechanisms',
      'Reinforcement Learning in AI systems',
      'Natural Language Processing (NLP) evolution',
      'Generative AI and creative applications',
    ],
  },
  {
    title: 'Humanoid & Industrial Robots',
    color: 'blue',
    items: [
      'Boston Dynamics Atlas humanoid robot',
      'Boston Dynamics Spot quadruped robot',
      'Tesla Optimus humanoid robot development',
      'Unitree robotics and advanced dexterity',
      'Industrial robots and manufacturing automation',
      'Collaborative robots (cobots) in workplaces',
      'Companion robots and human-robot interaction',
      'Robotic arms and precision manipulation',
    ],
  },
  {
    title: 'Autonomous Systems & Vehicles',
    color: 'purple',
    items: [
      'Tesla Autopilot and self-driving technology',
      'Autonomous vehicles and self-driving cars',
      'Computer vision systems for robotics',
      'SLAM technology for autonomous navigation',
      'Autonomous drones and aerial robotics',
      'Sensor fusion and robotic perception',
      'Path planning and motion control algorithms',
      'Robot Operating System (ROS) framework',
    ],
  },
  {
    title: 'Neural Networks & Deep Learning',
    color: 'cyan',
    items: [
      'Convolutional Neural Networks (CNNs)',
      'Recurrent Neural Networks (RNNs)',
      'Generative Adversarial Networks (GANs)',
      'PyTorch and TensorFlow frameworks',
      'Deep learning for computer vision',
      'Neural network training and optimization',
      'Backpropagation and gradient descent',
      'Transfer learning and model fine-tuning',
    ],
  },
  {
    title: 'Robotics Companies & Innovations',
    color: 'yellow',
    items: [
      'Boston Dynamics breakthrough innovations',
      "Tesla's AI and robotics developments",
      'OpenAI and large language model research',
      'Figure AI humanoid robot advancements',
      'Unitree robotic dexterity achievements',
      'Robotic surgery and medical robotics',
      'Industrial automation pioneers',
      'Emerging robotics startups and innovations',
    ],
  },
  {
    title: 'Future Technologies & The Singularity',
    color: 'pink',
    items: [
      'The Technological Singularity explained',
      'Artificial General Intelligence (AGI) future',
      'AI consciousness and self-awareness',
      'Human-AI collaboration and symbiosis',
      'Ethical implications of advanced AI',
      'Society transformation through automation',
      'Post-singularity world scenarios',
      'The future of work in an AI-driven world',
    ],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; dot: string }> = {
  green: { border: 'border-green-400/30 hover:border-green-400/60', text: 'text-green-400', bg: 'from-green-900/20 to-black/50', dot: 'text-green-400' },
  blue: { border: 'border-blue-400/30 hover:border-blue-400/60', text: 'text-blue-400', bg: 'from-blue-900/20 to-black/50', dot: 'text-blue-400' },
  purple: { border: 'border-purple-400/30 hover:border-purple-400/60', text: 'text-purple-400', bg: 'from-purple-900/20 to-black/50', dot: 'text-purple-400' },
  cyan: { border: 'border-cyan-400/30 hover:border-cyan-400/60', text: 'text-cyan-400', bg: 'from-cyan-900/20 to-black/50', dot: 'text-cyan-400' },
  yellow: { border: 'border-yellow-400/30 hover:border-yellow-400/60', text: 'text-yellow-400', bg: 'from-yellow-900/20 to-black/50', dot: 'text-yellow-400' },
  pink: { border: 'border-pink-400/30 hover:border-pink-400/60', text: 'text-pink-400', bg: 'from-pink-900/20 to-black/50', dot: 'text-pink-400' },
};

export function TechCard({ tech }: { tech: typeof technologies[0] }) {
  const c = colorMap[tech.color];
  return (
    <div className={`bg-gradient-to-br ${c.bg} p-8 rounded-2xl border ${c.border} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105`}>
      <h3 className={`text-2xl font-bold mb-6 ${c.text}`} style={{ fontFamily: 'Orbitron, monospace' }}>
        {tech.title}
      </h3>
      <ul className="space-y-3 text-gray-300">
        {tech.items.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className={`${c.dot} mr-2`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
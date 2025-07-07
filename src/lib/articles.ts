import type { Article } from './types';

export const articles: Article[] = [
  {
    slug: 'understanding-anxiety',
    title: 'Understanding Anxiety: A Beginner\'s Guide',
    excerpt: 'Anxiety is a natural human emotion, but when it becomes overwhelming, it can impact our daily lives. This article explores the basics of anxiety and simple coping mechanisms.',
    content: `
<p>Anxiety is your body's natural response to stress. It’s a feeling of fear or apprehension about what’s to come. The first day of school, going to a job interview, or giving a speech may cause most people to feel fearful and nervous.</p>
<p>But if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder. In this case, it's important to seek professional help.</p>
<h3 class="font-headline text-2xl mt-6 mb-2">Common Symptoms</h3>
<ul class="list-disc list-inside space-y-2">
  <li>Feeling nervous, restless or tense</li>
  <li>Having a sense of impending danger, panic or doom</li>
  <li>Having an increased heart rate</li>
  <li>Breathing rapidly (hyperventilation)</li>
</ul>
<h3 class="font-headline text-2xl mt-6 mb-2">Simple Coping Strategies</h3>
<p>While not a substitute for professional help, these strategies can help manage moments of anxiety:</p>
<ol class="list-decimal list-inside space-y-2">
  <li><strong>Deep Breathing:</strong> Focus on slow, deep breaths to calm your nervous system.</li>
  <li><strong>Mindfulness:</strong> Ground yourself in the present moment. Notice five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.</li>
  <li><strong>Limit Caffeine:</strong> Stimulants can exacerbate anxiety symptoms.</li>
</ol>
    `,
    image: 'https://placehold.co/800x400.png',
    author: 'Dr. Anya Sharma',
    date: 'August 15, 2024',
  },
  {
    slug: 'power-of-mindfulness',
    title: 'The Power of Mindfulness in a Busy World',
    excerpt: 'In a world that constantly demands our attention, mindfulness offers a path back to ourselves. Learn how to integrate this practice into your daily routine for greater peace and clarity.',
    content: `
<p>Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.</p>
<p>While mindfulness is something we all naturally possess, it’s more readily available to us when we practice on a daily basis.</p>
<h3 class="font-headline text-2xl mt-6 mb-2">How to Practice Mindfulness</h3>
<p>You can practice mindfulness anywhere, but it can be especially helpful to set aside a time and place each day for it. Here's a simple meditation to get started:</p>
<ol class="list-decimal list-inside space-y-2">
  <li><strong>Sit comfortably.</strong> Find a spot that gives you a stable, solid seat.</li>
  <li><strong>Notice your breath.</strong> Feel the sensation of your breath as it goes in and as it goes out.</li>
  <li><strong>Be kind to your wandering mind.</strong> Your attention will leave the breath and wander to other places. When it does, just gently return your attention to the breath.</li>
</ol>
    `,
    image: 'https://placehold.co/800x400.png',
    author: 'Marcus Chen',
    date: 'August 10, 2024',
  },
  {
    slug: 'benefits-of-connection',
    title: 'The Benefits of Human Connection for Mental Health',
    excerpt: 'We are social creatures by nature. This article delves into why strong social connections are vital for our mental well-being and how to nurture them.',
    content: `
<p>Social connection is the feeling of closeness and belonging. It’s a fundamental human need that’s been shown to be crucial for both physical and psychological well-being.</p>
<h3 class="font-headline text-2xl mt-6 mb-2">Why It Matters</h3>
<ul class="list-disc list-inside space-y-2">
  <li>Reduces the risk of depression and anxiety.</li>
  <li>Boosts self-esteem and empathy.</li>
  <li>Strengthens our immune system.</li>
</ul>
<h3 class="font-headline text-2xl mt-6 mb-2">Nurturing Your Connections</h3>
<p>Building a social support network takes effort, but it's one of the most rewarding investments you can make for your health. Consider joining a club, volunteering, or simply reaching out to an old friend.</p>
    `,
    image: 'https://placehold.co/800x400.png',
    author: 'STGMA Staff',
    date: 'August 1, 2024',
  },
];

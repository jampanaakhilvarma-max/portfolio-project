import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Users, Clock, TrendingUp, Award, CheckCircle, Target, Zap, Star } from 'lucide-react';

const CaseStudyPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  console.log('DEBUG: CaseStudyPage id =', id);

  const caseStudies = {
    '0': {
      title: 'Dex HCM Transformation Story',
      subtitle: 'HR-Tech platform serving 15,000 employees across 11 countries',
      hero: {
        problem: 'June 2024. Our 15,000 colleagues—scattered across client sites, home offices, and HQs—opened DEX, the "single HR hub," yet still felt disconnected.',
        quote: '"I have no idea what\'s happening outside my project," one engineer admitted.',
        metrics: [
          { label: 'Time Lost', value: '45 min/week', description: 'hunting info across 7+ tools' },
          { label: 'Legacy MAU', value: '5%', description: 'social hub buried in portal' },
          { label: 'Compliance', value: '<10%', description: 'timesheet compliance' }
        ]
      },
      vision: {
        title: 'My Vision',
        description: 'Empower every employee with intuitive, connected workflows that spark engagement—no portal sprawl, no steep learning curves.',
        kpi: 'North-star KPI: < 10 min weekly task-hunting time.'
      },
      problems: [
        {
          pain: 'Tool Chaos',
          reality: '7+ HR & IT portals, each with unique UX'
        },
        {
          pain: 'Lost Time',
          reality: '45 min/week per employee wasted hunting tasks/info'
        },
        {
          pain: 'Low Engagement',
          reality: '"Social hub" MAU at 5%'
        },
        {
          pain: 'Opaque Growth',
          reality: 'No clear career or learning visibility'
        }
      ],
      solution: {
        title: 'My Solution: A 4-Pillar Engagement Stack',
        pillars: [
          {
            name: 'Unified Workspace (Q1 \'25)',
            description: 'Timesheets, leave, payslips, learning, news—all in one view',
            impact: 'Task-hunting reduced 45 → 12 min'
          },
          {
            name: 'Dex Smart Feed (Q2 \'25)',
            description: 'Recommender system surfaces relevant updates by category, decay & user similarity',
            impact: 'MAU grew 5 → 35% in 10 weeks'
          },
          {
            name: 'Gamified Workflows (Q3 \'25)',
            description: 'Coins, tiers, and rewards for tasks like timesheets',
            impact: 'On-time submissions 9 → 89%'
          },
          {
            name: '"Hey Dex" Chatbot (Q3 \'25)',
            description: '24/7 HR+IT help, ticket auto-gen',
            impact: 'Resolved 70% of help-desk backlog'
          }
        ]
      },
      transformation: {
        before: ['External redirects', 'Low visibility', 'Static content'],
        after: ['Embedded modules', 'Personalized channels', 'Gamified flows']
      },
      journey: [
        { phase: 'Onboarding', description: 'auto-setup profiles, guided start' },
        { phase: 'Daily Work', description: 'hub for tasks, news, support' },
        { phase: 'Project Change', description: 'alerts + one-click reassignment' },
        { phase: 'Growth', description: 'skill nudges, learning paths, rewards' },
        { phase: 'Alumni', description: 'exit portal & future connect' }
      ],
      impact: [
        { metric: 'Monthly Engagement (MAU)', before: '5%', after: '60%', delta: '+55 pp' },
        { metric: 'Task-Hunting Time', before: '45 min', after: '12 min', delta: '-33 min' },
        { metric: 'On-Time Timesheets', before: '9%', after: '89%', delta: '+80 pp' },
        { metric: 'Help-Desk Backlog', before: '100%', after: '30%', delta: '-70%' },
        { metric: 'Employee NPS', before: '-', after: '+23', delta: '+23' }
      ],
      role: [
        'Product Leadership: Defined north-star KPI, owned roadmap, aligned stakeholders',
        'Prototyping: Built first recommender MVP in Python (18% lift in A/B tests)',
        'Change Management: Led DEX Week launch, 4,000 profiles activated in 48h',
        'Discovery: Fortnightly Hotjar, in-app surveys for continuous iteration'
      ],
      playbook: [
        { phase: 'Ideation', actions: 'Synthesized replays, 40+ user interviews, analytics' },
        { phase: 'Selection', actions: 'Prioritized impact vs. effort; launched 4-pillar roadmap' },
        { phase: 'Design', actions: 'Prototyped, iterated fast; tested recommender with Python MVP' },
        { phase: 'Delivery', actions: 'Cross-functional squads, exec alignment, quarterly launches' }
      ],
      testimonials: [
        {
          quote: '"Timesheets feel like leveling up in a game now—no more Friday panic!"',
          author: 'Front-End Engineer, Poland'
        },
        {
          quote: '"Dex Feed keeps me in the loop with HQ without inbox overload."',
          author: 'Consultant, Philippines'
        },
        {
          quote: '"Asking "Hey Dex" saved me 20 minutes finding the leave policy."',
          author: 'Project Manager, USA'
        }
      ]
    },
    '1': {
      title: 'Dex Workbench – From Bench Chaos to Talent Intelligence',
      subtitle: 'How I led end-to-end product design, strategy, and go-to-market to transform talent deployment at Altimetrik',
      hero: {
        problem: 'Fragmented tools, high bench time, limited visibility, and no growth signal led to delayed staffing, missed revenue, and frustrated talent.',
        quote: '“Workbench transformed talent chaos into talent velocity.”',
        metrics: [
          { label: 'Avg. Bench Duration', value: '12 days', description: '' },
          { label: 'Time to Recommend', value: '6–8 hours', description: '' },
          { label: 'Match Accuracy', value: 'manual', description: '' },
          { label: 'Manual Work', value: '100%', description: '' }
        ]
      },
      vision: {
        title: 'Vision',
        description: 'Design a unified, AI-powered platform that matches the right people to the right work within 48 hours—while unlocking transparent, actionable career pathways for every employee.',
        kpi: 'North-star KPI: < 48 hours to match talent to work.'
      },
      problems: [
        { pain: 'Fragmented tools', reality: 'Decisions lived in spreadsheets & inboxes' },
        { pain: 'High bench time', reality: 'Avg. 12 business days of idle time' },
        { pain: 'Limited visibility', reality: 'Leaders lacked real-time capacity & risk views' },
        { pain: 'No growth signal', reality: 'Employees couldn’t see where to grow next' }
      ],
      transformation: {
        before: ['Fragmented tools', 'Manual coordination', 'Opaque bench status'],
        after: ['Unified platform', 'Automated workflows', 'AI-powered matching', 'Transparent career pathways']
      },
      journey: [
        { phase: 'Bench', description: 'Talent enters the bench pool, skills and preferences captured' },
        { phase: 'Matching', description: 'AI engine suggests best-fit roles within 48 hours' },
        { phase: 'Deployment', description: 'Automated outreach and interview scheduling' },
        { phase: 'Growth', description: 'Employees see actionable career pathways and feedback loops' },
        { phase: 'Redeployment', description: 'Smart expiry and learning loops for continuous improvement' }
      ],
      playbook: [
        { phase: 'Discovery', actions: '20+ interviews, mapped pain points, defined MVP scope' },
        { phase: 'Design', actions: 'Figma prototypes, weekly design-review sprints, user stories' },
        { phase: 'Delivery', actions: 'Launched v1 Kanban, v2 AI matching, v3 automation' },
        { phase: 'Adoption', actions: 'Demo roadshows, onboarding, internal branding, 100+ users trained' }
      ],
      impact: [
        { metric: 'Avg. Bench Duration', before: '12 days', after: '< 3 days', delta: '-9 days' },
        { metric: 'Time to Recommend', before: '6–8 hours', after: '< 30 seconds', delta: '-6+ hours' },
        { metric: 'Match Accuracy', before: 'Baseline', after: '+20%', delta: '+20%' },
        { metric: 'Manual Coordination', before: '100%', after: '< 15%', delta: '-85%' },
        { metric: 'NPS (Internal Users)', before: 'N/A', after: '72', delta: '+72' }
      ],
      testimonials: [
        { quote: '“Workbench transformed talent chaos into talent velocity.”', author: 'SVP, Delivery' },
        { quote: '“It feels like a sixth sense for staffing—making decisions before I even ask.”', author: 'Engagement Manager' }
      ],
      reflections: [
        'Product ≠ Features: Real value came when data, workflow, and AI formed a system, not siloed tools.',
        'Design Builds Trust: A single confidence bar and inline rationale helped users trust AI.',
        'You Are the Sales Team: Especially in internal products, adoption is won by storytelling, not just specs.'
      ],
      lessons: [
        'I’d introduce career mobility pathways earlier—matching is only half the user journey.',
        'I’d embed usage analytics from day one to prioritize feature adoption.'
      ],
      epilogue: 'Today, Workbench is more than a bench management tool—it’s becoming Altimetrik’s talent orchestration platform. As we add gamified feedback loops, career pathing views, and organizational health insights, we’re moving from placement to progression. And for me—this wasn’t just building a product. It was building a belief: that internal talent deserves the same rigor, intelligence, and love we give our customers.'
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Sticky Header - Same as Hero Page */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#1E293B] leading-tight">Akhil Varma | AI Product Manager</h1>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed font-medium">Portfolio of Impact-First Digital Products</p>
          </div>
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <figure className="flex flex-col items-center justify-center mb-6">
            {/* Show wb-logo.png only for Dex Workbench (caseStudy 1) */}
            {id === '1' && (
              <img src="/assets/wb-logo.png" alt="Dex Workbench Logo" className="w-32 h-32 object-contain mb-4" />
            )}
            {id !== '1' && (
              <img src="/assets/dex-logo.png" alt="Case Study Hero" className="w-full max-w-lg rounded-xl object-cover mx-auto" />
            )}
          </figure>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{caseStudy.subtitle}</p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            {caseStudy.hero?.problem && (
              <p className="text-lg text-gray-700 mb-4">{caseStudy.hero.problem}</p>
            )}
            {caseStudy.hero?.metrics && caseStudy.hero.metrics.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {caseStudy.hero.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-700">{metric.label}</div>
              </div>
                ))}
              </div>
            )}
            {caseStudy.hero?.quote && (
              <p className="text-lg text-gray-700 mt-4">{caseStudy.hero.quote}</p>
            )}
          </div>
        </div>

        {/* Vision Section */}
        {caseStudy.vision && (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{caseStudy.vision.title || 'Vision'}</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-900 mb-4">{caseStudy.vision.description}</p>
              {caseStudy.vision.kpi && (
            <div className="bg-blue-100 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-base font-semibold text-blue-900">North-star KPI</div>
                      <div className="text-base text-blue-700">{caseStudy.vision.kpi}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Problems Section */}
        {caseStudy.problems && caseStudy.problems.length > 0 && (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.problems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{problem.pain}</h3>
                <p className="text-gray-700">{problem.reality}</p>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Transformation Section */}
        {caseStudy.transformation && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Before</h3>
              <ul className="space-y-2">
                {caseStudy.transformation.before.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-4">After</h3>
              <ul className="space-y-2">
                {caseStudy.transformation.after.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        )}

        {/* Journey Section */}
        {caseStudy.journey && (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.journey.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Impact Section */}
        {caseStudy.impact && caseStudy.impact.length > 0 && (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Before</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">After</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Δ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {caseStudy.impact.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.metric}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.before}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.after}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}

        {/* Playbook Section */}
        {caseStudy.playbook && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Playbook</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.playbook.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.phase}</h3>
                <p className="text-sm text-gray-600">{phase.actions}</p>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Testimonials Section */}
        {caseStudy.testimonials && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <blockquote className="text-gray-700 mb-4 italic">{testimonial.quote}</blockquote>
                <p className="text-sm font-medium text-gray-600">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyPage; 
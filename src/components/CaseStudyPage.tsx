import React from 'react';
import { ArrowLeft, Users, TrendingUp, Clock, MessageCircle, Award, Zap, Target, BarChart3, CheckCircle } from 'lucide-react';

interface CaseStudyPageProps {
  onBack: () => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Dex HCM: Rebuilding Culture Through Product-Led Growth</h1>
            <p className="text-sm text-gray-600">HR-Tech platform serving 15,000 employees</p>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">HR-Tech Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dex HCM: Rebuilding Culture Through Product-Led Growth
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            HR-Tech platform serving 15,000 employees
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>June 2024 - Present</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>15,000+ Employees</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>60% MAU Growth</span>
            </div>
          </div>
        </div>

        {/* Chapter 1 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 1: The Silence in the System</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When I joined Dex in June 2024, the platform looked fine on the surface. But beneath the UI and workflows, something critical was missing: employee connection and engagement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  DEX was intended to be the HR nerve center for 15,000 employees. But it had become a digital inbox—transactional, impersonal, invisible. A tool for compliance, not community. One engineer told me:
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 mb-6">
                  "I have no idea what's happening outside my project."
                </blockquote>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/dex-logo.png" 
                  alt="Dex Logo" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This wasn't a tech issue. It was a product-market misfit. Our internal users—our customers—weren't bought in. Engagement data revealed the truth:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">45 min</div>
                <div className="text-sm text-orange-700">Lost per week in context-switching across 7+ systems</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">5%</div>
                <div className="text-sm text-orange-700">"Social Hub" usage—buried in the portal</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">&lt;10%</div>
                <div className="text-sm text-yellow-700">Timesheet compliance—deep disengagement</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              DEX had functional architecture, but it lacked product resonance.
            </p>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 2: Reframing the Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The initial instinct was to optimize DEX as a tool—clean up flows, consolidate systems, and remove clutter. But the deeper insight was this: DEX didn't have an adoption problem. It had a meaning problem.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Despite housing critical HR functions, DEX felt like a passive repository. I reframed the challenge from improving features to repositioning the product as a daily-value driver:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 mb-6">
              "What would it take for DEX to become the product employees actually wanted to open—engage with deeply, revisit frequently, and advocate for?"
            </blockquote>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That meant transitioning from a task router to a culture engine. From an admin tool to an experience platform.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">New North Star Metric</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">50% Monthly Active Usage</div>
              <div className="text-blue-700">6,000+ employees engaging with DEX every month</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              This goal wasn't just operational—it was emotional. Saving time meant reducing frustration. Reducing frustration meant increasing trust.
            </p>
          </div>
        </section>

        {/* Chapter 3 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 3: Diagnosing the Gaps (Jan '24 Baseline)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Friction Point</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Observation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Tool Chaos</td>
                    <td className="border border-gray-200 px-4 py-3">7+ portals, no design consistency or SSO UX</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Task Time Waste</td>
                    <td className="border border-gray-200 px-4 py-3">45 min/week spent navigating systems</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Engagement Vacuum</td>
                    <td className="border border-gray-200 px-4 py-3">Social layer barely alive at 5% MAU</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Career Confusion</td>
                    <td className="border border-gray-200 px-4 py-3">No discoverable growth paths or skill nudges</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-800 font-medium">
                This audit formed our product problem statement: <strong>DEX is over-engineered for compliance and under-designed for connection.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 4 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 4: Designing the Product-Led Stack</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a PM, I led the creation of a 4-layer engagement roadmap, aligned with OKRs and quarterly marketing campaigns.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Module</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Core Value Prop</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Unified Workspace (Q1 '25)</td>
                    <td className="border border-gray-200 px-4 py-3">Streamlined UX: one view for tasks, policies, payslips, learning</td>
                    <td className="border border-gray-200 px-4 py-3">↓ Task-hunting time (supporting MAU increase)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Dex Smart Feed (Q2 '25)</td>
                    <td className="border border-gray-200 px-4 py-3">AI-powered news feed based on roles, behavior, time-decay</td>
                    <td className="border border-gray-200 px-4 py-3">↑ MAU 5% → 35% in 10 weeks</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Gamified Workflows (Q3 '25)</td>
                    <td className="border border-gray-200 px-4 py-3">Nudges + rewards for completion of routine chores</td>
                    <td className="border border-gray-200 px-4 py-3">↑ On-time timesheets 9% → 89%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">"Hey Dex" AI Assistant (Q3 '25)</td>
                    <td className="border border-gray-200 px-4 py-3">NLP-based chatbot for HR/IT queries with ticket automation</td>
                    <td className="border border-gray-200 px-4 py-3">↓ Helpdesk load by 70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-blue-800 font-medium">
                Prioritization principle: <strong>Resolve friction first, then amplify motivation.</strong>
              </p>
            </div>
            
            {/* Images in order */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex justify-center">
                <img 
                  src="/assets/dex-dashboard.png" 
                  alt="Dex Dashboard - Unified workspace" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/dex-feed.png" 
                  alt="Dex Smart Feed - AI-powered engagement" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/dex-gamification.png" 
                  alt="Dex Gamified Workflows - Rewards and engagement" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/dex-chatbot.png" 
                  alt="Dex AI Assistant - Hey Dex chatbot" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 5: Activation Through UX & Marketing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DEX didn't just need better features. It needed a launch moment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We framed the rollout as a campaign, not a deployment. During "DEX Week," we:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Branded Tooltips</h4>
                    <p className="text-sm text-gray-600">In-app walkthroughs and email nudges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Usage Leaderboard</h4>
                    <p className="text-sm text-gray-600">Gamified discovery across teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Internal Ambassadors</h4>
                    <p className="text-sm text-gray-600">Regional champions promoting adoption</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-4">Results</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-700">Profiles Completed:</span>
                    <span className="font-bold text-green-800">4,000+ in 48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Feature Adoption:</span>
                    <span className="font-bold text-green-800">{'>'}2x in first month</span>
                  </div>
                </div>
          </div>
        </div>

            {/* Before and After Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before & After</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    Before
                  </h4>
                  <div className="flex justify-center">
                    <img 
                      src="/assets/before.png" 
                      alt="Before transformation" 
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                  </div>
                    </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    After
                  </h4>
                  <div className="flex justify-center">
                    <img 
                      src="/assets/dex-payslip.png" 
                      alt="After transformation" 
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 6: The Before & After</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  Before
                </h3>
                <div className="space-y-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">External links and hard redirects</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">One-way comms from HQ</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Workflows felt like chores</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  After
                </h3>
                <div className="space-y-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Unified, native experiences</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Dynamic channels for engagement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Gamified flows for routine tasks</p>
                  </div>
          </div>
        </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-blue-800 font-medium">
                Transformation: <strong>From compliance → contribution. From checklists → culture.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 7 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 7: Full-Funnel Product Thinking</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DEX now supports the entire employee lifecycle, mapped like a user journey:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Onboarding</h4>
                <p className="text-sm text-blue-700">Automated provisioning, curated welcome content</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Activation</h4>
                <p className="text-sm text-green-700">Task completion in {'<'}7 clicks, smart nudges</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Engagement</h4>
                <p className="text-sm text-purple-700">Personalized news, learning, celebrations</p>
        </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Retention</h4>
                <p className="text-sm text-orange-700">Skill nudges, recognition loops, goal setting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 8 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 8: Key Outcomes (July '25)</h2>
          <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Metric</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Before</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">After</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Δ</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Monthly Active Users</td>
                    <td className="border border-gray-200 px-4 py-3">5%</td>
                    <td className="border border-gray-200 px-4 py-3">60%</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">+55 pp</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Avg. Task Time</td>
                    <td className="border border-gray-200 px-4 py-3">45 min</td>
                    <td className="border border-gray-200 px-4 py-3">12 min</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">–33 min</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Timesheet On-Time Rate</td>
                    <td className="border border-gray-200 px-4 py-3">9%</td>
                    <td className="border border-gray-200 px-4 py-3">89%</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">+80 pp</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Helpdesk Load</td>
                    <td className="border border-gray-200 px-4 py-3">100%</td>
                    <td className="border border-gray-200 px-4 py-3">30%</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">–70%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Employee NPS</td>
                    <td className="border border-gray-200 px-4 py-3">–</td>
                    <td className="border border-gray-200 px-4 py-3">+23</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">+23</td>
                  </tr>
              </tbody>
            </table>
            </div>
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400">
              <p className="text-green-800">
                Managers saved 2 hrs/week. Employees started advocating for Dex.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 9 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 9: My Role as Product Manager</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Product Strategy</h4>
                    <p className="text-sm text-gray-600">Framed opportunity, defined MAU-focused KPI, shaped 4-layer roadmap</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Growth Tactics</h4>
                    <p className="text-sm text-gray-600">Created launch playbooks with internal marketing hooks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">AI Prototyping</h4>
                    <p className="text-sm text-gray-600">Built recommender MVP in Python → +18% relevance in A/B</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Discovery Ops</h4>
                    <p className="text-sm text-gray-600">Fortnightly Hotjar + survey analysis → rapid learning loops</p>
          </div>
        </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Cross-Functional Leadership</h4>
                    <p className="text-sm text-gray-600">Aligned design, engineering, comms, HRBPs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 10 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 10: The Playbook</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Phase</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">What I Did</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Identify</td>
                    <td className="border border-gray-200 px-4 py-3">Audited friction points across 7+ systems</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Validate</td>
                    <td className="border border-gray-200 px-4 py-3">Interviewed 40 users + internal surveys to surface unmet needs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Design</td>
                    <td className="border border-gray-200 px-4 py-3">Prototyped key features and ran lightweight A/B tests</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Market</td>
                    <td className="border border-gray-200 px-4 py-3">Packaged feature launches with narrative + embedded education</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Scale</td>
                    <td className="border border-gray-200 px-4 py-3">Orchestrated squads + tracked KPIs across quarterly OKRs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapter 11 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 11: Voice of the User</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <blockquote className="text-lg text-blue-800 italic mb-4">
                  "Timesheets feel like leveling up in a game now—no more Friday panic!"
                </blockquote>
                <div className="text-sm text-blue-600">— Front-End Engineer</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <blockquote className="text-lg text-green-800 italic mb-4">
                  "Dex Feed actually keeps me in the loop with HQ without spamming my inbox."
                </blockquote>
                <div className="text-sm text-green-600">— Consultant</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <blockquote className="text-lg text-purple-800 italic mb-4">
                  "Asking 'Hey Dex' saved me 20 minutes finding the leave policy."
                </blockquote>
                <div className="text-sm text-purple-600">— Project Manager</div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400">
              <p className="text-blue-800 font-medium">
                Dex isn't just a tool anymore. It's a product with purpose—and a brand with a voice.
              </p>
          </div>
        </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Back to Portfolio
          </button>
        </section>

      </div>
    </div>
  );
};

export default CaseStudyPage; 
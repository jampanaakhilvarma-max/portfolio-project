import React from 'react';
import { 
  ArrowLeft,
  Users, 
  TrendingUp, 
  Clock,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  Star,
  Award,
  Calendar,
  MessageCircle,
  Brain,
  Settings,
  Code,
  Database
} from 'lucide-react';

interface WorkbenchPageProps {
  onBack: () => void;
}

const WorkbenchPage: React.FC<WorkbenchPageProps> = ({ onBack }) => {
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
            <h1 className="text-xl font-bold text-gray-800">Workbench: From Tactical Tracking to Talent Intelligence</h1>
            <p className="text-sm text-gray-600">Platform evolution from spreadsheets to autonomous staffing</p>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium">Talent Intelligence Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Workbench: From Tactical Tracking to Talent Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A platform evolution from spreadsheets to autonomous staffing, powering faster matches and strategic workforce visibility.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>2021 - 2022</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>15,000+ Employees</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>85% Automation</span>
            </div>
          </div>
        </div>

        {/* Chapter 1 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 1: The Manual Mayhem</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When I first joined the resourcing team, the entire bench management process ran on heroic effort—manual spreadsheets, inboxes clogged with staffing requests, and late-night copy-paste marathons. One missed filter, and the perfect engineer would sit idle while a project stayed understaffed.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We weren't building strategy. We were firefighting with formulas.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/wb-logo.png" 
                  alt="Workbench Logo" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">Manual</div>
                <div className="text-sm text-orange-700">Spreadsheet-based tracking</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">Chaotic</div>
                <div className="text-sm text-orange-700">Inbox overflow with requests</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">Inefficient</div>
                <div className="text-sm text-yellow-700">Late-night copy-paste marathons</div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 2: Reframing the Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I saw the opportunity not as just workflow automation—but as a product transformation:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 mb-6 text-xl">
              "What if resourcing was no longer a bottleneck... but a growth engine?"
            </blockquote>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I defined our north-star metric:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">85% of bench-to-role processes automated</div>
              <div className="text-lg text-blue-700">while surfacing high-fit matches in &lt;48 hours</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              This shifted our focus from tracking availability to orchestrating opportunity—with speed, accuracy, and equity.
            </p>
          </div>
        </section>

        {/* Chapter 3 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 3: Diagnosing the Gaps</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Problem</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Reality Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Fragmented Visibility</td>
                    <td className="border border-gray-200 px-4 py-3">Capacity updates scattered across spreadsheets and chats</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Delayed Redeployment</td>
                    <td className="border border-gray-200 px-4 py-3">Avg. bench time: 12 business days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Low Match Confidence</td>
                    <td className="border border-gray-200 px-4 py-3">No structured way to suggest fit</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">No Growth Signals</td>
                    <td className="border border-gray-200 px-4 py-3">Employees unsure where they could go next</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              We weren't just slow—we were guessing. That insight sparked Module 0.
            </p>
          </div>
        </section>

        {/* Chapter 4 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 4: Laying the Foundation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We started lean:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Integrated HRMS and job portals</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Unified candidate data into a single source of truth</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Standardized role types, skill tags, and notice periods</span>
              </li>
            </ul>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="text-2xl font-bold text-green-600 mb-2">Outcome: Search time dropped from hours to minutes</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              But human matching still drove most decisions—limiting scale.
            </p>
            <div className="flex justify-center">
              <img 
                src="/assets/wbv1.png" 
                alt="Workbench v1 Interface" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Chapter 5 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 5: Turning Workbench into a Product</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With data flowing, v1 focused on user experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Kanban-style boards for visual role tracking</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Inline edits and demand-level status visibility</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Auto-alerts for relevant overlaps</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We launched internally with a marketing-style pilot, naming squads "matchmakers" and tracking their impact in a leaderboard.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <div className="text-2xl font-bold text-orange-600 mb-2">📉 Bench-time dropped by 30%</div>
              <div className="text-lg text-orange-700">but the real unlock was still ahead: machine-powered match quality</div>
            </div>
          </div>
        </section>

        {/* Chapter 6 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 6: Workbench v2 — AI with Context</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This release changed everything.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700"><strong>Recommendation Engine 1.0:</strong> Built on skill similarity, recency, manager reviews</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700"><strong>Conversational Search:</strong> "Show me .NET engineers available next week"</span>
              </li>
              <li className="flex items-start space-x-3">
                <Settings className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700"><strong>UX Refresh:</strong> Dark mode, focus-mode views for talent partners</span>
              </li>
            </ul>
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">🚀 Match quality scores improved by ~20%</div>
              <div className="text-lg text-purple-700">and recs started flowing within seconds</div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <img 
                  src="/assets/wbv2.png" 
                  alt="Workbench v2 Interface" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/rec2.png" 
                  alt="Recommendation Engine" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 7 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 7: The Automation Leap</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We connected algorithms with action:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                  <span className="text-lg text-gray-700"><strong>Auto-Apply Pipelines:</strong> If match confidence {'>'} 85%, the system sent emails, scheduled calls, and logged ATS events</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700"><strong>Smart Expiry:</strong> Recs auto-withdrew when a candidate was staffed elsewhere</span>
              </li>
              <li className="flex items-start space-x-3">
                <BarChart3 className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700"><strong>Feedback Loops:</strong> Accept/reject actions fine-tuned the models nightly</span>
              </li>
            </ul>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <div className="text-2xl font-bold text-yellow-600 mb-2">💡 Outcome: 85% of repetitive tasks eliminated</div>
              <div className="text-lg text-yellow-700">Resourcers shifted focus to high-touch coaching and client forecasting</div>
            </div>
          </div>
        </section>

        {/* Chapter 8 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 8: Product Outcomes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Metric</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Before</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Avg. Bench Time</td>
                    <td className="border border-gray-200 px-4 py-3">12 days</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">3.2 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Manual Touchpoints</td>
                    <td className="border border-gray-200 px-4 py-3">High</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">↓ by 85%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Time-to-Recommendation</td>
                    <td className="border border-gray-200 px-4 py-3">1–2 days</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&lt;60 seconds</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">User Satisfaction</td>
                    <td className="border border-gray-200 px-4 py-3">N/A</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">+31 NPS (pilot cohort)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Adoption Rate</td>
                    <td className="border border-gray-200 px-4 py-3">N/A</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">90% usage in staffing teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapter 9 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 9: My Role as Product Manager</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg font-semibold text-gray-700">Product Strategy</span>
                  <p className="text-gray-600">Defined north-star KPI, designed evolution from ops tracker to AI product</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Database className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg font-semibold text-gray-700">Data Architecture</span>
                  <p className="text-gray-600">Worked with engineers to normalize messy inputs across HRMS, job portals, ATS</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg font-semibold text-gray-700">AI Integration</span>
                  <p className="text-gray-600">Partnered with DS to ship rec engine v1; aligned feature store to UX patterns</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg font-semibold text-gray-700">Launch & Adoption</span>
                  <p className="text-gray-600">Created go-to-market moment with enablement, internal marketing, and real-time dashboards</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <BarChart3 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg font-semibold text-gray-700">Feedback Loops</span>
                  <p className="text-gray-600">Enabled structured signal capture to retrain models every week</p>
                </div>
              </li>
            </ul>
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Step</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">What I Did</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Identify</td>
                    <td className="border border-gray-200 px-4 py-3">Mapped out inefficiencies in bench process via journey mapping</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Instrument</td>
                    <td className="border border-gray-200 px-4 py-3">Built centralized data layer with live job/candidate inputs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Automate</td>
                    <td className="border border-gray-200 px-4 py-3">Layered in recommendation engine, auto-apply logic, expiry triggers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Activate</td>
                    <td className="border border-gray-200 px-4 py-3">Drove internal adoption via comms, nudges, gamified usage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Measure</td>
                    <td className="border border-gray-200 px-4 py-3">Tracked core KPIs: match quality, time-to-fill, usage, NPS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapter 11 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 11: Voice of the Business</h2>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 text-lg">
                "Workbench transformed talent chaos into talent velocity."
                <footer className="text-sm text-gray-500 mt-2">— Senior Vice President, Delivery</footer>
              </blockquote>
              <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-700 text-lg">
                "Now I see staffing as a strategic edge, not just logistics."
                <footer className="text-sm text-gray-500 mt-2">— Regional Leader, Resourcing</footer>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkbenchPage; 
import React from 'react';
import { ExternalLink, Users, TrendingUp, Award, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlagshipProducts: React.FC = () => {
  const products = [
    {
      title: 'Dex HCM',
      description: 'A unified HR‑tech platform that reimagined the end‑to‑end employee journey across various organizations. Drove user engagment by 90% to 15k Monthly active users',
      image: '/assets/dex-logo.png',
      metrics: [
        { label: 'Users', value: '15k+', icon: Users },
        { label: 'Monthly Active Users', value: '15K+', icon: TrendingUp },
        { label: 'Growth', value: '100%', icon: Award }
      ],
      productSkills: [
        'Product Vision & Strategic Thinking',
        'Data-Informed Prioritization & Roadmapping',
        'AI-Driven Product Innovation',
        'Cross-Functional Leadership & Execution'
      ],
      timeline: '2023 - Present',
      link: '#'
    },
    {
      title: 'Dex Workbench',
      description: 'Dex Workbench is a centralized talent orchestration platform designed to manage the entire talent lifecycle from onboarding to career growth. Automated and eliminated 90% of manual tasks',
      image: '/assets/wb-logo.png',
      metrics: [
        { label: 'Automation', value: '90%', icon: Users },
        { label: 'Avg. Bench Duration Reduction', value: '80%', icon: TrendingUp },
        { label: 'NPS', value: '70%', icon: Award }
      ],
      productSkills: [
        'Intelligent Workflow Automation',
        'Enterprise UX Design for Internal Tools',
        'Applied AI Productization',
        'Change Management & Product Evangelism'
      ],
      timeline: '2021 - 2022',
      link: '#'
    },
  ];

  return (
    <section id="flagship" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Award className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Flagship Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products That Made Impact</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Here are some of the flagship products I've led from conception to market success, 
            impacting millions of users and generating significant business value.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12 sm:space-y-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 items-center`}
            >
              {/* Product Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 sm:h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-500">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{product.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.title}</h3>
                
                {/* Product Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">Flagship Product</span>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {product.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center">
                      <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Product Skills */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900">Product Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.productSkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Link
                    to={`/case-study/${index}`}
                    id={index === 0 ? 'case-study-0' : index === 1 ? 'case-study-1' : undefined}
                    className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Case Study</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipProducts;
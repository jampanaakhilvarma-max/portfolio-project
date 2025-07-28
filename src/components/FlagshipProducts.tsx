import React from 'react';
import { ExternalLink, Users, TrendingUp, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlagshipProducts: React.FC = () => {
  const products = [
    {
      title: 'Dex HCM',
      description: 'A unified HR‑tech platform that reimagined the end‑to‑end employee journey across various organizations. Drove user engagment by 90% to 6k Monthly active users',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: [
        { label: 'Users', value: '6k+', icon: Users },
        { label: 'Monthly Active Users', value: '6K+', icon: TrendingUp },
        { label: 'Growth', value: '100%', icon: Award }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      timeline: '2023 - Present',
      link: '#'
    },
    {
      title: 'Dex Workbench',
      description: 'Enterprise-grade analytics platform that provides actionable insights for Fortune 500 companies. Increased user engagement by 400%.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: [
        { label: 'Enterprise Clients', value: '150+', icon: Users },
        { label: 'Data Points', value: '10B+', icon: TrendingUp },
        { label: 'Retention', value: '95%', icon: Award }
      ],
      technologies: ['Python', 'React', 'D3.js', 'MongoDB'],
      timeline: '2021 - 2022',
      link: '#'
    },
  ];

  return (
    <section id="flagship" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Flagship Products</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Products That Made Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the flagship products I've led from conception to market success, 
            impacting millions of users and generating significant business value.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Product Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{product.timeline}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {product.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-gray-50 rounded-xl p-4 text-center">
                      <metric.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-900">Product Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-4">
                  <Link
                    to={`/case-study/${index}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
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
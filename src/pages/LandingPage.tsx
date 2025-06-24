import { motion } from 'framer-motion'
import { Scale, Shield, CheckCircle, ArrowRight, Building, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const services = [
    {
      icon: Scale,
      title: 'Expert Witness Testimony',
      description: 'Professional testimony in construction litigation cases with 35+ years of hands-on experience.',
    },
    {
      icon: Shield,
      title: 'Construction Defect Analysis',
      description: 'Comprehensive inspection and analysis of construction defects, identifying root causes and impacts.',
    },
    {
      icon: Building,
      title: 'Cost Estimation & Repair Methods',
      description: 'Detailed cost analysis and proven repair methodologies for construction-related disputes.',
    },
  ]

  const stats = [
    { number: '35+', label: 'Years Experience' },
    { number: '500+', label: 'Cases Analyzed' },
    { number: '15+', label: 'Countries Worked' },
    { number: '100%', label: 'Professional Standards' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Expert Construction{' '}
                  <span className="text-yellow-400">Litigation</span> Consulting
                </h1>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Providing professional expert witness testimony and construction defect analysis
                  with over three decades of hands-on construction experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-zinc-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Get Expert Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-zinc-900 transition-colors"
                >
                  Learn About Steve
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-zinc-300">Licensed General Contractor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-zinc-300">Certified Building Inspector</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <Scale className="w-10 h-10 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Trusted Expert Witness</h3>
                  <p className="text-zinc-600">
                    Providing professional testimony and technical analysis for construction litigation cases
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-yellow-600">{stat.number}</div>
                        <div className="text-sm text-zinc-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-zinc-900">Specialized Consulting Services</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Comprehensive construction litigation support with technical expertise and professional testimony
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-zinc-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-4">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Client Testimonials</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Trusted by attorneys, insurance companies, and construction professionals nationwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Steve's expert testimony was instrumental in our $15M construction defect case. His thorough analysis and clear explanations helped the jury understand complex technical issues.",
                author: "Sarah Mitchell",
                role: "Partner, Mitchell & Associates Law Firm",
                case: "Multi-family residential defect case"
              },
              {
                quote: "We've worked with Steve on over 50 cases. His detailed reports and professional testimony have consistently supported successful outcomes for our clients.",
                author: "Robert Chen",
                role: "Senior Attorney, Pacific Legal Group",
                case: "Commercial construction disputes"
              },
              {
                quote: "Steve's hands-on construction experience gives him credibility that other experts lack. His cost estimates are always accurate and his repair methodologies are practical.",
                author: "Jennifer Torres",
                role: "Claims Manager, Guardian Insurance",
                case: "Insurance claim investigations"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-800 rounded-xl p-8"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-yellow-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-zinc-300 leading-relaxed mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-zinc-700 pt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                  <p className="text-zinc-400 text-xs mt-1">{testimonial.case}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-zinc-300">Cases Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24+</div>
                <div className="text-zinc-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-zinc-300">Client Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-zinc-300">States Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-zinc-900">
              Need Expert Construction Litigation Support?
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Get professional consulting services from a licensed contractor with 35+ years of experience
              in construction defect analysis and expert witness testimony.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

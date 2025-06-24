import { motion } from 'framer-motion'
import { FileText, Award, Globe, Users, Building, Hammer, Trophy, Star } from 'lucide-react'

const PublicationsPage = () => {
  const achievements = [
    {
      icon: Globe,
      title: 'International Projects',
      description: 'Designed and built panelized systems in 6+ countries including Japan, China, Philippines, Brazil, Cayman Islands, and Nigeria',
      details: ['Custom modular housing solutions', 'Cross-cultural project management', 'International building standards compliance']
    },
    {
      icon: Users,
      title: 'Disaster Relief Work',
      description: 'Provided construction support during major disasters and humanitarian crises',
      details: ['Habitat for Humanity - Katrina victims', 'Kobe earthquake disaster response', 'Phuket Tsunami relief efforts', 'Haiti mission - medical supplies distribution']
    },
    {
      icon: Trophy,
      title: 'Expert Witness Record',
      description: '24+ years of construction defect analysis and litigation support',
      details: ['500+ cases analyzed', 'Mediation and trial testimony', 'Cost analysis and repair methodologies', 'Technical construction consulting']
    }
  ]

  const caseStudies = [
    {
      title: 'Multi-Million Dollar Residential Complex',
      category: 'Construction Defect Analysis',
      description: 'Led comprehensive inspection of 200+ unit residential complex identifying structural defects and water intrusion issues.',
      outcome: 'Provided expert testimony resulting in $15M settlement for affected homeowners',
      skills: ['Structural analysis', 'Water intrusion assessment', 'Expert testimony', 'Cost estimation']
    },
    {
      title: 'Commercial Building Failure Analysis',
      category: 'Expert Witness Testimony',
      description: 'Analyzed foundation failure in 10-story commercial building, determining root cause and liability.',
      outcome: 'Expert testimony supported successful litigation for building owner',
      skills: ['Foundation analysis', 'Soil testing', 'Structural engineering', 'Litigation support']
    },
    {
      title: 'International Housing Development',
      category: 'Project Management',
      description: 'Managed construction of 500+ modular housing units across multiple international locations.',
      outcome: 'Delivered project on time and under budget despite complex logistics',
      skills: ['International logistics', 'Modular construction', 'Quality control', 'Cross-cultural management']
    }
  ]

  const specializations = [
    {
      area: 'Construction Defect Analysis',
      expertise: ['Water intrusion assessment', 'Structural defect identification', 'Building envelope analysis', 'HVAC system evaluation'],
      icon: Building
    },
    {
      area: 'Expert Witness Services',
      expertise: ['Litigation support', 'Deposition testimony', 'Trial testimony', 'Technical report writing'],
      icon: FileText
    },
    {
      area: 'Cost Analysis & Estimation',
      expertise: ['Repair cost estimation', 'Construction scheduling', 'Material analysis', 'Labor cost evaluation'],
      icon: Award
    },
    {
      area: 'Technical Consulting',
      expertise: ['Building code compliance', 'Construction methodology', 'Quality assurance', 'Project management'],
      icon: Hammer
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold">
              Experience & <span className="text-yellow-400">Achievements</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Three decades of construction expertise with a proven track record in litigation support,
              international projects, and disaster relief efforts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Major Achievements</h2>
            <p className="text-xl text-zinc-600">Highlights from a distinguished career in construction</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-4">{achievement.title}</h3>
                  <p className="text-zinc-600 mb-6">{achievement.description}</p>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-zinc-700">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Notable Case Studies</h2>
            <p className="text-xl text-zinc-600">Real-world applications of expertise and experience</p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-zinc-50 rounded-xl p-8 border-l-4 border-yellow-400"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-900">{study.title}</h3>
                    <p className="text-zinc-700 leading-relaxed">{study.description}</p>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-1">Outcome:</h4>
                      <p className="text-green-700">{study.outcome}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-zinc-900">Key Skills Applied:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zinc-200 text-zinc-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Areas of Specialization</h2>
            <p className="text-xl text-zinc-300">Comprehensive expertise across construction litigation and consulting</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 rounded-xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-semibold">{spec.area}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {spec.expertise.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                        <span className="text-zinc-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Proven Expertise for Your Construction Litigation Needs
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              With decades of hands-on experience and a proven track record in complex cases,
              Steve Fisher provides the technical expertise and professional testimony you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Request Case Consultation
              </motion.button>
              <motion.a
                href="/steve-fisher-credentials.txt"
                download="Steve-Fisher-Professional-Credentials.txt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-900 text-zinc-900 font-semibold rounded-lg hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Download Credentials
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PublicationsPage

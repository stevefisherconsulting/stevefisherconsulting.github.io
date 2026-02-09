import { motion } from 'framer-motion'
import { User, Award, Globe, Briefcase, CheckCircle, Hammer, Scale, FileText } from 'lucide-react'

const AboutPage = () => {
  const credentials = [
    'B-1 General Contractor License #766105',
    'International Code Council Building Inspector',
    'Thermal Imaging & Infrared Technician - Teledyne FLIR',
    '35+ Years Construction Experience',
    'Expert Witness Testimony Specialist'
  ]

  const experience = [
    {
      company: 'Steve Fisher Consulting',
      role: 'Consultant/General Contractor',
      period: 'Mar 2025 - Present',
      description: 'Full-service general contracting and construction consulting firm specializing in high-end residential and commercial projects with focus on construction defect analysis and expert witness testimony.'
    },
    {
      company: 'Brown Consulting and Construction',
      role: 'Inspector/Consultant',
      period: '2001 - Present',
      description: 'Consultant and general contractor in construction defect specialty firm. Expert witness on general and technical construction issues, including cost analysis and repair methodologies.'
    },
    {
      company: 'UrbanTech Corp.',
      role: 'Designer & Builder',
      period: 'Nov 1998 - Mar 2001',
      description: 'Designed and developed proprietary "Urban Tech Building System" deployed in Japan, China, Philippines, Brazil, Cayman Islands, and Nigeria.'
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold">
                About <span className="text-yellow-400">Steve Fisher</span>
              </h1>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Licensed General Contractor with 35 years of hands-on construction experience,
                specializing in construction litigation consulting and expert witness testimony.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-yellow-200 shadow-xl">
                <img
                  src="/uploads/profile.png"
                  alt="Steve Fisher"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-zinc-900">Professional Background</h2>
              <div className="prose prose-lg text-zinc-600">
                <p>
                  Steve Fisher is a licensed General Contractor with 35 years of experience in the construction
                  industry. His training has been "hands on" which enables him to analyze existing systems and
                  fully understand not only their current conditions but also recreate original construction sequences.
                </p>
                <p>
                  This training strengthens the firm's ability to trace and pinpoint problem areas and formulate
                  repair methodologies. During his career, Steve has served as a tradesman, foreman, superintendent,
                  designer and project manager on projects ranging from single-family residences to commercial properties.
                </p>
                <p>
                  Over the past several years, he has been heavily involved in the design and building of both
                  wood and steel "panelized" systems around the world. Steve has designed, built and erected these
                  systems across the globe in countries such as China, Japan, Philippines, Brazil, Cayman Islands and Nigeria.
                </p>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-zinc-900">Licenses & Certifications</h2>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-zinc-700">{credential}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-zinc-900">International Experience</h3>
                </div>
                <p className="text-zinc-600 mb-4">
                  Steve has built custom homes throughout California and has been involved in Habitat For Humanity for Katrina victims, served onsite during the Kobe earthquake disaster in Japan, aided recovery efforts after the Phuket tsunami in Thailand, and joined a mission trip to Haiti to deliver supplies and anti-cholera medicine. His international outreach has also extended to projects and relief work in China, the Philippines, Brazil, the Cayman Islands, and Nigeria, reflecting a broad commitment to global humanitarian service.
                </p>
                <motion.a
                  href="/steve-fisher-credentials.txt"
                  download="Steve-Fisher-Professional-Credentials.txt"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Full Credentials</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-zinc-600">Key roles throughout a distinguished career</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-50 rounded-xl p-8 border-l-4 border-yellow-400"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-600">{job.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900">{job.role}</h3>
                    <p className="text-zinc-600 font-medium">{job.company}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-zinc-700 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Expertise Areas</h2>
            <p className="text-xl text-zinc-300">Specialized knowledge built over decades of experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto">
                <Scale className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold">Litigation Support</h3>
              <p className="text-zinc-300">Expert witness testimony and technical analysis for construction disputes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto">
                <Hammer className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold">Construction Analysis</h3>
              <p className="text-zinc-300">Defect identification, cause analysis, and repair methodology development</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold">Technical Consulting</h3>
              <p className="text-zinc-300">Cost estimation, project management, and construction standards compliance</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

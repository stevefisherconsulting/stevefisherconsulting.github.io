import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, FileText } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    caseType: '',
    message: '',
    website: '', // honeypot (spam trap)
  })

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot: bots often fill hidden fields. If it's filled, silently succeed.
    if (formData.website) {
      setStatus('success')
      return
    }

    setIsSending(true)
    setStatus('idle')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS environment variables. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          company: formData.company,
          case_type: formData.caseType,
          message: formData.message,
        },
        { publicKey }
      )

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        caseType: '',
        message: '',
        website: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(714) 815-9801', 'Available 24/7 for urgent matters'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['stevefisherconsulting@gmail.com', 'Response within 24 hours'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Menifee, California, USA', 'Available for nationwide projects'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Weekend consultations available'],
    },
  ]

  const services = [
    'Construction Defect Analysis',
    'Expert Witness Testimony',
    'Cost Estimation & Repair Methods',
    'Litigation Support',
    'Technical Consulting',
    'Building Inspection',
    'Other',
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
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Ready to discuss your construction litigation case? Contact Steve Fisher for expert consultation
              and professional testimony services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Send a Message</h2>
                <p className="text-zinc-600">
                  Fill out the form below and Steve will get back to you within 24 hours to discuss your case.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot (spam trap) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Your full name"
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-2">
                      Company/Law Firm
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Your company or law firm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="caseType" className="block text-sm font-medium text-zinc-700 mb-2">
                    Type of Service Needed *
                  </label>
                  <div className="relative">
                    <select
                      id="caseType"
                      name="caseType"
                      required
                      value={formData.caseType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                    Case Details *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Please provide details about your case, timeline, and specific needs..."
                    />
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-400" />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02 } : undefined}
                  whileTap={!isSending ? { scale: 0.98 } : undefined}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                    isSending ? 'bg-yellow-200 text-zinc-600 cursor-not-allowed' : 'bg-yellow-400 text-zinc-900 hover:bg-yellow-300'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSending ? 'Sending…' : 'Send Message'}</span>
                </motion.button>

                {status === 'success' && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                    Message sent. You’ll receive a response within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                    Failed to send. Please try again, or email directly at stevefisherconsulting@gmail.com.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Contact Information</h2>
                <p className="text-zinc-600">
                  Reach out directly using the information below or schedule a consultation to discuss your case.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-zinc-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-red-800 mb-2">Emergency Consultation</h3>
                <p className="text-red-700 text-sm mb-3">
                  For urgent litigation deadlines or time-sensitive matters, call directly for immediate response.
                </p>
                <div className="flex items-center space-x-2 text-red-800 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>(714) 815-9801</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-8">Ready to Work With You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Fast Response</h3>
                <p className="text-zinc-600">24-hour response guarantee for all inquiries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Professional Reports</h3>
                <p className="text-zinc-600">Detailed analysis and expert testimony</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Nationwide Service</h3>
                <p className="text-zinc-600">Available for projects across the United States</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

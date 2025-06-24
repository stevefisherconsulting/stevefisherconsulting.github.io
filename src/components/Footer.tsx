import { Scale, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                <Scale className="w-5 h-5 text-zinc-900" />
              </div>
              <div className="text-lg font-bold">
                Steve Fisher <span className="text-yellow-400">Consulting</span>
              </div>
            </div>
            <p className="text-zinc-300 text-sm">
              Expert construction litigation consulting and testimony services.
              35+ years of hands-on construction experience.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-zinc-300">
                <Phone className="w-4 h-4" />
                <span>(714) 815-9801</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-zinc-300">
                <Mail className="w-4 h-4" />
                <span>stevefisherconsulting@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-zinc-300">
                <MapPin className="w-4 h-4" />
                <span>Menifee, California, USA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Services</h3>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li>Construction Defect Analysis</li>
              <li>Expert Witness Testimony</li>
              <li>Cost Estimation & Repair Methods</li>
              <li>Litigation Support</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-8 pt-8 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Steve Fisher Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

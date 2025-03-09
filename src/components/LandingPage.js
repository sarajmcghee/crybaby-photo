import { Camera, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-pink-500">Cry Baby Photo Booth</h1>
          <p className="text-xl text-center mt-4 text-purple-400 font-semibold">"Pictures, or it didn't happen!"</p>
        </header>

        <section className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
            A Non-Typical Photo Experience for Non-Boring People
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ditch the conventional and embrace the extraordinary. Our photo booth experience is designed for those who
            color outside the lines and dance to their own beat.
          </p>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center text-purple-400 mb-8">Our Packages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PackageCard
                title="All Digital Package"
                price="$200/hr"
                minHours={2}
                additionalHourPrice="$100/hr"
                features={[
                  "Unlimited instant share SMS/email digital photos",
                  "On-site attendants",
                  "Set up and tear down",
                  "Simple backdrop",
                  "Customizable graphics",
                ]}
              />
              <PackageCard
                title="Premium Print Package"
                price="$250/hr"
                minHours={2}
                additionalHourPrice="$125/hr"
                features={[
                  "Unlimited 4×6 or 2×6 strips prints",
                  "Custom graphics designed for your event",
                  "On-site attendants",
                  "Set up and tear down",
                  "Simple backdrop",
                ]}
              />
            </div>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-purple-400 mb-4">Customize Your Experience</h2>
            <p className="text-lg text-gray-300 mb-6">
              Reach out with any requests (props/backdrop/graphics, etc.). We aim to customize and personalize every
              experience to fit perfectly with your event!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:info@crybabyphotobooth.com"
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Mail className="mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+11234567890"
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Phone className="mr-2" />
                Call Now
              </a>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-gray-900 text-white py-6 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Cry Baby Photo Booth. All rights reserved.</p>
          <p className="mt-2 text-pink-400">Keeping it weird, one photo at a time.</p>
        </div>
      </footer>
    </div>
  )
}

function PackageCard({ title, price, minHours, additionalHourPrice, features }) {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 border border-purple-500">
      <h3 className="text-2xl font-semibold text-pink-400 mb-2">{title}</h3>
      <p className="text-xl text-white mb-1">{price}</p>
      <p className="text-sm text-purple-300 mb-4">
        (min. {minHours} hrs) {additionalHourPrice} every hour after
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Camera className="h-5 w-5 text-pink-400 mr-2 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}


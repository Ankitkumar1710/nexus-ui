'use client'

import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

const Hero = () => {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    jobType: '',
    experience: ''
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        alert('Application Submitted Successfully ✅')

        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          jobType: '',
          experience: ''
        })

      } else {
        alert('Submission Failed ❌')
      }

    } catch (error) {
      console.error(error)
      alert('Server Error ❌')
    }

    setLoading(false)
  }

  return (

    <section className="relative min-h-screen flex items-center justify-center bg-black">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-4">

            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-red-500">Trusted Manpower</span> Service Provider
            </h1>

            <p className="text-gray-300 text-lg">
              Verified workforce for hospitals, factories, offices & projects across India.
            </p>

            <div className="flex gap-4">

              <button
                onClick={() => window.open('tel:+917070637489')}
                className="bg-red-600 px-6 py-3 rounded-lg font-semibold flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>

              <button
                onClick={() => window.open('https://wa.me/917070637489')}
                className="border border-white px-6 py-3 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                WhatsApp
              </button>

            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 space-y-4 shadow-xl"
          >

            <h3 className="text-xl font-bold text-center">
              Apply For Job
            </h3>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border p-2 rounded"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full border p-2 rounded"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 rounded"
            />

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className="w-full border p-2 rounded"
            />

            <input
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              placeholder="Job Type"
              required
              className="w-full border p-2 rounded"
            />

            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
              required
              className="w-full border p-2 rounded"
            />

            <button
              disabled={loading}
              type="submit"
              className="bg-red-600 text-white w-full py-3 rounded font-semibold"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Hero

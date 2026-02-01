'use client'

import { useState } from 'react'
import Image from 'next/image'

const CareersForm = () => {

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

    <section
      id="careers"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black"
    >

      <div className="container mx-auto px-4">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Apply For <span className="text-brand">Job</span>
          </h2>

          <div className="w-24 h-1 bg-brand mx-auto mt-3 mb-4"></div>

          <p className="text-gray-600 dark:text-gray-400">
            Submit your details and our team will contact you shortly
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-6 bg-brand/20 blur-3xl rounded-full"></div>

              <Image
                src="/w8.png"   // public folder image
                alt="Careers"
                width={420}
                height={400}
                className="relative rounded-xl shadow-xl"
              />

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white dark:bg-[#141414] p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">

            <h3 className="text-2xl font-bold mb-6 text-center">
              Job Application Form
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border p-3 rounded"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full border p-3 rounded"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (Optional)"
                className="w-full border p-3 rounded"
              />

              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
                className="w-full border p-3 rounded"
              />

            <select
  value={formData.jobType}
  onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
  required
>
  <option value="">Select Job Type</option>

  <option value="Hospital Staff">Hospital Staff</option>
  <option value="Factory Worker">Factory Worker</option>
  <option value="Office Helper">Office Helper</option>
  <option value="Security Guard">Security Guard</option>
  <option value="Construction Labour">Construction Labour</option>

  <option value="Other">Other</option>
</select>

              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience"
                required
                className="w-full border p-3 rounded"
              />

              <button
                disabled={loading}
                type="submit"
                className="bg-brand text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CareersForm

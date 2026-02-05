'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  setOpen: (v: boolean) => void
}

const PartnerPopup = ({ open, setOpen }: Props) => {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    message: ''
  })

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: "PARTNER ENQUIRY"
        })
      })

      const data = await res.json()

      if (data.success) {
        alert("Partner Request Sent ✅")
        setOpen(false)
        setFormData({
          name:'',
          phone:'',
          email:'',
          business:'',
          message:''
        })
      } else {
        alert("Failed ❌")
      }

    } catch (err) {
      alert("Server error")
    }

    setLoading(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      {/* BOX */}
      <div className="bg-white dark:bg-[#141414] w-[95%] max-w-lg rounded-xl p-6 relative shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={()=>setOpen(false)}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Become a Partner
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="business"
            required
            placeholder="Business Type"
            value={formData.business}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            required
            placeholder="Business Description"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded h-24"
          />

          <button
            disabled={loading}
            className="bg-brand text-white w-full py-3 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default PartnerPopup

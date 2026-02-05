'use client'
import { useState } from 'react'

const JobApplyForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
    jobType: '',
    experience: '',
  })

  const [resume, setResume] = useState<File | null>(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('phone', form.phone)
      formData.append('location', form.location)
      formData.append('jobType', form.jobType)
      formData.append('experience', form.experience)

      if (resume) {
        formData.append('resume', resume)
      }

      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (data.success) {
        alert('Application sent successfully ✅')
        setForm({
          name: '',
          phone: '',
          location: '',
          jobType: '',
          experience: '',
        })
        setResume(null)
        onSuccess?.()
      } else {
        alert('Failed ❌')
      }

    } catch (err) {
      alert('Server error ❌')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        required
        placeholder="Full Name"
        className="w-full border p-3 rounded"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        required
        placeholder="Mobile Number"
        className="w-full border p-3 rounded"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Location"
        className="w-full border p-3 rounded"
        value={form.location}
        onChange={e => setForm({ ...form, location: e.target.value })}
      />

      <select
        required
        className="w-full border p-3 rounded"
        value={form.jobType}
        onChange={e => setForm({ ...form, jobType: e.target.value })}
      >
        <option value="">Select Job Type</option>
        <option>Helper</option>
        <option>Security Guard</option>
        <option>Factory Worker</option>
        <option>Office Boy</option>
        <option>Driver</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Experience"
        className="w-full border p-3 rounded"
        value={form.experience}
        onChange={e => setForm({ ...form, experience: e.target.value })}
      />

      {/* RESUME UPLOAD OPTIONAL */}
      <div>
        <label className="text-sm font-medium">Upload Resume (optional)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full border p-2 rounded mt-1"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setResume(e.target.files[0])
            }
          }}
        />
      </div>

      <button
        disabled={loading}
        className="w-full bg-brand text-white py-3 rounded-lg font-semibold"
      >
        {loading ? 'Submitting...' : 'Apply Now'}
      </button>

    </form>
  )
}

export default JobApplyForm

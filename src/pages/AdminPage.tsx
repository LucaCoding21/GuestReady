import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Partner, PartnerInsert, PartnerUpdate } from '../lib/database.types'
import type { User } from '@supabase/supabase-js'

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [partners, setPartners] = useState<Partner[]>([])
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null)

  // Auth form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [authLoading, setAuthLoading] = useState(false)

  // Add partner form state
  const [newName, setNewName] = useState('')
  const [newSlug, setNewSlug] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newBusinessName, setNewBusinessName] = useState('')

  // Edit form state
  const [editName, setEditName] = useState('')
  const [editSlug, setEditSlug] = useState('')
  const [editPhone, setEditPhone] = useState('')
  const [editBusinessName, setEditBusinessName] = useState('')
  const [editEarnings, setEditEarnings] = useState('')

  // Check auth on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Fetch partners when logged in
  useEffect(() => {
    if (user) {
      fetchPartners()
    }
  }, [user])

  async function fetchPartners() {
    const { data } = await supabase
      .from('partners')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) setPartners(data)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthLoading(true)
    setAuthError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setAuthError(error.message)
    }
    setAuthLoading(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  async function handleAddPartner(e: React.FormEvent) {
    e.preventDefault()

    const partner: PartnerInsert = {
      name: newName.trim(),
      slug: newSlug.trim().toLowerCase() || generateSlug(newName),
      phone: newPhone.trim() || null,
      business_name: newBusinessName.trim() || null
    }

    const { error } = await supabase.from('partners').insert(partner)

    if (error) {
      alert(`Error: ${error.message}`)
      return
    }

    setNewName('')
    setNewSlug('')
    setNewPhone('')
    setNewBusinessName('')
    fetchPartners()
  }

  function startEdit(partner: Partner) {
    setEditingPartner(partner)
    setEditName(partner.name)
    setEditSlug(partner.slug)
    setEditPhone(partner.phone || '')
    setEditBusinessName(partner.business_name || '')
    setEditEarnings(partner.earnings_paid.toString())
  }

  function cancelEdit() {
    setEditingPartner(null)
  }

  async function handleUpdatePartner(e: React.FormEvent) {
    e.preventDefault()
    if (!editingPartner) return

    const update: PartnerUpdate = {
      name: editName.trim(),
      slug: editSlug.trim().toLowerCase(),
      phone: editPhone.trim() || null,
      business_name: editBusinessName.trim() || null,
      earnings_paid: parseFloat(editEarnings) || 0
    }

    const { error } = await supabase
      .from('partners')
      .update(update)
      .eq('id', editingPartner.id)

    if (error) {
      alert(`Error: ${error.message}`)
      return
    }

    setEditingPartner(null)
    fetchPartners()
  }

  async function handleDeletePartner(id: string) {
    if (!confirm('Are you sure you want to delete this partner?')) return

    const { error } = await supabase.from('partners').delete().eq('id', id)

    if (error) {
      alert(`Error: ${error.message}`)
      return
    }

    fetchPartners()
  }

  function copyLink(slug: string) {
    const link = `${window.location.origin}/r/${slug}`
    navigator.clipboard.writeText(link)
    alert('Link copied!')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-100 flex items-center justify-center">
        <div className="text-warm-600">Loading...</div>
      </div>
    )
  }

  // Login form
  if (!user) {
    return (
      <div className="min-h-screen bg-warm-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-warm-900 mb-6 text-center">
            Partner Admin
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>

            {authError && (
              <p className="text-red-500 text-sm">{authError}</p>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              {authLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-warm-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-warm-900">Partner Admin</h1>
          <button
            onClick={handleLogout}
            className="text-warm-600 hover:text-warm-900 text-sm"
          >
            Sign Out
          </button>
        </div>

        {/* Add Partner Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-warm-900 mb-4">Add Partner</h2>

          <form onSubmit={handleAddPartner} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value)
                    if (!newSlug) setNewSlug(generateSlug(e.target.value))
                  }}
                  className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Mike"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1">
                  Slug *
                </label>
                <input
                  type="text"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="mike"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="778-123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1">
                  Business Name (optional)
                </label>
                <input
                  type="text"
                  value={newBusinessName}
                  onChange={(e) => setNewBusinessName(e.target.value)}
                  className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Mike's Rentals"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Add Partner
            </button>
          </form>
        </div>

        {/* Partner List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-warm-200">
            <h2 className="text-lg font-semibold text-warm-900">Partners</h2>
          </div>

          {partners.length === 0 ? (
            <div className="p-6 text-center text-warm-500">
              No partners yet. Add one above.
            </div>
          ) : (
            <div className="divide-y divide-warm-200">
              {partners.map((partner) => (
                <div key={partner.id} className="p-4 md:p-6">
                  {editingPartner?.id === partner.id ? (
                    // Edit form
                    <form onSubmit={handleUpdatePartner} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-full px-3 py-2 border border-warm-300 rounded-lg text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-1">
                            Slug
                          </label>
                          <input
                            type="text"
                            value={editSlug}
                            onChange={(e) => setEditSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                            className="w-full px-3 py-2 border border-warm-300 rounded-lg text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={editPhone}
                            onChange={(e) => setEditPhone(e.target.value)}
                            className="w-full px-3 py-2 border border-warm-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-1">
                            Business Name
                          </label>
                          <input
                            type="text"
                            value={editBusinessName}
                            onChange={(e) => setEditBusinessName(e.target.value)}
                            className="w-full px-3 py-2 border border-warm-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-warm-700 mb-1">
                            Earnings Paid ($)
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            value={editEarnings}
                            onChange={(e) => setEditEarnings(e.target.value)}
                            className="w-full px-3 py-2 border border-warm-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="bg-warm-200 hover:bg-warm-300 text-warm-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Display row
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-semibold text-warm-900">{partner.name}</div>
                        <div className="text-sm text-warm-500">
                          /{partner.slug}
                          {partner.business_name && ` • ${partner.business_name}`}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyLink(partner.slug)}
                          className="bg-warm-100 hover:bg-warm-200 text-warm-700 px-3 py-1.5 rounded-lg text-sm transition-colors"
                        >
                          Copy Link
                        </button>

                        <span className="text-teal-600 font-medium px-2">
                          ${partner.earnings_paid.toFixed(2)}
                        </span>

                        <button
                          onClick={() => startEdit(partner)}
                          className="text-warm-600 hover:text-warm-900 px-2 py-1 text-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeletePartner(partner.id)}
                          className="text-red-500 hover:text-red-700 px-2 py-1 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

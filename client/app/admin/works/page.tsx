
'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'

import {
  Plus,
  Search,
  BriefcaseBusiness,
  ArrowUpRight,
  Pencil,
  Trash2,
  Eye,
  Filter,
  FolderOpen,
  X,
} from 'lucide-react'

const projects = [
  {
    id: '1',
    title: 'E-Commerce Website',
    category: 'Web Development',
    status: 'Completed',
    description: 'A modern online shopping platform with a clean user interface.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  },
  {
    id: '2',
    title: 'Corporate Website',
    category: 'Web Design',
    status: 'In Progress',
    description: 'A professional website for a corporate business.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
  },
  {
    id: '3',
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    status: 'Completed',
    description: 'A modern and user-friendly mobile application interface.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
  },
  {
    id: '4',
    title: 'Agency Landing Page',
    category: 'Web Design',
    status: 'In Progress',
    description: 'A creative landing page for a digital agency.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    id: '5',
    title: 'Brand Identity',
    category: 'Branding',
    status: 'Completed',
    description: 'A complete visual identity and branding solution.',
    image: 'https://images.unsplash.com/photo-1634942536790-2531a3d7a8f0?w=800',
  },
  {
    id: '6',
    title: 'Dashboard UI',
    category: 'UI/UX Design',
    status: 'Draft',
    description: 'An intuitive admin dashboard design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  },
]

const categories = [
  'All',
  'Web Development',
  'Web Design',
  'UI/UX Design',
  'Branding',
]

const WorksPage = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.category.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'All' || project.category === category

      const matchesStatus =
        status === 'All' || project.status === status

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [search, category, status])

  const counts = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'Completed').length,
    ongoing: projects.filter(p => p.status === 'In Progress').length,
    drafts: projects.filter(p => p.status === 'Draft').length,
  }

  return (
    <div className="min-h-screen w-full min-w-0 bg-[#f8faf9] p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
            <BriefcaseBusiness size={15} />
            Portfolio Management
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            My Works
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage, organize and showcase all your projects.
          </p>
        </div>

        <Link
          href="/admin/works/new"
          className="flex w-fit items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/10 transition hover:bg-emerald-800"
        >
          <Plus size={19} />
          Add New Work
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">

        {[
          { label: 'Total Projects', value: counts.total, color: 'text-slate-900' },
          { label: 'Completed', value: counts.completed, color: 'text-emerald-700' },
          { label: 'In Progress', value: counts.ongoing, color: 'text-blue-700' },
          { label: 'Drafts', value: counts.drafts, color: 'text-orange-600' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200/70 bg-white p-5"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <h2 className={`mt-2 text-3xl font-bold ${item.color}`}>
              {item.value}
            </h2>
          </div>
        ))}

      </div>

      {/* Search and Filters */}
      <div className="mb-7 rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter size={17} className="mr-1 text-slate-400" />

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  category === item
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
          <span className="text-xs font-semibold text-slate-500">
            Status:
          </span>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none focus:border-emerald-500"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Draft">Draft</option>
          </select>

          <span className="ml-auto text-xs text-slate-400">
            {filteredProjects.length} projects found
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
            >

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4">
                  <span className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                    project.status === 'Completed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-slate-900 transition group-hover:text-emerald-700">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700">
                    <BriefcaseBusiness size={20} />
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                  <Link
                    href={`/admin/works/${project.id}/edit`}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <Pencil size={14} />
                    Edit
                  </Link>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/works/${project.id}`}
                      aria-label="View project"
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Eye size={18} />
                    </Link>

                    <button
                      onClick={() => setDeleteId(project.id)}
                      aria-label="Delete project"
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-20 text-center">
          <div className="mb-5 rounded-2xl bg-emerald-50 p-5 text-emerald-700">
            <FolderOpen size={35} />
          </div>

          <h3 className="text-xl font-bold text-slate-800">
            No projects found
          </h3>

          <p className="mt-2 max-w-sm text-sm text-slate-500">
            We couldn&apos;t find any projects matching your search or filters.
          </p>

          <button
            onClick={() => {
              setSearch('')
              setCategory('All')
              setStatus('All')
            }}
            className="mt-5 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Delete Confirmation UI */}
      {deleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <Trash2 size={23} />
              </div>

              <button
                onClick={() => setDeleteId(null)}
                className="text-slate-400 hover:text-slate-700"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Delete this project?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              This action will need to be connected to your backend
              before it can permanently delete a project.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default WorksPage

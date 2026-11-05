
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderKanban,
  Users,
  Eye,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Plus,
  Clock3,
  CheckCircle2,
  Activity,
} from 'lucide-react'

import Link from 'next/link'
import React from 'react'

const stats = [
  {
    title: 'Total Works',
    value: '12',
    change: '+2 this month',
    icon: BriefcaseBusiness,
    link: '/admin/works',
  },
  {
    title: 'Active Projects',
    value: '03',
    change: 'Currently ongoing',
    icon: FolderKanban,
    link: '/admin/works',
  },
  {
    title: 'Total Clients',
    value: '09',
    change: 'All-time clients',
    icon: Users,
    link: '/admin/clients',
  },
  {
    title: 'Portfolio Views',
    value: '1.2k',
    change: '+12% this month',
    icon: Eye,
    link: '/admin/analytics',
  },
]

const activities = [
  {
    title: 'New project added',
    description: 'A new portfolio project was created.',
    time: 'Recently',
    icon: BriefcaseBusiness,
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Client message received',
    description: 'You have a new client inquiry.',
    time: 'Recently',
    icon: MessageSquare,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Project updated',
    description: 'An existing project was updated.',
    time: 'Recently',
    icon: CheckCircle2,
    color: 'bg-purple-100 text-purple-700',
  },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full min-w-0 bg-[#f8faf9] p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            OVERVIEW
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Welcome back! Here&apos;s your BeNextDigital overview.
          </p>
        </div>

        <Link
          href="/admin/works"
          className="flex w-fit items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/10 transition hover:bg-emerald-800"
        >
          <Plus size={18} />
          Add New Work
        </Link>
      </div>

      {/* Welcome Banner */}
      <div className="relative mb-9 overflow-hidden rounded-3xl bg-[#073b31] p-7 md:p-10">
        <div className="absolute -right-16 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />
        <div className="absolute -bottom-32 right-52 h-72 w-72 rounded-full bg-emerald-400/[0.08] blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <Activity size={14} />
              Admin Workspace
            </span>

            <h2 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
              Build Something
              <span className="text-emerald-400"> Amazing.</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-emerald-100/70">
              Manage your portfolio, track your projects, and
              grow your digital presence with BeNextDigital.
            </p>
          </div>

          <Link
            href="/admin/works"
            className="flex w-fit items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#073b31] transition hover:bg-emerald-50"
          >
            Explore Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-9">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Your Statistics
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              A quick look at your business performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <Link
                href={stat.link}
                key={index}
                className="group rounded-2xl border border-slate-200/70 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-300 transition group-hover:text-emerald-600"
                  />
                </div>

                <p className="mt-6 text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <div className="mt-1 flex flex-wrap items-end justify-between gap-2">
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </h3>

                  <span className="mb-1 text-xs font-medium text-emerald-600">
                    {stat.change}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Activity */}
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Activity
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest updates from your workspace.
              </p>
            </div>

            <span className="rounded-lg bg-slate-100 p-2 text-slate-500">
              <Clock3 size={19} />
            </span>
          </div>

          <div className="mt-7 space-y-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon

              return (
                <div key={index} className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${activity.color}`}>
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-800">
                        {activity.title}
                      </h3>

                      <span className="text-xs text-slate-400">
                        {activity.time}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {activity.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-7 border-t border-slate-100 pt-5">
            <Link
              href="/admin/works"
              className="flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Manage your projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Get things done faster.
          </p>

          <div className="mt-6 space-y-3">

            <Link
              href="/admin/works"
              className="group flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/60"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-100 p-2.5 text-emerald-700">
                  <Plus size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Add New Work
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Create a portfolio project
                  </p>
                </div>
              </div>

              <ArrowRight size={17} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-700" />
            </Link>

            <Link
              href="/admin/messages"
              className="group flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/60"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2.5 text-blue-700">
                  <MessageSquare size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    View Messages
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Check client inquiries
                  </p>
                </div>
              </div>

              <ArrowRight size={17} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
            </Link>

            <Link
              href="/admin/clients"
              className="group flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:border-purple-200 hover:bg-purple-50/60"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-100 p-2.5 text-purple-700">
                  <Users size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Manage Clients
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    View your client list
                  </p>
                </div>
              </div>

              <ArrowRight size={17} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-purple-700" />
            </Link>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-9 flex flex-col justify-between gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row">
        <p>© 2026 BeNextDigital. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made for better digital experiences.
          <TrendingUp size={14} className="text-emerald-600" />
        </p>
      </div>

    </div>
  )
}

export default Dashboard

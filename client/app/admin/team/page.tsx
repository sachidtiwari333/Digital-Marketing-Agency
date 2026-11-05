
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus, Search, Pencil, Trash2, Eye, Users,
  UserCheck, UserX, Mail, Linkedin,
} from "lucide-react";

type Member = {
  id: string;
  name: string;
  role: string;
  email: string;
  department: string;
  status: "Active" | "Inactive";
  initials: string;
  color: string;
};

const initialMembers: Member[] = [
  {
    id: "1",
    name: "John Smith",
    role: "Founder & CEO",
    email: "john@benextdigital.com",
    department: "Management",
    status: "Active",
    initials: "JS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    email: "sarah@benextdigital.com",
    department: "Design",
    status: "Active",
    initials: "SJ",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "3",
    name: "David Wilson",
    role: "Frontend Developer",
    email: "david@benextdigital.com",
    department: "Development",
    status: "Active",
    initials: "DW",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "Digital Marketing Specialist",
    email: "emily@benextdigital.com",
    department: "Marketing",
    status: "Inactive",
    initials: "ED",
    color: "bg-pink-100 text-pink-700",
  },
];

export default function TeamPage() {
  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const activeCount = members.filter(m => m.status === "Active").length;
  const inactiveCount = members.length - activeCount;

  const filteredMembers = members.filter(member => {
    const term = search.toLowerCase();
    const matchesSearch =
      member.name.toLowerCase().includes(term) ||
      member.role.toLowerCase().includes(term) ||
      member.department.toLowerCase().includes(term);

    return matchesSearch && (status === "All" || member.status === status);
  });

  const deleteMember = (id: string) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      setMembers(prev => prev.filter(member => member.id !== id));
    }
  };

  const toggleStatus = (id: string) => {
    setMembers(prev => prev.map(member =>
      member.id === id
        ? { ...member, status: member.status === "Active" ? "Inactive" : "Active" }
        : member
    ));
  };

  return (
    <div className="w-full min-w-0 space-y-8 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600">Management / Team</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Team Management</h1>
          <p className="mt-1 text-sm text-slate-500">Manage your people and team profiles.</p>
        </div>

        <Link href="/admin/team/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
          <Plus size={18} /> Add Team Member
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <TeamStat title="Total Members" value={members.length} icon={Users} />
        <TeamStat title="Active Members" value={activeCount} icon={UserCheck} />
        <TeamStat title="Inactive Members" value={inactiveCount} icon={UserX} />
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search team members..."
            className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-500" />
        </div>

        <select value={status} onChange={e => setStatus(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Our Team</h2>
          <span className="text-sm text-slate-500">{filteredMembers.length} members found</span>
        </div>

        {filteredMembers.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center text-slate-500">
            <Users size={38} className="mx-auto mb-3 text-slate-300" />
            No team members found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredMembers.map(member => (
              <div key={member.id} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold ${member.color}`}>
                  {member.initials}
                </div>

                <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  member.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
                }`}>
                  {member.status}
                </span>

                <h3 className="mt-3 text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">{member.role}</p>
                <p className="mt-2 text-xs text-slate-500">{member.department}</p>

                <a href={`mailto:${member.email}`}
                  className="mt-4 inline-flex max-w-full items-center gap-2 text-sm text-slate-500 hover:text-emerald-600">
                  <Mail size={15} />
                  <span className="truncate">{member.email}</span>
                </a>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                  <Link href={`/admin/team/${member.id}`}
                    className="flex items-center justify-center gap-1 rounded-lg bg-slate-100 px-2 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-200">
                    <Eye size={15} /> View
                  </Link>

                  <Link href={`/admin/team/${member.id}/edit`}
                    className="flex items-center justify-center gap-1 rounded-lg bg-blue-50 px-2 py-2.5 text-xs font-medium text-blue-600 hover:bg-blue-100">
                    <Pencil size={15} /> Edit
                  </Link>

                  <button onClick={() => deleteMember(member.id)}
                    className="flex items-center justify-center rounded-lg bg-red-50 px-2 py-2.5 text-red-600 hover:bg-red-100">
                    <Trash2 size={15} />
                  </button>
                </div>

                <button onClick={() => toggleStatus(member.id)}
                  className="mt-3 w-full rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                  {member.status === "Active" ? "Deactivate Member" : "Activate Member"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TeamStat({ title, value, icon: Icon }: {
  title: string; value: number; icon: React.ElementType;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
      </div>
      <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600"><Icon size={24} /></div>
    </div>
  );
}

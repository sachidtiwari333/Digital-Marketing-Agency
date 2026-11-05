
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Star,
  MessageSquareQuote,
  CheckCircle,
  Clock,
  XCircle,
  ThumbsUp,
} from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
  initials: string;
  color: string;
};

const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Creative Solutions",
    message:
      "Be Next Digital completely transformed our online presence. Their team understood our vision and delivered an amazing website. Highly recommended!",
    rating: 5,
    date: "Oct 15, 2026",
    status: "Approved",
    initials: "SJ",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "2",
    name: "Michael Brown",
    role: "CEO",
    company: "TechVision",
    message:
      "Excellent communication, professional service, and outstanding results. The development team exceeded our expectations.",
    rating: 5,
    date: "Oct 12, 2026",
    status: "Approved",
    initials: "MB",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "Business Owner",
    company: "Bloom Studio",
    message:
      "We loved working with the team. They created a beautiful design that perfectly represents our brand.",
    rating: 4,
    date: "Oct 10, 2026",
    status: "Pending",
    initials: "ED",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "4",
    name: "David Wilson",
    role: "Founder",
    company: "NextGen",
    message:
      "A reliable team that delivers quality work on time. I would definitely work with them again.",
    rating: 5,
    date: "Oct 08, 2026",
    status: "Approved",
    initials: "DW",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "5",
    name: "Sophia Miller",
    role: "Product Manager",
    company: "Digital Hub",
    message:
      "The final product was good, but we had a few communication delays during the project.",
    rating: 3,
    date: "Oct 05, 2026",
    status: "Rejected",
    initials: "SM",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(initialTestimonials);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const approvedCount = testimonials.filter(
    (item) => item.status === "Approved"
  ).length;

  const pendingCount = testimonials.filter(
    (item) => item.status === "Pending"
  ).length;

  const averageRating =
    testimonials.length > 0
      ? (
          testimonials.reduce((total, item) => total + item.rating, 0) /
          testimonials.length
        ).toFixed(1)
      : "0.0";

  const filteredTestimonials = testimonials.filter((item) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      item.company.toLowerCase().includes(searchTerm) ||
      item.message.toLowerCase().includes(searchTerm);

    const matchesStatus =
      status === "All" || item.status === status;

    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id: string) => {
    setTestimonials((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (confirmed) {
      setTestimonials((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <div className="w-full min-w-0 space-y-8 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600">
            Management / Testimonials
          </p>

          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Testimonials
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage customer reviews and testimonials.
          </p>
        </div>

        <Link
          href="/admin/testimonials/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          <Plus size={18} />
          Add Testimonial
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Testimonials"
          value={testimonials.length}
          icon={MessageSquareQuote}
          color="bg-blue-50 text-blue-600"
        />

        <StatCard
          title="Approved"
          value={approvedCount}
          icon={CheckCircle}
          color="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Pending Review"
          value={pendingCount}
          icon={Clock}
          color="bg-amber-50 text-amber-600"
        />

        <StatCard
          title="Average Rating"
          value={averageRating}
          icon={Star}
          color="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Search and Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by client, company, or testimonial..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
          >
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            All Testimonials
          </h2>

          <span className="text-sm text-slate-500">
            {filteredTestimonials.length} results found
          </span>
        </div>

        {filteredTestimonials.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <MessageSquareQuote
              size={40}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 font-semibold text-slate-800">
              No testimonials found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
              >
                {/* Client information */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${item.color}`}
                    >
                      {item.initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-bold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="truncate text-sm text-slate-500">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </div>

                  <StatusBadge status={item.status} />
                </div>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      className={
                        index < item.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-200"
                      }
                    />
                  ))}

                  <span className="ml-2 text-xs font-medium text-slate-500">
                    {item.rating}/5
                  </span>
                </div>

                {/* Message */}
                <div className="relative mt-4 rounded-xl bg-slate-50 p-4">
                  <MessageSquareQuote
                    size={20}
                    className="mb-2 text-emerald-500"
                  />

                  <p className="text-sm leading-7 text-slate-600">
                    {item.message}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-5 flex flex-col justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-slate-400">
                    Submitted: {item.date}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/admin/testimonials/${item.id}`}
                      title="View testimonial"
                      className="rounded-lg bg-slate-100 p-2.5 text-slate-600 transition hover:bg-slate-200"
                    >
                      <Eye size={16} />
                    </Link>

                    <Link
                      href={`/admin/testimonials/${item.id}/edit`}
                      title="Edit testimonial"
                      className="rounded-lg bg-blue-50 p-2.5 text-blue-600 transition hover:bg-blue-100"
                    >
                      <Pencil size={16} />
                    </Link>

                    {item.status !== "Approved" && (
                      <button
                        onClick={() => handleApprove(item.id)}
                        title="Approve testimonial"
                        className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                      >
                        <ThumbsUp size={15} />
                        Approve
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(item.id)}
                      title="Delete testimonial"
                      className="rounded-lg bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: Testimonial["status"];
}) {
  const styles = {
    Approved: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Rejected: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

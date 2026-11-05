
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Code,
  Smartphone,
  Palette,
  Megaphone,
  Camera,
  Video,
  Globe,
  CheckCircle,
  XCircle,
  Layers,
} from "lucide-react";

const initialServices = [
  {
    id: "1",
    name: "Web Development",
    description:
      "Modern, responsive, and high-performance websites tailored to your business needs.",
    category: "Development",
    price: "Starting at $500",
    status: "Active",
    icon: Code,
  },
  {
    id: "2",
    name: "Mobile App Development",
    description:
      "Custom mobile applications for Android and iOS with seamless user experiences.",
    category: "Development",
    price: "Starting at $1,000",
    status: "Active",
    icon: Smartphone,
  },
  {
    id: "3",
    name: "UI/UX Design",
    description:
      "Beautiful and user-friendly interfaces designed to improve customer experience.",
    category: "Design",
    price: "Starting at $300",
    status: "Active",
    icon: Palette,
  },
  {
    id: "4",
    name: "Digital Marketing",
    description:
      "Grow your online presence with strategic digital marketing and social media campaigns.",
    category: "Marketing",
    price: "Starting at $250",
    status: "Active",
    icon: Megaphone,
  },
  {
    id: "5",
    name: "Photography",
    description:
      "Professional photography services for brands, products, and events.",
    category: "Media",
    price: "Starting at $150",
    status: "Inactive",
    icon: Camera,
  },
  {
    id: "6",
    name: "Video Production",
    description:
      "Creative video production, editing, and promotional content for your brand.",
    category: "Media",
    price: "Starting at $200",
    status: "Active",
    icon: Video,
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState(initialServices);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Media",
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || service.category === category;

    const matchesStatus =
      status === "All" || service.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const activeCount = services.filter(
    (service) => service.status === "Active"
  ).length;

  const inactiveCount = services.filter(
    (service) => service.status === "Inactive"
  ).length;

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (confirmed) {
      setServices((prev) => prev.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="w-full min-w-0 space-y-8 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600">
            Management / Services
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Services Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage the services offered by your company.
          </p>
        </div>

        <Link
          href="/admin/services/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          <Plus size={18} />
          Add New Service
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Services"
          value={services.length}
          icon={Layers}
          color="bg-blue-50 text-blue-600"
        />
        <StatCard
          title="Active Services"
          value={activeCount}
          icon={CheckCircle}
          color="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          title="Inactive Services"
          value={inactiveCount}
          icon={XCircle}
          color="bg-red-50 text-red-600"
        />
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={19}
            />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            All Services
          </h2>
          <span className="text-sm text-slate-500">
            {filteredServices.length} services found
          </span>
        </div>

        {filteredServices.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <Layers className="mx-auto text-slate-300" size={40} />
            <h3 className="mt-4 font-semibold text-slate-800">
              No services found
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                      <Icon size={25} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        service.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      {service.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                      {service.name}
                    </h3>

                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm font-semibold text-slate-800">
                      {service.price}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <Link
                        href={`/admin/services/${service.id}`}
                        title="View service"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                      >
                        <Eye size={16} />
                        View
                      </Link>

                      <Link
                        href={`/admin/services/${service.id}/edit`}
                        title="Edit service"
                        className="rounded-lg bg-blue-50 p-2.5 text-blue-600 transition hover:bg-blue-100"
                      >
                        <Pencil size={17} />
                      </Link>

                      <button
                        onClick={() => handleDelete(service.id)}
                        title="Delete service"
                        className="rounded-lg bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
  value: number;
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

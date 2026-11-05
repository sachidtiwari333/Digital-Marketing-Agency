
"use client";

import { useState } from "react";
import {
  Building2, Mail, Phone, MapPin, Globe,
  Instagram, Facebook, Linkedin, Save, Settings,
} from "lucide-react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    companyName: "Be Next Digital",
    tagline: "Building Digital Experiences",
    email: "info@benextdigital.com",
    phone: "+977 9800000000",
    address: "Kathmandu, Nepal",
    website: "https://benextdigital.com",
    facebook: "",
    instagram: "",
    linkedin: "",
    maintenanceMode: false,
    showTestimonials: true,
    showBlog: true,
  });

  const [saved, setSaved] = useState(false);

  const updateField = (field: keyof typeof form, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo only: connect this to your settings API to persist changes.
    console.log("Settings to save:", form);
    setSaved(true);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100";

  return (
    <div className="w-full min-w-0 space-y-8 p-4 sm:p-6 lg:p-8">
      <div>
        <p className="text-sm font-medium text-emerald-600">Admin / Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your company information and website preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company information */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <Building2 size={22} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Company Information</h2>
              <p className="text-sm text-slate-500">Your business identity and details.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Company Name" value={form.companyName}
              onChange={v => updateField("companyName", v)} className={inputClass} />

            <Field label="Tagline" value={form.tagline}
              onChange={v => updateField("tagline", v)} className={inputClass} />

            <Field label="Website URL" value={form.website}
              onChange={v => updateField("website", v)} className={inputClass} />
          </div>
        </section>

        {/* Contact details */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Phone size={22} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Contact Information</h2>
              <p className="text-sm text-slate-500">How customers can reach your business.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Email Address" type="email" value={form.email}
              onChange={v => updateField("email", v)} className={inputClass} />

            <Field label="Phone Number" value={form.phone}
              onChange={v => updateField("phone", v)} className={inputClass} />

            <div className="md:col-span-2">
              <Field label="Business Address" value={form.address}
                onChange={v => updateField("address", v)} className={inputClass} />
            </div>
          </div>
        </section>

        {/* Social media */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Globe size={22} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Social Media Links</h2>
              <p className="text-sm text-slate-500">Connect your social media profiles.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Facebook URL" value={form.facebook}
              onChange={v => updateField("facebook", v)} className={inputClass} />

            <Field label="Instagram URL" value={form.instagram}
              onChange={v => updateField("instagram", v)} className={inputClass} />

            <Field label="LinkedIn URL" value={form.linkedin}
              onChange={v => updateField("linkedin", v)} className={inputClass} />
          </div>
        </section>

        {/* Website preferences */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
              <Settings size={22} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Website Preferences</h2>
              <p className="text-sm text-slate-500">Control which features appear on your website.</p>
            </div>
          </div>

          <div className="space-y-5">
            <Toggle label="Maintenance Mode"
              description="Enable this when your website needs maintenance."
              checked={form.maintenanceMode}
              onChange={v => updateField("maintenanceMode", v)} />

            <Toggle label="Show Testimonials"
              description="Display approved testimonials on your website."
              checked={form.showTestimonials}
              onChange={v => updateField("showTestimonials", v)} />

            <Toggle label="Show Blog"
              description="Display the blog section on your website."
              checked={form.showBlog}
              onChange={v => updateField("showBlog", v)} />
          </div>
        </section>

        {/* Save */}
        <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row sm:items-center">
          {saved && (
            <p className="text-sm font-medium text-emerald-600">
              Demo settings updated in this page.
            </p>
          )}

          <button type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
            <Save size={18} /> Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label, value, onChange, className, type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input type={type} value={value} onChange={e => onChange(e.target.value)}
        className={className} />
    </label>
  );
}

function Toggle({
  label, description, checked, onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-slate-800">{label}</p>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      <button type="button" role="switch" aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-emerald-600" : "bg-slate-300"
        }`}>
        <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
          checked ? "left-6" : "left-1"
        }`} />
      </button>
    </div>
  );
}

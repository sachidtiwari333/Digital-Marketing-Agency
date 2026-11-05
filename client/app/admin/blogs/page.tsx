
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Plus, Search, Pencil, Trash2, Eye, FileText,
  CheckCircle, Clock, CalendarDays, Image as ImageIcon,
} from "lucide-react";

type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  status: "Published" | "Draft";
  image: string;
};

const initialPosts: Post[] = [
  {
    id: "1",
    title: "How Digital Transformation Helps Businesses Grow",
    category: "Technology",
    author: "Admin",
    date: "Oct 20, 2026",
    status: "Published",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    id: "2",
    title: "Top Web Design Trends to Watch",
    category: "Web Design",
    author: "Admin",
    date: "Oct 18, 2026",
    status: "Published",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: "3",
    title: "Why Every Business Needs a Strong Online Presence",
    category: "Business",
    author: "John Smith",
    date: "Oct 15, 2026",
    status: "Draft",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const published = posts.filter(p => p.status === "Published").length;
  const drafts = posts.filter(p => p.status === "Draft").length;

  const filteredPosts = useMemo(() => posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase());

    return matchesSearch && (status === "All" || post.status === status);
  }), [posts, search, status]);

  const deletePost = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setPosts(prev => prev.filter(post => post.id !== id));
    }
  };

  const togglePublish = (id: string) => {
    setPosts(prev => prev.map(post =>
      post.id === id
        ? { ...post, status: post.status === "Published" ? "Draft" : "Published" }
        : post
    ));
  };

  return (
    <div className="w-full min-w-0 space-y-8 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600">Management / Blog</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Blog Management</h1>
          <p className="mt-1 text-sm text-slate-500">Create and manage your website articles.</p>
        </div>

        <Link href="/admin/blog/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
          <Plus size={18} /> Create New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat title="Total Posts" value={posts.length} icon={FileText} />
        <Stat title="Published" value={published} icon={CheckCircle} />
        <Stat title="Drafts" value={drafts} icon={Clock} />
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search blog posts..."
            className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-500" />
        </div>

        <select value={status} onChange={e => setStatus(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
          <option value="All">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">All Blog Posts</h2>
          <span className="text-sm text-slate-500">{filteredPosts.length} posts found</span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center text-slate-500">
            <FileText className="mx-auto mb-3 text-slate-300" size={38} />
            No blog posts found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map(post => (
              <article key={post.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-48 bg-slate-100">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                  <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
                    post.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {post.status}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{post.category}</p>
                  <h3 className="mt-2 line-clamp-2 min-h-14 font-bold text-slate-900">{post.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1"><CalendarDays size={13} />{post.date}</span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                    <Link href={`/admin/blog/${post.id}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-200">
                      <Eye size={16} /> View
                    </Link>
                    <Link href={`/admin/blog/${post.id}/edit`}
                      className="rounded-lg bg-blue-50 p-2.5 text-blue-600 hover:bg-blue-100">
                      <Pencil size={16} />
                    </Link>
                    <button onClick={() => togglePublish(post.id)}
                      title={post.status === "Published" ? "Move to draft" : "Publish"}
                      className="rounded-lg bg-emerald-50 p-2.5 text-emerald-700 hover:bg-emerald-100">
                      {post.status === "Published" ? <Clock size={16} /> : <CheckCircle size={16} />}
                    </button>
                    <button onClick={() => deletePost(post.id)}
                      className="rounded-lg bg-red-50 p-2.5 text-red-600 hover:bg-red-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ title, value, icon: Icon }: {
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

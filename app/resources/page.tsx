"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Resource = {
  id: number;
  subject: string;
  semester: string;
  resource_type: string;
  uploaded_by: string;
  file_url: string;
};

export default function ResourcesPage() {

  const [resources, setResources] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {

    const { data, error } = await supabase
      .from("resources")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setResources(data);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          Study Resources
        </h1>

        <p className="text-slate-300 mb-10">
          Browse uploaded academic resources.
        </p>

        <input
          type="text"
          placeholder="Search by subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-8 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {resources
            .filter((resource) =>
              resource.subject
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((resource) => (

              <div
                key={resource.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >

                <h2 className="text-2xl font-semibold mb-3">
                  {resource.subject}
                </h2>

                <p className="text-slate-300 mb-2">
                  {resource.semester}
                </p>

                <p className="text-cyan-400 mb-2">
                  {resource.resource_type}
                </p>

                <p className="text-sm text-slate-400">
                  Uploaded by {resource.uploaded_by}
                </p>

                <a
                  href={resource.file_url}
                  target="_blank"
                  className="block mt-5 bg-cyan-500 hover:bg-cyan-400 text-center text-black font-semibold py-3 rounded-xl"
                >
                  Download Resource
                </a>

              </div>

          ))}

        </div>

      </div>

    </main>
  );
}
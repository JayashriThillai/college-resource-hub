"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Resource = {
  id: number;
  subject: string;
  semester: string;
  resource_type: string;
  uploaded_by: string;
};

export default function ResourcesPage() {

  const [resources, setResources] = useState<Resource[]>([]);

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
          Resources stored in Supabase database.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {resources.map((resource) => (

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

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
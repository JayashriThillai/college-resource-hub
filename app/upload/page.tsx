"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadPage() {

  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  async function handleUpload(e: React.FormEvent) {

    e.preventDefault();
    alert("Upload started");

  if (!file) {
  alert("Please select a file");
  return;
}

    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("resources")
      .upload(fileName, file);

    if (uploadError) {
      console.log(uploadError);
      return;
    }

    const { data } = supabase.storage
      .from("resources")
      .getPublicUrl(fileName);

    const fileUrl = data.publicUrl;

    const { error: dbError } = await supabase
      .from("resources")
      .insert([
        {
          department,
          semester,
          subject,
          resource_type: resourceType,
          file_url: fileUrl,
          uploaded_by: "Shri",
        },
      ]);

    if (dbError) {
      console.log(dbError);
    } else {
      alert("Resource uploaded successfully!");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          Upload Study Resource
        </h1>

        <p className="text-slate-300 mb-10">
          Share notes, previous year papers, lab manuals,
          and useful academic resources with other students.
        </p>
        {!user && (

  <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-xl mb-6">
    Please login first to upload resources.
  </div>

)}
        <form
          onSubmit={handleUpload}
          className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800"
        >

          <div>
            <label className="block mb-2">
              Department
            </label>

            <select
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            >
              <option value="">Select Department</option>
              <option>ECE</option>
              <option>CSE</option>
              <option>IT</option>
              <option>EEE</option>
              <option>CIVIL</option>
              <option>BME</option>
              <option>CHEMICAL</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Semester
            </label>

            <select
              onChange={(e) => setSemester(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            >
              <option value="">Select Semester</option>
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
              <option>Semester 5</option>
              <option>Semester 6</option>
              <option>Semester 7</option>
              <option>Semester 8</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter subject name"
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2">
              Resource Type
            </label>

            <select
              onChange={(e) => setResourceType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            >
              <option value="">Select Resource Type</option>
              <option>Notes</option>
              <option>Previous Year Paper</option>
              <option>Lab Manual</option>
              <option>PPT</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Upload File
            </label>

            <input
              type="file"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl"
          >
            Upload Resource
          </button>

        </form>

      </div>

    </main>
  );
}
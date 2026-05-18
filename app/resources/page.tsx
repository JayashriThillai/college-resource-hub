const resources = [
  {
    subject: "Signals and Systems",
    semester: "Semester 3",
    type: "Notes",
    uploadedBy: "Shri",
  },
  {
    subject: "Digital Signal Processing",
    semester: "Semester 4",
    type: "Previous Year Paper",
    uploadedBy: "Arun",
  },
  {
    subject: "Network Theory",
    semester: "Semester 2",
    type: "Lab Manual",
    uploadedBy: "Priya",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          Study Resources
        </h1>

        <p className="text-slate-300 mb-10">
          Browse notes, previous year papers, lab manuals,
          and academic materials uploaded by students.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {resources.map((resource, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >

              <h2 className="text-2xl font-semibold mb-3">
                {resource.subject}
              </h2>

              <p className="text-slate-300 mb-2">
                {resource.semester}
              </p>

              <p className="text-cyan-400 mb-2">
                {resource.type}
              </p>

              <p className="text-sm text-slate-400 mb-6">
                Uploaded by {resource.uploadedBy}
              </p>

              <button
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl"
              >
                Download
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
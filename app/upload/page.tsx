export default function UploadPage() {
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

        <form className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800">

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Department
            </label>

            <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">

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
            <label className="block mb-2 text-sm text-slate-300">
              Semester
            </label>

            <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">

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
            <label className="block mb-2 text-sm text-slate-300">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter subject name"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Resource Type
            </label>

            <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3">

              <option>Notes</option>
              <option>Previous Year Paper</option>
              <option>Lab Manual</option>
              <option>PPT</option>

            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Upload File
            </label>

            <input
              type="file"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
            />
          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl"
          >
            Upload Resource
          </button>

        </form>

      </div>

    </main>
  );
}
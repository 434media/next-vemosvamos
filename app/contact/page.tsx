"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white p-8 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#9e1b1b] text-center mb-6">
        Connect With Us
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
        We’d love to hear from you. Whether you have questions, ideas, or just
        want to stay updated, reach out below and join our growing community.
      </p>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        <div className="h-48 bg-gray-200 rounded-xl shadow-md flex items-center justify-center text-gray-500 text-lg font-medium">
          Image 1
        </div>
        <div className="h-48 bg-gray-200 rounded-xl shadow-md flex items-center justify-center text-gray-500 text-lg font-medium">
          Image 2
        </div>
        <div className="h-48 bg-gray-200 rounded-xl shadow-md flex items-center justify-center text-gray-500 text-lg font-medium">
          Image 3
        </div>
      </div>

      {/* Contact form */}
      <form className="bg-gray-50 w-full max-w-lg p-6 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e1b1b]"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e1b1b]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#9e1b1b] text-white font-medium py-3 rounded-lg hover:bg-red-700 transition"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}

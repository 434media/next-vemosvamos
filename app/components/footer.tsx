"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#9e1b1b] text-white py-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-12 text-center md:text-left">
        
        {/* Left side - Company Name */}
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} 434 Media. All rights reserved.
        </p>

        {/* Right side - Instagram link */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a 
            href="https://www.instagram.com/vemos.vamos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" 
              viewBox="0 0 24 24" 
              className="w-6 h-6"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
            </svg>
          </a>
          <span className="text-sm">Follow us on Instagram</span>
        </div>
      </div>
    </footer>
  );
}

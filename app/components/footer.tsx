"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#9e1b1b] text-[#eeebe3] py-6 z-50 relative">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-12 text-center md:text-left">
        
        {/* Left side - Company Name */}
        <p className="text-sm font-medium text-[#eeebe3]">
          © {new Date().getFullYear()} 434 Media. All rights reserved.
        </p>

        {/* Right side - Social links */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/vemos.vamos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#f5eede] transition text-[#eeebe3]"
            aria-label="Instagram"
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

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/434media" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#f5eede] transition text-[#eeebe3]"
            aria-label="LinkedIn"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              className="w-6 h-6"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v13h-4v-13zM8.5 8.5h3.8v1.8h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.3 2.4 4.3 5.5v6.5h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.9h-4v-13z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

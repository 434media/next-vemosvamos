"use client"

import Link from "next/link"

export function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      url: "https://www.instagram.com/vemos.vamos/",
      color: "#E1306C",
    },
    {
      name: "Facebook",
      icon: "ri-facebook-fill",
      url: "https://www.facebook.com/vemosvamos",
      color: "#1877F2",
    },
    {
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      url: "https://www.linkedin.com/company/vemosvamos/",
      color: "#0077B5",
    },
  ]

  return (
    <footer
      className="relative z-10 w-full py-4 backdrop-blur-sm"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          {/* Copyright Section */}
          <p className="text-center md:text-right text-white/80 text-xs md:text-sm font-normal">
            © {new Date().getFullYear()}{" "}
            <Link
              href="https://434media.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#ca0013] transition-colors hover:underline"
            >
              434 MEDIA
            </Link>
            {" | "}
            <Link
              href="https://digitalcanvas.community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#ca0013] transition-colors hover:underline"
            >
              Digital Canvas
            </Link>
          </p>
          {/* Social Links Section */}
          <div className="flex justify-center md:justify-start items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ca0013] transition-colors"
                aria-label={social.name}
              >
                <i className={`${social.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

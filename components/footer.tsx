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
      className="relative z-10 w-full py-8 backdrop-blur-sm"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, #ca001360 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, #ca001340 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #ca001320 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, #ca001310 0%, transparent 50%)
        `,
        backgroundColor: "#1A1A1A",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Copyright Section */}
          <p className="text-center md:text-right text-white/80 text-sm md:text-base font-medium">
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
          <div className="flex justify-center md:justify-start items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ca0013] transition-colors"
                aria-label={social.name}
              >
                <i className={`${social.icon} text-3xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

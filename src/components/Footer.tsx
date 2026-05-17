"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-xs text-text-muted">
            &copy; {currentYear} Rikuto Sakuma. All rights reserved.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 font-body text-xs tracking-wider text-text-muted hover:text-accent transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

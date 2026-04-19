import styles from "./SocialLinks.module.css";

const icons = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554v-9.646h3.554v1.365c.427-.659 1.189-1.595 2.894-1.595 2.108 0 3.688 1.377 3.688 4.337v5.539zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.956.77-1.708 1.963-1.708 1.193 0 1.915.752 1.94 1.708 0 .949-.747 1.707-1.988 1.707zm1.582 11.019H3.656V9.806h3.263v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 4.255 2.718 7.873 6.497 9.194.475.088.65-.206.65-.458 0-.226-.008-.825-.013-1.62-2.644.575-3.2-1.274-3.2-1.274-.432-1.097-1.055-1.389-1.055-1.389-.862-.589.065-.577.065-.577.952.067 1.453.978 1.453.978.846 1.45 2.22 1.031 2.76.788.085-.613.332-1.032.604-1.269-2.11-.24-4.33-1.055-4.33-4.695 0-1.037.37-1.885.977-2.55-.098-.24-.423-1.208.093-2.52 0 0 .797-.255 2.612.974A9.11 9.11 0 0112 6.844c.81.004 1.627.11 2.39.322 1.813-1.23 2.608-.974 2.608-.974.518 1.312.193 2.28.095 2.52.61.665.975 1.513.975 2.55 0 3.649-2.224 4.452-4.343 4.687.341.294.645.873.645 1.76 0 1.27-.012 2.293-.012 2.604 0 .255.171.551.656.457C21.285 19.87 24 16.254 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m3.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3m-7 1a4 4 0 110 8 4 4 0 010-8m0 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
};

const links = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/surya-polupalli-5b794025a/",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Surya2452-2",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/_one.and.only_surya_/",
  },
];

export default function SocialLinks({ large = false }) {
  return (
    <div className={`${styles.links} ${large ? styles.large : ""}`} aria-label="Social links">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
        >
          {icons[link.key]}
        </a>
      ))}
    </div>
  );
}

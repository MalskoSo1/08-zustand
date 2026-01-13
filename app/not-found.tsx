import css from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found | Notes App",
  description: "The page you are looking for does not exist or has been moved.",
  openGraph: {
    title: "Page Not Found | Notes App",
    description: "This page could not be found in the Notes App.",
    url: "https://07-routing-nextjs-sigma-nine.vercel.app/",
    siteName: "Notes App",
    type: "website",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notes App – Page Not Found",
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;

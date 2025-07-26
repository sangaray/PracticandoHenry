import Link from "next/link";

// Export the default function NotFound
export default function NotFound() {
  // Return a div containing an h2, p, and Link component
  return (
    <div>
      <h2>No la Encontré</h2>
      <p>No pude encontrar la página que me pides</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

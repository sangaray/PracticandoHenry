import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav>
        <Link href="/dashboard">
          <p>Go to dashboard</p>
        </Link>
        <Link href="/dashboard/orders">
          <p>Go to orders</p>
        </Link>
      </nav>
      {children}
    </section>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-slate-900 px-5 py-3 font-medium text-white">Go to calculator</Link>
    </main>
  );
}

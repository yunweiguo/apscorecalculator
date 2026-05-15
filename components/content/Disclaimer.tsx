import site from "@/content/site.json";

export function Disclaimer() {
  return <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">{site.disclaimer}</p>;
}

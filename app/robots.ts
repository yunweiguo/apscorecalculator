import type { MetadataRoute } from "next";
import site from "@/content/site.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/search", "/draft/", "/admin/", "/*?*"] }],
    sitemap: `${site.baseUrl}/sitemap.xml`
  };
}

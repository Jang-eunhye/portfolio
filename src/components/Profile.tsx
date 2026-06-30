import { siteConfig } from "@/data/site";
import { ContactRow } from "./ContactRow";

export function Profile() {
  return (
    <section className="page-container pt-10 pb-9 md:pt-12">
      <h1 className="text-[1.625rem] font-semibold tracking-tight">
        {siteConfig.name}
      </h1>
      <p className="mt-1 text-[0.9375rem] text-muted">{siteConfig.role}</p>

      <div className="mt-6 space-y-2">
        <ContactRow label="phone">{siteConfig.phone}</ContactRow>
        <ContactRow label="email">{siteConfig.email}</ContactRow>
        <ContactRow label="github" href={siteConfig.github} external>
          {siteConfig.github}
        </ContactRow>
      </div>
    </section>
  );
}

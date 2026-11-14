import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TransitionLink } from "@/components/navigation/transition-link";

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-screen flex-col overflow-x-hidden bg-[#f8f9fa] text-[#000000]">
      <Header />

      <main data-route-page="not-found" tabIndex={-1} className="flex flex-grow items-center px-[5vw] pt-32 pb-40">
        <div data-notfound-card className="w-full max-w-4xl border-t border-b border-black py-16 md:py-24">
          <div className="flex flex-col gap-6">
            <span
              data-notfound-meta
              className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5c5f60]"
            >
              HTTP STATUS · 404
            </span>
            <h1
              data-notfound-title
              className="font-['Montserrat'] text-[64px] font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-[110px] lg:text-[140px]"
            >
              OUT OF<br />BOUNDS.
            </h1>
            <p
              data-notfound-desc
              className="max-w-xl font-['Inter'] text-[15px] leading-relaxed text-[#5c5f60] md:text-[16px]"
            >
              The requested resource is nonexistent, relocated, or restricted within this system index.
            </p>
            <div data-notfound-action className="pt-4">
              <TransitionLink
                href="/"
                className="group inline-flex items-center justify-center gap-3 border border-black bg-black px-8 py-4 font-['Inter'] text-[13px] font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-white hover:text-black active:scale-[0.98]"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1.5" aria-hidden="true">&larr;</span>
                <span>RETURN TO INDEX</span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

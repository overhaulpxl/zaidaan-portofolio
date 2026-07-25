export function EducationSection() {
  return (
    <div className="w-full px-[5vw] py-24 lg:py-32 flex-grow">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Chapter 06: Education */}
        <section id="education" className="mb-32 lg:mb-48">
          <div className="mb-12">
            <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] tracking-widest block mb-4">
              CHAPTER 06 / EDUCATION
            </span>
            <h2 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#000000] uppercase mb-8">
              Education
            </h2>
            <div className="w-full h-[1px] bg-[#000000]"></div>
          </div>

          <div className="flex flex-col">
            {/* Entry 1 */}
            <div className="py-8 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000]">Universitas Terbuka</h3>
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] mt-1 md:mt-0 tracking-widest uppercase">STARTING 2026</span>
              </div>
              <p className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] mb-4 tracking-widest">Incoming Undergraduate Student — Information Systems</p>
              <p className="font-['Inter'] text-[16px] text-[#4c4546] max-w-3xl leading-relaxed">
                Officially enrolled and scheduled to begin undergraduate studies in Information Systems in 2026.
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#e2e2e2]"></div>

            {/* Entry 2 */}
            <div className="py-8 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000]">Rudi Russel Sprachschule</h3>
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] mt-1 md:mt-0 tracking-widest uppercase">OCT 2023 — APR 2024</span>
              </div>
              <p className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] mb-4 tracking-widest">Intensive Deutschkurs</p>
            </div>
            <div className="w-full h-[1px] bg-[#e2e2e2]"></div>

            {/* Entry 3 */}
            <div className="py-8 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000]">SMKN 1 Pacet</h3>
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] mt-1 md:mt-0 tracking-widest uppercase">2020 — 2023</span>
              </div>
              <p className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] mb-4 tracking-widest">Computer and Network Engineering</p>
              <p className="font-['Inter'] text-[16px] text-[#4c4546] max-w-3xl leading-relaxed">
                GPA 3.80/4.00
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#e2e2e2]"></div>
          </div>
        </section>

        {/* Chapter 07: Credentials & Involvement */}
        <section id="credentials">
          <div className="mb-12">
            <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] tracking-widest block mb-4">
              CHAPTER 07 / CREDENTIALS & INVOLVEMENT
            </span>
            <h2 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#000000] uppercase mb-8">
              Credentials & Involvement
            </h2>
            <div className="w-full h-[1px] bg-[#000000]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Certifications */}
            <div className="order-1">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] mb-8 border-b border-[#e2e2e2] pb-4 uppercase tracking-wide">
                Certifications
              </h3>
              <ul className="flex flex-col">
                <li className="flex items-baseline gap-4 py-6 border-b border-[#e2e2e2] group hover:bg-[#f3f3f4] transition-colors duration-300">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] opacity-50 w-8">01</span>
                  <div>
                    <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#000000] block mb-1 tracking-widest">Goethe-Zertifikat B1</span>
                    <span className="font-['Inter'] text-[14px] text-[#5c5f60] block">Jul 2025</span>
                  </div>
                </li>
                
                <li className="flex items-baseline gap-4 py-6 border-b border-[#e2e2e2] group hover:bg-[#f3f3f4] transition-colors duration-300">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] opacity-50 w-8">02</span>
                  <div>
                    <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#000000] block mb-1 tracking-widest">Computer Network Development with MikroTik</span>
                    <span className="font-['Inter'] text-[14px] text-[#5c5f60] block">Issued 9 Sep 2023 • Duration 14h 56m • Training Activity Score 88</span>
                  </div>
                </li>
                
                <li className="flex items-baseline gap-4 py-6 border-b border-[#e2e2e2] group hover:bg-[#f3f3f4] transition-colors duration-300">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] opacity-50 w-8">03</span>
                  <div>
                    <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#000000] block mb-1 tracking-widest">TOEIC</span>
                    <span className="font-['Inter'] text-[14px] text-[#5c5f60] block">Aug 2022</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Organizations */}
            <div className="order-2 mt-8 md:mt-0">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] mb-8 border-b border-[#e2e2e2] pb-4 uppercase tracking-wide">
                Organizations
              </h3>
              <ul className="flex flex-col">
                <li className="flex items-baseline gap-4 py-6 border-b border-[#e2e2e2] group hover:bg-[#f3f3f4] transition-colors duration-300">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] opacity-50 w-8">01</span>
                  <div>
                    <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#000000] block mb-1 tracking-widest">E-Sport SMKN 1 Pacet</span>
                    <span className="font-['Inter'] text-[14px] text-[#5c5f60] block">Chairman</span>
                  </div>
                </li>
                
                <li className="flex items-baseline gap-4 py-6 border-b border-[#e2e2e2] group hover:bg-[#f3f3f4] transition-colors duration-300">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] opacity-50 w-8">02</span>
                  <div>
                    <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#000000] block mb-1 tracking-widest">Ripple Studio</span>
                    <span className="font-['Inter'] text-[14px] text-[#5c5f60] block">Creative Team / Editor</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
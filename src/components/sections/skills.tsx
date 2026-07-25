export function SkillsSection() {
  return (
    <section id="skills" className="w-full px-[5vw] py-24 lg:py-32 flex flex-col">
      <div className="w-full flex flex-col">
        {/* Header Section */}
        <div className="border-b border-[#000000] pb-8 mb-16">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] block mb-4 uppercase tracking-widest">
            CHAPTER 04 / SKILLS
          </span>
          <h2 className="font-['Montserrat'] text-[48px] lg:text-[80px] font-black text-[#000000] uppercase leading-[1] tracking-[-0.02em]">
            SKILLS
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-[2rem] items-start w-full">
          
          {/* Group 1: CORE OPERATIONS */}
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#000000] pb-4">
              <h3 className="font-['Montserrat'] text-[16px] font-bold text-[#000000] uppercase tracking-wider">
                01 CORE OPERATIONS
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Community Management</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Digital Transactions</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Operations & Workflow</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Network Administration</li>
            </ul>
          </div>

          {/* Group 2: TECHNICAL */}
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#000000] pb-4">
              <h3 className="font-['Montserrat'] text-[16px] font-bold text-[#000000] uppercase tracking-wider">
                02 TECHNICAL
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Python & Node.js</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Next.js & React</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Hardware & Networking</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Database Management</li>
            </ul>
          </div>

          {/* Group 3: AI & WORKFLOW */}
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#000000] pb-4">
              <h3 className="font-['Montserrat'] text-[16px] font-bold text-[#000000] uppercase tracking-wider">
                03 AI & WORKFLOW
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">LLM Integration</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Process Automation</li>
              <li className="font-['Inter'] text-[16px] text-[#000000] border-b border-[#dadada] pb-2">Discord Bot Architecture</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
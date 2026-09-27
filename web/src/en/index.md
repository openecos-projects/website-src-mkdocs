---
hide:
  - navigation
  - toc
  - footer
---

<div class="text-4xl font-bold text-center mb-4">ECOS Open Silicon</div>
<div class="text-xl font-medium text-center">(Build an) Ecosystem for Collaborative and Open Silicon</div>
<div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8 mb-13!">
    <div class="flex flex-col md:flex-row sm:flex-col gap-4">
        <div class="basis-2/3">
            <div class="flex flex-col gap-4">
                <div class="overflow-hidden rounded-lg bg-surface-0 outline -outline-offset-1 outline-white/10 border border-gray-300">
                    <div class="px-4 py-5 sm:p-6 markdown">
                        <div class="text-base font-bold" id="introduction">Introduction</div>
                        <ul>
                            <li><span class="font-bold">Date:</span> July, 2021</li>
                            <li><span class="font-bold">Members:</span> <a class="font-bold hover:underline" style="color: var(--md-typeset-a-color);" href="https://acs.ict.ac.cn/english" target="_blank" rel="noopener noreferrer">Frontier System Laboratory, Center for Advanced Computer Systems, Institute of Computing Technology, Chinese Academy of Sciences</a>, <a class="font-bold hover:underline" style="color: var(--md-typeset-a-color);" href="https://www.bosc.ac.cn" target="_blank" rel="noopener noreferrer">Beijing Institute of Open Source Chip</a>, etc.</li>
                            <li><span class="font-bold">Partners:</span> <a class="font-bold hover:underline" style="color: var(--md-typeset-a-color);" href="https://www.pcl.ac.cn" target="_blank" rel="noopener noreferrer">PengCheng Laboratory</a>, <a class="font-bold hover:underline" style="color: var(--md-typeset-a-color);" href="https://suat-sz.edu.cn/en" target="_blank" rel="noopener noreferrer">Shenzhen University of Advanced Technology</a>, <a class="font-bold hover:underline" style="color: var(--md-typeset-a-color);" href="https://www.hkust-gz.edu.cn" target="_blank" rel="noopener noreferrer">Hong Kong University of Science and Technology (Guangzhou)</a>, etc.</li>
                            <li><span class="font-bold">Slogan:</span> (Build an) <span class="font-bold">E</span>cosystem for <span class="font-bold">C</span>ollaborative and <span class="font-bold">O</span>pen <span class="font-bold">S</span>ilicon</li>
                            <li><span class="font-bold">Goal:</span> We build open-source chip design solutions and their supporting technology ecosystem. By using <span class="font-bold">"open source"</span> to innovate chip design methods, we aim to <span class="font-bold">lower the threshold of chip design with open source and empower thousands of industries</span>.</li>
                        </ul>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-surface-0 outline -outline-offset-1 outline-white/10 border border-gray-300">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="text-base font-bold" id="project-list">Project List</div>
                        <div class="mt-4">
                            <input class="peer/eda sr-only" type="radio" name="ecos-project-tab" id="ecos-tab-eda" checked aria-controls="ecos-panel-eda">
                            <input class="peer/chip sr-only" type="radio" name="ecos-project-tab" id="ecos-tab-chip" disabled>
                            <input class="peer/osoc sr-only" type="radio" name="ecos-project-tab" id="ecos-tab-osoc" aria-controls="ecos-panel-osoc">
                            <input class="peer/system sr-only" type="radio" name="ecos-project-tab" id="ecos-tab-system" aria-controls="ecos-panel-system">
                            <div class="flex flex-wrap gap-2 border-b border-gray-300 pb-3" role="tablist" aria-label="ECOS project categories">
                                <label for="ecos-tab-eda" role="tab" class="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-bold transition hover:border-orange-500 peer-checked/eda:border-orange-500 peer-checked/eda:bg-orange-500 peer-checked/eda:text-white">EDA</label>
                                <label for="ecos-tab-chip" role="tab" aria-disabled="true" tabindex="-1" title="No projects available" class="cursor-not-allowed rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-bold text-gray-400 opacity-70">Chip</label>
                                <label for="ecos-tab-osoc" role="tab" class="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-bold transition hover:border-orange-500 peer-checked/osoc:border-orange-500 peer-checked/osoc:bg-orange-500 peer-checked/osoc:text-white">One Student One Chip</label>
                                <label for="ecos-tab-system" role="tab" class="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-bold transition hover:border-orange-500 peer-checked/system:border-orange-500 peer-checked/system:bg-orange-500 peer-checked/system:text-white">System Solution</label>
                            </div>
                            <div id="ecos-panel-eda" role="tabpanel" aria-labelledby="ecos-tab-eda" class="hidden pt-4 peer-checked/eda:!block">
                                <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                    <div class="flex flex-col lg:flex-row">
                                        <div class="p-5 sm:p-6 lg:basis-3/5">
                                            <div class="text-lg font-bold">ECOS ChipCompiler (ECC)</div>
                                            <p class="mt-3 text-sm leading-6">An open-source chip design automation solution that brings synthesis, physical design, timing, verification, and layout viewing into one RTL-to-GDS flow.</p>
                                            <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> chip designers who need a reproducible command-line flow or a Python API for automation.</p>
                                            <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                                                <div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Integrated toolchain</span><br><span class="opacity-70">Yosys, ECC-DreamPlace, ECC-Tools, and KLayout</span></div>
                                                <div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Scriptable workflow</span><br><span class="opacity-70">CLI, Python API, reports, and signoff export</span></div>
                                            </div>
                                            <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://github.com/openecos-projects/ecc" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                        </div>
                                        <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                            <div class="text-center text-sm font-bold text-orange-400">Design Flow</div>
                                            <div class="mt-4 space-y-2 whitespace-nowrap text-xs">
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>RTL Source</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>Synthesis</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>Place + Route</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>Signoff</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">05</span><span>GDSII Layout</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="ecos-panel-osoc" role="tabpanel" aria-labelledby="ecos-tab-osoc" class="hidden pt-4 peer-checked/osoc:!block">
                                <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                    <div class="flex flex-col lg:flex-row">
                                        <div class="p-5 sm:p-6 lg:basis-3/5">
                                            <div class="text-lg font-bold">One Student One Chip</div>
                                            <p class="mt-3 text-sm leading-6">A large-scale, open, public-welfare chip and system talent-training initiative in which students learn to design, tape out, and bring up their own processor chips.</p>
                                            <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> students and self-directed learners who want hands-on, full-stack processor design experience.</p>
                                            <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                                                <div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Learn by building</span><br><span class="opacity-70">Processor RTL, SoC integration, and system software</span></div>
                                                <div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Reach real silicon</span><br><span class="opacity-70">Verification, tapeout, and chip bring-up</span></div>
                                            </div>
                                            <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://ysyx.org/en" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                        </div>
                                        <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                            <div class="text-center text-sm font-bold text-orange-400">Learning Path</div>
                                            <div class="mt-4 space-y-2 whitespace-nowrap text-xs">
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>Fundamentals</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>Processor RTL</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>SoC Integration</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>Tapeout</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div>
                                                <div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">05</span><span>Bring-up</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="ecos-panel-system" role="tabpanel" aria-labelledby="ecos-tab-system" class="hidden pt-4 peer-checked/system:!block">
                                <div class="space-y-4">
                                    <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                        <div class="flex flex-col lg:flex-row">
                                            <div class="p-5 sm:p-6 lg:basis-3/5">
                                                <div class="text-lg font-bold">retroSoC</div>
                                                <p class="mt-3 text-sm leading-6">An open-source RISC-V SoC platform spanning SystemVerilog RTL, firmware, reproducible verification, and release artifacts.</p>
                                                <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> developers building configurable RISC-V systems across simulation, FPGA, and ASIC targets.</p>
                                                <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Complete platform</span><br><span class="opacity-70">RTL, firmware, HAL, applications, and release tooling</span></div><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Reproducible validation</span><br><span class="opacity-70">Simulation, synthesis, timing, and structured artifacts</span></div></div>
                                                <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://github.com/retroSoC/retroSoC" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                            </div>
                                            <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                                <div class="text-center text-sm font-bold text-orange-400">Platform Stack</div>
                                                <div class="mt-4 space-y-2 whitespace-nowrap text-xs"><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>Applications</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>Firmware</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>RISC-V SoC</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>Peripherals</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">05</span><span>Sim + FPGA</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">06</span><span>ASIC Release</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                        <div class="flex flex-col lg:flex-row">
                                            <div class="p-5 sm:p-6 lg:basis-3/5">
                                                <div class="text-lg font-bold">ICsprout55 PDK</div>
                                                <p class="mt-3 text-sm leading-6">A 55nm CMOS open-source process design kit with design rules, device models, standard cells, and physical-design collateral.</p>
                                                <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> universities, researchers, and open-source silicon teams exploring physical design and test tapeouts.</p>
                                                <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Physical design data</span><br><span class="opacity-70">Technology files, cells, and implementation collateral</span></div><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Verification path</span><br><span class="opacity-70">Design rules and physical verification support</span></div></div>
                                                <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://github.com/openecos-projects/icsprout55-pdk" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                            </div>
                                            <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                                <div class="text-center text-sm font-bold text-orange-400">PDK Path</div>
                                                <div class="mt-4 space-y-2 whitespace-nowrap text-xs"><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>Technology Files</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>Cell Libraries</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>Place + Route</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>Physical Verif</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">05</span><span>55nm Test Tapeout</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                        <div class="flex flex-col lg:flex-row">
                                            <div class="p-5 sm:p-6 lg:basis-3/5">
                                                <div class="text-lg font-bold">ECOS Embedded</div>
                                                <p class="mt-3 text-sm leading-6">An open knowledge platform for chip manuals, board references, SDKs, development tools, and application examples built around ECOS chips.</p>
                                                <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> embedded developers turning open-source silicon into working boards, prototypes, and applications.</p>
                                                <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Developer resources</span><br><span class="opacity-70">SDKs, tools, manuals, and board documentation</span></div><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Application examples</span><br><span class="opacity-70">Reference projects for real hardware use cases</span></div></div>
                                                <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://embedded.openecos.com" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                            </div>
                                            <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                                <div class="text-center text-sm font-bold text-orange-400">Build Loop</div>
                                                <div class="mt-4 space-y-2 whitespace-nowrap text-xs"><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>Chip + Board</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>SDK + Drivers</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>Tools + Examples</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>Application</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                        <div class="flex flex-col lg:flex-row">
                                            <div class="p-5 sm:p-6 lg:basis-3/5">
                                                <div class="text-lg font-bold">ECOS Studio</div>
                                                <p class="mt-3 text-sm leading-6">A one-stop RTL-to-chip design solution that integrates open-source IP, the ECC toolchain, and accessible PDKs in a unified desktop environment.</p>
                                                <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> researchers, engineers, and students who want a visual workspace and an FPGA-like ASIC design experience.</p>
                                                <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Unified workspace</span><br><span class="opacity-70">Manage projects and run RTL-to-GDS from the GUI</span></div><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Open foundation</span><br><span class="opacity-70">Composable IP, ECC, and ICsprout55 integration</span></div></div>
                                                <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://github.com/openecos-projects/ecos-studio" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                            </div>
                                            <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                                <div class="text-center text-sm font-bold text-orange-400">Integrated Stack</div>
                                                <div class="mt-4 space-y-2 whitespace-nowrap text-xs"><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>GUI Workspace</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>IP + SoC</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>ECC + ICsprout55</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>RTL-to-Chip Flow</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden rounded-lg border border-gray-300 bg-surface-0">
                                        <div class="flex flex-col lg:flex-row">
                                            <div class="p-5 sm:p-6 lg:basis-3/5">
                                                <div class="text-lg font-bold">ECOS Factory</div>
                                                <p class="mt-3 text-sm leading-6">A cloud platform for configurable IP, MPW aggregation, and tapeout services.</p>
                                                <p class="mt-4 text-sm leading-6"><span class="font-bold">Designed for:</span> teams looking for a guided path from reusable silicon components to a submitted tapeout project.</p>
                                                <div class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Configurable resources</span><br><span class="opacity-70">Discover and configure reusable chip IP</span></div><div class="border-l-2 border-orange-500 pl-3"><span class="font-bold">Tapeout services</span><br><span class="opacity-70">Project submission and MPW aggregation</span></div></div>
                                                <a class="mt-5 inline-flex items-center gap-2 rounded-md border border-orange-500 px-3 py-2 text-sm font-bold text-orange-500 hover:bg-orange-500 hover:text-white" href="https://factory.openecos.com" target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">&#8594;</span></a>
                                            </div>
                                            <div class="border-t border-gray-700 bg-gray-950 p-5 font-mono text-gray-100 sm:p-6 lg:w-2/5 lg:flex-none lg:border-l lg:border-t-0">
                                                <div class="text-center text-sm font-bold text-orange-400">Service Flow</div>
                                                <div class="mt-4 space-y-2 whitespace-nowrap text-xs"><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">01</span><span>Configure IP</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">02</span><span>Submit Design</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-gray-700 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">03</span><span>MPW Aggregation</span></div><div class="flex justify-center leading-none text-orange-400">&darr;</div><div class="flex min-h-9 items-center gap-3 border border-orange-500 bg-gray-900 px-3 py-2"><span class="w-6 shrink-0 text-orange-400">04</span><span>Tapeout</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="basis-1/3">
        <div class="flex flex-col gap-4">
            <div class="overflow-hidden rounded-lg bg-surface-0 outline -outline-offset-1 outline-white/10 border border-gray-300">
                <div class="px-4 py-5 sm:p-6">
                    <div class="text-base font-bold">Socials</div>
                    <div class="flex flex-row gap-1">
                        <a class="w-8 " href="https://openecos.com/en" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Website</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: var(--md-typeset-color);" /></svg>
                        </a>
                        <a class="w-8" href="https://github.com/openecos-projects" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" style="fill: var(--md-typeset-color);" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-surface-0 outline -outline-offset-1 outline-white/10 border border-gray-300">
                <div class="px-4 py-5 sm:p-6">
                    <div class="text-base font-bold flex items-center gap-1">News
                        <span class="inline-flex">
                            <svg viewBox="0 0 6 6" aria-hidden="true" class="size-1.5 fill-red-500" style="fill: var(--md-typeset-a-color);">
                                <circle r="3" cx="3" cy="3" />
                            </svg>
                        </span>
                    </div>
                    {% include-markdown "news.html" %}
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="overflow-hidden rounded-lg bg-surface-0 outline -outline-offset-1 outline-white/10 border border-gray-300">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="text-base font-bold">Community & Resources</div>
                        <ul>
                            <li><a href="https://wiki.f-si.org/images/2/2e/20250701-OSOC-0703.pptx.pdf" target="_blank">[FSiC2025 PPT] "One Student One Chip" initiative: Learn to build RISC-V chips from scratch with MOOC</a></li>
                            <li><a href="https://wiki.f-si.org/images/a/ad/FSiC2025_Making_Open_Silicon_Design_Everywhere_final_version_present.pdf" target="_blank">[FSiC2025 PPT] Making Open Silicon Design Everywhere: Using Cloud-based Open Agile EDA Platform</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

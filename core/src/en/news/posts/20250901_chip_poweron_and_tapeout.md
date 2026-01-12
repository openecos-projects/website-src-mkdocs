---
authors:
  - myyerrol
  - puckbee
categories:
  - Open Source EDA
  - Open Source IP
  - Chip PowerOn
  - TapeOut Application
date: 2025-09-01
desc: "Open Source EDA + Open Source IP + Domestic Process: Chip Successfully Taped Out and Powered On! Now Open for Trial and TapeOut Application"
---

# Open Source EDA + Open Source IP + Domestic Process: Chip Successfully Taped Out and Powered On! Now Open for Trial and TapeOut Application
The ECOS Team completed tapeout and poweron of an open-source SoC chip using open-source EDA + open-source IP + domestic 110nm process. This is a significant milestone for both "One Student One Chip" and ECOS Team! <!-- more -->

## 01 Summary and Overview
Behind the "One Student One Chip" program, there is a technical support team — ECOS Team. ECOS is derived from the initials of EDA, Chip, OneStudentOneChip, and System, while also constituting the first four letters of "Ecosystem," symbolizing its meaning. The ECOS Team is dedicated to building open-source chip design solutions, covering open-source EDA tools, open-source IP, open-source SoCs, and providing technical support for backend design, tapeout, and PCB boards.

In fact, alongside the launch of the first "One Student One Chip" program in 2019, Researcher Yungang Bao from the Institute of Computing Technology, Chinese Academy of Sciences, began leading the team to develop a strategy using open-source EDA and open-source IP to support "One Student One Chip" tapeouts. This effort evolved into initiating the iEDA project in 2020 to develop open-source EDA physical design tools, and further expanded in 2021 to encompass open-source IP, open-source SoCs, backend design, and PCB boards. **We have been consistently striving to build a "chip design solution based on open-source EDA, open-source IP, and open-source PDKs." This approach allows students to freely learn and design their own chips without being constrained by license restrictions for essential tools and data like EDA, IP, and PDKs.**

After six years of persistent effort, we have finally reached this milestone and are ready to take the next step.

**1. We have successfully taped out using open-source EDA and open-source IP on a 110nm process.** This marks our fourth successful tapeout on the 110nm node. With each tapeout, we have continuously improved our open-source EDA tools. With this latest success, we are confident that our solution essentially possesses the capability for stable tapeouts at 110nm and is ready to be opened for testing by students. This also represents a crucial addition to the backend segment of the "full-chain processor chip design capability" that "One Student One Chip" has been developing for several years.

**2. Our open-source EDA tools now fully support the ICsprout 55nm open-source PDK.** Moving forward, our development of open-source EDA and IP will primarily focus on the ICsprout 55nm platform. It is worth mentioning that for ICsprout 55nm, we plan to release an open-source DDR3 Controller and PHY, which will elevate the capability of open-source chips to approximately the mainstream computer chip level of 2005. Note: ICsprout has open-sourced its 55nm PDK and provides a tapeout channel (hereafter referred to as "ICsprout 55nm").

**3. We will offer a batch of free tapeouts (December batch) on the 55nm process.** Interested teachers and students are welcome to apply with their own code (self-developed or based on open-source projects). Students interested in backend design can complete it themselves using our open-source EDA tools, and we will provide technical support. For details, please see the end of this article.

## 02 Specifications and Features
This chip integrates an open-source PicoRV32 processor core, which supports the RV32IMC instruction set combination and includes a built-in interrupt controller, enabling it to respond to external interrupt requests. The chip's SoC framework is based on retroSoC MINI (https://github.com/retroSoC), initially designed to support a lightweight MCU chip (approximately 50,000 instances). It integrates a bus bridge, unified clock and power domain management modules, a clock and reset module (supporting dynamic frequency adjustment), rich memory IP (such as SPI FLASH, QPI PSRAM, etc.), and interface IP (such as UART, QSPI, I2C, GPIO, etc.). It can perform functions including UART serial read/write, GPIO input detection and output control, PWM servo control, sensor data acquisition via I2C and QSPI interfaces, timer interrupts, and random number generation. It is comparable to STMicroelectronics' STM32F103 and supports embedded solutions such as smart bracelets, robotic arms, and quadcopters.

The detailed chip specifications are as follows:

- RV32IMC processor (operating frequency: 24-192 MHz)
- AMBA AXI and APB buses
- 128 KB on-chip SRAM, with support for external PSRAM up to 8 MB (operating frequency: 144 MHz)
- 1 x RCU (Reset and Clock Unit), 18 x GPIO (General-Purpose Input/Output)
- 1 x RNG (Random Number Generator), 2 x TIM (Timer), 4 x PWM (Pulse Width Modulation), 1 x I2C (Inter-Integrated Circuit), 1 x SPFS (SPI Flash Controller), 1 x UART (Universal Asynchronous Receiver/Transmitter), 1 x ARCH (Architecture Information), 2 x QSPI (Quad Serial Peripheral Interface)
- Domestic 110nm process
- Package: QFN-128

![](../../res/img/web/news/20250901/01.png)
/// caption
SoC Specification
///

![](../../res/img/web/news/20250901/02.png)
/// caption
SoC Layout
///

![](../../res/img/web/news/20250901/03.webp)
/// caption
StarrySky C1 Board
///

![](../../res/img/web/news/20250901/04.jpg)
/// caption
StarrySky C1 Board has passed the power-on test
///

![](../../res/img/web/news/20250901/05.webp)
/// caption
StarrySky C1 Board runs the donut program
///

Given the numerous inquiries from students, the ECOS Team plans to initiate the distribution, trial, and pilot sale of this chip.

**Formal "One Student One Chip" trainees can apply to receive the chip for free based on their needs (in return for providing an unboxing and power-on video or article).** Other enthusiasts can purchase it at an estimated price of around 100 RMB (proceeds will be used to support the "One Student One Chip" program and the iteration of open-source chip technology). [Interested students can join the WeChat group at the bottom].

The development board kit includes a PCB board integrated with the current chip, a USB cable for power supply and programming, common electronic development accessories (such as Dupont wires, breadboards, LEDs, switches, temperature and humidity sensors, LED screens, etc.), a software tool package (programming software, compilation toolchain, sample programs, etc.), and ECOS Team merchandise (e.g., stickers).

**Due to the limited quantity of returned chips, the ECOS Team plans to initially release 50 sets of boards.** We hope that all professionals interested in the open-source chip software/hardware ecosystem, those long-term active members of the embedded community, or individual enthusiasts passionate about designing embedded applications with open-source chips will participate in our pilot sales demand survey and the subsequent hands-on experience with this chip. Furthermore, we highly encourage everyone to record unboxing videos of the board, write detailed hands-on testing and embedded application development articles, or provide feedback on issues encountered during use and suggestions for improvement.

## 03 Team Goals and the Upcoming Tapeout Model
The ECOS Team plans to complete the tapeout of an open-source SoC chip by the end of December this year using open-source IP, open-source SoC, open-source EDA, and the ICsprout 55nm open-source PDK. Different from the previous chip, this one will utilize the ICsprout 55nm open-source PDK and can be considered a fully open-source chip. Please stay tuned for updates.

The design flow for this chip includes: open-source IP and SoC, open-source simulation and verification tools (Verilator, Icarus Verilog), an open-source RTL-to-GDS toolchain (Yosys, iEDA, KLayout), and an open-source PDK (ICsprout 55nm). If the chip ultimately powers on successfully, open-source chip technology will take a crucial step forward.

In most people's perception, the cost of developing a chip is very high, involving tool expenses (EDA tools and IP), personnel costs, manufacturing costs (tapeout and packaging), etc., often amounting to millions. However, with the gradual maturation of the open-source chip design solution (open-source EDA + open-source IP + open-source PDK), the barrier and cost for designing a chip and performing a tapeout verification are significantly decreasing.

In fact, if not pursuing extreme PPA (Performance, Power, Area), with the help of the open-source solution, the total cost (design + tools + manufacturing) for a small-to-medium scale (million-gate level) chip (such as Rocket-chip) can be reduced to between 50,000 and 100,000 RMB. This means that if a student wants to design a development board equipped with their own chip (unit price 100 RMB/board), it would only take 1,000 people willing to purchase it to fully recoup the costs. For an even smaller chip (hundred-thousand-gate level), the cost could even drop to 10,000 RMB, requiring only 100 willing buyers. For example, you could team up with other students to design a processor SoC to be used as teaching equipment for next year's operating systems lab course. You could also integrate your own custom module to accelerate your algorithm for use in your robot, which wouldn't significantly increase the chip's cost.

## 04 关于免费流片的征集
今年12月份的创芯55nm班车上，会搭载“一生一芯”学员芯片，以及开源EDA和开源IP的测试流片。为了支持社区喜欢做开源硬件的同学，同时测试当前开源芯片解决方案的质量，我们决定划出一块面积，用于支持社区免费流片。大家可以自己开发、也可以基于现有开源项目（如Chipyard、PULP等）开发自己的SoC，投递到项目组，申请免费流片。

征集条件和信息如下：

- 流片截止时间预计为12月中旬，因此大家提交代码的时间需要在10月31日之前。
- 大家可以提交SoC的RTL代码，后端交给ECOS团队来做。对后端感兴趣的同学，也可以尝试自己做后端设计，我们会提供55nm开源PDK的数据以及开源EDA的技术支持。
- 同学们也可以只提交处理器核，接入到ECOS团队的开源SoC里。
- 规模限定在10万instance以下（使用yosys，基于创芯55nm开源PDK综合后的数据）。
- 开源PDK中的SRAM和PLL仍在研发中，请关注我们的进一步通知（预计10月份可以推出）。
- 申请流片的代码，可以自己开发，也可以基于开源项目开发。但不可以有知识产权问题，并且可以对外开源。
- 不要求充分验证，但可以完成基本测试，例如riscv-tests、启动RT-thread或Linux、运行典型负载和Benchmark等。

为了让大家更好地了解此次活动。我们建了一个微信群，同时安排一次小规模的宣讲会/讨论会。感兴趣的老师和同学，可以来上线参加。会议信息如下：

- 时间：2025年9月6日15:00-16:00
- 腾讯会议链接：https://meeting.tencent.com/dm/ZafjB30Hyt6L
- 腾讯会议号：281-629-097

![](../../res/img/web/news/20250901/06.webp)
/// caption
WeChat Group: Open Source Chip (Chip Trial and TapeOut Application)
///

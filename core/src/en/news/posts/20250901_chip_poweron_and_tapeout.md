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

鉴于很多同学前来咨询，ECOS团队计划开启对本颗芯片的领用、试用和试售。

**1、“一生一芯”正式学员，可以按需免费领用（返回开箱及点亮视频或文章）。**其他爱好者，可以付费购买，价格预计在100元左右（收益会用于“一生一芯”和开源芯片技术迭代）。【有兴趣的同学，可以加底部微信群】。

2、开发板套件中，包括一块集成有当前芯片的PCB板卡、用于供电和烧写程序的USB线缆、一些常用的电子开发套件（杜邦线、面包板、LED、开关、温湿度传感器、LED屏幕等）、一套软件工具包（烧写软件、编译工具链、示例程序等）、ECOS团队周边（如贴纸）等。

**3、此次芯片回片数量有限，ECOS团队计划先发布50套板卡**，希望所有对开源芯片软硬件生态感兴趣、长期活跃于嵌入式社区的专业人士、或者热衷于用开源芯片设计嵌入式应用的个人爱好者参与到我们ECOS团队本次芯片的试售需求调查以及后续芯片的上手体验中来。此外，我们非常鼓励大家录制板卡的开箱视频、编写详细的上手测试以及嵌入式应用开发文章、或者将使用过程中暴露出的问题以及改进建议反馈给我们。

## 03 团队目标，以及即将到来的流片模式
ECOS团队预计在今年12月底使用开源IP+开源SoC+开源EDA+创芯（ICSprout）55nm开源PDK完成一颗开源SoC芯片的流片。区别于上一颗芯片，该颗芯片将使用创芯55nm开源PDK，可以被称作是完全开源的芯片，敬请关注。

这颗芯片的设计流程包含：开源IP和SoC、开源的仿真验证工具（verilator、iverilog）、开源的RTL2GDS工具链（yosys+iEDA+klayout）和开源的PDK（创芯55nm）。如果芯片最终能够成功点亮，开源芯片技术将迈进关键一步。

在大多数人的认知里，研发芯片的成本很高，这其中有工具费用（EDA工具和IP）、人员费用、制造费用（流片和封装）等，动辄要几百上千万。但是，随着开源芯片设计解决方案（开源EDA+开源IP+开源PDK）的逐步成熟，设计一颗芯片并流片验证的门槛和成本都在大幅降低。

事实上，如果不追求极致PPA，借助开源解决方案，一颗中小规模（百万门级）的芯片（如Rocket-chip）的成本（设计+工具+制造）可以降低到5万到10万之间。亦即，如果有同学想要设计一套搭载自己芯片的开发板（单价100元/张），只需有1000个人愿意为此买单，就完全可以摊回成本。更小一点的芯片（十万门级），成本甚至可以降低到1万，只需要有100个人愿意买单就可以了。比如，你可以与其他同学组队设计一个处理器SoC，用作明年操作系统实验课的教材设备。你也可以在里边加入自己的定制模块，用来加速你的算法，用在自己的机器人上，这并不会使芯片成本增加太多。

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
Weixin Group: Open Source Chip (Chip Trial and TapeOut Application)
///

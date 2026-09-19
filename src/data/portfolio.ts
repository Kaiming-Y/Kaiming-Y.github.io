export type Lang = 'zh' | 'en';
export interface Project { id:string; name:string; type:string; venue:string; spotlight?:boolean; tags:string[]; title:string; authors:string; description:Record<Lang,string>; links:{label:string;url:string}[]; blog?:string; }
export const projects:Project[]=[
  {
    "id": "dream",
    "name": "Dream.exe",
    "type": "publication",
    "venue": "ICML 2026 FoGen Workshop",
    "spotlight": true,
    "title": "Can Video Generation Models Dream Executable Robot Manipulation?",
    "authors": "Rui Zhao*, Kaiming Yang*, Jifeng Zhu, Siyang Chen, Ziqi Wang, Weijia Wu, Kevin Qinghong Lin, Heng Wang, Mike Zheng Shou",
    "description": {
      "zh": "看起来逼真的机器人操作视频，能否转化为真正可执行的动作？Dream.exe 将生成视频中的运动恢复为机器人轨迹，并在物理仿真中执行，用物理合理性与任务完成情况检验视频模型对现实世界的理解。它覆盖 101 个操作任务与 8 个模型，关注视觉质量之外的一个关键问题：生成的未来能否付诸行动。",
      "en": "Can a convincing robot video become an executable action? Dream.exe recovers robot trajectories from generated videos and tests them in a physics simulator, assessing physical plausibility and task completion. Across 101 manipulation tasks and 8 models, it asks what visual quality alone cannot tell us: can an imagined future actually be carried out?"
    },
    "links": [
      {
        "label": "Publication",
        "url": "https://arxiv.org/abs/2606.04811"
      },
      {
        "label": "Code",
        "url": "https://github.com/showlab/Dream.exe"
      }
    ],
    "tags": [
      "Video Generation",
      "Embodied AI",
      "Physical Reasoning"
    ]
  },
  {
    "id": "worldgui",
    "name": "WorldGUI",
    "type": "publication",
    "venue": "ACL 2025 REALM Workshop",
    "title": "An Interactive Benchmark for Desktop GUI Automation from Any Starting Point",
    "authors": "Henry Hengyuan Zhao, Kaiming Yang, Wendi Yu, Difei Gao, Mike Zheng Shou",
    "description": {
      "zh": "真实的软件任务往往从进行到一半的工作流开始，而不是整齐的初始界面。WorldGUI 通过 10 款应用、611 个任务实例中的多样起始状态，考察 GUI 智能体能否理解当前进度、调整规划并继续执行。配套的 Plan-Act-Critic 框架将反思贯穿规划与行动，帮助智能体发现错误并修正后续行为。",
      "en": "Real software tasks often begin halfway through a workflow, rather than on a clean starting screen. WorldGUI tests whether GUI agents can recognize progress, adapt their plans and continue from diverse initial states across 10 applications and 611 task instances. Its Plan-Act-Critic framework integrates reflection into planning and execution so agents can detect errors and adjust their next steps."
    },
    "links": [
      {
        "label": "Publication",
        "url": "https://arxiv.org/abs/2502.08047"
      },
      {
        "label": "Code",
        "url": "https://github.com/showlab/WorldGUI"
      },
      {
        "label": "Website",
        "url": "https://showlab.github.io/WorldGUI/"
      }
    ],
    "tags": [
      "Computer-use Agents",
      "Dynamic Environments",
      "Self-reflection"
    ]
  },
  {
    "id": "criticgui",
    "name": "CriticGUI",
    "type": "project",
    "venue": "",
    "title": "Evaluating Multimodal LLMs as GUI Critic Models",
    "authors": "",
    "description": {
      "zh": "多模态大模型能否成为可靠的 GUI Critic？CriticGUI 关注模型对界面状态与变化的理解，能否结合分层指令、动作代码、前后截图及操作视频，判断当前步骤是否达成目标，并解释成功或失败的原因。基准将 Critic 的判断与解释能力独立于动作生成进行评估，考察反馈是否真正建立在状态感知与指令理解之上。",
      "en": "Can a multimodal LLM serve as a reliable critic for GUI agents? CriticGUI evaluates whether models can understand interface states and transitions, judge whether an action fulfills the current instruction, and explain why it succeeds or fails. Using hierarchical instructions, action code, before-and-after screenshots and action videos, the benchmark assesses critic judgments and explanations independently of action generation, focusing on state-aware, instruction-grounded multimodal understanding."
    },
    "links": [],
    "blog": "criticgui",
    "tags": [
      "Multimodal Understanding",
      "Critic Evaluation",
      "State Awareness",
      "Failure Analysis"
    ]
  },
  {
    "id": "nl2spec",
    "name": "nl2spec++",
    "type": "project",
    "venue": "",
    "title": "From language to temporal reasoning and formal specifications",
    "authors": "",
    "description": {
      "zh": "自然语言中的时序约束往往分散在多句话里，也未必被直接说出。nl2spec++ 通过共享实体连接跨句关系，推理隐含的先后与依赖关系，再将结果转化为可解析的线性时序逻辑（LTL）规约，让文字描述中的约束更明确、更便于后续验证。",
      "en": "Temporal requirements are often scattered across sentences or left implicit. nl2spec++ links relations through shared entities, reasons about hidden ordering and dependencies, and translates them into parseable linear temporal logic (LTL). It makes constraints in natural-language descriptions explicit and ready for subsequent verification."
    },
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/Kaiming-Y/nl2spec_plus"
      }
    ],
    "blog": "nl2spec",
    "tags": [
      "LLM Reasoning",
      "Temporal Logic",
      "Formal Specifications"
    ]
  }
];
export const collaborations:Project[]=[
  {
    "id": "adahc",
    "name": "AdaHC",
    "type": "publication",
    "venue": "ICML 2026",
    "title": "Accelerating Multi-Token Prediction with Adaptive Head Chunking with Pipeline Parallelism",
    "authors": "Yan Wang, Chang Si, Kaiming Yang, Zhipeng Zhang, Weijian Liu, Man Yuan, Mingzhen Li, Yong Li, Weile Jia",
    "description": {
      "zh": "关注多 Token 预测在大模型训练中的计算开销，通过自适应预测头分块与流水线并行，探索如何让额外的预测能力更高效地融入训练过程。",
      "en": "AdaHC addresses the computational overhead of multi-token prediction in LLM training, combining adaptive head chunking with pipeline parallelism to make additional prediction capacity more efficient."
    },
    "links": [
      {
        "label": "Publication",
        "url": "https://openreview.net/forum?id=yEzvDvHWsJ"
      }
    ],
    "tags": [
      "ML Systems",
      "Multi-token Prediction",
      "Pipeline Parallelism"
    ]
  },
  {
    "id": "libra",
    "name": "Libra",
    "type": "publication",
    "venue": "arXiv 2026",
    "title": "Taming Attention Workload Skew in Long-Context LLM Training with Bounded Sequence Pool",
    "authors": "Yan Wang, Xiulong Yuan, Kaiming Yang, et al.",
    "description": {
      "zh": "长上下文训练中的注意力计算可能在设备间分配不均。Libra 通过有界序列池重新组织工作负载，关注如何减少这种不均衡，让分布式训练更充分地利用计算资源。",
      "en": "Long-context training can distribute attention computation unevenly across devices. Libra uses a bounded sequence pool to reorganize workloads, addressing this imbalance so distributed training can use compute resources more effectively."
    },
    "links": [
      {
        "label": "Publication",
        "url": "https://arxiv.org/abs/2607.23250"
      }
    ],
    "tags": [
      "ML Systems",
      "Long-context Training",
      "Load Balancing"
    ]
  }
];
export const copy={
 zh:{nav:['介绍','学历','经历','项目'],education:'教育经历',experience:'专业经历',work:'论文与项目',other:'其他项目与合作',otherEn:'Other projects & collaborations',present:'至今',paper:'论文',project:'项目',figure:'项目配图待补充',blog:'项目博客',contribution:'我的工作',cv:'中文简历',cvOther:'English CV',contact:'联系我',third:'第三作者',footer:'多模态理解与生成 · Agentic AI',intro:"我目前在<strong>新加坡国立大学</strong>攻读计算机工程硕士，并在 <a href=\"https://sites.google.com/view/showlab\">Showlab</a> 开展研究，由 <a href=\"https://sites.google.com/view/showlab\">Prof. Mike Zheng Shou</a> 指导。目前，我也在<strong>华为新加坡研究院担任 Research Intern</strong>，研究可控视频生成与世界模型。",theme:'切换明暗模式',language:'Switch to English',bioTitle:'关于我',summary:"我希望让 AI 成为能够参与真实工作与生活的智能系统。贯穿我研究的核心问题是：<strong>AI 如何将对世界的理解与想象，转化为可靠、有用的交互？</strong>我关注智能体如何适应动态环境、通过反思修正行为，以及视觉生成如何连接可执行的行动。我的研究贯穿多模态理解与生成，并以世界模型和空间智能连接感知、预测与行动。",focus:[["理解、适应与反思", "让智能体在变化的环境中主动协助，并通过反馈调整决策与行动。"], ["从视觉到行动", "将感知与视觉想象连接到可执行、可验证的行为。"], ["空间、预测与控制", "以三维空间状态为基础，探索可控视频生成与动作驱动的世界模型。"]],huaweiOrg:'华为新加坡研究院',huaweiDept:'2012 实验室 · 多模态模型实验室',huaweiText:'关注空间智能，围绕相机控制视频生成（Camera-controlled Video Generation）、Geometry-aware World Models 和 Agentic World Models 开展研究，探索动作、三维空间状态与视觉生成之间的联系。',yonyouOrg:'用友网络科技股份有限公司',yonyouDept:'模型运营部',yonyouRole:'研发实习生',yonyouText:'参与企业 BI 平台研发，将业务数据整理成可复用的看板和可视化报表，并开发日期组件、数据接口与导出功能，帮助用户更方便地查看和分析业务数据。',nus:'新加坡国立大学',nusDegree:'理学硕士 · 计算机工程',xdu:'西安电子科技大学',xduDegree:'工学学士 · 软件工程',projectIntro:"",template:'博客模板 · 正文待撰写',back:'返回项目',outline:'文章提纲',templateNote:'这篇文章尚未发布。这里先保留文章结构，后续会补充项目图片、实现细节和案例。',outlineItems:['问题与动机','方法与实现','示例与可视化','结果、局限与思考'],templatePlaceholder:'内容将在后续补充。'},
 en:{nav:['About','Education','Experience','Work'],education:'Education',experience:'Professional Experience',work:"Publications & projects",other:'Other projects & collaborations',otherEn:'',present:'Present',paper:"Publication",project:'Project',figure:'Project image coming soon',blog:'Blog',contribution:'My contribution',cv:'English CV',cvOther:'中文简历',contact:'Get in touch',third:'Third author',footer:'Multimodal Understanding & Generation · Agentic AI',intro:"I am a master’s student in Computer Engineering at the <strong>National University of Singapore</strong> and conduct research at <a href=\"https://sites.google.com/view/showlab\">Showlab</a>, supervised by <a href=\"https://sites.google.com/view/showlab\">Prof. Mike Zheng Shou</a>. I am currently also a <strong>Research Intern at Huawei Singapore Research Institute</strong>, exploring controllable video generation and world models.",theme:'Toggle light and dark mode',language:'切换到中文',bioTitle:'About me',summary:"I want to build AI that becomes a capable participant in everyday life and work. A central question guides my research: <strong>how can understanding and imagining the world lead to reliable, useful interaction?</strong> I explore agents that adapt to changing environments and reflect on their behavior, alongside generative models that connect visual possibilities to executable actions. My research spans multimodal understanding and generation, with world models and spatial intelligence connecting perception, prediction and action.",focus:[["Understanding, adaptation & reflection", "Agents that assist proactively, adapt to changing contexts and improve decisions through feedback."], ["From vision to action", "Connecting perception and visual imagination to actions that can be executed and verified."], ["Space, prediction & control", "Controllable video generation and action-conditioned world models grounded in 3D spatial state."]],huaweiOrg:'Huawei Singapore Research Institute',huaweiDept:'2012 Labs · Multimodal Model Lab',huaweiText:'Researching spatial intelligence through camera-controlled video generation, geometry-aware world models and agentic world models, exploring the relationship between actions, 3D spatial states and visual generation.',yonyouOrg:'Yonyou Network Technology',yonyouDept:'Model Operations Department',yonyouRole:'R&D Intern',yonyouText:'Contributed to an enterprise BI platform, turning business data into reusable dashboards and visual reports. Developed date components, data interfaces and export features to make business analysis more accessible.',nus:'National University of Singapore',nusDegree:'M.Sc. in Computer Engineering',xdu:'Xidian University',xduDegree:'B.Eng. in Software Engineering',projectIntro:"",template:'Blog template · Article in preparation',back:'Back to projects',outline:'Article outline',templateNote:'This article has not been published yet. This page provides the structure for future project images, implementation details and examples.',outlineItems:['Problem & motivation','Method & implementation','Examples & visualizations','Results, limitations & reflections'],templatePlaceholder:'Content will be added here.'}
};

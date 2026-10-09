// Service of Interest data for /contact (multi-select chips).
// `value` must match SERVICE_CATEGORIES in the tnn-contact Worker (fc259a2) exactly.
// `label` is sentence case for display; `blurb` is condensed from src/pages/services.astro.
export type ServiceItem = { value: string; label: string; blurb: string };
export type ServiceGroup = { id: string; label: string; tag: string; icon: string; items: ServiceItem[] };

// 24x24 stroke icons (path data only)
const ICONS = {
  leader: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0",
  hardware: "M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4",
  cloud: "M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 7.9V18H7Z",
  shield: "M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4",
  help: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2.5-11.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01",
};

export const serviceGroups: ServiceGroup[] = [
  { id: "exec", label: "Executive & Leadership", tag: "01", icon: ICONS.leader, items: [
    { value: "Executive Stewardship & Coaching", label: "Executive stewardship & coaching", blurb: "One-on-one strategic advisory to optimize executive utility." },
    { value: "Organizational Governance Advisory", label: "Organizational governance advisory", blurb: "Decision-making architecture, accountability models and leadership alignment." },
  ]},
  { id: "hw", label: "Hardware & Systems", tag: "02", icon: ICONS.hardware, items: [
    { value: "PC & Workstation Architecture Advisory", label: "PC & workstation architecture advisory", blurb: "Hardware standards, performance profiling and procurement strategy." },
    { value: "Systems Maintenance & Troubleshooting Strategy", label: "Systems maintenance & troubleshooting strategy", blurb: "Proactive maintenance protocols and rapid diagnostic frameworks." },
  ]},
  { id: "cloud", label: "Cloud & On-Prem Architecture", tag: "03", icon: ICONS.cloud, items: [
    { value: "Hybrid Cloud Migration Strategy", label: "Hybrid cloud migration strategy", blurb: "Workload positioning and transition planning from legacy on-prem to cloud." },
    { value: "High-Availability System Design", label: "High-availability system design", blurb: "Redundant, fault-tolerant design for mission-critical systems." },
  ]},
  { id: "sec", label: "Security & Process Governance", tag: "04", icon: ICONS.shield, items: [
    { value: "Impact & Security Posture Auditing", label: "Impact & security posture auditing", blurb: "Review of vulnerability, risk exposure and governance compliance." },
    { value: "ITIL & ITSM Process Architecture", label: "ITIL & ITSM process architecture", blurb: "IT service management adoption, SLA structure and workflow optimization." },
  ]},
];

export const fallbackService: ServiceItem & { icon: string } = {
  value: "Not sure / something else",
  label: "Not sure / something else",
  blurb: "Tell us what you're working on and we'll point you to the right consultant.",
  icon: ICONS.help,
};

export const allServiceValues = [...serviceGroups.flatMap((g) => g.items.map((i) => i.value)), fallbackService.value];

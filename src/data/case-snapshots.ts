export interface CaseSnapshot {
  title: string;
  problem: string;
  fix: string;
  outcome: string;
}

export const caseSnapshots: CaseSnapshot[] = [
  {
    title: "Turn cleanup + repair",
    problem: "Tenant moved out with kitchen and bathroom damage. Drywall holes, stained flooring, and general neglect.",
    fix: "Drywall repair, deep clean, interior paint, and flooring patch. Completed in 5 days.",
    outcome: "Unit re-listed immediately. New tenant placed within 2 weeks. Owner received photo documentation throughout.",
  },
  {
    title: "Winter emergency response",
    problem: "Major snowfall blocked access to a 4-unit property. Walkways and driveways impassable.",
    fix: "Snow removal team deployed within hours. Driveways, walkways, and entry points cleared. Salt applied.",
    outcome: "Full access restored same day. No tenant complaints. Owner notified with photos.",
  },
  {
    title: "Plumbing repair under threshold",
    problem: "Slow drain in a bathroom turned into a minor backup during a property check.",
    fix: "Under the owner's approval threshold. Drain cleared and tested same day. Photo and invoice sent.",
    outcome: "Issue resolved before it became a larger problem. Owner appreciated the proactive approach.",
  },
  {
    title: "Seasonal lawn program",
    problem: "Owner received a city notice about lawn height at a vacant property. Previous service had been inconsistent.",
    fix: "Put the property on a regular mowing schedule. Cleared the overgrowth, then maintained weekly.",
    outcome: "No further notices. Property maintained to rental-ready standard. Ready for showings at any time.",
  },
];

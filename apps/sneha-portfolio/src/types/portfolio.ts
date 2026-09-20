/** Honest labelling of what a project actually is — concept work is never shown as shipped. */
export type DeliveryStatus = 'shipped' | 'prototype' | 'capstone' | 'concept' | 'summary';

export type Figure = {
  /** Base name of the source in assets/images-src/, without extension. */
  name: string;
  alt: string;
  caption?: string;
  /** Intrinsic size of the source, used for srcset selection and layout stability. */
  width?: number;
  height?: number;
};

export type CaseSection =
  | { kind: 'text'; heading: string; body: string[] }
  | { kind: 'figure'; heading?: string; figure: Figure }
  | { kind: 'comparison'; heading: string; before: Figure; after: Figure }
  | { kind: 'outcomes'; heading: string; items: Outcome[] };

/** `kind` separates what was measured from what was only intended. */
export type Outcome = {
  label: string;
  value?: string;
  kind: 'result' | 'estimate' | 'hypothesis' | 'qualitative';
  source?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  team?: string;
  timeframe: string;
  status: DeliveryStatus;
  tags: string[];
  cover?: Figure;
  sections: CaseSection[];
  outcomes: Outcome[];
  seoDescription: string;
};

export type SupportingProject = {
  title: string;
  blurb: string;
  timeframe: string;
  status: DeliveryStatus;
};

export const statusLabel: Record<DeliveryStatus, string> = {
  shipped: 'Shipped',
  prototype: 'Prototype',
  capstone: 'Capstone project',
  concept: 'Concept',
  summary: 'Experience summary',
};

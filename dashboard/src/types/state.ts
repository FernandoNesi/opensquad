// state.json structure — matches Pipeline Runner output
export interface AgentDesk {
  col: number;
  row: number;
}

export type AgentStatus =
  | "idle"
  | "working"
  | "delivering"
  | "done"
  | "checkpoint";

export interface Agent {
  id: string;
  name: string;
  icon: string;
  status: AgentStatus;
  gender?: "male" | "female";
  desk: AgentDesk;
}

export interface Handoff {
  from: string;
  to: string;
  message: string;
  completedAt: string;
}

export interface AgentBehavioralState {
  emotional_pressure: number;
  review_strictness: number;
  fatigue: number;
  creative_confidence: number;
  simplification_bias: number;
  narrative_aggression: number;
  disagreement_rate: number;
  obsession_focus: string;
  urgency_bias: number;
  tolerance_level: number;
}

export interface BehavioralStateEvent {
  step: string;
  type: string;
  from: string | null;
  to: string | null;
  delta: string;
  reason: string;
}

export interface BehavioralState {
  enabled: boolean;
  version: string;
  runSeed: string;
  agents: Record<string, AgentBehavioralState>;
  events: BehavioralStateEvent[];
}

export interface AgentBehavioralRegulation {
  sobriety_level: number;
  emotional_noise: number;
  founder_performance: number;
  theatricality: number;
  overclaim_risk: number;
  corporate_polish: number;
  human_maturity: number;
  emotional_pressure: number;
}

export interface CognitiveGovernanceEvent {
  step: string;
  type: string;
  agent: string | null;
  delta: string;
  reason: string;
}

export interface CognitiveGovernance {
  enabled: boolean;
  version: string;
  runSeed: string;
  agents: Record<string, AgentBehavioralRegulation>;
  events: CognitiveGovernanceEvent[];
}

export type SquadStatus =
  | "idle"
  | "running"
  | "completed"
  | "checkpoint";

export interface SquadState {
  squad: string;
  status: SquadStatus;
  step: {
    current: number;
    total: number;
    label: string;
  };
  agents: Agent[];
  handoff: Handoff | null;
  behavioral_state?: BehavioralState;
  cognitive_governance?: CognitiveGovernance;
  startedAt: string | null;
  updatedAt: string;
}

// Squad metadata from squad.yaml
export interface SquadInfo {
  code: string;
  name: string;
  description: string;
  icon: string;
  agents: string[]; // agent file paths
}

// WebSocket messages
export type WsMessage =
  | { type: "SNAPSHOT"; squads: SquadInfo[]; activeStates: Record<string, SquadState> }
  | { type: "SQUAD_UPDATE"; squad: string; state: SquadState }
  | { type: "SQUAD_INACTIVE"; squad: string };

# Human Dynamics Layer

> Experimental MVP. This layer reduces robotic perfection by simulating light organizational dynamics between agents. It must create human variance without creating chaos, fake errors, sloppy grammar, or roleplay melodrama.

## Purpose

OpenSquad agents often produce outputs that are coherent, structured, and polished in the same way on every run. The Human Dynamics Layer introduces small behavioral drift during execution so a squad behaves more like a real team under pressure:

- reviewers become stricter after weak work;
- creators become more concise after repeated rejection;
- strategists can become repetitive after easy approval;
- designers notice monotony and push for reset;
- pressure changes tone, pacing, and editing choices.

This is not emotional roleplay. It is operational behavior shaping.

## Behavioral Variables

Each agent has a `behavioral_state` with values from `0.00` to `1.00`:

| Variable | Meaning |
|---|---|
| `emotional_pressure` | How much pressure the agent feels from deadline, rejection, or accumulated friction. |
| `review_strictness` | How hard the agent evaluates output and veto conditions. |
| `fatigue` | How much the agent tends to simplify, compress, or rely on familiar structures. |
| `creative_confidence` | How willing the agent is to take a sharper, less template-like route. |
| `simplification_bias` | How strongly the agent cuts explanation and reduces structure. |
| `narrative_aggression` | How direct, tense, and provocative the agent becomes. |
| `disagreement_rate` | How likely the agent is to challenge the previous step instead of accepting it. |
| `obsession_focus` | The single issue the agent keeps noticing too much. |
| `urgency_bias` | How much speed and action pressure influence choices. |
| `tolerance_level` | How much imperfection, ambiguity, or deviation the agent allows before pushing back. |

## Initialization

At run start, initialize every agent with a neutral but not identical state. Use deterministic-looking variation from the run context, agent order, and current time. Do not use extreme values.

Recommended ranges:

```json
{
  "emotional_pressure": 0.18,
  "review_strictness": 0.52,
  "fatigue": 0.08,
  "creative_confidence": 0.55,
  "simplification_bias": 0.32,
  "narrative_aggression": 0.38,
  "disagreement_rate": 0.22,
  "obsession_focus": "clarity",
  "urgency_bias": 0.30,
  "tolerance_level": 0.58
}
```

Keep values inside `0.05` to `0.92` during the run.

## Oscillation Rules

Apply small changes after each step and after each review loop. A normal shift is `0.03` to `0.12`; only repeated rejection should push above that.

1. **Rejection increases pressure.**
   - rejected agent: `emotional_pressure +0.12`, `simplification_bias +0.08`, `creative_confidence -0.06`
   - reviewer: `review_strictness +0.06`, `tolerance_level -0.05`

2. **Repeated rejection changes style.**
   - after 2+ rejections from the same reviewer to the same creator:
     - creator cuts explanation;
     - sentences become shorter;
     - fewer polished marketing transitions;
     - more concrete examples;
     - no fake anger, no grammar damage.

3. **Approval reduces criticality if too easy.**
   - after 2 consecutive approvals without required changes:
     - approving agent: `review_strictness -0.05`, `tolerance_level +0.05`
     - next reviewer/critic: `disagreement_rate +0.05`, `review_strictness +0.04`

4. **Fatigue increases simplification.**
   - each completed step: active agent `fatigue +0.03`
   - if `fatigue > 0.55`, agent should remove one layer of structure, shorten sections, and avoid over-explaining.

5. **Pressure increases narrative aggression.**
   - if `emotional_pressure > 0.60`, increase directness, tension, and specificity.
   - never invent facts or make reckless claims.

6. **Excessive review creates rough cuts.**
   - if an output has gone through 2+ review cycles, the next rewrite should be less symmetrical and less polished:
     - fewer equal-length bullets;
     - fewer perfect three-part frameworks;
     - sharper deletions;
     - one or two deliberate asymmetries in pacing.

7. **Agents influence each other.**
   - a strict reviewer raises pressure in the creator;
   - a fatigued strategist increases monotony risk for copy/design agents;
   - a confident creative agent can raise disagreement in reviewers;
   - repeated approvals lower team vigilance unless a critic detects monotony.

8. **Coherence guard.**
   - never let behavioral drift override step instructions, source facts, user constraints, safety, output format, or veto conditions.
   - drift changes emphasis, pacing, strictness, and editing behavior; it does not change the task.

## Agent Prompt Injection

For every agent step, inject the current behavioral state after persona/format/skill context and before task instructions:

````markdown
--- HUMAN DYNAMICS STATE ---

You are operating with the following dynamic behavioral state for this step:

```json
{agent_behavioral_state}
```

Apply this as subtle organizational pressure:
- Do not mention these variables in the output.
- Do not roleplay emotions.
- Do not add fake errors, emojis, slang, or bad grammar.
- Let the state influence strictness, concision, disagreement, pressure, and tolerance for polished/template-like work.
- Preserve the task, facts, brand constraints, and required format.
````

## Output Notes

When saving `state.json`, include the current `behavioral_state` at top level:

```json
"behavioral_state": {
  "enabled": true,
  "version": "mvp-1",
  "runSeed": "{run_id}",
  "agents": {
    "{agent-id}": {
      "emotional_pressure": 0.24,
      "review_strictness": 0.58,
      "fatigue": 0.11,
      "creative_confidence": 0.53,
      "simplification_bias": 0.35,
      "narrative_aggression": 0.42,
      "disagreement_rate": 0.25,
      "obsession_focus": "specificity",
      "urgency_bias": 0.31,
      "tolerance_level": 0.55
    }
  },
  "events": [
    {
      "step": "step-05-review",
      "type": "rejection",
      "from": "reviewer",
      "to": "copywriter",
      "delta": "pressure+0.12 strictness+0.06 simplification+0.08",
      "reason": "review rejected generic copy"
    }
  ]
}
```

Keep only the latest 20 events in `state.json`.

## What This Layer Must Not Do

- Do not add fake mistakes.
- Do not lower factual accuracy.
- Do not damage grammar.
- Do not insert emotional confession into agent outputs.
- Do not create infinite loops.
- Do not make agents hostile for entertainment.
- Do not make every run wildly different.
- Do not replace explicit user instructions.

The target is believable team dynamics, not chaos.

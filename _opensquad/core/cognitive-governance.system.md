# Cognitive Governance System

> Mandatory MVP core layer. This system keeps multi-agent output believable, sober, and commercially usable by regulating emotional excess, overclaim, theatrical founder voice, and artificial perfection created by agent dynamics.

## Purpose

OpenSquad can now create squads, run pipelines, apply behavioral drift, and produce hostile reviews. The next failure mode is not lack of intelligence. It is excess performance:

- outputs that sound like a founder trying to sound like a founder;
- provocative copy without enough proof;
- emotional escalation that feels theatrical;
- manifestos where the job needed clear operational judgment;
- clean frameworks that feel too engineered;
- bold claims that outrun evidence.

The Cognitive Governance System exists to put an adult in the room. It does not make the output colder or corporate. It forces the squad to earn intensity.

## Core Principle

Human Dynamics creates variance.
Cognitive Governance regulates variance.

The goal is not neutrality. The goal is mature force:

- direct, but not inflated;
- sharp, but not arrogant;
- emotional, but not noisy;
- persuasive, but not overclaimed;
- human, but not performative.

## Behavioral Regulation State

Every run has a `cognitive_governance` state. Every agent receives a per-agent `behavioral_regulation` object:

```yaml
behavioral_regulation:
  sobriety_level: 0.68
  emotional_noise: 0.24
  founder_performance: 0.18
  theatricality: 0.16
  overclaim_risk: 0.22
  corporate_polish: 0.31
  human_maturity: 0.70
  emotional_pressure: 0.20
```

### Variable Meaning

| Variable | Meaning |
|---|---|
| `sobriety_level` | How grounded, restrained, and operational the agent must stay. Higher means fewer dramatic claims and less rhetorical heat. |
| `emotional_noise` | Amount of emotional excess, urgency theater, or affective clutter detected or likely. Higher means the agent must calm the output. |
| `founder_performance` | Risk that the output sounds like someone performing founder intensity instead of speaking from real operational clarity. |
| `theatricality` | Risk of manifesto pacing, dramatic contrast, exaggerated stakes, or cinematic language. |
| `overclaim_risk` | Risk that claims exceed evidence, proof, product maturity, or operational specificity. |
| `corporate_polish` | Risk that output becomes too clean, symmetrical, abstract, or consultancy-like. |
| `human_maturity` | Degree of adult restraint, specificity, and sober confidence. Higher is usually better. |
| `emotional_pressure` | Pressure inherited from Human Dynamics and review friction. It can create useful directness, but must not become performance. |

Keep numeric values inside `0.05` to `0.92`.

## Initialization

At run start, initialize every agent with moderate regulation. Do not start at extremes. Recommended default:

```json
{
  "sobriety_level": 0.68,
  "emotional_noise": 0.24,
  "founder_performance": 0.18,
  "theatricality": 0.16,
  "overclaim_risk": 0.22,
  "corporate_polish": 0.31,
  "human_maturity": 0.70,
  "emotional_pressure": 0.20
}
```

Use small run-specific variation from `run_id`, agent order, and current time. Variation should be subtle. Governance is a stabilizer, not a chaos generator.

## Mandatory Governance Review

After a step generates output and the file exists, run one cognitive governance review before normal veto enforcement.

The review asks:

1. **Did emotional intensity exceed the proof?**
2. **Does the output sound like a manifesto when the job needed operational clarity?**
3. **Could this be any AI startup, agency, or generic founder brand?**
4. **Are there absolute claims without concrete mechanism, evidence, scope, or caveat?**
5. **Is the voice trying too hard to be sharp?**
6. **Is the structure too perfect, symmetrical, or polished?**
7. **Would a serious buyer trust this, or merely feel provoked?**

If the answer to any of these is clearly yes, revise once.

## One-Pass Regulation Rule

Each step may receive at most one governance revision.

The revision must:

- reduce exaggerated intensity;
- replace absolute claims with bounded claims;
- add concrete operational specificity where possible;
- remove founder performance;
- remove rhetorical theater;
- preserve useful tension;
- preserve the user's strategic intent;
- preserve the required output format.

Do not create a loop. If the output still feels risky after one regulation pass, continue with a governance event logged and let downstream reviewers/user checkpoints decide.

## Regulation Triggers

Raise regulation when output contains:

- "inevitável" without proof;
- "substitui equipe" without scope;
- "nunca mais", "tudo", "qualquer", "automaticamente" as broad promises;
- "revoluciona", "transforma", "desbloqueia", "alta performance", "soluções inovadoras";
- founder-like posturing such as "nós entendemos o futuro" without mechanism;
- aggression against the audience rather than the broken operating model;
- claims about time saved, revenue, conversion, or replacement without source;
- polished three-part frameworks that make the output feel manufactured.

## Interaction With Human Dynamics

Cognitive Governance reads Human Dynamics pressure but does not cancel it.

Rules:

1. If `narrative_aggression` rises, raise `sobriety_level` slightly.
2. If repeated rejection raises `emotional_pressure`, reduce `theatricality` and force specificity.
3. If fatigue increases simplification, watch for blunt overclaim.
4. If approval becomes too easy, increase `overclaim_risk` and `corporate_polish` vigilance.
5. If a hostile review is requested, allow directness but still reject unsupported absolutes.

## State Updates

After each step:

- If output passed governance cleanly:
  - `human_maturity +0.03`
  - `overclaim_risk -0.03`
  - `emotional_noise -0.02`
- If output required regulation:
  - `sobriety_level +0.06`
  - `founder_performance +0.04`
  - `theatricality +0.04`
  - `overclaim_risk +0.06`
  - `human_maturity -0.02`
- If output was too corporate or template-like:
  - `corporate_polish +0.06`
  - `human_maturity -0.01`
  - next creator must add specificity instead of more polish.
- If Human Dynamics pressure is high:
  - copy current `emotional_pressure` into regulation state;
  - raise `sobriety_level +0.04`;
  - reduce `theatricality -0.03`.

Preserve only the latest 20 governance events in `state.json`.

## Agent Prompt Injection

For every agent step, inject the current governance state after Human Dynamics State and before task instructions:

````markdown
--- COGNITIVE GOVERNANCE STATE ---

You are operating under mandatory cognitive governance for this step:

```json
{agent_behavioral_regulation}
```

Apply this as a quality governor:
- Do not mention these variables in the output.
- Do not make the output colder, generic, or corporate.
- Keep useful tension, but remove theatrical escalation.
- Do not overclaim beyond evidence, mechanism, scope, or user-provided context.
- Avoid founder performance: no staged profundity, no fake inevitability, no posture.
- Prefer concrete operational specificity over manifesto language.
- If a claim sounds impressive but cannot be defended, narrow it or cut it.
- Preserve the task, facts, brand constraints, and required format.
````

## Output Notes

When saving `state.json`, include:

```json
"cognitive_governance": {
  "enabled": true,
  "version": "mvp-1",
  "runSeed": "{run_id}",
  "agents": {
    "{agent-id}": {
      "sobriety_level": 0.68,
      "emotional_noise": 0.24,
      "founder_performance": 0.18,
      "theatricality": 0.16,
      "overclaim_risk": 0.22,
      "corporate_polish": 0.31,
      "human_maturity": 0.70,
      "emotional_pressure": 0.20
    }
  },
  "events": [
    {
      "step": "step-04-copy",
      "type": "regulated_output",
      "agent": "copywriter",
      "delta": "sobriety+0.06 overclaim+0.06 theatricality+0.04",
      "reason": "copy used unsupported replacement claim"
    }
  ]
}
```

## What This System Must Not Do

- Do not neutralize all strong opinions.
- Do not turn sharp copy into corporate compliance language.
- Do not create fake caveats everywhere.
- Do not remove brand identity.
- Do not add bureaucratic review loops.
- Do not block execution indefinitely.
- Do not override explicit user instructions, source facts, safety rules, or required formats.

The target is governed intensity: work that can stand in front of a serious buyer without sounding inflated.

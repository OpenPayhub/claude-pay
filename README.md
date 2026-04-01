# claude-pay

> This is a TypeScript open-source project scaffold built around the Claude Code source leak incident.

[中文版本](./README.zh.md)

## One-line introduction

`claude-pay` is a TypeScript open-source project scaffold built around the **Claude Code source leak incident**, with the goal of turning a high-profile engineering accident into a project direction that can keep evolving.

## Incident summary

Part of the underlying engineering code of Anthropic's AI coding tool Claude Code was publicly reconstructed and rapidly distributed after a release accident. For the first time, the outside world got a relatively complete look at how a leading AI coding agent was organized on the client side, including workflow orchestration, context management, and tool invocation structure.

It is important to clarify that what leaked was primarily **client-side tool code**. It **did not involve user private data, nor did it expose model weights themselves**. Even so, the incident was enough to push the entire technical community to re-evaluate the engineering depth and implementation details behind AI agent products.

## What happened

The cause was not especially complicated. At its core, it appears to have been a packaging configuration mistake.

When publishing `@anthropic-ai/claude-code` version `2.1.88`, a debugging Source Map file was not properly excluded, and a massive **59.8MB** `cli.js.map` file was shipped along with the package. Because Source Maps can map compressed production bundles back to their original source structure, external developers were able to reconstruct a large amount of TypeScript source code from it.

## What this repository is for

This project is not just about recording the event itself. It aims to do three things:

1. Explain the incident clearly  
   Including how it spread, what triggered it, what engineering lessons it reveals, and why it attracted so much attention in the AI development community.

2. Distill the engineering lessons  
   For example: Source Map risk, npm release safety, AI agent architecture exposure, and debug artifact governance.

3. Turn the discussion into an extensible code project  
   In other words, it can grow into a site, a tool, a research demo, or even a larger combination of content and product exploration.

## Project vision

What interests us most about the leaked code is not the spectacle itself, but the **workflow design ability, engineering decomposition, and agent system construction ideas** reflected behind it.

The core idea of this project is:  
**after carefully studying and understanding the workflow and framework design of products like Claude Code, we want to borrow the useful ideas and explore how AI can be applied to payment workflows.**

What we want to build is not just a simple "AI calls a payment API" tool, but a more complete **AI Payment Workflow**:

- Let AI understand payment tasks instead of only executing isolated commands
- Let the system decompose complex payment processes into verifiable and traceable steps
- Let users complete the full loop from intent to execution with lower operational cost
- Let intelligence serve risk control, permission judgment, and process orchestration rather than acting as only a chat interface

## The problems we want to solve

### 1. Automation

Payment scenarios contain many repetitive, tedious, and long-chain actions such as information validation, order creation, status tracking, exception handling, and notification feedback.  
We want to learn from mature agent workflow patterns so AI can do more than "talk" and can actually help drive the full process.

### 2. Convenience

Traditional payment systems often have rich capabilities but high usability costs.  
We want to compress complex operations into more natural interactions so users can complete payment, query, confirmation, and reconciliation tasks with fewer steps.

### 3. Intelligence

Real intelligence is not just conversation. It means:

- Understanding user intent
- Recognizing the current context
- Choosing the right tools
- Planning execution order
- Asking for critical missing information when necessary

This is one of the key reasons we study Claude Code's workflow design: it offers a valuable reference for understanding how a high-quality AI agent is actually organized in a real engineering system.

### 4. Security

In payments, the goal is not "the more automation the better", but "as much automation as possible under strict security constraints".

That is why this project treats security as a core boundary from the very beginning, including but not limited to:

- Permission checks
- Operation confirmation
- Risk grading
- Audit logs
- Human-in-the-loop handling for sensitive steps

We do not want AI to be an unrestricted executor. We want it to operate inside a **safe, auditable, limited, and interruptible** framework.

### 5. Capability boundaries

It must be explicit what AI can do and what it must not do.

In payment scenarios, the real danger is not that a model is "not smart enough", but that the system has unclear capability boundaries.  
So we care deeply about:

- Which tasks AI can complete autonomously
- Which tasks AI can only assist with
- Which critical actions require explicit user confirmation
- Which high-risk operations must be hard-blocked

In other words, we are not trying to build an all-powerful payment agent. We are trying to build an **AI payment system with clear boundaries, reliable behavior, and real business applicability**.

## Current project direction

At this stage, we define the project as a continuously evolving experiment:

1. Study the engineering structure and workflow ideas revealed by Claude Code  
2. Abstract an agent orchestration model suitable for payment scenarios  
3. Gradually build an AI payment foundation that emphasizes automation, convenience, intelligence, and security boundaries  
4. Validate, in the open, which designs are truly practical, extensible, and auditable

It is both an engineering retrospective and a product exploration path.

## Project structure

```text
.
├── Dockerfile
├── README.md
├── README.zh.md
├── package.json
├── src
│   ├── agents
│   ├── channels
│   ├── payments
│   ├── security
│   ├── types
│   ├── workflows
│   ├── cli.ts
│   └── index.ts
└── tsconfig.json
```

## Local development

Install dependencies:

```bash
pnpm install
```

Development mode:

```bash
pnpm dev
```

Run the payment flow CLI demo:

```bash
pnpm cli
```

You can also pass a natural language request directly:

```bash
pnpm cli "Please pay 199 CNY to the supplier and complete settlement"
```

Type check:

```bash
pnpm check
```

Build:

```bash
pnpm build
```

Run the server:

```bash
pnpm start
```

Default address:

```text
http://localhost:3000
```

## Docker

Build the image:

```bash
docker build -t claude-pay .
```

Run the container:

```bash
docker run --rm -p 3000:3000 claude-pay
```

## Future directions

This project can naturally grow into:

- An incident landing page
- A timeline and spread analysis
- Technical retrospectives
- A Source Map leak detection script
- An npm package pre-release audit tool
- Research notes on AI agent engineering architecture
- GitHub Actions-based automation and validation

> We are not merely watching a leak unfold. We are turning an incident worthy of AI engineering history into an open-source project that can be studied, practiced, and continuously built upon.

## Disclaimer

This README is intended as project background and directional context.  
The repository itself is an open-source engineering scaffold and does not include unauthorized internal source code, user data, or model weights.

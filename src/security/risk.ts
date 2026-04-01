import type { PaymentIntent, RiskLevel } from '../types/payment';

export function assessRisk(intent: PaymentIntent): RiskLevel {
  if (intent.amount >= 1000) {
    return 'high';
  }

  if (intent.amount >= 300) {
    return 'medium';
  }

  return 'low';
}

export function requiresManualApproval(riskLevel: RiskLevel): boolean {
  return riskLevel !== 'low';
}

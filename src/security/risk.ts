import type { PaymentIntent, RiskLevel } from '../types/payment';

export function assessRisk(intent: PaymentIntent): RiskLevel {
  if (intent.amount >= 1000) {
    return '高';
  }

  if (intent.amount >= 300) {
    return '中';
  }

  return '低';
}

export function requiresManualApproval(riskLevel: RiskLevel): boolean {
  return riskLevel !== '低';
}

import type { PaymentIntent } from '../types/payment';

export function selectPaymentChannel(intent: PaymentIntent): string {
  if (intent.scene === 'settlement') {
    return 'bank-settlement-channel';
  }

  if (intent.amount <= 500) {
    return 'wallet-fast-lane';
  }

  return 'review-required-channel';
}

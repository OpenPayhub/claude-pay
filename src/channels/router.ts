import type { PaymentIntent } from '../types/payment';

export function selectPaymentChannel(intent: PaymentIntent): string {
  if (intent.scene === '结算') {
    return '银行结算通道';
  }

  if (intent.amount <= 500) {
    return '钱包快捷通道';
  }

  return '人工复核通道';
}

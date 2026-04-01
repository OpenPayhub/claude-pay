import type { PaymentIntent } from '../types/payment';

export function createDemoIntent(requestText: string): PaymentIntent {
  return {
    id: `pay_${Date.now()}`,
    requester: 'demo-user',
    target: 'merchant-account',
    amount: 199,
    currency: 'CNY',
    scene: 'settlement',
    note: requestText || '为供应商完成一笔演示结算'
  };
}

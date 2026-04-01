import type { PaymentIntent } from '../types/payment';

export function createDemoIntent(requestText: string): PaymentIntent {
  return {
    id: `支付_${Date.now()}`,
    requester: '演示用户',
    target: '供应商账户',
    amount: 199,
    currency: 'CNY',
    scene: '结算',
    note: requestText || '为供应商完成一笔演示结算'
  };
}

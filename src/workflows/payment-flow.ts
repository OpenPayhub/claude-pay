import { buildAgentDecision } from '../agents/payment-agent';
import { createDemoIntent } from '../payments/order';

export function runPaymentDemo(requestText: string) {
  const intent = createDemoIntent(requestText);
  const decision = buildAgentDecision(intent);

  return {
    intent,
    decision,
    summary: `AI 已为 ${intent.target} 生成一条 ${intent.amount} ${intent.currency} 的支付流。`
  };
}

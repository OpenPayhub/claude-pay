import { selectPaymentChannel } from '../channels/router';
import { assessRisk, requiresManualApproval } from '../security/risk';
import type { FlowStep, PaymentIntent } from '../types/payment';

export function buildAgentDecision(intent: PaymentIntent): {
  channel: string;
  riskLevel: 'low' | 'medium' | 'high';
  steps: FlowStep[];
} {
  const channel = selectPaymentChannel(intent);
  const riskLevel = assessRisk(intent);

  const steps: FlowStep[] = [
    {
      name: 'parse-intent',
      status: 'ready',
      reason: 'AI 已解析用户支付需求'
    },
    {
      name: 'validate-order',
      status: 'ready',
      reason: '订单字段完整，可继续处理'
    },
    {
      name: 'risk-assessment',
      status: 'ready',
      reason: `当前风险等级为 ${riskLevel}`
    },
    {
      name: 'manual-approval',
      status: requiresManualApproval(riskLevel) ? 'pending' : 'ready',
      reason: requiresManualApproval(riskLevel)
        ? '风险等级较高，需要人工确认'
        : '低风险交易可自动放行'
    },
    {
      name: 'route-channel',
      status: 'ready',
      reason: `已选择支付通道：${channel}`
    }
  ];

  return { channel, riskLevel, steps };
}

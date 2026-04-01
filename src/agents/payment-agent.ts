import { selectPaymentChannel } from '../channels/router';
import { assessRisk, requiresManualApproval } from '../security/risk';
import type { FlowStep, PaymentIntent } from '../types/payment';

export function buildAgentDecision(intent: PaymentIntent): {
  channel: string;
  riskLevel: '低' | '中' | '高';
  steps: FlowStep[];
} {
  const channel = selectPaymentChannel(intent);
  const riskLevel = assessRisk(intent);

  const steps: FlowStep[] = [
    {
      name: '解析意图',
      status: '就绪',
      reason: 'AI 已解析用户支付需求'
    },
    {
      name: '校验订单',
      status: '就绪',
      reason: '订单字段完整，可继续处理'
    },
    {
      name: '风险评估',
      status: '就绪',
      reason: `当前风险等级为 ${riskLevel}`
    },
    {
      name: '人工审批',
      status: requiresManualApproval(riskLevel) ? '待处理' : '就绪',
      reason: requiresManualApproval(riskLevel)
        ? '风险等级较高，需要人工确认'
        : '低风险交易可自动放行'
    },
    {
      name: '路由通道',
      status: '就绪',
      reason: `已选择支付通道：${channel}`
    }
  ];

  return { channel, riskLevel, steps };
}

export type PaymentIntent = {
  id: string;
  requester: string;
  target: string;
  amount: number;
  currency: 'CNY' | 'USD';
  scene: '转账' | '充值' | '结算';
  note: string;
};

export type FlowStep = {
  name: string;
  status: '待处理' | '就绪' | '阻塞';
  reason: string;
};

export type RiskLevel = '低' | '中' | '高';

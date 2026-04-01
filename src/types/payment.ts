export type PaymentIntent = {
  id: string;
  requester: string;
  target: string;
  amount: number;
  currency: 'CNY' | 'USD';
  scene: 'transfer' | 'recharge' | 'settlement';
  note: string;
};

export type FlowStep = {
  name: string;
  status: 'pending' | 'ready' | 'blocked';
  reason: string;
};

export type RiskLevel = 'low' | 'medium' | 'high';

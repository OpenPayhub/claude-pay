import { runPaymentDemo } from './workflows/payment-flow';

function main() {
  const requestText = process.argv.slice(2).join(' ').trim() || '请帮我给供应商支付 199 元并完成结算';
  const result = runPaymentDemo(requestText);

  console.log('claude-pay demo cli');
  console.log('='.repeat(24));
  console.log(`请求: ${requestText}`);
  console.log(`摘要: ${result.summary}`);
  console.log(`通道: ${result.decision.channel}`);
  console.log(`风险等级: ${result.decision.riskLevel}`);
  console.log('');
  console.log('流程步骤:');

  for (const step of result.decision.steps) {
    console.log(`- [${step.status}] ${step.name}: ${step.reason}`);
  }
}

main();

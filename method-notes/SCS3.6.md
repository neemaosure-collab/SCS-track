1. Auditing the stock tool before touching code exposed three silent row drops and a hardcoded gateway key that passing unit tests completely hid.
2. Removing the SMS API key by hand and moving it to process.env.SMS_API_KEY kept credentials out of AI prompts, though rotating the exposed key at the gateway is still required because it remains in Git history.
3. Writing a failing test for grinding discs at 20 vs 20 stock before prompting for the <= patch proved the fix targeted the exact boundary defect without rewriting unrelated functions.
4. Adding GEMINI.md rules and a bounded weekly-reorder-check skill gave the agent clear guardrails on a separate scs3.6-agent branch while keeping main clean.
5. Logging each agent proposal live made it easy to reject out-of-scope edits to send-sms.js before they could pollute the branch.
6. Least careful check on my own patch: I checked wrong versions least carefully on my own patch because I only tested on Node v22.22.1; running the test suite under an older LTS runtime (such as Node 18 or Node 20 via nvm or Docker) would tell me whether Object.groupBy or test APIs break on older Node versions.

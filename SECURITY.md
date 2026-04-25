# Security Policy

## No Secrets in This Repository

This is a public repository. Do not commit:

- `.env` files or any environment variables
- API keys, tokens, or credentials
- Private configuration values
- Internal deployment scripts or CI secrets

If you accidentally commit sensitive data, rotate the credential immediately and contact a maintainer.

## Responsible Disclosure

If you discover a security vulnerability in the GoWin Tools website ([gowin.tools](https://gowin.tools)):

1. **Do not** open a public GitHub issue.
2. Open a [GitHub Issue](../../issues) marked **Security** with as little detail as possible.
3. We will contact you to arrange private disclosure.

We appreciate responsible disclosure and will acknowledge contributors who report valid vulnerabilities.

## Scope

The GoWin Tools website processes all data locally in the user's browser. There is no backend server, database, or user account system, which significantly limits the attack surface. Common concerns:

| Concern | Status |
|---|---|
| Server-side data leaks | Not applicable — no server processes user data |
| Authentication bypass | Not applicable — no login system |
| SQL injection | Not applicable — no database |
| XSS via stored content | Not applicable — no user content is stored or served back |
| Client-side data exposure | In scope — please report |

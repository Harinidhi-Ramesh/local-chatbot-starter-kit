# Contributing to Local Chatbot Starter Kit

Thanks for your interest in contributing! This guide covers how to pick up an issue and submit your changes. For setup instructions and background concepts, see [RESOURCES.md](./RESOURCES.md) first.

## Before you start

1. Complete the setup steps in RESOURCES.md and confirm the chatbot works end-to-end on your own machine.
2. Browse the **[Issues](../../issues)** tab and find one that matches your interest and comfort level. Labels indicate difficulty (`easy` / `medium` / `hard`) and type (Feature, Bug, Frontend, Docs, Testing, AI/logic, Enhancement, Integration).
3. Comment on the issue to let others know you're working on it, so effort isn't duplicated.
4. If you have questions about an issue, ask in the issue's comments before starting — it's faster than guessing.

## How to submit your changes

**1. Fork this repository**
Click the "Fork" button at the top of the GitHub page to create your own copy.

**2. Clone your fork**
```
git clone https://github.com/YOUR-USERNAME/local-chatbot-starter-kit.git
cd local-chatbot-starter-kit
```

**3. Create a new branch**
Use a short, descriptive branch name related to your change:
```
git checkout -b add-clear-chat-button
```

**4. Make your changes**
- Keep changes focused on the issue you picked — avoid unrelated edits in the same PR.
- Follow the existing code style (see below).
- Test your change locally before committing (run the backend + frontend and confirm it works as expected).

**5. Commit your changes**
Write clear, specific commit messages:
```
git add .
git commit -m "Add clear chat button to frontend"
```
Avoid vague messages like "fix stuff" or "update".

**6. Push to your fork**
```
git push origin add-clear-chat-button
```

**7. Open a Pull Request**
Go to your fork on GitHub, click "Compare & pull request". In the description:
- Reference the issue number (e.g., "Closes #4")
- Briefly explain what you changed and why
- Include a screenshot if it's a visual/frontend change

**8. Respond to review feedback**
A maintainer will review your PR and may suggest changes — this is a normal part of the process, not a rejection. Push additional commits to the same branch to update your PR.

## Code style guidelines

- **Java (backend):** Follow standard Java naming conventions (camelCase for variables/methods, PascalCase for classes). Add a short comment explaining the *why* for any non-obvious logic — see the existing code in `ChatServer.java` for the expected level of detail.
- **JavaScript/HTML/CSS (frontend):** Keep it in vanilla JS — no frameworks (React, Vue, etc.) for this project, to keep it approachable for beginners. Use clear, descriptive variable and function names.
- **Comments:** Explain *why*, not just *what*. Avoid restating obvious code in comments.

## Reporting bugs or suggesting features

If you find a bug or have an idea that isn't already covered by an open issue, feel free to open a new one:
1. Go to the **Issues** tab → **New issue**
2. Give it a clear, specific title
3. Describe the problem or idea, with steps to reproduce if it's a bug
4. A maintainer will add appropriate labels

## Questions?

If something in the setup or an issue is unclear, open an issue tagged `Docs` — improving documentation clarity is itself a valid and welcome contribution.

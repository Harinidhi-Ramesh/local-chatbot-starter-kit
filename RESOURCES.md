# RESOURCES.md

## 1. What is this project?

This is the **Local Chatbot Starter Kit** — a simple chat web app that talks to an AI model running entirely on your own computer (no internet needed after setup, no API keys, no cost).

It has two parts:
- A **backend** (plain Java) that receives your message, forwards it to a locally-running AI model via **Ollama**, and sends the reply back.
- A **frontend** (HTML, CSS, vanilla JavaScript) — the chat window you actually type into and see replies in.

Think of it as a tiny, simplified version of ChatGPT — except the "brain" (the AI model) is an open-source model already built by someone else, running for free on your machine. Nothing here trains or builds an AI model from scratch; this project is about building the plumbing that lets you talk to one.

## 2. Concepts you need to know

You don't need to know these in depth before starting — this project is a good way to learn them by doing. But here's a quick primer:

- **REST API** — a way for two programs to talk to each other over HTTP, by sending requests to a specific URL and getting a response back. Our backend exposes one: `POST /chat`.
- **JSON** — a text format for structuring data as key-value pairs, e.g. `{"message": "hello"}`. Used for all the data passed between frontend, backend, and Ollama.
- **Local LLM (Large Language Model)** — an AI model that runs on your own hardware instead of a company's cloud servers. Ollama is the tool that makes this easy.
- **CORS (Cross-Origin Resource Sharing)** — a browser security rule that blocks a webpage from calling a server unless that server explicitly allows it. You'll see this handled in the backend code.
- **Client-server architecture** — the general pattern where a "client" (our frontend) sends requests to a "server" (our backend), which does work and responds.

## 3. Prerequisites

- Basic understanding of **any** programming language (the backend is Java, the frontend is HTML/CSS/JavaScript, but the concepts transfer)
- A computer with at least 8GB RAM (for running the AI model smoothly)
- Comfortable using a terminal/command line for basic commands
- Git and GitHub basics (clone, commit, push, pull request) — if you're new to this, see the "How to submit your PR" section below

## 4. Setup

**Step 1: Install Ollama**
Download and install from [ollama.com](https://ollama.com). This is the tool that runs the AI model locally.

**Step 2: Pull the model**
Open a terminal and run:
```
ollama pull llama3.2:1b
```
This downloads a small AI model (a few hundred MB) to your computer.

**Step 3: Confirm Ollama works**
```
ollama run llama3.2:1b
```
Type a question, confirm you get an answer. Type `/bye` to exit.

**Step 4: Run the backend**
```
cd backend
javac -cp "lib/*" ChatServer.java
java -cp ".:lib/*" ChatServer
```
You should see: `Server is running on http://localhost:8080/chat`

**Step 5: Run the frontend**
Open `frontend/index.html` using a local server (e.g., the "Live Server" extension in VS Code) rather than double-clicking the file directly — this avoids some browser quirks.

**Step 6: Chat!**
Type a message in the browser window. You should get a real AI-generated reply within a few seconds.

## 5. Recommended reading

- [Ollama official documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — the API our backend talks to
- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — how the frontend sends messages to the backend
- [MDN: What is CORS?](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) — why the backend needs specific headers to allow browser requests
- [Baeldung: Java HttpClient](https://www.baeldung.com/java-9-http-client) — the tool the backend uses to call Ollama
- [Jackson databind basics](https://www.baeldung.com/jackson-object-mapper-tutorial) — how the backend safely builds/reads JSON

## 6. Recommended videos

- Search "Ollama tutorial for beginners" on YouTube for a visual walkthrough of installing and running models
- Search "REST API explained simply" for a quick primer on the client-server request/response pattern
- Search "CORS explained" for a short visual explanation of why browsers block cross-origin requests

## 7. Glossary

| Term | Meaning |
|---|---|
| **Ollama** | A tool that runs open-source AI models locally on your computer |
| **Prompt** | The text/question you send to the AI model |
| **Model** | The actual AI "brain" (e.g., `llama3.2:1b`) that generates responses |
| **Endpoint** | A specific URL a server listens on for requests (e.g., `/chat`) |
| **JSON** | A text format for structured data, e.g. `{"key": "value"}` |
| **Preflight request** | A browser's automatic "permission check" sent before certain real requests |
| **Hallucination** | When an AI model confidently states something incorrect or made up |
| **Knowledge cutoff** | The date after which an AI model has no information, since it stopped learning at training time |

## 8. Useful tools

- **Ollama** — runs the AI model locally
- **curl** — a command-line tool for testing API endpoints directly, without a browser
- **VS Code + Live Server extension** — for running the frontend locally with auto-reload
- **Browser DevTools (Inspect → Console)** — for viewing errors from the frontend, especially CORS/network issues
- **Postman** (optional) — a visual alternative to curl for testing API requests

## 9. Before you pick an issue

- Make sure you've completed the full **Setup** section above and gotten the chatbot working end-to-end on your own machine first.
- Check the issue's labels for its difficulty (`easy` / `medium` / `hard`) and type (Feature, Bug, Frontend, Docs, etc.) to find something matching your comfort level.
- Comment on the issue to say you're picking it up, so two people don't accidentally work on the same thing.
- If anything in this document is unclear or something didn't work as described, that's valuable feedback — feel free to open an issue about the documentation itself.

## 10. How to submit your PR

1. **Fork** this repository (click "Fork" on the GitHub page)
2. **Clone** your fork to your computer:
   ```
   git clone https://github.com/YOUR-USERNAME/local-chatbot-starter-kit.git
   ```
3. Create a new branch for your change:
   ```
   git checkout -b your-feature-name
   ```
4. Make your changes, then stage and commit them:
   ```
   git add .
   git commit -m "Add: short description of your change"
   ```
5. Push your branch to your fork:
   ```
   git push origin your-feature-name
   ```
6. Go to the original repository on GitHub and click **"Compare & pull request"**
7. Fill in a short description of what you changed and why, then submit the PR
8. A maintainer will review it and may ask for small changes before merging — this is normal, not a rejection!

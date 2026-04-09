"""Ask OpenAI to suggest creative names for the Orange Penguin project."""
import json
import os
import sys
import urllib.request
import urllib.error


def load_env(path: str = ".env") -> dict:
    """Minimal .env parser — no external deps required."""
    env = {}
    if not os.path.exists(path):
        return env
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            env[key.strip()] = value.strip().strip('"').strip("'")
    return env


def main() -> int:
    env = load_env()
    api_key = env.get("OPENAI_API_KEY") or os.environ.get("OPENAI_API_KEY")

    if not api_key or api_key.startswith("sk-REPLACE"):
        print("ERROR: OPENAI_API_KEY is missing or still a placeholder.")
        print("Edit .env and set OPENAI_API_KEY=sk-... with your real key.")
        return 1

    project_description = (
        "a service that builds websites with online booking, "
        "galleries and pricing for beauty salons in Lisbon"
    )
    user_prompt = (
        f"Придумай 3 креативных названия для моего проекта: {project_description}"
    )

    payload = {
        "model": "gpt-4o-mini",
        "messages": [{"role": "user", "content": user_prompt}],
        "temperature": 0.9,
    }

    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        print(f"OpenAI API error {e.code}: {e.read().decode('utf-8', errors='ignore')}")
        return 1
    except urllib.error.URLError as e:
        print(f"Network error: {e.reason}")
        return 1

    answer = data["choices"][0]["message"]["content"]
    print(answer)
    return 0


if __name__ == "__main__":
    sys.exit(main())

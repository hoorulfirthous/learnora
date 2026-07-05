from google import genai
from dotenv import load_dotenv
import os
import json

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise Exception("GEMINI_API_KEY not found.")

client = genai.Client(api_key=API_KEY)


# ==========================================
# SMART NOTES
# ==========================================

def generate_notes(pdf_text: str):

    if not pdf_text.strip():
        return "No text found in the uploaded PDF."

    prompt = f"""
You are an expert teacher.

Generate clean study notes.

Requirements:
- Use headings
- Use bullet points
- Highlight important concepts
- Keep it concise
- Easy for students to revise

Study Material:

{pdf_text[:20000]}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        if hasattr(response, "text") and response.text:
            return response.text

        return "No notes generated."

    except Exception as e:

        print("=" * 60)
        print("NOTES ERROR")
        print(e)
        print("=" * 60)

        return "Failed to generate notes."


# ==========================================
# AI CHAT
# ==========================================

def ask_gemini(context: str, question: str):

    prompt = f"""
You are Learnora AI.

Answer ONLY using the uploaded study material.

Study Material:

{context[:20000]}

Question:

{question}

If the answer is unavailable, reply exactly:

"I couldn't find this information in the uploaded PDF."
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        if hasattr(response, "text") and response.text:
            return response.text

        return "No response generated."

    except Exception as e:

        print("=" * 60)
        print("CHAT ERROR")
        print(e)
        print("=" * 60)

        return "Failed to generate answer."


# ==========================================
# AI QUIZ
# ==========================================

def generate_quiz(pdf_text):

    if not pdf_text.strip():
        return []

    prompt = f"""
You are an expert teacher.

Generate EXACTLY 10 multiple choice questions.

Return ONLY a JSON array.

Example:

[
  {{
    "question":"What is AI?",
    "options":[
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer":"Option B"
  }}
]

Rules:

- Exactly 10 questions
- Exactly 4 options
- Answer must exactly match one option
- No markdown
- No explanation
- No code block
- JSON only

Study Material:

{pdf_text[:20000]}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        return json.loads(text)

    except Exception as e:

        print("=" * 60)
        print("QUIZ ERROR")
        print(e)
        print("=" * 60)

        return []


# ==========================================
# AI FLASHCARDS
# ==========================================

def generate_flashcards(pdf_text):

    if not pdf_text.strip():
        return []

    prompt = f"""
You are an expert teacher.

Generate EXACTLY 15 revision flashcards.

Return ONLY a JSON array.

Example:

[
    {{
        "question":"What is Artificial Intelligence?",
        "answer":"Artificial Intelligence is the simulation of human intelligence by machines."
    }},
    {{
        "question":"What is Machine Learning?",
        "answer":"Machine Learning is a subset of AI that learns from data."
    }}
]

Rules:

- Exactly 15 flashcards
- Keep answers short (1-3 sentences)
- Questions should be exam-oriented
- No markdown
- No explanation
- No code block
- JSON only

Study Material:

{pdf_text[:20000]}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        return json.loads(text)

    except Exception as e:

        print("=" * 60)
        print("FLASHCARD ERROR")
        print(e)
        print("=" * 60)

        return []
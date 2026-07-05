import re

def generate_quiz(text: str):

    sentences = re.split(r'(?<=[.!?])\s+', text)

    quiz = []

    for sentence in sentences:

        sentence = sentence.strip()

        if len(sentence) < 25:
            continue

        quiz.append({

            "question": sentence,

            "options": [
                "True",
                "False"
            ],

            "answer": "True"

        })

        if len(quiz) == 10:
            break

    return quiz
import re

def generate_notes(text: str):
    """
    Simple notes generator.
    Splits text into sentences and returns important points.
    """

    sentences = re.split(r'(?<=[.!?])\s+', text)

    notes = []

    for sentence in sentences:
        sentence = sentence.strip()

        if len(sentence) > 40:
            notes.append("• " + sentence)

    return notes[:15]
import random

from qg.automatic_question_generator import AutomaticQuestionGenerator


class QuestionGenerator:
    def __init__(self, text):
        if text is None:
            raise Exception("Can't receive and empty text")
        self.text = text

    def get_questions(self):
        aqg = AutomaticQuestionGenerator(text=self.text)
        questions = aqg.parse()
        if len(questions) >= 10:
            final_questions = random.sample(questions, 10)
        elif 5 <= len(questions) < 10:
            final_questions = random.sample(questions, 5)
        else:
            final_questions = questions
        return final_questions

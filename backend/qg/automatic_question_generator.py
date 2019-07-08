# created with the help of:
# https://github.com/dipta1010/Automatic-Question-Generator
from qg.exceptions import AutomaticQuestionGeneratorException, SpacyImportError, QuestionFormation
from qg.helpers import name_entry_recognizer_tagger, clean_up_text
from qg.identification import Identification
import nltk


class AutomaticQuestionGenerator(object):
    def __init__(self, text):
        # save the text in a class variable
        if text is None:
            raise AutomaticQuestionGeneratorException('Text should not be empty')

        self.text = clean_up_text(text)

        # load spacy library
        try:
            import spacy
            self.nlp = spacy.load("en_core_web_sm")
            nltk.download('punkt')
            nltk.download('averaged_perceptron_tagger')
        except Exception:
            raise SpacyImportError('Spacy packages did\' install correctly')

        # split the text into sentences
        self.sentences = text.split(".")

        self.questions = []

    def parse(self):
        # create a variable for storing the final questions
        questions = []

        # create a dictionary for storing the answers for the questions:
        answers = {1: '', 2: '', 3: ''}
        if len(self.sentences) != 0:
            for sentence_index in range(len(self.sentences)):
                sentence_segment = self.sentences[sentence_index].split(",")
                name_entry_recognition = name_entry_recognizer_tagger(nlp=self.nlp,
                                                                      sentence=self.sentences[sentence_index])
                if len(sentence_segment) != 0:
                    from qg.clause import QuestionsGeneratorTypes as QG
                    for segment_index in range(len(sentence_segment)):
                        try:
                            questions += QG.how_much2(sentence_segment, segment_index, name_entry_recognition)
                        except Exception:
                            pass

                        if Identification.clause_identify(sentence_segment[segment_index]) == 1:
                            try:
                                questions += QG.whom_1(sentence_segment, segment_index, name_entry_recognition)
                            except Exception:
                                pass

                            try:
                                questions += QG.whom_2(sentence_segment, segment_index, name_entry_recognition)
                            except Exception:
                                pass

                            try:
                                questions += QG.whom_3(sentence_segment, segment_index, name_entry_recognition)
                            except Exception:
                                pass

                            try:
                                questions += QG.whose(sentence_segment, segment_index, name_entry_recognition)
                            except Exception:
                                pass

                            try:
                                questions += QG.who(sentence_segment, segment_index, name_entry_recognition)
                            except Exception:
                                pass

                            try:
                                questions += QG.how_much1(sentence_segment, segment_index, name_entry_recognition)
                            except Exception:
                                pass
                        else:
                            try:
                                subject = Identification.subject_phrase_search(sentence_segment, segment_index)
                            except Exception:
                                subject = ""

                            if len(subject) != 0:
                                sentence_segment[segment_index] = subject + sentence_segment[segment_index]

                                try:
                                    questions += QG.whom_1(sentence_segment, segment_index, name_entry_recognition)
                                except Exception:
                                    pass

                                try:
                                    questions += QG.whom_2(sentence_segment, segment_index, name_entry_recognition)
                                except Exception:
                                    pass

                                try:
                                    questions += QG.whom_3(sentence_segment, segment_index, name_entry_recognition)
                                except Exception:
                                    pass

                                try:
                                    questions += QG.whose(sentence_segment, segment_index, name_entry_recognition)
                                except Exception:
                                    pass

                                try:
                                    questions += QG.who(sentence_segment, segment_index, name_entry_recognition)
                                except Exception:
                                    pass
                questions.append('\n')
        self.questions = questions
        self.clean_questions()
        return self.questions

    def clean_questions(self):
        i = 0
        while i < len(self.questions):
            if self.questions[i] == '\n' or len(self.questions[i]) > 100:
                del self.questions[i]
            else:
                i += 1

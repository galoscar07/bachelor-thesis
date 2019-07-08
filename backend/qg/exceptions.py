class QuestionGeneratorBaseException(Exception):
    pass


class AutomaticQuestionGeneratorException(QuestionGeneratorBaseException):
    pass


class SpacyImportError(QuestionGeneratorBaseException):
    pass


class QuestionFormation(QuestionGeneratorBaseException):
    pass


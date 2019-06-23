import spacy


class Tokenizer(object):
    def __init__(self, path=None, text=None):
        self.path = path
        self.text = text
        self.text_length = 0
        self.token_list = []

        self.load_text()
        self.tokenize()

    def load_text(self):
        # If a path to a file was given load the file in memory to work woth it
        if self.path:
            self.text = ''
            try:
                with open(self.path, 'r') as file:
                    for line in file:
                        self.text += line
            except Exception as e:
                raise Exception(e)

            self.text = self.text.replace('\n', '')
            self.text_length = len(self.text)

        # If a text was given to the tokenizer make modification and leave it like that
        elif self.text:
            self.text = self.text.replace('\n', ' ')
            self.text_length = len(self.text)

        # If we got here something when wrong
        else:
            raise Exception("Something went wrong when the input was given")

    def tokenize(self):
        nlp = spacy.load('en_core_web_sm')
        self.token_list = nlp(self.text)

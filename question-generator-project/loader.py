from builtins import FileNotFoundError

from exceptions.loader_exception import LoaderException


class AbstractLoader(object):
    def __init__(self, path=None, text=None):
        self._path = path
        self._text = text
        self._read(path, text)

    def __str__(self):
        return None

    def _read(self, path=None, text=None):
        raise NotImplemented


class TextFileLoader(AbstractLoader):
    def _read(self, path=None, text=None):
        text = ''
        try:
            with open(path, 'r') as file:
                for line in file:
                    text += line
        except FileNotFoundError:
            raise LoaderException("Path was not found")

        self.text = text.replace('\n', ' ')
        self.text_length = len(self.text)

    def __str__(self):
        return "Text length: %s \n" \
               "Loaded text is: %s" % (self.text_length, self.text)


class TextLoader(AbstractLoader):
    def _read(self, path=None, text=None):
        self.text = text
        self.text_length = len(self.text)

    def __str__(self):
        return "Text length: %s \n" \
               "Loaded text is: %s" % (self.text_length, self.text)
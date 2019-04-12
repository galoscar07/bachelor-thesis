import nltk


class AbstractAnalyzer(object):
    def __init__(self, text_loader):
        self.text_loader = text_loader
        self.frequency_distribution = None

    def lexical_diversity(self):
        raise NotImplemented

    def percentage(self, token):
        raise NotImplemented

    def get_token_frequency(self, token):
        raise NotImplemented


class TextAnalyzerRaw(AbstractAnalyzer):
    def __init__(self, text_loader):
        super(TextAnalyzerRaw, self).__init__(text_loader=text_loader)

        self._vocabulary = set(self.text_loader.text)
        self._word_tokens = nltk.word_tokenize(self.text_loader.text)
        self._sentence_tokens = nltk.sent_tokenize(self.text_loader.text)

    def lexical_diversity(self):
        diversity = len(self._vocabulary) / self.text_loader.length
        return '{0:.3g}'.format(diversity)

    def percentage(self, token):
        percentage = 100 * self.text_loader.text.count(token) / self.text_loader.length
        return '{0:.3g}'.format(percentage)

    def average_sentence_length(self):
        num_words = len(self._word_tokens)
        num_sents = len(self._sentence_tokens)
        return round(num_words / num_sents)

    def _init_frequency_distribution(self):
        if not self.frequency_distribution:
            self.frequency_distribution = nltk.FreqDist(self.text_loader.text)

    def get_token_frequency(self, token):
        self._init_frequency_distribution()
        return self.frequency_distribution[token]

    def get_n_most_frequent_tokens(self, number_of_tokens):
        self._init_frequency_distribution()
        return self.frequency_distribution.most_common(number_of_tokens)
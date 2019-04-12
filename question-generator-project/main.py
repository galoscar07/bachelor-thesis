from analyzer import TextAnalyzerRaw
from loader import TextFileLoader


if __name__ == '__main__':
    text_loader = TextFileLoader(path='text.txt')
    raw_analyzer = TextAnalyzerRaw(text_loader=text_loader)
    print("Vocabulary: %s \n"
          "Words: %s \n"
          "Sentences: %s\n"
          "Lexical Diversity: %s\n"
          "\n"
          "\n"
          "\n")

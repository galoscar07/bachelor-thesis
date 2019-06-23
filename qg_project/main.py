from tokenizer import Tokenizer

if __name__ == '__main__':
    print("Hello World")
    tokenizer = Tokenizer(text="Apple is looking at buying U.K. startup for $1 billion")
    for token in tokenizer.token_list:
        print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
              token.shape_, token.is_alpha, token.is_stop)
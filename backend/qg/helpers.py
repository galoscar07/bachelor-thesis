def clean_up_text(text):
    # get rid of the "enters"
    text = text.replace('\n', ' ')
    # usually * is used for lists enum so we will make sentences out of those enum
    text = text.replace("*", '.')

    return text


def name_entry_recognizer_tagger(nlp, sentence):

    doc = nlp(sentence)

    final_list = []
    array = [[]]
    for word in doc:
        array[0] = 0
        for ner in doc.ents:
            if ner.text == word.text:
                final_list.append((word.text, ner.label_))
                array[0] = 1
        if array[0] == 0:
            final_list.append((word.text, 'O'))

    return final_list

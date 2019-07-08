import nltk

from qg.identification import Identification


class QuestionsGeneratorTypes:
    @staticmethod
    def whom_1(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tag = nltk.pos_tag(tokens)
        grammar_rule = r"chunk:{<TO>+<DT>?<RB.?>*<JJ.?>*<NN.?|PRP|PRP\$|VBG|DT|POS|CD|VBN>+}"
        chunk_parser = nltk.RegexpParser(grammar=grammar_rule)
        chunked = chunk_parser.parse(tag)

        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []

        if len(first_list) != 0:
            for chunk_index in range(len(chunked)):
                first_string = ""
                second_string = ""
                third_string = ""
                if chunk_index in first_list:
                    for i in range(chunk_index):
                        if i in first_list:
                            first_string += Identification.get_chunk(chunked[i])
                        else:
                            first_string += (chunked[i][0] + " ")
                    for i in range(chunk_index+1, len(chunked)):
                        if i in first_list:
                            third_string += Identification.get_chunk(chunked[i])
                        else:
                            third_string += (chunked[i][0] + " ")

                    if chunked[chunk_index][1][1] == 'PRP':
                        second_string += " to whom "
                    else:
                        for j in range(len(chunked[chunk_index])):
                            if chunked[chunk_index][j][1] in ["NNP", "NNPS", "NNS", "NN"]:
                                break

                        for k in range(len(number)):
                            if name_recognition[k][0] == chunked[chunk_index][j][0]:
                                if name_recognition[k][1] == "PERSON":
                                    second_string += " to whom "
                                elif name_recognition[k][1] in ["LOC", "ORG", "GPE"]:
                                    second_string += " where "
                                elif name_recognition[k][1] in ["TIME", "DATE"]:
                                    second_string += " when "
                                else:
                                    second_string += " to what"
                    tok = nltk.word_tokenize(first_string)
                    tagger = nltk.pos_tag(tok)
                    grammar = "chunk:{<EX>?<DT>?<JJ.?>*<NN.?|PRP|PRP\$|POS|IN|DT|CC|VBG|VBN>+<RB.?>*<VB.?|MD|RP>+}"
                    chunk_parser = nltk.RegexpParser(grammar)
                    chunked1 = chunk_parser.parse(tagger)

                    second_list = Identification.chunk_search(first_string, chunked1)
                    if len(second_list) != 0:
                        m = second_list[len(second_list) - 1]
                        string_4 = Identification.get_chunk(chunked1[m])
                        string_4 = Identification.verbphrase_identity(string_4)
                        string_5 = ""
                        string_6 = ""

                        for k in range(m):
                            if k in second_list:
                                string_5 += Identification.get_chunk(chunked1[k])
                            else:
                                string_5 += (chunked1[k][0] + " ")
                        for k in range(m + 1, len(chunked1)):
                            if k in second_list:
                                string_6 += Identification.get_chunk(chunked1[k])
                            else:
                                string_6 += (chunked1[k][0] + " ")

                        st = string_5 + second_string + string_4 + string_6 + third_string
                        for l in range(number+1, len(segment_set)):
                            st += ("," + segment_set[l])
                        st += "?"
                        st = Identification.post_process(st)
                        third_list.append(st)
        return third_list

    @staticmethod
    def whom_2(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tag = nltk.pos_tag(tokens)
        grammar_rule = r"chunk:{<IN>+<DT>?<RB.?>*<JJ.?>*<NN.?|PRP|PRP\$|POS|VBG|DT|CD|VBN>+}"
        chunk_parser = nltk.RegexpParser(grammar=grammar_rule)
        chunked = chunk_parser.parse(tag)

        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []

        if len(first_list) != 0:
            for chunk_index in range(len(chunked)):
                first_string = ""
                second_string = ""
                third_string = ""
                if chunk_index in first_list:
                    for i in range(chunk_index):
                        if i in first_list:
                            first_string += Identification.get_chunk(chunked[i])
                        else:
                            first_string += (chunked[i][0] + " ")
                    for i in range(chunk_index + 1, len(chunked)):
                        if i in first_list:
                            third_string += Identification.get_chunk(chunked[i])
                        else:
                            third_string += (chunked[i][0] + " ")

                    if chunked[chunk_index][1][1] == 'PRP':
                        second_string += " " + chunked[chunk_index][0][0] + " whom "
                    else:
                        for j in range(len(chunked[chunk_index])):
                            if chunked[chunk_index][j][1] in ["NNP", "NNPS", "NNS", "NN"]:
                                break

                        for k in range(len(number)):
                            if name_recognition[k][0] == chunked[chunk_index][j][0]:
                                if name_recognition[k][1] == "PERSON":
                                    second_string += " " + chunked[chunk_index][0][0] + " whom "
                                elif name_recognition[k][1] in ["LOC", "ORG", "GPE"]:
                                    second_string += " where "
                                elif name_recognition[k][1] in ["TIME", "DATE"]:
                                    second_string += " when "
                                else:
                                    second_string += " " + chunked[chunk_index][0][0] + " what "
                    tok = nltk.word_tokenize(first_string)
                    tagger = nltk.pos_tag(tok)
                    grammar = "chunk:{<EX>?<DT>?<JJ.?>*<NN.?|PRP|PRP\$|POS|IN|DT|CC|VBG|VBN>+<RB.?>*<VB.?|MD|RP>+}"
                    chunk_parser = nltk.RegexpParser(grammar)
                    chunked1 = chunk_parser.parse(tagger)

                    second_list = Identification.chunk_search(first_string, chunked1)
                    if len(second_list) != 0:
                        m = second_list[len(second_list) - 1]
                        string_4 = Identification.get_chunk(chunked1[m])
                        string_4 = Identification.verbphrase_identity(string_4)
                        string_5 = ""
                        string_6 = ""

                        for k in range(m):
                            if k in second_list:
                                string_5 += Identification.get_chunk(chunked1[k])
                            else:
                                string_5 += (chunked1[k][0] + " ")
                        for k in range(m + 1, len(chunked1)):
                            if k in second_list:
                                string_6 += Identification.get_chunk(chunked1[k])
                            else:
                                string_6 += (chunked1[k][0] + " ")

                        st = string_5 + second_string + string_4 + string_6 + third_string
                        for l in range(number + 1, len(segment_set)):
                            st += ("," + segment_set[l])
                        st += "?"
                        st = Identification.post_process(st)
                        third_list.append(st)
        return third_list

    @staticmethod
    def whom_3(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tag = nltk.pos_tag(tokens)
        grammar_rule = r"chunk:{<VB.?|MD|RP>+<DT>?<RB.?>*<JJ.?>*<NN.?|PRP|PRP\$|POS|VBG|DT|CD|VBN>+}"
        chunk_parser = nltk.RegexpParser(grammar=grammar_rule)
        chunked = chunk_parser.parse(tag)

        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []

        if len(first_list) != 0:
            for chunk_index in range(len(chunked)):
                first_string = ""
                second_string = ""
                third_string = ""
                if chunk_index in first_list:
                    for i in range(chunk_index):
                        if i in first_list:
                            first_string += Identification.get_chunk(chunked[i])
                        else:
                            first_string += (chunked[i][0] + " ")
                    for i in range(chunk_index + 1, len(chunked)):
                        if i in first_list:
                            third_string += Identification.get_chunk(chunked[i])
                        else:
                            third_string += (chunked[i][0] + " ")

                    if chunked[chunk_index][1][1] == 'PRP':
                        second_string += " whom "
                    else:
                        for j in range(len(chunked[chunk_index])):
                            if chunked[chunk_index][j][1] in ["NNP", "NNPS", "NNS", "NN"]:
                                break

                        for k in range(len(number)):
                            if name_recognition[k][0] == chunked[chunk_index][j][0]:
                                if name_recognition[k][1] == "PERSON":
                                    second_string += " whom "
                                elif name_recognition[k][1] in ["LOC", "ORG", "GPE"]:
                                    second_string += " what "
                                elif name_recognition[k][1] in ["TIME", "DATE"]:
                                    second_string += " what time "
                                else:
                                    second_string += " what"

                    strx = Identification.get_chunk(chunked[chunk_index])
                    tok = nltk.word_tokenize(strx)
                    tag = nltk.pos_tag(tok)
                    gram = r"chunk:{<VB.?|MD>+}"
                    chunk_parser = nltk.RegexpParser(gram)
                    chunked1 = chunk_parser.parse(tag)
                    strx = Identification.get_chunk(chunked1[0])

                    first_string += strx

                    tok = nltk.word_tokenize(first_string)
                    tagger = nltk.pos_tag(tok)
                    grammar = "chunk:{<EX>?<DT>?<JJ.?>*<NN.?|PRP|PRP\$|POS|IN|DT|CC|VBG|VBN>+<RB.?>*<VB.?|MD|RP>+}"
                    chunk_parser = nltk.RegexpParser(grammar)
                    chunked1 = chunk_parser.parse(tagger)

                    second_list = Identification.chunk_search(first_string, chunked1)
                    if len(second_list) != 0:
                        m = second_list[len(second_list) - 1]
                        string_4 = Identification.get_chunk(chunked1[m])
                        string_4 = Identification.verbphrase_identity(string_4)
                        string_5 = ""
                        string_6 = ""

                        for k in range(m):
                            if k in second_list:
                                string_5 += Identification.get_chunk(chunked1[k])
                            else:
                                string_5 += (chunked1[k][0] + " ")
                        for k in range(m + 1, len(chunked1)):
                            if k in second_list:
                                string_6 += Identification.get_chunk(chunked1[k])
                            else:
                                string_6 += (chunked1[k][0] + " ")

                        st = string_5 + second_string + string_4 + string_6 + third_string
                        for l in range(number + 1, len(segment_set)):
                            st += ("," + segment_set[l])
                        st += "?"
                        st = Identification.post_process(st)
                        third_list.append(st)
        return third_list

    @staticmethod
    def whose(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tagger = nltk.pos_tag(tokens)
        grammar = r"chunk:{<DT|NN.?>*<PRP\$|POS>+<RB.?>*<JJ.?>*<NN.?|VBG|VBN>+<RB.?>*<VB.?|MD|RP>+}"
        chunk_parser = nltk.RegexpParser(grammar=grammar)
        chunked = chunk_parser.parse(tagger)

        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []

        if len(first_list) != 0:
            for chunk_index in range(len(chunked)):
                if chunk_index in first_list:
                    first_string = ""
                    second_string = ""
                    third_string = ""
                    for k in range(chunk_index):
                        if k in first_list:
                            first_string += Identification.get_chunk(chunked[k])
                        else:
                            first_string += (chunked[k][0] + ' ')

                    first_string += ' whose '

                    for k in range(chunk_index + 1, len(chunked)):
                        if k in first_list:
                            third_string += Identification.get_chunk(chunked[k])
                        else:
                            third_string += (chunked[k][0] + ' ')

                    if chunked[chunk_index][1][1] == 'POS':
                        for k in range(2, len(chunked[chunk_index])):
                            second_string += (chunked[chunk_index][k][0] + ' ')

                    if chunked[chunk_index][0][1] == 'PRP$':
                        for k in range(1, len(chunked[chunk_index])):
                            second_string += (chunked[chunk_index][k][0] + ' ')

                    second_string = first_string + second_string + third_string

                    forth_string = ''
                    for l in range(0, len(segment_set)):
                        if l < number:
                            forth_string += (segment_set[l] + ',')
                        if l > number:
                            forth_string += (',' + segment_set[l])

                    second_string += forth_string + second_string
                    second_string += '?'
                    second_string = Identification.post_process(second_string)
                    third_list.append(second_string)
        return third_list

    @staticmethod
    def who(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tagger = nltk.pos_tag(tokens)
        grammar = r"chunk:{<EX>?<DT>?<JJ.?>*<NN.?|PRP|PRP\$|POS|IN|DT|CC|VBG|VBN>+<RB.?>*<VB.?|MD|RP>+}"
        chunk_parser = nltk.RegexpParser(grammar)
        chunked = chunk_parser.parse(tagger)
        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []
        if len(first_list) != 0:
            for chunk_index in range(len(first_list)):
                m = first_list[chunk_index]
                first_string = ''
                for k in range(m + 1, len(chunked)):
                    if k in first_list:
                        first_string += Identification.get_chunk(chunked[k])
                    else:
                        first_string += (chunked[k][0] + " ")

                second_string = Identification.get_chunk(chunked[m])
                tokens = nltk.word_tokenize(second_string)
                tagger = nltk.pos_tag(tokens)

                for m11 in range(len(tagger)):
                    if tagger[m11][1] in ['NNP', 'NNPS', 'NNS', 'NN']:
                        break
                s11 = ' who '
                for m12 in range(len(name_recognition)):
                    if name_recognition[m12][0] == tagger[m11][0]:
                        if name_recognition[m12][1] == 'LOC':
                            s11 = ' which place '
                        elif name_recognition[m12][1] == 'ORG':
                            s11 = ' who '
                        elif name_recognition[m12][1] in ['DATE', 'TIME']:
                            s11 = ' what time '
                        else:
                            s11 = ' who '
                grammar = r"chunk:{<RB.?>*<VB.?|MD|RP>+}"
                chunk_parser = nltk.RegexpParser(grammar)
                chunked1 = chunk_parser.parse(tagger)
                list2 = Identification.chunk_search(second_string, chunked1)
                if len(list2) != 0:
                    second_string = Identification.get_chunk(chunked1[list2[0]])
                    second_string = s11 + second_string
                    for k in range(list2[0] + 1, len(chunked1)):
                        if k in list2:
                            second_string += Identification.get_chunk(chunked[k])
                        else:
                            second_string += (chunked[k][0] + " ")
                    second_string += (" " + first_string)
                    tok_1 = nltk.word_tokenize(second_string)
                    second_string = ""
                    for h in range(len(tok_1)):
                        if tok_1[h] == "am":
                            second_string += " is "
                        else:
                            second_string += (tok_1[h] + " ")
                    for l in range(number + 1, len(segment_set)):
                        second_string += ("," + segment_set[l])
                    second_string += '?'
                    second_string = Identification.post_process(second_string)
                    third_list.append(second_string)
        return third_list

    @staticmethod
    def how_much1(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tagger = nltk.pos_tag(tokens)
        grammar = r"chunk:{<IN>+<\$>?<CD>+}"
        chunk_parser = nltk.RegexpParser(grammar)
        chunked = chunk_parser.parse(tagger)

        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []

        if len(first_list) != 0:
            for chunk_index in range(len(chunked)):
                first_string = ''
                third_string = ''
                if chunk_index in first_list:
                    for k in range(chunk_index):
                        if k in first_list:
                            first_string += Identification.get_chunk(chunked[k])
                        else:
                            first_string += (chunked[k][0] + " ")

                    for k in range(chunk_index + 1, len(chunked)):
                        if k in first_list:
                            third_string += Identification.get_chunk(chunked[k])
                        else:
                            third_string += (chunked[k][0] + " ")

                    second_string = ' ' + chunked[chunk_index][0][0] + ' how much '

                    tokens = nltk.word_tokenize(first_string)
                    tagger = nltk.pos_tag(tokens)
                    grammar = r"chunk:{<EX>?<DT>?<JJ.?>*<NN.?|PRP|PRP\$|POS|IN|DT|CC|VBG|VBN>+<RB.?>*<VB.?|MD|RP>+}"
                    chunk_parser = nltk.RegexpParser(grammar)
                    chunked1 = chunk_parser.parse(tagger)

                    second_list = Identification.chunk_search(first_string, chunked1)
                    if len(second_list) != 0:
                        m = second_list[len(second_list) - 1]

                        forth_string = Identification.get_chunk(chunked1[m])
                        forth_string = Identification.verbphrase_identity(forth_string)
                        fifth_string = ""
                        sixth_string = ""

                        for k in range(m):
                            if k in second_list:
                                fifth_string += Identification.get_chunk(chunked1[k])
                            else:
                                fifth_string += (chunked1[k][0] + " ")

                        for k in range(m + 1, len(chunked1)):
                            if k in second_list:
                                sixth_string += Identification.get_chunk(chunked1[k])
                            else:
                                sixth_string += (chunked1[k][0] + " ")

                        st = fifth_string + second_string + forth_string + sixth_string + third_string
                        for l in range(number + 1, len(segment_set)):
                            st += ("," + segment_set[l])
                        st += '?'
                        st = Identification.post_process(st)
                        third_list.append(st)
        return third_list

    @staticmethod
    def how_much2(segment_set, number, name_recognition):
        tokens = nltk.word_tokenize(segment_set[number])
        tagger = nltk.pos_tag(tokens)
        grammar = r"chunk:{<\$>*<CD>+<MD>?<VB|VBD|VBG|VBP|VBN|VBZ|RP>+}"
        chunk_parser = nltk.RegexpParser(grammar)
        chunked = chunk_parser.parse(tagger)

        first_list = Identification.chunk_search(segment_set[number], chunked)
        third_list = []

        if len(first_list) != 0:
            for chunk_index in range(len(first_list)):
                m = first_list[chunk_index]
                first_string = ""
                for k in range(m + 1, len(chunked)):
                    if k in first_list:
                        first_string += Identification.get_chunk(chunked[k])
                    else:
                        first_string += (chunked[k][0] + " ")

                second_string = Identification.get_chunk(chunked[m])
                tokens = nltk.word_tokenize(second_string)
                tagger = nltk.pos_tag(tokens)
                grammar = r"chunk:{<RB.?>*<VB.?|MD|RP>+}"
                chunk_parser = nltk.RegexpParser(grammar)
                chunked1 = chunk_parser.parse(tagger)
                s11 = ' how much '

                second_list = Identification.chunk_search(second_string, chunked1)
                if len(second_list) != 0:
                    second_string = Identification.get_chunk(chunked1[second_list[0]])
                    second_string = s11 + second_string
                    for k in range(second_list[0] + 1, len(chunked1)):
                        if k in second_list:
                            second_string += Identification.get_chunk(chunked[k])
                        else:
                            second_string += (chunked[k][0] + " ")
                    second_string += (" " + first_string)

                    tok_1 = nltk.word_tokenize(second_string)
                    second_string = ""
                    for h in range(len(tok_1)):
                        if tok_1[h] == "am":
                            second_string += " is "
                        else:
                            second_string += (tok_1[h] + " ")

                    for l in range(number + 1, len(segment_set)):
                        second_string += ("," + segment_set[l])
                    second_string += '?'

                    second_string = Identification.post_process(second_string)
                    third_list.append(second_string)

        return third_list

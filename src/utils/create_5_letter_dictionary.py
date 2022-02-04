def load_file():
    f = open('words_alpha.txt', 'r')
    content = f.read()
    f.close()
    return content


def create_dictionary():
    file = load_file()
    word_list = str.splitlines(file)
    five_letter_words = [word for word in word_list if len(word) == 5]
    return five_letter_words


def write_dictionary_file():
    words = create_dictionary()
    with open("five_letter_dictionary.json", 'w') as f:
        f.write('{\n')
        for word in words:
            f.write('"'+word+'"'+': 1,\n')
        f.write('}')
    f.close()


write_dictionary_file()

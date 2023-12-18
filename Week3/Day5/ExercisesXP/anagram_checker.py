class AnagramChecker:
    def __init__(self, wordlist_from_file) -> None:
        with open(wordlist_from_file, 'r', encoding='utf-8') as file:
            self.word_list = file.read().splitlines()

    def is_valid_word(self, word) -> bool:
        return word.upper() in self.word_list

    def is_anagram(self, word1, word2) -> bool:
        return sorted(word1.upper()) == sorted(word2.upper())

    def get_anagrams(self, word) -> list:
        return [w for w in self.word_list if self.is_anagram(w, word) and w.upper() != word.upper()]


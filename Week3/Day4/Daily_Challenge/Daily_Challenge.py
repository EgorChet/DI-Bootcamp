import lorem
import string
from nltk.corpus import stopwords

class Text:

    def __init__(self, text_str) -> None:
        self.text_str = text_str

    def frequency_of_word(self, word):
        words = self.string.split()
        count = words.count(word)
        if count:
            return f"The word '{word}' appears {count} times."
        else:
            return f"The word '{word}' does not appear in this text."
        
    def word_frequency(self, word):
        words = self.text_str.split()
        word_count = words.count(word)
        return f"The word '{word}' appears {word_count} times." if word_count > 0 else f"The word {word} not found in text."

    def most_common_word(self):
        words = self.text_str.split()
        return f'Most common word: {max(set(words), key=words.count)}!'

    def unique_words(self):
        words = self.text_str.split()
        return list(set(words))
    
    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()
        return cls(content)
    
text_instance = Text("A good book would sometimes cost as much as a good house.")
print(text_instance.text_str)
print()
print(text_instance.word_frequency('good')) # Frequency of 'good'
print(text_instance.word_frequency('as')) # Frequency of 'as'
print(text_instance.word_frequency('bad')) # Frequency of 'bad'
print()
print(text_instance.most_common_word()) # Most common word
print()
print(text_instance.unique_words()) # List of unique words

# Part II

text_from_file = Text.from_file('the_stranger.txt')
print(text_from_file.text_str)

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)
        self.stop_words = set(stopwords.words('english'))

    def text_without_punctuation(self):
        return self.text_str.translate(str.maketrans('', '', string.punctuation))

    def text_without_stopwords(self):
        return ' '.join([word for word in self.text_str.split() if word.lower() not in self.stop_words])

    def text_without_special_characters(self):
        return ''.join(filter(str.isalnum, self.text_str))
    
# sample_text = "Hello there! This is a test text. Let's see how it works: removing punctuation, stopwords, and special characters."
sample_text = lorem.text()
# Create an instance of TextModification
text_mod_instance = TextModification(sample_text)

# Test text_without_punctuation
print("Text Without Punctuation:")
print(text_mod_instance.text_without_punctuation())
print()

# Test text_without_stopwords
print("Text Without Stopwords:")
print(text_mod_instance.text_without_stopwords())
print()

# Test text_without_special_characters
print("Text Without Special Characters:")
print(text_mod_instance.text_without_special_characters())

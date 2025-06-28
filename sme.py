
def get_most_common_word(sentence): # pass the sentence to the function
    most_common_word ="" # variable to store most common word encountered so far
    number_of_words = 0 # variable to to stroe the count of most common word so far
    words = sentence.split() # turns into a list and defines where break points will be/ default is at space
    frequencies = {}; # an object(js)/dictionary(py)

    for word in words: # iterates through ever item inside the list
        word = word.lower() # changes all to lower case
                
        if word in frequencies: # check if we can encountered the word already
            frequencies[word] +=1 # if we have the frequency increases by 1
        else:
            frequencies[word] =1 # if we haven't then it is added to the dictionary and value is set to 1

    for key, value in frequencies.items(): # iterating through the dictionary looking at both the key and value
        if value > number_of_words: # if the value is the highest number weve seen so far
            number_of_words = value # we want to save it as the new highest
            most_common_word = key # make a note of the word with the highest value so far
    
    # return most_common_word # return the most common word

    return max(frequencies,key=frequencies.get)
    # return just the most common word

sentence = "That that is is that that is not is not is not that it it is"
mostCommon = get_most_common_word(sentence)
print(mostCommon)
# Output: "is"


# "()" ✅
# "())" ❌
# "(())" ✅
# "())(" ❌
# "(())()"

def remove_chars(string_being_checked, start_index, end_index): 
  return string_being_checked[:start_index] + string_being_checked[end_index:]

def is_bracket_matched_v2(bracketString):
    newstring = bracketString
    i = 0
    while len(newstring) > i:
        if i + 1 == len(newstring):
          break

        if newstring[i] == "(" and newstring[i + 1] == ")":
            newstring = remove_chars(newstring, i, i + 2)
            continue
        i += 1
    if len(newstring) == 0:
        return True
    if newstring == bracketString:
        return False
    return is_bracket_matched_v2(newstring)
        
print(is_bracket_matched_v2("())("))
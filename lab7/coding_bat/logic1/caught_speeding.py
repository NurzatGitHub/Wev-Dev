def caught_speeding(speed, is_birthday):
    if is_birthday:
        if speed <= 65:
            return 0
        elif 66 <= speed <= 85:
            return 1
        else:
            return 2         
    else:
        if speed <= 60:
            return 0
        elif 61 <= speed <= 80:
            return 1
        else:
            return 2

# def caught_speeding(speed, is_birthday):
# 	if is_birthday:
# 		inc = 5
# 	else: 
# 		inc = 0
# 	if speed <= 60 + inc:
# 		return 0
# 	elif 61 <= speed <=80 + inc:
# 		return 1
# 	elif speed >= 81 + inc:
# 		return 2
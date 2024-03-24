if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    students.sort(key=lambda x: x[1])

    second_lowest_score = None
    for i in range(1, len(students)):
        if students[i][1] > students[0][1]:
            second_lowest_score = students[i][1]
            break

    names = [student[0] for student in students if student[1] == second_lowest_score]
    names.sort()
    for name in names:
        print(name)

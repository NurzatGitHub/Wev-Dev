if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    arr.sort(reverse=True)

    runner_up_score = None
    for score in arr:
        if score < arr[0]:
            runner_up_score = score
            break

    print(runner_up_score)

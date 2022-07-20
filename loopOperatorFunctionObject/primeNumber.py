import time


n = int(input())


def get_prime_number(n):
    prime_numbers = []
    number = 2

    while len(prime_numbers) < n:
        count_divider = 0
        for i in range(1, number + 1):
            if number % i == 0:
                count_divider += 1

        if count_divider == 2:
            prime_numbers.append(number)

        number += 1

    return prime_numbers


start_time = time.monotonic()
print(get_prime_number(n))
end_time = time.monotonic()
print(end_time - start_time)
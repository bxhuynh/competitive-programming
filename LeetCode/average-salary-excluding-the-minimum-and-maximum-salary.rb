# @param {Integer[]} salary
# @return {Float}
def average(salary)
    sortedSalary = salary.sort()
    sum = salary.reduce(0) { |current, val| current + val}
    sum -= sortedSalary[0]
    sum -= sortedSalary[-1]
    return sum*1.0/(salary.length - 2)
end
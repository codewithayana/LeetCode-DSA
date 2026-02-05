# Write your MySQL query statement below
SELECT e.name AS Employee
from employee e
join employee m
on e.managerId = m.id
where e.salary > m.salary;
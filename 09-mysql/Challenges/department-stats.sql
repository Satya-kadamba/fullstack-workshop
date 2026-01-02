-- Write a query that returns each department with:

-- Total employees
-- Average salary (rounded to 2 decimals)
-- Highest salary
-- Only departments with more than 2 employees
-- Expected columns: department, employee_count, avg_salary, max_salary

select department, count(*) as employee_count, round(avg(salary),2) as avg_salary, max(salary) as max_salary
from employees
group by department
having  count(*)>2;
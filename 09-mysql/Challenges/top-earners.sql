-- Write a query to find the top 3 highest-paid employees per department using window functions.

-- Expected columns: department, name, salary, rank_in_dept

-- Hint: Use ROW_NUMBER() or DENSE_RANK()


SELECT *
FROM (
    SELECT
        department,
        name,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY department
            ORDER BY salary DESC
        ) AS rank_in_dept
    FROM employees
) AS ranked
WHERE rank_in_dept <= 3;


-- Create a user-defined function GetTenureCategory(hire_date DATE) that returns:

-- 'Veteran' if hired more than 5 years ago
-- 'Experienced' if hired 2-5 years ago
-- 'New Hire' if hired less than 2 years ago
-- Then write a query using this function to show all employees with their tenure category.

-- Expected columns: name, hire_date, tenure_category

SELECT
    name,
    hire_date,
    CASE
        WHEN TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) > 5 THEN 'Veteran'
        WHEN TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) BETWEEN 2 AND 5 THEN 'Experienced'
        ELSE 'New Hire'
    END AS tenure_category
FROM employees;

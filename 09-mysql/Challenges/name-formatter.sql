-- Write a query using string functions that returns:

-- Employee name formatted as "LAST, First" (uppercase last name)
-- Email generated as firstname.lastname@company.com (all lowercase)
-- Initials (first letter of first and last name)
-- Expected columns: formatted_name, email, initials
-- Example output: SMITH, John, john.smith@company.com, JS

SELECT
    CONCAT(
        UPPER(SUBSTRING_INDEX(name, ' ', -1)), ', ',
        CONCAT(UCASE(LEFT(name,1)), LOWER(SUBSTRING_INDEX(name, ' ', 1)))
    ) AS formatted_name,
    
    CONCAT(
        LOWER(SUBSTRING_INDEX(name, ' ', 1)), '.', 
        LOWER(SUBSTRING_INDEX(name, ' ', -1)), 
        '@company.com'
    ) AS email,

    CONCAT(
        UPPER(LEFT(name,1)),
        UPPER(LEFT(SUBSTRING_INDEX(name, ' ', -1),1))
    ) AS initials

FROM employees;

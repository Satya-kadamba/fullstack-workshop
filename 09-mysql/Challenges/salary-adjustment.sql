DELIMITER $$

CREATE PROCEDURE AdjustDepartmentSalary(
    IN dept VARCHAR(50),
    IN percent DECIMAL(5,2),
    OUT affected_count INT
)
BEGIN
    IF percent >= 0 THEN
        UPDATE employees
        SET salary = salary * (1 + percent / 100)
        WHERE department = dept;
    END IF;

    SET affected_count = ROW_COUNT();
END$$

DELIMITER ;

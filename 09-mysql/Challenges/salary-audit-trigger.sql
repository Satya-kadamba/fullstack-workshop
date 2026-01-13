CREATE TABLE salary_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    change_percent DECIMAL(5,2),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DELIMITER $$

CREATE TRIGGER trg_salary_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO salary_audit (
            employee_id,
            old_salary,
            new_salary,
            change_percent
        )
        VALUES (
            OLD.employee_id,
            OLD.salary,
            NEW.salary,
            ((NEW.salary - OLD.salary) / OLD.salary) * 100
        );
    END IF;
END$$

DELIMITER ;
INSERT INTO employees (employee_id, name, salary)
VALUES (1, 'Test', 40000);

UPDATE employees
SET salary = 44000
WHERE employee_id = 1;

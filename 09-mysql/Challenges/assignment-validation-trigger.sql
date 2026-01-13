DELIMITER $$

CREATE TRIGGER trg_validate_assignment
BEFORE INSERT ON assignments
FOR EACH ROW
BEGIN
    -- Rule 1: Max 3 projects per employee
    IF (
        SELECT COUNT(*)
        FROM assignments
        WHERE employee_id = NEW.employee_id
    ) >= 3 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Employee cannot be assigned to more than 3 projects';
    END IF;

    -- Rule 2: Max 2080 total hours
    IF (
        SELECT IFNULL(SUM(hours_allocated), 0)
        FROM assignments
        WHERE employee_id = NEW.employee_id
    ) + NEW.hours_allocated > 2080 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Total allocated hours cannot exceed 2080';
    END IF;
END$$

DELIMITER ;

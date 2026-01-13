DELIMITER $$

CREATE FUNCTION GetProjectStatus(p_id INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE s_date DATE;
    DECLARE e_date DATE;
    DECLARE completed BOOLEAN;

    SELECT start_date, end_date, is_completed
    INTO s_date, e_date, completed
    FROM projects
    WHERE project_id = p_id;

    IF s_date IS NULL THEN
        RETURN 'Unknown';
    ELSEIF s_date > CURDATE() THEN
        RETURN 'Not Started';
    ELSEIF e_date < CURDATE() AND completed = 0 THEN
        RETURN 'Overdue';
    ELSEIF e_date < CURDATE() THEN
        RETURN 'Completed';
    ELSE
        RETURN 'In Progress';
    END IF;
END$$

DELIMITER ;

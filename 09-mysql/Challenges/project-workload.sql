-- Find projects with total allocated hours and number of team members. 
-- Only include projects with budget > 50000. Order by total hours descending.

-- Expected columns: project_name, budget, team_size, total_hours

select p.name as project_name,
 p.budget,
 count(a.employee_id) as team_size,
 sum(a.hours_allocated) as total_hours
from projects p
join assignments a on p.id = a.project_id
where p.budget>50000
group by 
p.id,p.name,p.budget
order by total_hours desc;

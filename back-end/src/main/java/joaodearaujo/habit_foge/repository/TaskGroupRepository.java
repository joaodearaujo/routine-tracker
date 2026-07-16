package joaodearaujo.habit_foge.repository;

import joaodearaujo.habit_foge.domain.entity.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskGroupRepository extends JpaRepository<TaskGroup, String> {}

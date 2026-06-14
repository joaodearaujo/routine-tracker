package joaodearaujo.daily_system.repository;

import joaodearaujo.daily_system.domain.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, String> {
}

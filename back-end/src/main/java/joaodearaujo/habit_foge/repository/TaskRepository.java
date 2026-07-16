package joaodearaujo.habit_foge.repository;

import joaodearaujo.habit_foge.domain.entity.Task;
import joaodearaujo.habit_foge.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, String> {
    List<Task> findByGroup_Routine_User(User user);
}

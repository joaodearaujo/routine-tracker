package joaodearaujo.habit_foge.repository;

import joaodearaujo.habit_foge.domain.entity.Routine;
import joaodearaujo.habit_foge.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoutineRepository extends JpaRepository<Routine, String> {
    List<Routine> findByUser(User user);
}

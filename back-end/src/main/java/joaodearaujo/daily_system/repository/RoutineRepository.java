package joaodearaujo.daily_system.repository;

import joaodearaujo.daily_system.domain.entity.Routine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoutineRepository extends JpaRepository<Routine, String> {
}

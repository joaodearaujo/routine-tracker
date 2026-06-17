package joaodearaujo.daily_system.repository;

import joaodearaujo.daily_system.domain.entity.Page;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PageRepository extends JpaRepository<Page, String> {
}

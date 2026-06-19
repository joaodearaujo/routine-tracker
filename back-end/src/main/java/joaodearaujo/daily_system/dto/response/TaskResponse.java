package joaodearaujo.daily_system.dto.response;
import joaodearaujo.daily_system.domain.enums.TaskCategory;

public record TaskResponse(
        String id,
        TaskCategory category,
        String title,
        String description,
        Boolean isCompleted,
        Boolean isMandatory
) {}

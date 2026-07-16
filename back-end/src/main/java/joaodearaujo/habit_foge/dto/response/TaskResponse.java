package joaodearaujo.habit_foge.dto.response;
import joaodearaujo.habit_foge.domain.enums.TaskCategory;

public record TaskResponse(
        String id,
        TaskCategory category,
        String title,
        String description,
        Boolean isCompleted,
        Boolean isCore
) {}

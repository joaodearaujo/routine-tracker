package joaodearaujo.habit_foge.dto.request;

import joaodearaujo.habit_foge.domain.enums.TaskCategory;

public record TaskUpdateRequest(
        TaskCategory category,
        String title,
        String description,
        Boolean isCore
) {}
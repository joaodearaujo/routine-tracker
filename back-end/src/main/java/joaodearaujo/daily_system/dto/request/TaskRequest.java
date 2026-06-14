package joaodearaujo.daily_system.dto.request;

import joaodearaujo.daily_system.domain.enums.TaskTags;

public record TaskRequest(
    TaskTags tag,
    String name,
    String description,
    Boolean isCore
) {}

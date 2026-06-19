package joaodearaujo.daily_system.dto.request;

import joaodearaujo.daily_system.domain.enums.TaskCategory;

public record TaskRequest(
    String groupId,
    TaskCategory category,
    String title,
    String description,
    Boolean isMandatory
) {}

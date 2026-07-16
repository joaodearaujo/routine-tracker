package joaodearaujo.habit_foge.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import joaodearaujo.habit_foge.domain.enums.TaskCategory;

public record TaskRequest(
    @NotBlank
    String groupId,

    @NotNull
    TaskCategory category,

    @NotBlank
    @Size(min = 5, max = 50)
    String title,

    @Size(max = 355)
    String description,

    @NotNull
    Boolean isCore
) {}

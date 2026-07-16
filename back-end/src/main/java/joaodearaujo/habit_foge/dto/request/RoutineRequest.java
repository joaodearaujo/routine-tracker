package joaodearaujo.habit_foge.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RoutineRequest(
        @NotBlank
        @Size(min = 5, max = 50)
        String title,

        @Size(max = 150)
        String description
) {}

package joaodearaujo.habit_foge.dto.response;

import java.util.List;

public record RoutineResponse(
        String id,
        String title,
        String description,
        List<TaskGroupResponse> groups
) {}

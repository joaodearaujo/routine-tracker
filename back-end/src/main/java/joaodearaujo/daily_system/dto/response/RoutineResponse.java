package joaodearaujo.daily_system.dto.response;

import java.util.List;

public record RoutineResponse(
        String id,
        String title,
        List<TaskGroupResponse> groups
) {}

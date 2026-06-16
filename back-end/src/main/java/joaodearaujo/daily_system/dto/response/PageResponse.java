package joaodearaujo.daily_system.dto.response;

import java.util.List;

public record PageResponse(
        String id,
        String name,
        List<TaskGroupResponse> taskGroupResponseList
) {}

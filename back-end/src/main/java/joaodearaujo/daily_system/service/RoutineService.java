package joaodearaujo.daily_system.service;

import joaodearaujo.daily_system.domain.entity.Routine;
import joaodearaujo.daily_system.dto.request.RoutineRequest;
import joaodearaujo.daily_system.dto.response.RoutineResponse;
import joaodearaujo.daily_system.dto.response.TaskGroupResponse;
import joaodearaujo.daily_system.repository.RoutineRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoutineService {

    private final RoutineRepository routineRepository;
    private final TaskGroupService taskGroupService;

    public RoutineService(RoutineRepository routineRepository, TaskGroupService taskGroupService) {
        this.routineRepository = routineRepository;
        this.taskGroupService = taskGroupService;
    }

    public RoutineResponse createPage(RoutineRequest routineRequest) {
        Routine newRoutine = convertToEntity(routineRequest);
        routineRepository.save(newRoutine);
        return convertToResponse(newRoutine);
    }

    public List<RoutineResponse> findAll() {
        List<Routine> routineResponseList = routineRepository.findAll();
        return routineResponseList.stream()
                .map(this::convertToResponse)
                .toList();
    }

    Routine convertToEntity(RoutineRequest routineRequest) {
        return new Routine(
                routineRequest.title()
        );
    }

    RoutineResponse convertToResponse(Routine page) {
        List<TaskGroupResponse> taskGroupResponseList = page.getGroupList().stream()
                .map(taskGroupService::convertToResponse)
                .toList();

        return new RoutineResponse(
                page.getId(),
                page.getName(),
                taskGroupResponseList
        );
    }
}

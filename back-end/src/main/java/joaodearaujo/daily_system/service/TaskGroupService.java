package joaodearaujo.daily_system.service;

import joaodearaujo.daily_system.domain.entity.Routine;
import joaodearaujo.daily_system.domain.entity.TaskGroup;
import joaodearaujo.daily_system.dto.request.TaskGroupRequest;
import joaodearaujo.daily_system.dto.response.TaskGroupResponse;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import joaodearaujo.daily_system.repository.RoutineRepository;
import joaodearaujo.daily_system.repository.TaskGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskGroupService {
    private final TaskGroupRepository taskGroupRepository;
    private final TaskService taskService;
    private final RoutineRepository routineRepository;

    public TaskGroupService(TaskGroupRepository taskGroupRepository, TaskService taskService, RoutineRepository routineRepository) {
        this.taskGroupRepository = taskGroupRepository;
        this.taskService = taskService;
        this.routineRepository = routineRepository;
    }

    public TaskGroupResponse createGroupTask(TaskGroupRequest taskGroupRequest) {
        Routine page = routineRepository.findById(taskGroupRequest.routineId())
                .orElseThrow(() -> new RuntimeException("Page not found"));;

        TaskGroup newTaskGroup = convertToEntity(taskGroupRequest, page);
        taskGroupRepository.save(newTaskGroup);
        return convertToResponse(newTaskGroup);
    }

    public List<TaskGroupResponse> findAll() {
        List<TaskGroup> taskGroups = taskGroupRepository.findAll();
        return taskGroups.stream().
                map(this::convertToResponse)
                .toList();
    }

    public TaskGroup convertToEntity(TaskGroupRequest taskGroupRequest, Routine page) {
        return new TaskGroup(
                taskGroupRequest.title(),
                taskGroupRequest.description(),
                page
        );
    }

    public TaskGroupResponse convertToResponse(TaskGroup taskGroup) {
       List<TaskResponse> taskResponseList = taskGroup.getTaskList().stream()
               .map(taskService::convertToResponse)
               .toList();

        return new TaskGroupResponse(
                taskGroup.getId(),
                taskGroup.getName(),
                taskGroup.getDescription(),
                taskResponseList
        );
    }
}

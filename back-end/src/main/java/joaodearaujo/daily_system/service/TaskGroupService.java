package joaodearaujo.daily_system.service;

import joaodearaujo.daily_system.domain.entity.Page;
import joaodearaujo.daily_system.domain.entity.TaskGroup;
import joaodearaujo.daily_system.dto.request.TaskGroupRequest;
import joaodearaujo.daily_system.dto.response.TaskGroupResponse;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import joaodearaujo.daily_system.repository.PageRepository;
import joaodearaujo.daily_system.repository.TaskGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskGroupService {
    private final TaskGroupRepository taskGroupRepository;
    private final TaskService taskService;
    private final PageRepository pageRepository;

    public TaskGroupService(TaskGroupRepository taskGroupRepository, TaskService taskService, PageRepository pageRepository) {
        this.taskGroupRepository = taskGroupRepository;
        this.taskService = taskService;
        this.pageRepository = pageRepository;
    }

    public TaskGroupResponse createGroupTask(TaskGroupRequest taskGroupRequest) {
        Page page = pageRepository.findById(taskGroupRequest.pageId())
                .orElseThrow(() -> new RuntimeException("Page not found"));;

        TaskGroup newTaskGroup = convertToEntity(taskGroupRequest, page);
        taskGroupRepository.save(newTaskGroup);
        return convertToResponse(newTaskGroup);
    }

    public List<TaskGroupResponse> listAll() {
        List<TaskGroup> taskGroups = taskGroupRepository.findAll();
        return taskGroups.stream().
                map(this::convertToResponse)
                .toList();
    }

    public TaskGroup convertToEntity(TaskGroupRequest taskGroupRequest, Page page) {
        return new TaskGroup(
                taskGroupRequest.name(),
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

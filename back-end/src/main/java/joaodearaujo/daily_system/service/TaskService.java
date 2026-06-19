package joaodearaujo.daily_system.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import joaodearaujo.daily_system.domain.entity.Task;
import joaodearaujo.daily_system.domain.entity.TaskGroup;
import joaodearaujo.daily_system.dto.request.TaskRequest;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import joaodearaujo.daily_system.repository.TaskGroupRepository;
import joaodearaujo.daily_system.repository.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskGroupRepository taskGroupRepository;

    public TaskService(TaskRepository taskRepository, TaskGroupRepository taskGroupRepository) {
        this.taskRepository = taskRepository;
        this. taskGroupRepository = taskGroupRepository;
    }

    @Transactional
    public TaskResponse createTask(TaskRequest taskRequest) {

        TaskGroup group = taskGroupRepository.findById(taskRequest.groupId())
                .orElseThrow(() -> new EntityNotFoundException("Group not found" + taskRequest.groupId()));

        Task newTask = convertToEntity(taskRequest, group);

        taskRepository.save(newTask);
        return convertToResponse(newTask);
    }

    public List<TaskResponse> findAll() {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().
                map(this::convertToResponse)
                .toList();
    }

    public List<TaskResponse> findByGroup(String groupId) {
        TaskGroup group = taskGroupRepository.findById(groupId)
                .orElseThrow(() -> new EntityNotFoundException("Group not found: " + groupId));

        List<TaskResponse> taskListByGroup = taskRepository.findByGroup(group).stream()
                 .map(this::convertToResponse)
                 .toList();
         return taskListByGroup;
    }

    public void deleteTask(String taskId) {
        if (!taskRepository.existsById(taskId)) {
            throw new EntityNotFoundException("Task not found with ID: " + taskId);
        }
            taskRepository.deleteById(taskId);
    }

    @Transactional
    public void markTaskAsComplete(String taskId) {
        if (!taskRepository.existsById(taskId)) {
            throw new EntityNotFoundException("Task not found with ID: " + taskId);
        }

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new EntityNotFoundException("Task not found with ID: " + taskId));

        task.setIs_completed(!task.getIs_Completed());
    }

    public Task convertToEntity(TaskRequest taskRequest, TaskGroup group) {
        return new Task(
                taskRequest.category(),
                taskRequest.title(),
                taskRequest.description(),
                taskRequest.isMandatory(),
                group
        );
    }

    public TaskResponse convertToResponse(Task task) {
        return new TaskResponse(
            task.getId(),
            task.getTag(),
            task.getName(),
            task.getDescription(),
            task.getIs_Completed(),
            task.getCore()
        );
    }
}

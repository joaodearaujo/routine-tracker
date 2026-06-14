package joaodearaujo.daily_system.service;

import joaodearaujo.daily_system.domain.entity.Task;
import joaodearaujo.daily_system.dto.request.TaskRequest;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import joaodearaujo.daily_system.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskResponse createTask(TaskRequest taskRequest) {
        Task newTask = convertToEntity(taskRequest);
        taskRepository.save(newTask);
        return convertToResponse(newTask);
    }

    public List<TaskResponse> listAll() {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().
                map(this::convertToResponse)
                .toList();
    }

    public Task convertToEntity(TaskRequest taskRequest) {
        return new Task(
                taskRequest.tag(),
                taskRequest.name(),
                taskRequest.description(),
                taskRequest.isCore()
        );
    }

    public TaskResponse convertToResponse(Task task) {
        return new TaskResponse(
            task.getId(),
            task.getTag(),
            task.getName(),
            task.getDescription(),
            task.getCore()
        );
    }

}

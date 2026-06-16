package joaodearaujo.daily_system.controllers;

import joaodearaujo.daily_system.dto.request.TaskRequest;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import joaodearaujo.daily_system.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    private TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    private TaskResponse createTask(@RequestBody TaskRequest taskRequest) {
        return taskService.createTask(taskRequest);
    }

    @GetMapping
    private List<TaskResponse> listAll() {
        return taskService.listAll();
    }
}

package joaodearaujo.habit_foge.controllers;

import jakarta.validation.Valid;
import joaodearaujo.habit_foge.domain.entity.User;
import joaodearaujo.habit_foge.dto.request.TaskRequest;
import joaodearaujo.habit_foge.dto.request.TaskUpdateRequest;
import joaodearaujo.habit_foge.dto.response.TaskResponse;
import joaodearaujo.habit_foge.service.TaskService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/task")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    private TaskResponse createTask(@Valid @RequestBody TaskRequest taskRequest) {
        return taskService.createTask(taskRequest);
    }

    @GetMapping
    public List<TaskResponse> findAllByUser(@AuthenticationPrincipal User authenticatedUser) {
        return taskService.findAllByUser(authenticatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable String id, @AuthenticationPrincipal User authenticatedUser) {
        taskService.deleteTask(id, authenticatedUser);
    }

        @PatchMapping("/toggleComplete/{id}")
    public TaskResponse markTaskAsCompleted(@PathVariable String id, @AuthenticationPrincipal User authenticatedUser) {
        return taskService.markTaskAsComplete(id, authenticatedUser);
    }

    @PatchMapping("/{id}")
    public TaskResponse updateTask(@PathVariable String id, @RequestBody TaskUpdateRequest taskUpdateRequest,  @AuthenticationPrincipal User authenticatedUser) {
        return taskService.updateTask(id, taskUpdateRequest, authenticatedUser);
    }
}
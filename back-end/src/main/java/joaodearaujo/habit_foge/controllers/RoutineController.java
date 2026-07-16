package joaodearaujo.habit_foge.controllers;

import jakarta.validation.Valid;
import joaodearaujo.habit_foge.dto.request.RoutineRequest;
import joaodearaujo.habit_foge.dto.request.UpdateNameRequest;
import joaodearaujo.habit_foge.dto.response.RoutineResponse;
import joaodearaujo.habit_foge.service.RoutineService;
import org.springframework.web.bind.annotation.*;
import joaodearaujo.habit_foge.domain.entity.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.util.List;

@RestController
@RequestMapping("v1/routine")
public class RoutineController {

    private final RoutineService routineService;

    public RoutineController(RoutineService routineService) {
        this.routineService = routineService;
    }

    @PostMapping
    public RoutineResponse createRoutine(
            @Valid @RequestBody RoutineRequest request,
            @AuthenticationPrincipal User authenticatedUser) {
        return routineService.createRoutine(request, authenticatedUser);
    }
    @PatchMapping("/{id}")
    public RoutineResponse updateTitle(
            @PathVariable String id,
            @RequestBody UpdateNameRequest updateNameRequest,
            @AuthenticationPrincipal User authenticatedUser) {
        return routineService.updateTitle(id, updateNameRequest, authenticatedUser);
    }

    @GetMapping
    public List<RoutineResponse> listAll(@AuthenticationPrincipal User authenticatedUser) {
        return routineService.findAllByUser(authenticatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteRoutine(@PathVariable String id, @AuthenticationPrincipal User authenticatedUser) {
        routineService.deleteRoutine(id, authenticatedUser);
    }
}

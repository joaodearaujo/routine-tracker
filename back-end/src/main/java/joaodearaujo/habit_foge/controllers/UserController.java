package joaodearaujo.habit_foge.controllers;

import jakarta.validation.Valid;
import joaodearaujo.habit_foge.domain.entity.User;
import joaodearaujo.habit_foge.dto.request.UserRequest;
import joaodearaujo.habit_foge.dto.response.UserResponse;
import joaodearaujo.habit_foge.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserResponse createUser(@Valid @RequestBody UserRequest request) {
        return userService.createUser(request);
    }

    @GetMapping("/me")
    public UserResponse getLoggedUserProfile(@AuthenticationPrincipal User authenticatedUser) {
        return new UserResponse(
                authenticatedUser.getId(),
                authenticatedUser.getName(),
                authenticatedUser.getEmail()
        );
    }
}
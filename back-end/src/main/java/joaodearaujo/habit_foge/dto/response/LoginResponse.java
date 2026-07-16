package joaodearaujo.habit_foge.dto.response;

public record LoginResponse(
        String token,
        UserResponse user
) {}
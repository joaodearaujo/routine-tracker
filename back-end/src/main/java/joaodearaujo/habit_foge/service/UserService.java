package joaodearaujo.habit_foge.service;

import joaodearaujo.habit_foge.domain.entity.User;
import joaodearaujo.habit_foge.dto.request.UserRequest;
import joaodearaujo.habit_foge.dto.response.UserResponse;
import joaodearaujo.habit_foge.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse createUser(UserRequest userRequest) {
        if (userRepository.findByEmail(userRequest.email()).isPresent()) {
            throw new IllegalArgumentException("Email already in use.");
        }

        User newUser = convertToEntity(userRequest);
        userRepository.save(newUser);

        return convertToResponse(newUser);
    }

    private User convertToEntity(UserRequest request) {
        String encryptedPassword = passwordEncoder.encode((request.password()));

        return new User(
                request.email(),
                request.name(),
                encryptedPassword
        );
    }

    private UserResponse convertToResponse(User user) {
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }
}

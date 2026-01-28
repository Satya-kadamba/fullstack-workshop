package org.example.springdemo.controller;

import org.example.springdemo.entity.User;
import org.example.springdemo.service.UserService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

    @RestController
    @RequestMapping("/api/users")
    public class UserController {

        private final UserService userService;

        public UserController(UserService userService) {
            this.userService = userService;
        }

        // Return single user
        @GetMapping("/{id}")
        public Mono<User> getUser(@PathVariable Long id) {
            return userService.findById(id);
        }

        // Return multiple users
        @GetMapping
        public Flux<User> getAllUsers() {
            return userService.findAll();
        }

        // Create user
        @PostMapping
        public Mono<User> createUser(@RequestBody User user) {
            return userService.save(user);
        }

        // Delete user
        @DeleteMapping("/{id}")
        public Mono<Void> deleteUser(@PathVariable Long id) {
            return userService.deleteById(id);
        }
    }


package org.example.springdemo.repository;

import org.example.springdemo.entity.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface UserRepository
        extends ReactiveCrudRepository<User, Long> {
}

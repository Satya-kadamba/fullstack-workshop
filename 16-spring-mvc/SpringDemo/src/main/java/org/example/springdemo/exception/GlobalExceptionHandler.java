package org.example.springdemo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import reactor.core.publisher.Mono;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public Mono<ResponseEntity<String>> handleNotFound(ResourceNotFoundException ex) {
        return Mono.just(
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage())
        );
    }
}

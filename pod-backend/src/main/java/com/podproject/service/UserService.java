package com.podproject.service;

import java.util.List;

import com.podproject.model.User;
import com.podproject.model.UserDto;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
}

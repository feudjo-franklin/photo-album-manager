package com.frankyalbums.SpringRestdemo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.frankyalbums.SpringRestdemo.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long>{
    
    Optional<Account> findByEmail(String email);
}

package com.portfolio.server.repository;

import com.portfolio.server.model.Customer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

    List<Customer> findCustomerByAge(int age);
}

package com.portfolio.server.model;

import javax.persistence.*;

@Entity
@Table(name = "cusomer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    public Customer() {

    }

    public String getId() {
        return id;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "active")
    private boolean active;

    public Customer(String name, int age) {
        this.name = name;
        this.age = age;
        this.active = true;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", active=" + active +
                '}';
    }
}

package joaodearaujo.daily_system.domain.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"name", "page_id"}))
public class TaskGroup {

    @Id
    private String id;

    @Column
    private String name;

    @Column
    private String description;

    @OneToMany(mappedBy = "group")
    private List<Task> taskList;

    @ManyToOne
    @JoinColumn(name = "page_id", nullable = false)
    private Routine page;

    public TaskGroup() { }

    public TaskGroup(String name, String description, Routine page) {
        this.page = page;
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.description = description;
        this.taskList = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Task> getTaskList() {
        return taskList;
    }

    public void setTaskList(List<Task> taskList) {
        this.taskList = taskList;
    }

    public Routine getPage() {
        return page;
    }

    public void setPage(Routine page) {
        this.page = page;
    }
}

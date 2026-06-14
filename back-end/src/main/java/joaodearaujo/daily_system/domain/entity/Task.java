package joaodearaujo.daily_system.domain.entity;

import jakarta.persistence.*;
import joaodearaujo.daily_system.domain.enums.TaskTags;
import java.util.UUID;

@Entity
public class Task {

    @Id
    private String id;

    @Column
    @Enumerated(EnumType.STRING)
    private TaskTags taskTag;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Boolean isCore;

    public Task() {}

    public Task(TaskTags taskTag, String name, String description, Boolean isCore ) {
        this.id = UUID.randomUUID().toString();
        this.taskTag = taskTag;
        this.description = description;
        this.isCore = isCore;
    }

    public String getId() {
        return id;
    }

    public TaskTags getTag() {return taskTag; }

    public void setTag(TaskTags taskTag) {
        this.taskTag = taskTag;
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

    public Boolean getCore() {
        return isCore;
    }

    public void setCore(Boolean core) {
        isCore = core;
    }
}

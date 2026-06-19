    package joaodearaujo.daily_system.domain.entity;

    import jakarta.persistence.*;
    import joaodearaujo.daily_system.domain.enums.TaskCategory;

    import java.util.List;
    import java.util.UUID;

    @Entity
    public class Task {

        @Id
        private String id;

        @Column
        @Enumerated(EnumType.STRING)
        private TaskCategory tag;

        @Column(nullable = false)
        private String name;

        @Column
        private String description;

        @Column
        private Boolean isCompleted;

        @Column
        private Boolean isCore;

        @ManyToOne
        @JoinColumn(name = "group_id", nullable = false)
        private TaskGroup group;
        
        public Task() {}

        public Task(TaskCategory tag, String name, String description, Boolean isCore, TaskGroup group) {
            this.group = group;
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.tag = tag;
            this.description = description;
            this.isCompleted = false;
            this.isCore = isCore;
        }

        public String getId() { return id; }
        public TaskCategory getTag() {
            return tag;
        }
        public String getName() {
            return name;
        }
        public String getDescription() { return description; }
        public Boolean getIs_Completed() {
            return isCompleted;
        }

        public void setIs_completed(Boolean isCompleted) {
            this.isCompleted = isCompleted;
        }

        public Boolean getCore() {
            return isCore;
        }
    }

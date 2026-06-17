package joaodearaujo.daily_system.service;

import joaodearaujo.daily_system.domain.entity.Page;
import joaodearaujo.daily_system.dto.request.PageRequest;
import joaodearaujo.daily_system.dto.response.PageResponse;
import joaodearaujo.daily_system.dto.response.TaskGroupResponse;
import joaodearaujo.daily_system.repository.PageRepository;
import joaodearaujo.daily_system.repository.TaskGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PageService {

    private final PageRepository pageRepository;
    private final TaskGroupService taskGroupService;

    public PageService(PageRepository pageRepository, TaskGroupService taskGroupService) {
        this.pageRepository = pageRepository;
        this.taskGroupService = taskGroupService;
    }

    public PageResponse createPage(PageRequest pageRequest) {
        Page newPage = convertToEntity(pageRequest);
        pageRepository.save(newPage);
        return convertToResponse(newPage);
    }

    public List<PageResponse> findAll() {
        List<Page> pageResponseList = pageRepository.findAll();
        return pageResponseList.stream()
                .map(this::convertToResponse)
                .toList();
    }

    Page convertToEntity(PageRequest pageRequest) {
        return new Page(
                pageRequest.title()
        );
    }

    PageResponse convertToResponse(Page page) {
        List<TaskGroupResponse> taskGroupResponseList = page.getGroupList().stream()
                .map(taskGroupService::convertToResponse)
                .toList();

        return new PageResponse(
                page.getId(),
                page.getName(),
                taskGroupResponseList
        );
    }
}

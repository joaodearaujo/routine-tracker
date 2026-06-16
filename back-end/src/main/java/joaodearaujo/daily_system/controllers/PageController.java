package joaodearaujo.daily_system.controllers;

import joaodearaujo.daily_system.dto.request.PageRequest;
import joaodearaujo.daily_system.dto.response.PageResponse;
import joaodearaujo.daily_system.service.PageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/page")
public class PageController {

    private final PageService pageService;

    public PageController(PageService pageService) {
        this.pageService = pageService;
    }

    @PostMapping
    private PageResponse createPage(@RequestBody PageRequest pageRequest) {
        return  pageService.createPage(pageRequest);
    }

    @GetMapping
    private List<PageResponse> listAll() {
        return pageService.listAll();
    }
}

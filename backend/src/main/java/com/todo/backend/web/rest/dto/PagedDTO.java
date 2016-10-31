package com.todo.backend.web.rest.dto;

import java.io.Serializable;
import java.util.List;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;


public class PagedDTO<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    private List<T> results;

    @NotNull
    @Min(0)
    private Long totalCount;

    public PagedDTO() {
    }

    public PagedDTO(List<T> results, Long totalCount) {
        this.results = results;
        this.totalCount = totalCount;
    }

    public List<T> getResults() {
        return results;
    }

    public void setResults(List<T> results) {
        this.results = results;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        @SuppressWarnings("rawtypes")
        PagedDTO other = (PagedDTO) obj;
        if (results == null) {
            if (other.results != null)
                return false;
        } else if (!results.equals(other.results))
            return false;
        if (totalCount == null) {
            if (other.totalCount != null)
                return false;
        } else if (!totalCount.equals(other.totalCount))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((results == null) ? 0 : results.hashCode());
        result = prime * result + ((totalCount == null) ? 0 : totalCount.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "PagedDTO [results=" + results + ", totalCount=" + totalCount + "]";
    }

}

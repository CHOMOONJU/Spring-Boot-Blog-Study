package y2m.jp.blogstudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import y2m.jp.blogstudy.model.Article;

public interface BlogRepository extends JpaRepository<Article, Long> {
}

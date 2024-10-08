package y2m.jp.blogstudy.dto;

import lombok.Getter;
import y2m.jp.blogstudy.model.Article;

@Getter
public class ArticleResponse {
    private Long id;
    private final String title;
    private final String content;

    public ArticleResponse(Article article) {
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
    }
}

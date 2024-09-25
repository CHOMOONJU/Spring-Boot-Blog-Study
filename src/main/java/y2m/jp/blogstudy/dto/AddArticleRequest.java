package y2m.jp.blogstudy.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import y2m.jp.blogstudy.model.Article;

@NoArgsConstructor
@Getter
public class AddArticleRequest {
    private String title;
    private  String content;

    public Article toEntity() {
        return Article.builder()
                .title(title)
                .content(content)
                .build();
    }
}

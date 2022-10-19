import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito banaca, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    new Date(publishedAt),
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    {
      locale: ptBr,
      addSuffix: true,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment) {
    setComments(comments.filter((c) => c !== comment));
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}

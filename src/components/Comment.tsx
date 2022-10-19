import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1)
    setLikeCount((state) => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio ás 08:13h" dateTime="22-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onMouseDown={handleDeleteComment}
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { useState } from 'react';

// impore {useState} from 'react';
export function Counter() {
  //  let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="counter-container">
      <button className="likes-dislikes" onClick={() => setLike(like + 1)}>  👍{like} </button>
      <button className="likes-dislikes" onClick={() => setdisLike(dislike + 1)}>  👎{dislike} </button>

    </div>
  );
}

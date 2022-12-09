import query from "../db/index.js";

export async function getAllPosts() {
  // Query the database and return all posts
  const result = await query(`SELECT * FROM post_table`);
  return result.rows;
}

export async function createPost(body) {
  // Query the database and create a post
  const { post_text, post_language, post_duration_weeks } = body;
  const result = await query(
    `INSERT INTO post_table (post_text, post_language, post_duration_weeks) VALUES ($1, $2, $3) RETURNING *`,
    [post_text, post_language, post_duration_weeks]
  );
  return result.rows;
}


export async function updatePost(body, id) {
  // Query the database and update a post
  const { post_text, post_language, post_duration_weeks } = body;
  const result = await query(
    `UPDATE post_table SET post_text=$1, post_language=$2, post_duration_weeks=$3 WHERE id=$4 RETURNING *`,
    [post_text, post_language, post_duration_weeks, id]
  );
  return result.rows;
}

export async function deletePost(id) {
  // Query the database and delete a post
  const result = await query(`DELETE FROM post_table WHERE id=$1 RETURNING *`, [
    id,
  ]);
  return result.rows;
}




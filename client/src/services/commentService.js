import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAllComments = async (estateId) => {
  const query = new URLSearchParams({
    where: `estateId="${estateId}"`,
    load: `owner=_ownerId:users`,
  });

  const comments = await request.get(`${baseUrl}?${query}`);

  return comments;
};

export const postComment = async (estateId, text, firstName, lastName) => {
  const newComment = await request.post(baseUrl, {
    estateId,
    text,
    firstName,
    lastName,
  });
  return newComment;
};
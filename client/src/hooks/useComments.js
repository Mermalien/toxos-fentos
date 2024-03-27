import { useEffect, useState } from "react";
import { getCommentsService } from "../services/commentsService";

export const useComments = (plantId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getComments = async () => {
      try {
        const data = await getCommentsService(plantId);
        setLoading(true);
        setComments(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, [plantId]);

  const createComment = (data) => {
    setComments([data, ...comments]);
  };
  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  return {
    comments,
    setComments,
    createComment,
    deleteComment,
    loading,
    error,
  };
};

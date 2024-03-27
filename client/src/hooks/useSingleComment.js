import { useEffect, useState } from "react";
import { getSingleCommentService } from "../services/commentsService";

export const useSingleComment = (id) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getComment = async () => {
      try {
        const data = await getSingleCommentService(id);
        setComment(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getComment();
  }, [id]);
  return { comment, loading, error };
};

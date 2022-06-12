import { getNotesProps } from "../interface";
import axios from "axios";

export const getNotes = async (): Promise<getNotesProps[]> => {
  const response = await axios("http://localhost:4444/notes/");
  return response.data;
};

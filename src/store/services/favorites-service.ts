import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { FilmInterface } from "../../types/types";
import { store } from "..";
import { db } from "../../firebase";
import { setFavorites } from "../slices/favorites/favorites-slice";

export const getFavoritesFilms = async (email: string) => {
  const favRef = collection(db, `${email}favorites`);
  const data = await getDocs(favRef);
  const favoriteFilms: FilmInterface[] = data.docs.map((doc) => ({
    ...(doc.data() as FilmInterface),
  }));

  store.dispatch(setFavorites(favoriteFilms));
};

export const addToFavorites = async (value: FilmInterface, email: string) => {
  try {
    await setDoc(doc(db, `${email}favorites`, String(value.id)), value);
    await getFavoritesFilms(email);
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

export const removeFromFavorites = async (id: number, email: string) => {
  try {
    await deleteDoc(doc(db, `${email}favorites`, String(id)));
    await getFavoritesFilms(email);
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  getDocsFromServer,
} from "firebase/firestore";
import { FilmInterface } from "../../types/types";
import { store } from "..";
import { db } from "../../firebase";
import { setFavorites } from "../slices/favorites/favorites-slice";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const getFavoritesFilms = async (email: string) => {
  const favRef = collection(db, `${email}favorites`);
  const data = await getDocsFromServer(favRef);
  const favoriteFilms = data.docs.map((doc) => {
    const filmData = doc.data();
    return {
      id: filmData.id,
      posterUrl: filmData.posterUrl,
      description: filmData.description,
      nameRu: filmData.nameRu,
      ratingKinopoisk: filmData.ratingKinopoisk,
      year: filmData.year,
    };
  });

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

export const addToHistory = async (searchText: string, email: string) => {
  try {
    await setDoc(doc(db, `${email}history`, searchText), { searchText });
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

export const getHistory = async (email: string) => {
  try {
    const docSnap = await getDocs(collection(db, `${email}history`));

    return docSnap.docs.map((doc) => ({
      searchText: doc.data().searchText,
    }));
  } catch (error) {
    console.error("Error from firebase", error);
  }
};

export const removeFromHistory = async (searchText: string, email: string) => {
  try {
    await deleteDoc(doc(db, `${email}history`, String(searchText)));
    await getHistory(email);
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};
export const signUpUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

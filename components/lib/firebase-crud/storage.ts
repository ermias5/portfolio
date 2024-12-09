import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

async function uploadFile(folder: string, file: File) {
  try {
    const fileRef = ref(storage, `${folder}/${file.name}`);
    const snapshot = await uploadBytes(fileRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export default uploadFile;

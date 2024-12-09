import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";

interface UploadCVType {
  name: string;
  title: string;
  cvUrl: string;
}

const useUploadCVData = () => {
  const [data, setData] = useState<UploadCVType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreData<UploadCVType>("uploadCV", 1)
      .then(({ collectionData, error }) => {
        if (error !== null) {
          setError(error);
        } else {
          setData(collectionData);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useUploadCVData;

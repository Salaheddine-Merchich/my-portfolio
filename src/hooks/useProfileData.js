import {useState, useEffect} from "react";

let cachedProfile = null;
let cachePromise = null;

function fetchProfileData() {
  if (cachedProfile) {
    return Promise.resolve(cachedProfile);
  }
  if (cachePromise) {
    return cachePromise;
  }
  cachePromise = fetch("/profile.json")
    .then(result => {
      if (!result.ok) {
        throw result;
      }
      return result.json();
    })
    .then(data => {
      cachedProfile = data;
      return data;
    })
    .catch(err => {
      cachePromise = null;
      throw err;
    });
  return cachePromise;
}

export function useProfileData() {
  const [data, setData] = useState(cachedProfile);
  const [loading, setLoading] = useState(!cachedProfile);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (cachedProfile) {
      setData(cachedProfile);
      setLoading(false);
      return;
    }
    fetchProfileData()
      .then(profileData => {
        setData(profileData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return {data, loading, error};
}

import React, {lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import {useProfileData} from "../../hooks/useProfileData";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

function ProfileSkeleton() {
  return (
    <div
      className="max-w-7xl mx-auto px-6 py-20 min-h-[400px] flex items-center justify-center"
      aria-busy="true"
      aria-label="Loading profile"
    >
      <Loading />
    </div>
  );
}

export default function Profile() {
  const useGithubProfile = openSource.showGithubProfile === "true";
  const {data, loading, error} = useProfileData();
  const prof = data?.data?.user;

  if (!openSource.display) {
    return null;
  }

  if (!useGithubProfile || error) {
    return <Contact />;
  }

  if (loading || !prof?.avatarUrl) {
    return <ProfileSkeleton />;
  }

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <GithubProfileCard prof={prof} key={prof.id} />
    </Suspense>
  );
}

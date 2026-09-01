import React, {useContext, Suspense, lazy} from "react";
import Button from "../../components/button/Button";
import FadeInView from "../../components/fadeIn/FadeInView";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import {useProfileData} from "../../hooks/useProfileData";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
  const {data, loading, error} = useProfileData();
  const {isDark} = useContext(StyleContext);
  const repo = error ? "Error" : data?.data?.user?.pinnedItems?.edges ?? [];

  if (!openSource.display || repo === "Error") {
    return null;
  }

  if (loading) {
    return (
      <section
        className="py-20 px-6 max-w-7xl mx-auto min-h-[320px] flex items-center justify-center"
        id="opensource"
        aria-labelledby="opensource-heading"
        aria-busy="true"
      >
        <Loading />
      </section>
    );
  }

  return (
    <section
      className="py-20 px-6 max-w-7xl mx-auto"
      id="opensource"
      aria-labelledby="opensource-heading"
    >
      <Suspense fallback={<Loading />}>
        <FadeInView className="text-center mb-16">
          <h2
            id="opensource-heading"
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Open Source Projects
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A selection of my pinned repositories on GitHub.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {repo.map(v => (
            <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            text="View More on GitHub"
            href={socialMediaLinks.github}
            newTab={true}
            className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
          />
        </div>
      </Suspense>
    </section>
  );
}

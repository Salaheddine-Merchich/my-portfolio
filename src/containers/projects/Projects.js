import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import {motion} from "framer-motion";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
  const [repo, setrepo] = useState([]);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepo(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(error);
          setrepo("Error");
        });
    };
    getRepoData();
  }, []);

  if (!openSource.display || repo === "Error") {
    return null;
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto" id="opensource">
      <Suspense fallback={<Loading />}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Open Source Projects
          </h1>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A selection of my pinned repositories on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {repo.map((v, i) => (
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
    </div>
  );
}

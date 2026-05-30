import React from "react";
import {motion} from "framer-motion";
import {Star, GitFork, Book} from "lucide-react";

export default function GithubRepoCard({repo, isDark}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
      whileHover={{y: -5}}
      onClick={() => openUrlInNewTab(repo.node.url)}
      className={`p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col ${
        isDark
          ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50"
          : "bg-white border border-gray-100 hover:border-primary/30"
      } backdrop-blur-sm`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Book size={20} className="text-primary" />
        <h3
          className={`text-lg font-bold truncate ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {repo.node.name}
        </h3>
      </div>

      <p
        className={`text-sm leading-relaxed mb-6 flex-1 line-clamp-3 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {repo.node.description || "No description provided."}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/10">
        <div className="flex items-center gap-4">
          {repo.node.primaryLanguage && (
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{backgroundColor: repo.node.primaryLanguage.color}}
              />
              <span
                className={`text-xs font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {repo.node.primaryLanguage.name}
              </span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
              <Star size={14} />
              {repo.node.stargazers.totalCount}
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
              <GitFork size={14} />
              {repo.node.forkCount}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

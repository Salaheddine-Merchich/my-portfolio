import React from "react";
import FadeInView from "../fadeIn/FadeInView";
import {Star, GitFork, Book} from "lucide-react";

export default function GithubRepoCard({repo, isDark}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  }

  return (
    <FadeInView
      onClick={() => openUrlInNewTab(repo.node.url)}
      className={`p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col hover:-translate-y-1 ${
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
          isDark ? "text-gray-300" : "text-gray-600"
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
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {repo.node.primaryLanguage.name}
              </span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <Star size={14} />
              {repo.node.stargazers.totalCount}
            </div>
            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <GitFork size={14} />
              {repo.node.forkCount}
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

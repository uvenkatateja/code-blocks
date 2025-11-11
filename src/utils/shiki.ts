import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import {
  type HighlighterCore,
  type RegexEngine,
  createHighlighterCore,
} from "shiki/core";

// Themes:
import githubLight from "@shikijs/themes/github-light";
import githubDark from "@shikijs/themes/github-dark";

// Languages:
import js from "@shikijs/langs/js";
import ts from "@shikijs/langs/ts";
import css from "@shikijs/langs/css";
import tsx from "@shikijs/langs/tsx";
import bash from "@shikijs/langs/bash";
import markdown from "@shikijs/langs/markdown";

let jsEngine: RegexEngine | null = null;
let highlighter: Promise<HighlighterCore> | null = null;

const getJsEngine = (): RegexEngine => {
  jsEngine ??= createJavaScriptRegexEngine();
  return jsEngine;
};

const shikiHighlighter = async (): Promise<HighlighterCore> => {
  highlighter ??= createHighlighterCore({
    themes: [githubLight, githubDark],
    langs: [bash, js, ts, tsx, css, markdown],
    engine: getJsEngine(),
  });
  return highlighter;
};

export { shikiHighlighter };

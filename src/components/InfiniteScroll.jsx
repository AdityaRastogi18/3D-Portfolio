import React from "react";
import { SectionWrapper } from "../hoc";
import { tags } from "../constants";

const DURATION = 21000;
const ROWS = 3;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner flex space-x-4">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text, color }) => (
  <div
    className="tag bg-gray-200 text-black p-2 rounded-md"
    style={{ "--color": color }}
  >
    <span>#</span> {text}
  </div>
);

const InfiniteScroll = () => (
  <div className="tag-list relative overflow-hidden">
    {[...new Array(ROWS)].map((_, i) => (
      <InfiniteLoopSlider
        key={i}
        duration={DURATION}
        reverse={i % 2}
      >
        {shuffle(tags)
          .slice(0, TAGS_PER_ROW)
          .map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
      </InfiniteLoopSlider>
    ))}
    <div className="fade absolute inset-0 bg-transparent" />
  </div>
);

export default SectionWrapper(InfiniteScroll, '');
// export default InfiniteScroll;

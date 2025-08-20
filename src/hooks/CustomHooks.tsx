import React, { useEffect, useState , useRef } from "react";

/* Typing Animation Hook */
export function useTypingEffect(words, typingSpeed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index]?.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[index]?.substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pause]);

  return text;
} 

/* Scroll Animation Hook */
export function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
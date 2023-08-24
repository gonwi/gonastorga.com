"use client";

import { MousePointerClick } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Call() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      "location": "1/7",
      "text": "The people who are crazy enough to think they can change the world are the ones who do.",
      "author": "Steve Jobs"
    },
    {
      "location": "2/7",
      "text": "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
      "author": "Alan Turing"
    },
    {
      "location": "3/7",
      "text": "I think it's possible for ordinary people to choose to be extraordinary.",
      "author": "Elon Musk"
    },
    {
      "location": "4/7",
      "text": "The most damaging phrase in the language is: 'It's always been done that way.'",
      "author": "Grace Hopper"
    },
    {
      "location": "5/7",
      "text": "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
      "author": "Bill Gates"
    },
    {
      "location": "6/7",
      "text": "Lots of companies don't succeed over time. What do they fundamentally do wrong? They usually miss the future.",
      "author": "Larry Page"
    },
    {
      "location": "7/7",
      "text": "The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.",
      "author": "Tim Berners-Lee"
    }];

  const nextSlide = () => {
    setActiveSlideIndex((activeSlideIndex + 1) % slides.length);
  };

  return (
    <Button variant="ghost" className="relative h-48 w-full border p-4">
      {slides.map((slide, index) => (
        <div
          key={index}
          onClick={nextSlide}
          className={`w-full h-full flex items-center justify-center ${
            activeSlideIndex === index ? "" : "hidden"
          }`}
        >
          <p className="mx-12 select-none">{slide.text}</p>
          <p className="absolute top-4 left-4 text-sm select-none">
            {slide.location}
          </p>
          <p className="absolute bottom-4 left-4 text-sm select-none">Weekly Quotes</p>
          <p className="absolute bottom-4 right-4 text-sm select-none">
            {slide.author}
          </p>
          <p className="absolute top-4 right-4 text-sm select-none">
            <MousePointerClick className="w-4 h-4" />
          </p>
        </div>
      ))}
    </Button>
  );
}

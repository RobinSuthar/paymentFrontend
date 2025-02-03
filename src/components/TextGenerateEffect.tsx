"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `This platform lets you send demo money to your friends. It's built for learning purposes, helping developers and students understand how digital transactions work. You can explore secure authentication, transaction flow, and data validation in a real-world simulation.

No real money is involved. Just a safe space to experiment, test, and learn.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

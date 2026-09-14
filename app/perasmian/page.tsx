import type { Metadata } from "next";
import PerasmianExperience from "@/components/PerasmianExperience";

export const metadata: Metadata = {
  title: "Perasmian Digital",
  description: "Pengalaman perasmian digital interaktif TitikLab.",
};

export default function PerasmianPage() {
  return <PerasmianExperience />;
}

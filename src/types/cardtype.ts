import type { LucideProps } from "lucide-react";
import { type ComponentType } from "react";

export interface SubStat {
  label: string;
  value: string;
  Icon: ComponentType<{ size?: number | string; className?: string }>;
  iconBg: string;
}

export interface DetailItem {
  label: string;
  value: string;
  Icon: ComponentType<{ size?: number | string; className?: string }>;
  color?: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  isUp: boolean;
  Icon: ComponentType<LucideProps>;
  subStats?: SubStat[];
  details?: DetailItem[];
  variant?: "tall" | "compact";
}
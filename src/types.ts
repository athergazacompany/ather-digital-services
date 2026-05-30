export type SceneId =
  | "hero"
  | "services"
  | "career"
  | "academic"
  | "design"
  | "tech"
  | "why_ather"
  | "contact";

export interface SceneInfo {
  id: SceneId;
  title: string;
  engTitle: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  items: string[];
  icon: string;
  color: string;
}

export interface ContactFormInput {
  name: string;
  serviceType: string;
  contactMethod: string;
  details: string;
}

export const SCENES: SceneInfo[] = [
  { id: "hero", title: "البداية", engTitle: "Home" },
  { id: "services", title: "الخدمات", engTitle: "Services" },
  { id: "career", title: "التوظيف", engTitle: "Career" },
  { id: "academic", title: "الأكاديمي", engTitle: "Academic" },
  { id: "design", title: "التصميم", engTitle: "Design" },
  { id: "tech", title: "المشاريع", engTitle: "Technical" },
  { id: "why_ather", title: "لماذا أثير", engTitle: "Why Ather" },
  { id: "contact", title: "تواصل معنا", engTitle: "Contact" },
];

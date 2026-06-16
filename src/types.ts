/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string; // anchor links (e.g., '#home', '#services', etc.)
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon key
}

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  iconName: string; // Lucide icon key
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Website Design' | 'App Mobile Design' | 'App Desktop' | 'Braiding' | string;
  imageUrl: string;
  tags: string[];
  description: string;
  client?: string;
  date?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

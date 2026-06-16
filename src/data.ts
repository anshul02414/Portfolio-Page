/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem, StatItem, ServiceItem, SkillItem, ProjectItem } from './types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact me', href: '#contact' },
];

export const heroData = {
  greeting: 'Hi I am',
  name: 'Anshul Kumawat',
  role: 'Aspiring Data Analyst',
  avatarUrl: '/src/assets/images/userimg.png',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://www.linkedin.com/in/anshul-kumawat-833337410/',
    behance: 'https://github.com/anshul02414',
  },
  cvUrl: 'https://drive.google.com/file/d/10Map0dWuu1hLvD52Jqfk1hXZkEeyLNlP/view?usp=sharing',
};

export const statItems: StatItem[] = [
  { id: 'exp', value: '1', label: 'Experiences' },
  { id: 'projects', value: '3', label: 'Project done' },
  // { id: 'clients', value: '80+', label: 'Happy Clients' },
];

export const serviceItems: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Data Analysis',
    description: 'Analyzing raw data to uncover patterns, trends, and actionable business insights for better decision-making.',
    iconName: 'BarChart3',
  },
  {
    id: 'srv-2',
    title: 'Data Visualization',
    description: 'Creating clear and interactive charts, dashboards, and reports to simplify complex data for stakeholders.',
    iconName: 'PieChart',
  },
  {
    id: 'srv-3',
    title: 'Business Intelligence',
    description: 'Transforming raw datasets into meaningful KPIs and dashboards to support strategic business decisions.',
    iconName: 'TrendingUp',
  },
  {
    id: 'srv-4',
    title: 'Data Cleaning & Processing',
    description: 'Preparing and structuring raw data by handling missing values, duplicates, and inconsistencies for accurate analysis.',
    iconName: 'Filter',
  },
  {
    id: 'srv-5',
    title: 'Predictive Analytics',
    description: 'Using statistical models and machine learning to forecast trends and future business outcomes.',
    iconName: 'Brain',
  },
  {
    id: 'srv-6',
    title: 'SQL & Data Reporting',
    description: 'Extracting and analyzing data using SQL queries and generating automated reports for business use.',
    iconName: 'Database',
  },
];

export const aboutMeData = {
  title: 'About Me',
  subtitle: 'Transforming Data into Actionable Insights & Aspiring Data Analyst',
  description:
    'A Data Analyst transforms raw information into meaningful insights that drive smarter decisions. With a strong foundation in Python, SQL, Excel, Pandas, and Power BI, I enjoy exploring datasets, uncovering patterns, and building interactive dashboards that tell compelling stories through data. My passion lies in cleaning complex data, performing in-depth analysis, and converting numbers into actionable business intelligence. Every dataset presents a new challenge, and I approach each one with curiosity, analytical thinking, and a commitment to delivering accurate, data-driven solutions. Through continuous learning and hands-on projects, I strive to bridge the gap between data and decision-making, helping organizations unlock the true value hidden within their information.',
  avatarUrl: '/src/assets/images/userimg.png',
};

export const skillItems: SkillItem[] = [
  { id: 'sk-1', name: 'Python', percentage: 100, iconName: 'FigmaIcon' },
  { id: 'sk-2', name: 'NumPy', percentage: 100, iconName: 'XdIcon' },
  { id: 'sk-3', name: 'Pandas', percentage: 85, iconName: 'PsIcon' },
  { id: 'sk-4', name: 'Matplotlib', percentage: 85, iconName: 'PsIcon' },
  { id: 'sk-5', name: 'MS Excel', percentage: 60, iconName: 'AiIcon' },
  { id: 'sk-6', name: 'Power BI', percentage: 70, iconName: 'PrIcon' },
];

export const portfolioCategories = [
  'All',
  'Website Design',
  'App Mobile Design',
  'App Desktop',
  'Braiding',
];

export const projectItems: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Sales Analytics Dashboard',
    category: 'Data Analytics Project',
    imageUrl: '/src/assets/images/sales data.jpg',
    tags: ['Excel', 'SQL', 'Data Visualization', 'KPIs'],
    description: 'A self-initiated project to analyze sales data and visualize key business KPIs such as revenue trends, product performance, and monthly growth insights using interactive dashboards.',
    date: 'Learning Project',
  },
  {
    id: 'proj-2',
    title: 'Customer Behavior Analysis',
    category: 'Data Analytics Project',
    imageUrl: '/src/assets/images/customer_analysis.jpg',
    tags: ['Python', 'Pandas', 'EDA', 'Seaborn'],
    description: 'Performed exploratory data analysis to understand customer purchasing patterns, segmentation, and behavior trends to derive actionable insights.',
    date: 'Learning Project',
  },
  {
    id: 'proj-3',
    title: 'Financial Performance Dashboard',
    category: 'Data Analytics Project',
    imageUrl: '/src/assets/images/finance_dashboard.jpg',
    tags: ['Power BI', 'DAX', 'Data Modeling', 'Charts'],
    description: 'Built an interactive dashboard to analyze financial data including profit, loss, expenses, and revenue trends for better decision-making insights.',
    date: 'Learning Project',
  },
  {
    id: 'proj-4',
    title: 'Data Cleaning & EDA Project',
    category: 'Data Analytics Project',
    imageUrl: '/src/assets/images/data_cleaning.jpg',
    tags: ['Python', 'Pandas', 'Data Cleaning', 'EDA'],
    description: 'Focused on handling missing values, duplicates, and inconsistencies in raw datasets followed by exploratory data analysis to extract meaningful insights.',
    date: 'Learning Project',
  },
  {
    id: 'proj-5',
    title: 'Sales Forecasting Model',
    category: 'Data Analytics Project',
    imageUrl: '/src/assets/images/sales_forecasting.png',
    tags: ['Python', 'Machine Learning', 'Time Series', 'Forecasting'],
    description: 'Developed a predictive model to forecast future sales trends using historical data and basic machine learning techniques.',
    date: 'Learning Project',
  },
  {
    id: 'proj-6',
    title: 'E-Commerce Product Analysis',
    category: 'Data Analytics Project',
    imageUrl: '/src/assets/images/ecommerce_analysis.jpg',
    tags: ['SQL', 'Python', 'Pandas', 'Data Visualization'],
    description: 'Analyzed e-commerce product and order data to identify top-selling products, revenue contributors, and customer purchasing trends for business insights.',
    date: 'Learning Project',
  },
];

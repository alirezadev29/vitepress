import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fa-IR',
  title: 'مستندات نشست ۱',
  description: 'تمرین پروژه‌ای توربوفرانت ۶',
  cleanUrls: true,
  head: [
    ['html', { dir: 'rtl' }], // راست‌چین کردن کل سایت
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'مبانی وب', link: '/guide/client-server' },
      { text: 'ابزارها', link: '/guide/tools/git' },
      { text: 'هوش مصنوعی', link: '/ai/ai-assisted-dev' }
    ],
    sidebar: [
      {
        text: 'نحوه کار وب',
        items: [
          { text: 'مدل Client/Server', link: '/guide/client-server' },
          { text: 'پروتکل HTTP', link: '/guide/http' },
          { text: 'سیستم DNS', link: '/guide/dns' },
          { text: 'نقش مرورگر', link: '/guide/browser-rendering' }
        ]
      },
      {
        text: 'ابزارهای پایه',
        items: [
          { text: 'VS Code و ترمینال', link: '/guide/tools/vscode-terminal' },
          { text: 'Git و GitHub', link: '/guide/tools/git' },
          { text: 'DevTools', link: '/guide/tools/devtools' }
        ]
      },
      {
        text: 'توسعه AI',
        items: [
          { text: 'مقدمات توسعه مبتنی بر AI', link: '/ai/ai-assisted-dev' }
        ]
      }
    ],
    outline: { label: 'در این صفحه' },
    docFooter: { prev: 'قبلی', next: 'بعدی' }
  }
})
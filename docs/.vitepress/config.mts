import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fa-IR',
  title: 'مستندات نشست ۱',
  description: 'تمرین پروژه‌ای توربوفرانت ۶',
  cleanUrls: true,
  head: [
    ['html', { dir: 'rtl' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'مبانی وب', link: '/guide/client-server' },
      { text: 'ابزارها', link: '/tools/vscode-terminal' }, // 👈 اصلاح شد
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
          { text: 'VS Code و ترمینال', link: '/tools/vscode-terminal' }, // 👈 اصلاح شد
          { text: 'Git و GitHub', link: '/tools/git' },                 // 👈 اصلاح شد
          { text: 'DevTools', link: '/tools/devtools' }                 // 👈 اصلاح شد
        ]
      },
      {
        text: 'توسعه AI',
        items: [
          { text: 'مقدمات توسعه مبتنی بر AI', link: '/ai/ai-assisted-dev' },
          { text: 'نسخه‌گذاری معنایی (SemVer)', link: '/guide/semver' }
        ]
      }
    ],
    outline: { label: 'در این صفحه' },
    docFooter: { prev: 'قبلی', next: 'بعدی' },
    returnToTopLabel: 'بازگشت به بالا'
  }
})
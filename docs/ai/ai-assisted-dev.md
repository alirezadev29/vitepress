---
title: مقدمات توسعه مبتنی بر AI
description: راهنمای استفاده حرفه‌ای از دستیارهای هوش مصنوعی
outline: deep
---

# مقدمات توسعه مبتنی بر AI

هوش مصنوعی دیگر یک گجت لوکس نیست؛ بلکه بخشی از جریان کاری (Workflow) هر توسعه‌دهنده حرفه‌ای است. اما استفاده از آن اصول خاصی دارد.

## تفاوت ابزارها در توسعه

| نوع ابزار | مثال | کاربرد |
| :--- | :--- | :--- |
| **Chatbots** | ChatGPT, Claude | برای پاسخ به سوالات، یادگیری مفاهیم جدید، دیباگ منطقی کد. |
| **Code Assistants** | GitHub Copilot | پیشنهاد خودکار کد در حین تایپ (Inline Suggestions). |
| **Agents** | Cursor, Devin | ساخت کامل یک فایل یا پروژه، اجرای دستورات ترمینال و مدیریت خطاها. |

## اصول پرامپت‌نویسی (Prompt Engineering)
برای گرفتن بهترین جواب، باید درخواستت دقیق باشد. یک پرامپت خوب شامل این بخش‌هاست:

::: details مشاهده نمونه پرامپت حرفه‌ای
```text
Role: You are a Senior Frontend Developer.
Task: Write a responsive navbar using HTML and CSS.
Constraints: Do not use any CSS frameworks like Bootstrap. Use Flexbox.
Output Format: Just provide the code block with comments.
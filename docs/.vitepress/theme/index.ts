import DefaultTheme from 'vitepress/theme'
import './custom.css'
import WelcomeMessage from './components/WelcomeMessage.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // این خط به VitePress می‌گوید کامپوننت ما را در پایین‌ترین لایه همه صفحات قرار بده
      'layout-bottom': () => h(WelcomeMessage)
    })
  }
}
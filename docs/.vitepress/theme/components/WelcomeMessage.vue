<template>
  <Transition name="toast-fade">
    <div v-if="isVisible" class="welcome-toast">
      <button @click="close" class="close-btn">✖</button>
      <h3>🎉 خوش آمدید!</h3>
      <p>این وب‌سایت به عنوان پروژه کالج توربوفرانت ۶، توسط <strong>علیرضا سیفی</strong> و <strong>علیرضا شجاعیان</strong> طراحی و مهندسی شده است.</p>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // نمایش پیام بعد از 1.5 ثانیه
  setTimeout(() => {
    isVisible.value = true
  }, 1500)
})

const close = () => {
  isVisible.value = false
}
</script>
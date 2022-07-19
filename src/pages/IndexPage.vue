<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4 q-mt-xl">
      {{ data }} -
      <q-btn color="red" size="sm" label="logout" @click="logout" />
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { getData } from 'src/utils'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    let data = ref('');
    let router = useRouter()
    onMounted(() => {
      if (getData('onboarding') != null) {
        data.value = getData('onboarding');
        // console.log(data)
      } else {
        router.replace('/');
        alert('Must be root')
      }
    })
    const logout = () => {
      router.push('/');
      localStorage.removeItem('onboarding');
    }
    return {
      logout,
      data
    }
  }
})
</script>

<template>
  <div class="paypal-page">

    <!-- Donation Form Section -->
    <section class="bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 max-w-[1200px] mx-auto">

          <!-- Left: Form -->
          <div class="lg:w-[55%]">
            <h1 class="leading-tight mb-10" style="font-family: 'Readex Pro', sans-serif; font-size: 2.1875rem; font-weight: 500; font-style: normal; color: #6A6867;">
              Tu aportación es de mucha ayuda
            </h1>

            <!-- Panel resultado post-pago -->
            <div v-if="paymentCompleted" class="mt-6 py-12 text-center">
              <div v-if="messageType === 'success'">
                <p class="text-6xl mb-6">🙌</p>
                <h2 class="text-2xl font-semibold mb-4" style="color: #6A6867; font-family: 'Readex Pro', sans-serif;">
                  ¡Gracias por tu apoyo!
                </h2>
                <p style="color: #6A6867; font-family: 'Readex Pro', sans-serif;">
                  {{ message }}
                </p>
              </div>
              <div v-else class="p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
                {{ message }}
              </div>
            </div>

            <!-- Formulario (visible solo antes del resultado) -->
            <template v-if="!paymentCompleted">

            <!-- Mensaje de estado (errores de validación) -->
            <div v-if="message" :class="[
              'p-4 rounded-lg mb-6',
              messageType === 'error' ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'
            ]">
              {{ message }}
            </div>

            <form @submit.prevent="handleDonate" class="mt-6">

              <!-- Nombre -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Nombre*</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Apellido -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Apellido*</label>
                <input
                  v-model="form.apellido"
                  type="text"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Correo electrónico -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Correo electrónico*</label>
                <input
                  v-model="form.correo"
                  type="email"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Cantidad a donar -->
              <div class="mb-5">
                <label class="block mb-2" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 1.25rem; font-style: normal; font-weight: 400;">Cantidad a donar*</label>
                <input
                  v-model="form.cantidad"
                  type="number"
                  min="1"
                  required
                  class="w-full px-4 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                  style="height: 4.125rem; border-radius: 0.625rem; border: 1px solid #6A6867;"
                />
              </div>

              <!-- Campos obligatorios note -->
              <p class="text-right mb-6" style="color: #6A6867; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 500;">*Campos obligatorios</p>

              <!-- DONAR button -->
              <button
                type="submit"
                :disabled="loading"
                :class="['w-full transition-opacity', loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90']"
                style="margin-top: 70px; height: 45px; border-radius: 6.25rem; background: #F8C52D; color: #6A6867; text-align: center; font-family: 'Readex Pro', sans-serif; font-size: 0.9375rem; font-style: normal; font-weight: 700;"
              >
                {{ loading ? 'PROCESANDO...' : (paypalMethod?.settings?.button_label || 'DONAR') }}
              </button>

              <!-- Reference counter badge -->
              <div class="flex justify-center mt-6">
                <div 
                  class="flex items-center justify-center text-white px-8 bg-cover bg-center bg-no-repeat"
                  style="background-image: url('/images/fondobotoncontador.png'); background-size: 100% 100%; width: 192px; height: 32px;"
                >
                  <span class="text-xl font-bold tracking-wider" style="font-family: 'Readex Pro', sans-serif;">{{ String(donationCount).padStart(5, '0') }}</span>
                </div>
              </div>

            </form>
            </template>
          </div>

          <!-- Right: Decorative image (oculta en móvil) -->
          <div class="hidden lg:flex lg:w-[40%] items-start justify-center pt-0 lg:pt-4">
            <img
              v-if="paypalMethod?.image"
              :src="paypalMethod.image"
              alt="Herramienta de escalada"
              class="w-full max-w-[410px] object-contain"
              style="max-height: 900px;"
            />
            <img
              v-else
              src="/images/hg.png"
              alt="Herramienta de escalada"
              class="w-full max-w-[410px] object-contain"
              style="max-height: 900px;"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Newsletter + Product Cards -->
    <SectionsPrefooterNewsletterSection />

    <!-- Mountain Pre-Footer -->
    <SectionsMountainPrefooter />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

const api = useApi()
const route = useRoute()
const router = useRouter()

const { data: campaign } = await useAsyncData(
  'support-campaign-como-apoyar-paypal',
  () => api.supportCampaigns.getBySlug('como-apoyar-home').catch(() => null),
)

const { data: countData } = await useAsyncData(
  'donations-count',
  () => api.donations.count().catch(() => ({ count: 0 })),
)

const paypalMethod = computed(() =>
  campaign.value?.methods?.find((m: any) => m.type === 'paypal')
)

const suggestedAmount = computed(() =>
  paypalMethod.value?.settings?.suggested_amount ?? null
)

useSeoMeta({
  title: 'Donar por PayPal - Escalada Libre',
  description: 'Realiza tu donación a Escalada Libre Costa Rica de forma segura a través de PayPal.',
})

const paymentCompleted = ref(false)
const donationCount = ref(countData.value?.count ?? 0)
const loading = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | ''>('')

const form = reactive({
  nombre: '',
  apellido: '',
  correo: '',
  cantidad: suggestedAmount.value ? String(suggestedAmount.value) : '',
})

const handleDonate = async () => {
  if (loading.value) return
  
  try {
    loading.value = true
    message.value = ''
    messageType.value = ''
    
    // Validar que los campos estén llenos
    if (!form.nombre || !form.apellido || !form.correo || !form.cantidad) {
      message.value = 'Por favor completa todos los campos'
      messageType.value = 'error'
      return
    }

    const amount = parseFloat(form.cantidad)
    if (isNaN(amount) || amount < 1) {
      message.value = 'Por favor ingresa una cantidad válida'
      messageType.value = 'error'
      return
    }

    // Crear orden en PayPal
    const order = await api.paypal.createOrder({
      amount,
      nombre: form.nombre,
      apellido: form.apellido,
      correo: form.correo,
    })

    // Buscar el link de aprobación
    const approveLink = order.links?.find((link: any) => link.rel === 'approve')
    
    if (approveLink) {
      // Guardar datos del formulario en sessionStorage para recuperarlos después
      sessionStorage.setItem('paypal-donation-data', JSON.stringify({
        orderId: order.id,
        ...form,
      }))
      
      // Redirigir a PayPal para aprobar el pago
      window.location.href = approveLink.href
    } else {
      message.value = 'No se pudo obtener el enlace de PayPal'
      messageType.value = 'error'
    }
  } catch (error: any) {
    console.error('Error creando orden de PayPal:', error)
    message.value = error.data?.error || 'Ocurrió un error al procesar tu donación. Por favor intenta de nuevo.'
    messageType.value = 'error'
  } finally {
    loading.value = false
  }
}

// Manejar retorno desde PayPal
onMounted(async () => {
  const token = route.query.token as string
  const success = route.query.success === 'true'
  const canceled = route.query.canceled === 'true'

  if (canceled) {
    message.value = 'La donación fue cancelada'
    messageType.value = 'error'
    paymentCompleted.value = true

  if (success && token) {
    try {
      loading.value = true
      
      // Recuperar datos de la donación
      const savedData = sessionStorage.getItem('paypal-donation-data')
      const donationData = savedData ? JSON.parse(savedData) : null

      // Capturar el pago
      await api.paypal.captureOrder(token)
      
      message.value = '¡Gracias por tu donación! Tu pago se ha procesado exitosamente.'
      messageType.value = 'success'
      paymentCompleted.value = true
      donationCount.value += 1
      
      // Limpiar formulario y sessionStorage
      form.nombre = ''
      form.apellido = ''
      form.correo = ''
      form.cantidad = suggestedAmount.value ? String(suggestedAmount.value) : ''
      sessionStorage.removeItem('paypal-donation-data')
      
      // Limpiar la URL
      router.replace({ query: {} })
    } catch (error: any) {
      console.error('Error capturando pago:', error)
      message.value = 'Ocurrió un error al procesar tu pago. Por favor contacta con nosotros.'
      messageType.value = 'error'
      paymentCompleted.value = true
    } finally {
      loading.value = false
    }
  }
})
</script>

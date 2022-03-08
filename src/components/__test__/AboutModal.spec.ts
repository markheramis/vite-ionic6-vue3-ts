import AboutModal from '@/components/AboutModal.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { mergeWith } from 'lodash'
import {
  IonContent,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'


const createWrapper = (overrides?: any) => {
  const defaultMountingOptions = {
    global: {
      components: {
        IonContent,
        IonButton,
        IonButtons,
        IonHeader,
        IonTitle,
        IonToolbar,
      }
    }
  }

  return mount(
    AboutModal,
    mergeWith(defaultMountingOptions, overrides)
  )
}

describe(
  'AboutModal unit test',
  () => {
    let wrapper: VueWrapper<any>

    beforeEach(() => {
      wrapper = createWrapper()
    })

    afterEach(() => {
      if (wrapper) wrapper.unmount()

      vi.clearAllMocks()
    })

    test(
      'sanity check',
      () => {
        const ionHeader = wrapper.element.querySelector('div')

        console.log(ionHeader)
      }
    )
  }
)

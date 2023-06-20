import type { ExtractPropTypes } from 'vue'

export const tabpaneProps = {
  title: {
    type: [String, Number],
    default: '',
  },
  paneKey: {
    type: [String, Number],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export type TabPaneProps = ExtractPropTypes<typeof tabpaneProps>

export const tabpaneEmits = {
  click: () => true,

}

export type TabPaneEmits = typeof tabpaneEmits

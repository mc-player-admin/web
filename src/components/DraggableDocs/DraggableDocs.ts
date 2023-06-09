import DraggableDocs from './DraggableDocs.vue'
import { render, h } from 'vue'

export const openDocs = (options: { path: string }) => {
  const vnode = h(DraggableDocs, {
    path: options.path,
    onClose() {
      vnode.el?.remove()
    },
    key: Date.now()
  })
  render(vnode, document.body)
}

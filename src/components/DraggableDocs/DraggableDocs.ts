import DraggableDocs from './DraggableDocs.vue'
import { render, ref, h } from 'vue'

export const openDocs = (options: { path: string }) => {
  console.log(open)

  const vnode = h(DraggableDocs, {
    path: options.path,
    onClose() {
      vnode.el?.remove()
    },
    key: Date.now()
  })
  render(vnode, document.body)
}

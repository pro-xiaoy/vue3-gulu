import Dialog from './Dialog.vue'

import { createApp, h } from 'vue'

const openDialog = (options) => {
  const { title, content, ok, cancel } = options
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            console.log('1111++++', newVisible)
            if(newVisible === false) {
              close();
            }
          },
          // "onUpdate:visible": (newVisible) => {
          //   console.log('1111111+++++++')
          //   if (newVisible === false) {
          //     close();
          //   }
          // },
          ok, cancel
        },
        {
          title,
          content,
        }
      )
    }
  })
  app.mount(div)
}
export default openDialog
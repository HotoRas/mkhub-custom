import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { Badge, CodeGroup, CodeGroupItem } from './components/global'
import {
  setupDarkMode,
  setupSidebarItems,
  useScrollPromise,
} from './composables'

import './styles/index.scss'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('Badge', Badge)
    app.component('CodeGroup', CodeGroup)
    app.component('CodeGroupItem', CodeGroupItem)

    // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
    app.component('NavbarSearch', () => {
      const SearchComponent =
        app.component('Docsearch') || app.component('SearchBox')
      if (SearchComponent) {
        return h(SearchComponent)
      }
      return null
    })

    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior!
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait()
      return scrollBehavior(...args)
    }
  },

  setup() {
    setupDarkMode()
    setupSidebarItems()
  },
})

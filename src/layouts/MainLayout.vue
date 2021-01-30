<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">
          Web App
        </div>
        <div class="text-subtitle1">
          {{ todaysDate }}
        </div>
      </div>

      <img
        src="~assets/statics/coffee.jpg"
        class="header-image absolute-top" />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="500"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item exact clickable v-ripple
              to="/"
              >
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item exact clickable v-ripple
              to="/profil">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Profil
              </q-item-section>
            </q-item>

            <q-item exact clickable v-ripple
              to="/news">
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                News
              </q-item-section>
            </q-item>

            <q-item exact clickable v-ripple
              to="/about">
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/statics/coffee.jpg" style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://s.gravatar.com/avatar/6d243ddacc33295bf71e1bb2b448b57c?s=80">
            </q-avatar>
            <div class="text-weight-bold">Yandi Faozan Al Anshori</div>
            <div>@yandifao</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate () {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'D-MM-YYYY')
    }
  }
}
</script>

<style lang="scss">
  .header-image {
     height: 100%;
     width: 100%;
     z-index: -1;
    opacity: 0,2;
  }
</style>

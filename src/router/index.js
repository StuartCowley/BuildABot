import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/HomePage.vue'
import SidebarStandard from '../sidebars/SidebarStandard.vue'
import SidebarBuild from '../sidebars/SidebarBuild.vue'
import RobotBuilder from '../components/build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotHeads from '../parts/RobotHeads.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'
import ShoppingCart from '../cart/ShoppingCart.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            sidebar: SidebarStandard
        }
    },
    {
        path: '/build',
        name: 'Build',
        components: {
            default: RobotBuilder,
            sidebar: SidebarBuild
        }
    },
    {
        path: '/parts/browse',
        name: 'BrowseParts',
        component: BrowseParts,
        children: [
            {
                name: 'BrowseHeads',
                path: 'heads',
                component: RobotHeads
            },
            {
                name: 'BrowseArms',
                path: 'arms',
                component: RobotArms
            },
            {
                name: 'BrowseTorsos',
                path: 'Torsos',
                component: RobotTorsos
            },
            {
                name: 'BrowseBases',
                path: 'bases',
                component: RobotBases
            },

        ]
    },
    {
        path: '/parts/:partType/:id',
        beforeEnter(to, from , next) {
            const isValidId = Number.isInteger(to.params.id);
            next(isValidId)
        },
        name: 'Parts',
        component: PartInfo,
        props: true,
    },
    {
        name: 'Cart',
        path: '/cart',
        component: ShoppingCart
    }
],
})
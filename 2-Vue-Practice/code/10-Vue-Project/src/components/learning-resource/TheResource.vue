<template>
    <div>
        <base-card>
            <base-button v-on:click="() => changeComponent('stored-resource')"
                v-bind:mode="storedButtonMode">Stored-Resource</base-button>
            <base-button v-on:click="() => changeComponent('add-resource')"
                v-bind:mode="addResourseButtonMode">Add-Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedResource"></component>
        </keep-alive>
    </div>
</template>

<script>

import AddResouce from './AddResource.vue';
import StoredResource from './StoredResource.vue';

export default {
    components: {
        'add-resource': AddResouce,
        'stored-resource': StoredResource
    },
    data() {
        return {
            selectedResource: 'stored-resource',
            reData: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js document',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'google',
                    description: 'Learn The Google',
                    link: 'https://google.org'
                }
            ],
        }
    },
    provide() {
        return {
            resources: this.reData,
            submitHandler: this.submitData
        }
    },
    methods: {
        changeComponent(cm) {
            this.selectedResource = cm;
        },
        submitData(title, description, link) {
            const resourse = {
                id: new Date().toISOString(),
                title,
                description,
                link
            }
            this.reData.unshift(resourse)
            this.changeComponent('stored-resource')
        }
    },
    computed: {
        storedButtonMode() {
            return this.selectedResource === 'stored-resource' ? null : 'flat'
        },
        addResourseButtonMode() {
            return this.selectedResource === 'add-resource' ? null : 'flat'
        }
    }
}
</script>
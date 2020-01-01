<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
// import parts from '../data/parts';
import GetPartsMixin from './get-parts-mixin'

export default {
    name: 'PartInfo',
    props: ['partType', 'id'],
    mixins: [GetPartsMixin],
    computed: {
        part() {
            const { partType, id } = this;
            return this.parts[partType].find(part => part.id === id)
        }
    },
}
</script>
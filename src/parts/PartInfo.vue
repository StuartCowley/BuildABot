<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
import parts from '../data/parts';

export default {
    name: 'PartInfo',
    props: ['partType', 'id'],
    computed: {
        part() {
            const { partType, id } = this;
            window.console.log(parts[partType])
            return parts[partType].find(part => part.id === id)
        }
    },
}
</script>
<template>
    <div>
        <svg width="200" height="200">
            <rect x="0" y="0" width="200" height="200" stroke="red" stroke-width="3px" fill="{{ info.color }}"/>
            <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle">{{ info.name }}</text>    
        </svg>
    </div>
</template>

<script>
export default {
    props: ['info'],
}
</script>